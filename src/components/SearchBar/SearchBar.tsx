import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({
  onSubmit,
}: SearchBarProps) {
  const handleSubmit = (formData: FormData) => {
    const query = formData.get("query");

    if (typeof query !== "string" || !query.trim()) {
      toast.error("Please enter your search query.");
      return;
    }

    onSubmit(query.trim());
  };

  return (
    <header className={styles.header}>
      <form className={styles.form} action={handleSubmit}>
        <input
          className={styles.input}
          type="text"
          name="query"
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