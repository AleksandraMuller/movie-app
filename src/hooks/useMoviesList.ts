import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { urls } from '../utils';

type Props = {
  fetchValue: string;
  selectedGenreIds: number[];
  selectedRatingIds: number[];
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
};

type MovieProps = {
  id: number;
  title: string;
  genre_ids: number[];
  vote_average: number;
};

type ApiResponse = {
  results: MovieProps[];
  page: number;
  total_results: number;
  total_pages: number;
};

export const useMoviesList = ({
  fetchValue,
  selectedGenreIds,
  selectedRatingIds,
  page,
  setPage,
}: Props) => {
  const [movies, setMovies] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | undefined>(undefined);

  useEffect(() => {
    setPage(1);
  }, [fetchValue]);

  useEffect(() => {
    if (!fetchValue.trim()) {
      setMovies(null);
      setLoading(false);
      return;
    }

    async function fetchMovies() {
      try {
        const response = await axios.get<ApiResponse>(
          urls.GET_MOVIES_BY_TITLE,
          {
            params: {
              query: fetchValue,
              page,
            },
          }
        );

        setMovies(response.data);
        setLoading(false);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error('Error fetching movies:', error);
        setError(axiosError);
        setMovies(null);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [fetchValue, page]);

  const filteredMovies =
    movies?.results.filter((movie) => {
      const isGenreMatch =
        selectedGenreIds.length === 0 ||
        movie.genre_ids.some((genreId) => selectedGenreIds.includes(genreId));

      const isRatingMatch =
        selectedRatingIds.length === 0 ||
        selectedRatingIds.some((rating) => {
          const minRating = rating;
          const maxRating = rating + 0.9;
          return (
            movie.vote_average >= minRating && movie.vote_average <= maxRating
          );
        });

      return isGenreMatch && isRatingMatch;
    }) || [];

  return {
    movies: filteredMovies.length > 0 ? filteredMovies : [],
    page: movies?.page || 1,
    totalPages: movies?.total_pages || 1,
    loading,
    error,
  };
};
