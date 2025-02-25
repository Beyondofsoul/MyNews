import { Link } from 'react-router-dom';
import styles from './styles.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">Главная</Link>
      <Link to="/auth">Вход</Link>
      <Link to="/posts">Посты</Link>
      <Link to="/weather">Погода</Link>
      <Link to="/currency">Курс валют</Link>
    </header>
  );
}

export default Header;
