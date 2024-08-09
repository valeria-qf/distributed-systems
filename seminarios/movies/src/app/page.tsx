'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import styles from './styles/Home.module.css';

export default function HomePage() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (query) {
      router.push(`/movie-details?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className={styles.container}>
      <img src="/logo.png" alt="CineSearch Logo" className={styles.logo} />
      <form onSubmit={handleSearch} className={styles.form}>
        <input
          type="text"
          className={styles.searchBar}
          placeholder="Search for a movie..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={styles.searchButton}>Search</button>
      </form>
    </div>
  );
}
