import { useFetch } from '@/shared/hooks/useFetch';
import { INews } from '@/shared/interfaces';
import NewsList from '@/widgets/news/ui/NewsList/NewsList';

function AllNews() {
  const { data, isLoading } = useFetch<INews[]>('https://jsonplaceholder.typicode.com/posts');

  return (
    <section>
      <NewsList news={data} isLoading={isLoading} />
    </section>
  );
}

export default AllNews;
