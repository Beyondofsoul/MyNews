import { PostCard } from '@/entities/posts';
import { IPost } from '@/shared/interfaces';
import styles from './styles.module.css';

interface Props {
  posts?: IPost[];
  isLoading: boolean;
}

function PostsList({ posts, isLoading }: Props) {
  return (
    <>
      {isLoading ? (
        <div>Загрузка</div>
      ) : (
        <ul className={styles.list}>
          {posts?.map((item) => {
            return <PostCard key={item.id} item={item} />;
          })}
        </ul>
      )}
    </>
  );
}
export default PostsList;
