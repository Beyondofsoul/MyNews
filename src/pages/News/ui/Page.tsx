import styles from './styles.module.css';

import AllNews from './AllNews/AllNews';

function NewsPage() {
  return (
    <main className={styles.main}>
      <AllNews />
    </main>
  );
}

export default NewsPage;
