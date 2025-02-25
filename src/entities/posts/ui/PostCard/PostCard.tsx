import { IPost } from '@/shared/interfaces';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

interface Props {
  item: IPost;
}

function PostCard({ item }: Props) {
  return (
    <li className={styles.item}>
      <h2>Post :</h2>
      <h4>{item.title}</h4>
      <h3>Описание</h3>
      <h4>{item.body}</h4>
      <Link to={`/profile/${item.id}`}>Профиль</Link>
    </li>
  );
}
export default PostCard;
