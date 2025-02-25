import { useState } from 'react';
import styles from './styles.module.css';
interface Props {
  setKeywords: (keywords: string) => void;
  addToHistory: (city: string) => void;
}

function Search({ setKeywords, addToHistory }: Props) {
  const [value, setValue] = useState('');
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setKeywords(value.trim());
      addToHistory(value.trim());
      setValue('');
    }
  };
  const handleButton = () => {
    if (value.trim()) {
      setKeywords(value.trim());
      addToHistory(value.trim());
      setValue('');
    }
  };
  return (
    <div className={styles.search}>
      <input
        type="text"
        placeholder="Найти город"
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className={styles.button} onClick={handleButton}>
        Найти!
      </button>
    </div>
  );
}

export default Search;
