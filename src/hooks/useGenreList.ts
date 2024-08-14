import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { urls } from '../utils';

export const useGenreList = () => {
  const [genres, setGenres] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<AxiosError | undefined>(undefined);

  useEffect(() => {
    async function fetchGenres() {
      try {
        const response = await axios.get(urls.GET_GENRE);
        setGenres(response?.data?.genres);
        setLoading(false);
      } catch (error) {
        const axiosError = error as AxiosError;
        console.error('Error fetching genres:', error);
        setError(axiosError);
      } finally {
        setLoading(false);
      }
    }

    fetchGenres();
  }, []);

  return { genres, isGenresLoading: loading, genresError: error };
};
