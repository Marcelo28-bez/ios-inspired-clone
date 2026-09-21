import { Link } from "react-router-dom";
import { Calendar, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { formatDate, type BlogPost } from "@/lib/blog";

const BlogCard = ({ post }: { post: BlogPost }) => {
  return (
    <article className="glass-card rounded-2xl overflow-hidden card-hover-lift flex flex-col">
      <Link to={`/blog/${post.slug}`} className="block">
        <div className="aspect-[16/9] w-full bg-secondary overflow-hidden">
          {post.image ? (
            <img
              src={post.image}
              alt={post.title}
              loading="lazy"
              className="w-full h-full object-cover smooth-transition hover:scale-105"
            />
          ) : (
            <div className="w-full h-full gradient-hero" />
          )}
        </div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <span className="inline-block self-start px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-3">
          {post.category}
        </span>

        <h3 className="text-xl font-bold mb-3 leading-snug">
          <Link to={`/blog/${post.slug}`} className="hover:text-primary smooth-transition">
            {post.title}
          </Link>
        </h3>

        <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between gap-4">
          <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
            <Calendar className="w-4 h-4 icon-teal" />
            {formatDate(post.published)}
          </span>
          <Button asChild size="sm" className="rounded-xl">
            <Link to={`/blog/${post.slug}`}>
              Leia o artigo
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
