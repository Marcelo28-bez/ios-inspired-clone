import { useQuery } from "@tanstack/react-query";
import { fetchPosts, type BlogPost } from "@/lib/blog";

export function useBlogPosts() {
  return useQuery<BlogPost[]>({
    queryKey: ["blog-posts"],
    queryFn: () => fetchPosts(),
    staleTime: 1000 * 60 * 10,
  });
}
