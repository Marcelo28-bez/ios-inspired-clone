import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import BlogCta from "@/components/blog/BlogCta";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { BLOG_CATEGORIES } from "@/lib/blog";
import { useBlogPosts } from "@/hooks/use-blog-posts";

const SITE_URL = "https://ios-inspired-clone.lovable.app";
const ALL = "Todos os artigos";

const Blog = () => {
  const { data: posts, isLoading, isError } = useBlogPosts();
  const [active, setActive] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (!posts) return [];
    return active === ALL ? posts : posts.filter((p) => p.category === active);
  }, [posts, active]);

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Blog Ideias para o Seu Negócio | ProDados Pesquisa</title>
        <meta
          name="description"
          content="Experiência, pesquisa, mercado e observações práticas para ajudar empresas e empreendedores a tomar melhores decisões."
        />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="Blog Ideias para o Seu Negócio | ProDados Pesquisa" />
        <meta
          property="og:description"
          content="Experiência, pesquisa, mercado e observações práticas para empresas e empreendedores."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Blog",
            name: "Ideias para o Seu Negócio",
            url: `${SITE_URL}/blog`,
            publisher: { "@type": "Organization", name: "ProDados Pesquisa" },
          })}
        </script>
      </Helmet>

      <Navigation />

      <main className="flex-1 pt-16 pb-20">
        <div className="container mx-auto px-4">
          <header className="max-w-3xl mx-auto text-center mb-14">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              Blog
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-5">Ideias para o Seu Negócio</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Experiência, pesquisa, mercado e observações práticas para ajudar empresas e
              empreendedores a tomar melhores decisões.
            </p>
            <div className="glass-card rounded-2xl p-6 md:p-8 text-left ios-shadow space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Depois de décadas trabalhando com pesquisa de mercado, empresas, consumidores e
                pontos de venda, aprendi que muitos dos melhores insights surgem da observação do
                dia a dia.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                O Blog Ideias para o Seu Negócio é um espaço para compartilhar experiências,
                opiniões, aprendizados e situações reais do mercado, sempre com uma visão prática
                sobre negócios, consumidores, atendimento, varejo, pesquisa e empreendedorismo.
              </p>
            </div>
          </header>

          <section>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Artigos recentes</h2>

            <div className="flex flex-wrap gap-2 mb-10">
              {[ALL, ...BLOG_CATEGORIES].map((category) => (
                <Button
                  key={category}
                  size="sm"
                  variant={active === category ? "default" : "outline"}
                  className="rounded-xl"
                  onClick={() => setActive(category)}
                >
                  {category}
                </Button>
              ))}
            </div>

            {isLoading && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, i) => (
                  <div key={i} className="glass-card rounded-2xl overflow-hidden ios-shadow">
                    <Skeleton className="aspect-[16/9] w-full rounded-none" />
                    <div className="p-6 space-y-3">
                      <Skeleton className="h-4 w-24" />
                      <Skeleton className="h-6 w-full" />
                      <Skeleton className="h-4 w-4/5" />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {isError && (
              <p className="text-muted-foreground">
                Não foi possível carregar os artigos agora. Tente novamente em instantes.
              </p>
            )}

            {!isLoading && !isError && filtered.length === 0 && (
              <p className="text-muted-foreground">
                Ainda não há artigos publicados nesta categoria.
              </p>
            )}

            {filtered.length > 0 && (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {filtered.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            )}
          </section>

          <BlogCta />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
