import { IPost } from '@/shared/interfaces';

interface Props {
  isLoading: boolean;
  post: IPost | null;
}

function PostProfile({ isLoading, post }: Props) {
  return (
    <>
      {isLoading ? (
        <div>Загрузка</div>
      ) : (
        <>
          <h2>{post?.title}</h2>
        </>
      )}
    </>
  );
}
export default PostProfile;
