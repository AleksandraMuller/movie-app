import SearchBar from './components/SearchBar';
import './App.css';
import MovieList from './components/MovieList';
import { MoviesProvider } from './context/MoviesContext';

function App() {
  return (
    <MoviesProvider>
      <main className='main'>
        <div className='main__flex'>
          <SearchBar />
          <MovieList />
        </div>
      </main>
    </MoviesProvider>
  );
}
export default App;
