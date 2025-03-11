import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { PostService } from "../api/services/postService";

export function usePosts() {
  const queryClient = useQueryClient();

  // Fetch posts (disabled by default, will run only when refetch is called)
  const { data: posts, isLoading, error, refetch } = useQuery({
    queryKey: ["posts"],
    queryFn: PostService.getAllPosts,
    enabled: false, // Prevent auto-fetching
  });

  // Create post mutation
  const { mutate: createPost } = useMutation({
    mutationFn: PostService.createPost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]); // Refresh posts list
    },
  });

  // Delete post mutation
  const { mutate: deletePost } = useMutation({
    mutationFn: PostService.deletePost,
    onSuccess: () => {
      queryClient.invalidateQueries(["posts"]);
    },
  });

  return { posts, isLoading, error, createPost, deletePost, fetchPosts: refetch };
}
