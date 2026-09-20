import axios from "axios";
import type { Movie } from "../types/movie";

interface MoviesResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

const API_TOKEN = import.meta.env.VITE_TMDB_TOKEN;

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
    accept: "application/json",
  },
});

export async function fetchMovies(
  query: string,
  page: number,
): Promise<MoviesResponse> {
  const response = await api.get<MoviesResponse>("/search/movie", {
    params: {
      query,
      page,
    },
  });

  return response.data;
}