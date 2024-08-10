import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { urls } from '../utils';

type Props = {
  fetchValue: string;
};

type MovieProps = {
  results: any[];
  page: number;
  total_results: number;
  total_pages: number;
};

export const useMoviesList = ({ fetchValue }: Props) => {
  const [movies, setMovies] = useState<MovieProps>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | undefined>(undefined);

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await axios.get(urls.GET_MOVIES_BY_TITLE, {
          params: {
            query: fetchValue,
            page: 1,
          },
        });
        setMovies(response?.data);
        setLoading(false);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error('Error fetching genres:', error);
        setError(axiosError);
      } finally {
        setLoading(false);
      }
    }

    fetchMovies();
  }, [fetchValue]);

  return {
    movies: movies?.results ? movies?.results : [],
    page: movies?.page,
    totalPages: movies?.total_pages,
    loading,
    error,
  };
};
