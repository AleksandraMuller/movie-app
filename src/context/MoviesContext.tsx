import React, { createContext, useState, useContext } from 'react';
import { useMoviesList } from '../hooks/useMoviesList';
import { useGenreList } from '../hooks/useGenreList';

type MoviesContextProps = {
  fetchValue: string;
  setFetchValue: React.Dispatch<React.SetStateAction<string>>;
  movies: any[];
  genres: any[];
};

const MoviesContext = createContext<MoviesContextProps | undefined>(undefined);

export const MoviesProvider = ({ children }: { children: React.ReactNode }) => {
  const [fetchValue, setFetchValue] = useState<string>('');
  const { movies } = useMoviesList({ fetchValue });
  const { genres } = useGenreList();

  return (
    <MoviesContext.Provider
      value={{ fetchValue, setFetchValue, movies, genres }}
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
