import { useGetPostsQuery } from '@/entities/posts/api/PostsApi';
import PostsList from '@/widgets/news/ui/PostsList/PostsList';

function AllPosts() {
  const { data: posts, isLoading } = useGetPostsQuery(null);

  return (
    <section>
      <PostsList posts={Array.isArray(posts) ? posts : []} isLoading={isLoading} />
    </section>
  );
}

export default AllPosts;
