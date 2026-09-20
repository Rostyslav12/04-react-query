import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const trimmedQuery = query.trim();

    if (!trimmedQuery) {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(trimmedQuery);
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="query"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search movies..."
          autoComplete="off"
        />

        <button className={styles.button} type="submit">
          Search
        </button>
      </form>
    </header>
  );
}