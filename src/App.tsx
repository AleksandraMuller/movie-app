import SearchBar from './components/SearchBar';
import './App.css';
import MovieList from './components/MovieList';

function App() {
  return (
    <main className='main'>
      <div className='main__flex'>
        <SearchBar />
        <MovieList />
      </div>
    </main>
  );
}
export default App;
