// Integração com o Blogger "Ideias para o Seu Negócio" via feed público (JSONP).
// A arquitetura abaixo isola a origem dos dados: para migrar os artigos
// definitivamente para o site, basta trocar a implementação de fetchPosts()
// mantendo o tipo BlogPost.

export const BLOG_FEED_ORIGIN = "https://ideiasparaoseunegocio.blogspot.com";

export const BLOG_CATEGORIES = [
  "Pesquisa de Mercado",
  "Varejo e PDV",
  "Experiência do Cliente",
  "Empreendedorismo",
  "Gestão e Negócios",
  "Comportamento do Consumidor",
  "Opinião",
] as const;

export type BlogCategory = (typeof BLOG_CATEGORIES)[number];

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  category: BlogCategory;
  categories: string[];
  excerpt: string;
  contentHtml: string;
  image: string | null;
  published: string;
  updated: string;
  author: string;
  originalUrl: string;
}

const CATEGORY_KEYWORDS: Record<BlogCategory, string[]> = {
  "Pesquisa de Mercado": ["pesquisa", "dados", "estatística", "censo", "amostra"],
  "Varejo e PDV": ["varejo", "pdv", "loja", "ponto de venda", "supermercado", "vitrine"],
  "Experiência do Cliente": ["atendimento", "cliente", "experiência", "consumidor satisfeito"],
  Empreendedorismo: ["empreend", "negócio próprio", "pequeno negócio", "abrir", "vender"],
  "Gestão e Negócios": ["gestão", "empresa", "custo", "preço", "lucro", "equipe"],
  "Comportamento do Consumidor": ["comportamento", "consumidor", "hábito", "compra"],
  Opinião: ["opinião", "reflexão"],
};

function stripHtml(html: string): string {
  const el = document.createElement("div");
  el.innerHTML = html;
  return (el.textContent || "").replace(/\s+/g, " ").trim();
}

export function slugify(value: string): string {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80);
}

function firstImage(html: string): string | null {
  const match = html.match(/<img[^>]+src=["']([^"']+)["']/i);
  return match ? match[1] : null;
}

function headingTitle(html: string): string {
  const match = html.match(/<h[12][^>]*>([\s\S]*?)<\/h[12]>/i);
  return match ? stripHtml(match[1]) : "";
}

function pickCategory(labels: string[], text: string): BlogCategory {
  for (const label of labels) {
    const exact = BLOG_CATEGORIES.find(
      (c) => slugify(c) === slugify(label),
    );
    if (exact) return exact;
  }
  const haystack = `${labels.join(" ")} ${text}`.toLowerCase();
  let best: { category: BlogCategory; score: number } = { category: "Opinião", score: 0 };
  for (const category of BLOG_CATEGORIES) {
    const score = CATEGORY_KEYWORDS[category].filter((k) => haystack.includes(k)).length;
    if (score > best.score) best = { category, score };
  }
  return best.category;
}

interface FeedEntry {
  id: { $t: string };
  published: { $t: string };
  updated: { $t: string };
  title?: { $t: string };
  content?: { $t: string };
  summary?: { $t: string };
  category?: { term: string }[];
  author?: { name?: { $t: string } }[];
  link?: { rel: string; href: string; type?: string }[];
}

function jsonp<T>(url: string, timeoutMs = 12000): Promise<T> {
  return new Promise((resolve, reject) => {
    const callbackName = `__blogger_cb_${Math.random().toString(36).slice(2)}`;
    const script = document.createElement("script");
    const timer = window.setTimeout(() => {
      cleanup();
      reject(new Error("Tempo esgotado ao carregar os artigos."));
    }, timeoutMs);

    function cleanup() {
      window.clearTimeout(timer);
      delete (window as Record<string, unknown>)[callbackName];
      script.remove();
    }

    (window as Record<string, unknown>)[callbackName] = (data: T) => {
      cleanup();
      resolve(data);
    };

    script.src = `${url}${url.includes("?") ? "&" : "?"}alt=json-in-script&callback=${callbackName}`;
    script.onerror = () => {
      cleanup();
      reject(new Error("Não foi possível carregar os artigos."));
    };
    document.body.appendChild(script);
  });
}

function toPost(entry: FeedEntry): BlogPost {
  const contentHtml = entry.content?.$t ?? entry.summary?.$t ?? "";
  const labels = (entry.category ?? []).map((c) => c.term);
  const plain = stripHtml(contentHtml);
  const rawTitle = (entry.title?.$t ?? "").trim() || headingTitle(contentHtml) || plain.slice(0, 60);
  const alternate = entry.link?.find((l) => l.rel === "alternate")?.href ?? BLOG_FEED_ORIGIN;
  const id = entry.id.$t.split(".post-").pop() ?? entry.id.$t;

  return {
    id,
    slug: `${slugify(rawTitle) || "artigo"}-${id.slice(-6)}`,
    title: rawTitle,
    category: pickCategory(labels, plain),
    categories: labels,
    excerpt: plain.replace(rawTitle, "").trim().slice(0, 180).trim() + (plain.length > 180 ? "…" : ""),
    contentHtml,
    image: firstImage(contentHtml),
    published: entry.published.$t,
    updated: entry.updated.$t,
    author: entry.author?.[0]?.name?.$t ?? "ProDados Pesquisa",
    originalUrl: alternate,
  };
}

export async function fetchPosts(maxResults = 30): Promise<BlogPost[]> {
  const data = await jsonp<{ feed: { entry?: FeedEntry[] } }>(
    `${BLOG_FEED_ORIGIN}/feeds/posts/default?max-results=${maxResults}`,
  );
  return (data.feed.entry ?? []).map(toPost);
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
