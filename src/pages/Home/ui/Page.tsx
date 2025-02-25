import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function HomePage() {
  return (
    <main className={styles.main}>
      <h1>Привет!</h1>
      <Link to="/auth" className={styles.link}>
        Войти
      </Link>
      <Link to="/posts" className={styles.link}>
        Posts
      </Link>
    </main>
  );
}

export default HomePage;
