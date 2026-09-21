import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, Calendar, Linkedin, MessageCircle, Link2, User } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import BlogCard from "@/components/blog/BlogCard";
import BlogCta from "@/components/blog/BlogCta";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";
import { formatDate } from "@/lib/blog";
import { useBlogPosts } from "@/hooks/use-blog-posts";

const SITE_URL = "https://ios-inspired-clone.lovable.app";

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { data: posts, isLoading, isError } = useBlogPosts();
  const post = posts?.find((p) => p.slug === slug);
  const related = posts?.filter((p) => p.slug !== slug).slice(0, 3) ?? [];
  const pageUrl = `${SITE_URL}/blog/${slug}`;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [slug]);

  const share = (network: "linkedin" | "whatsapp") => {
    const url =
      network === "linkedin"
        ? `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`
        : `https://wa.me/?text=${encodeURIComponent(`${post?.title ?? ""} ${pageUrl}`)}`;
    window.open(url, "_blank", "noopener");
  };

  const copyLink = async () => {
    await navigator.clipboard.writeText(pageUrl);
    toast.success("Link copiado!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {post && (
        <Helmet>
          <title>{`${post.title} | Blog ProDados Pesquisa`}</title>
          <meta name="description" content={post.excerpt} />
          <link rel="canonical" href={pageUrl} />
          <meta property="og:type" content="article" />
          <meta property="og:title" content={post.title} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:url" content={pageUrl} />
          {post.image && <meta property="og:image" content={post.image} />}
          <meta name="twitter:card" content="summary_large_image" />
          {post.image && <meta name="twitter:image" content={post.image} />}
          <script type="application/ld+json">
            {JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.title,
              description: post.excerpt,
              image: post.image ?? undefined,
              datePublished: post.published,
              dateModified: post.updated,
              author: { "@type": "Person", name: post.author },
              publisher: { "@type": "Organization", name: "ProDados Pesquisa" },
              mainEntityOfPage: pageUrl,
              articleSection: post.category,
            })}
          </script>
        </Helmet>
      )}

      <Navigation />

      <main className="flex-1 pt-12 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Button asChild variant="ghost" className="rounded-xl mb-8 -ml-2">
            <Link to="/blog">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar ao Blog
            </Link>
          </Button>

          {isLoading && (
            <div className="space-y-4">
              <Skeleton className="h-10 w-3/4" />
              <Skeleton className="aspect-[16/9] w-full rounded-2xl" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          )}

          {!isLoading && (isError || !post) && (
            <div className="glass-card rounded-2xl p-8 ios-shadow">
              <h1 className="text-2xl font-bold mb-3">Artigo não encontrado</h1>
              <p className="text-muted-foreground mb-6">
                O artigo que você procura pode ter sido movido ou ainda está carregando.
              </p>
              <Button asChild className="rounded-xl">
                <Link to="/blog">Ver todos os artigos</Link>
              </Button>
            </div>
          )}

          {post && (
            <article>
              <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                {post.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold leading-tight mb-5">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-1.5">
                  <User className="w-4 h-4 icon-blue" />
                  {post.author}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 icon-teal" />
                  {formatDate(post.published)}
                </span>
              </div>

              {post.image && (
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full rounded-2xl ios-shadow mb-10 object-cover"
                />
              )}

              <div
                className="blog-content"
                dangerouslySetInnerHTML={{ __html: post.contentHtml }}
              />

              <div className="flex flex-wrap items-center gap-3 mt-10 pt-8 border-t">
                <span className="text-sm font-medium mr-1">Compartilhar:</span>
                <Button variant="outline" size="icon" className="rounded-xl" onClick={() => share("linkedin")} aria-label="Compartilhar no LinkedIn">
                  <Linkedin className="w-4 h-4 icon-blue" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-xl" onClick={() => share("whatsapp")} aria-label="Compartilhar no WhatsApp">
                  <MessageCircle className="w-4 h-4 icon-green" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-xl" onClick={copyLink} aria-label="Copiar link">
                  <Link2 className="w-4 h-4 icon-purple" />
                </Button>
              </div>

              <BlogCta />

              {related.length > 0 && (
                <section className="mt-16">
                  <h2 className="text-2xl font-bold mb-6">Artigos relacionados</h2>
                  <div className="grid gap-6 sm:grid-cols-2">
                    {related.map((item) => (
                      <BlogCard key={item.id} post={item} />
                    ))}
                  </div>
                </section>
              )}
            </article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPostPage;
