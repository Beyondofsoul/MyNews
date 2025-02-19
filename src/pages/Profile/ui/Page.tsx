import { useParams } from 'react-router-dom';
import styles from './styles.module.css';
import { useFetch } from '@/shared/hooks/useFetch';
import { INews } from '@/shared/interfaces';

function ProfilePage() {
  const { userId } = useParams();
  const { data, isLoading } = useFetch<INews>(
    `https://jsonplaceholder.typicode.com/posts/${userId}`,
  );

  return (
    <main className={styles.main}>
      {isLoading ? (
        <div>Загрузка</div>
      ) : (
        <>
          <h2>{data?.title}</h2>
        </>
      )}
    </main>
  );
}

export default ProfilePage;
