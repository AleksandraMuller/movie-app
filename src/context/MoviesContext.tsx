import React, { createContext, useState, useContext } from 'react';
import { useMoviesList } from '../hooks/useMoviesList';
import { useGenreList } from '../hooks/useGenreList';
import { AxiosError } from 'axios';

type MoviesContextProps = {
  fetchValue: string;
  setFetchValue: React.Dispatch<React.SetStateAction<string>>;
  movies: any[];
  genres: any[];
  selectedGenreIds: number[];
  setSelectedGenreIds: React.Dispatch<React.SetStateAction<number[]>>;
  selectedRatingIds: number[];
  setSelectedRatingIds: React.Dispatch<React.SetStateAction<number[]>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
  isGenresLoading: boolean;
  genresError: AxiosError | undefined;
  loading: boolean;
  error: AxiosError | undefined;
};

const MoviesContext = createContext<MoviesContextProps | undefined>(undefined);

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [fetchValue, setFetchValue] = useState<string>('');
  const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([]);
  const [selectedRatingIds, setSelectedRatingIds] = useState<number[]>([]);
  const [page, setPage] = useState<number>(1);
  const { movies, totalPages, loading, error } = useMoviesList({
    fetchValue,
    selectedGenreIds,
    selectedRatingIds,
    page,
    setPage,
    setSelectedGenreIds,
    setSelectedRatingIds,
  });
  const { genres, isGenresLoading, genresError } = useGenreList();

  return (
    <MoviesContext.Provider
      value={{
        fetchValue,
        setFetchValue,
        movies,
        genres,
        selectedGenreIds,
        setSelectedGenreIds,
        selectedRatingIds,
        setSelectedRatingIds,
        page,
        setPage,
        totalPages,
        isGenresLoading,
        genresError,
        loading,
        error,
      }}
    >
      {children}
    </MoviesContext.Provider>
  );
};

export const useMoviesContext = () => {
  const context = useContext(MoviesContext);
  if (context === undefined) {
    throw new Error('useMoviesContext must be used within a MoviesProvider');
  }
  return context;
};
