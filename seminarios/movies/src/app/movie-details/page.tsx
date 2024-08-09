'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import styles from '../styles/MovieDetails.module.css'

const API_KEY = 'b0c66cf4'; 

export default function MovieDetailsPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('query') || '';

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query) {
      fetchMovieData(query);
    }
  }, [query]);

  const fetchMovieData = async (query: string) => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(query)}&apikey=${API_KEY}`);
      const data = await response.json();

      if (data.Response === 'True') {
        setMovie(data);
      } else {
        setError(data.Error);
      }
    } catch (error) {
      setError('Failed to fetch movie data.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <p>Loading...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}
      {movie && (
        <div>
          <h1 className={styles.movieTitle}>{movie.Title}</h1>
            {movie.Poster && <img src={movie.Poster} alt={movie.Title} className={styles.moviePoster} />}
          <div className={styles.movieDetails}>
            <p><span className={styles.boldText}>Year:</span> {movie.Year}</p>
            <p><span className={styles.boldText}>Genre:</span> {movie.Genre}</p>
            <p><span className={styles.boldText}>Director:</span> {movie.Director}</p>
            <p><span className={styles.boldText}>Plot:</span> {movie.Plot}</p>
          </div>
        </div>
      )}
    </div>
  );
}
