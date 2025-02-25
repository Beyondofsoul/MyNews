import PostProfile from '@/entities/posts/ui/PostProfile/PostProfile';
import { useParams } from 'react-router-dom';
import { useGetProfilePostQuery } from '@/entities/posts/api/PostsApi';
import { skipToken } from '@reduxjs/toolkit/query';

function MyProfile() {
  const { userId } = useParams();

  const { data, isLoading } = useGetProfilePostQuery(userId ?? skipToken);

  return <PostProfile post={data ?? null} isLoading={isLoading} />;
}
export default MyProfile;
