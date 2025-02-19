import { NewsCard } from '@/entities/news';
import { INews } from '@/shared/interfaces';
import styles from './styles.module.css';

interface Props {
  news?: INews[] | null;
  isLoading: boolean;
}

function NewsList({ news, isLoading }: Props) {
  return (
    <>
      {isLoading ? (
        <div>Загрузка</div>
      ) : (
        <ul className={styles.list}>
          {news?.map((item) => {
            return <NewsCard key={item.id} item={item} />;
          })}
        </ul>
      )}
    </>
  );
}
export default NewsList;
