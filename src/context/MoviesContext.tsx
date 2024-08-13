import React, { createContext, useState, useContext } from 'react';
import { useMoviesList } from '../hooks/useMoviesList';
import { useGenreList } from '../hooks/useGenreList';

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
};

const MoviesContext = createContext<MoviesContextProps | undefined>(undefined);

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [fetchValue, setFetchValue] = useState<string>('');
  const [selectedGenreIds, setSelectedGenreIds] = useState<number[]>([]);
  const [selectedRatingIds, setSelectedRatingIds] = useState<number[]>([]);
  const [page, setPage] = useState<number>(1);
  const { movies, totalPages } = useMoviesList({
    fetchValue,
    selectedGenreIds,
    selectedRatingIds,
    page,
    setPage,
    setSelectedGenreIds,
    setSelectedRatingIds,
  });
  const { genres } = useGenreList();

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
