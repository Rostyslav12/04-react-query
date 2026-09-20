import type { Movie } from "../../types/movie";
import styles from "./MovieGrid.module.css";

interface MovieGridProps {
  movies: Movie[];
  onSelect: (movie: Movie) => void;
}

export default function MovieGrid({
  movies,
  onSelect,
}: MovieGridProps) {
  return (
    <ul className={styles.grid}>
      {movies.map((movie) => (
        <li className={styles.card} key={movie.id}>
          <button
            className={styles.button}
            type="button"
            onClick={() => onSelect(movie)}
          >
            {movie.poster_path ? (
              <img
                className={styles.image}
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                loading="lazy"
              />
            ) : (
              <div className={styles.noImage}>No image</div>
            )}

            <div className={styles.info}>
              <h2 className={styles.title}>{movie.title}</h2>

              {movie.release_date && (
                <p className={styles.date}>{movie.release_date}</p>
              )}
            </div>
          </button>
        </li>
      ))}
    </ul>
  );
}