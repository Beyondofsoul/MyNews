import styles from './styles.module.css';

import AllPosts from './AllPosts/AllPosts';

function PostsPage() {
  return (
    <main className={styles.main}>
      <AllPosts />
    </main>
  );
}

export default PostsPage;
