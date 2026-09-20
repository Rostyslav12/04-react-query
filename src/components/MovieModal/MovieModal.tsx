import type { Movie } from "../../types/movie";
import styles from "./MovieModal.module.css";

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

export default function MovieModal({
  movie,
  onClose,
}: MovieModalProps) {
  const handleBackdropClick = (
    event: React.MouseEvent<HTMLDivElement>,
  ) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className={styles.backdrop}
      onClick={handleBackdropClick}
    >
      <div className={styles.modal}>
        <button
          className={styles.closeButton}
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>

        {movie.poster_path && (
          <img
            className={styles.image}
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
        )}

        <div className={styles.content}>
          <h2 className={styles.title}>{movie.title}</h2>

          {movie.release_date && (
            <p>
              <strong>Release date:</strong>{" "}
              {movie.release_date}
            </p>
          )}

          <p>
            <strong>Rating:</strong>{" "}
            {movie.vote_average.toFixed(1)}
          </p>

          <p className={styles.overview}>
            {movie.overview || "No description available."}
          </p>
        </div>
      </div>
    </div>
  );
}