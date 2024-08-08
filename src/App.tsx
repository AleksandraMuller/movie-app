import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  return (
    <main className='main'>
      <div className='main__flex'>
        <SearchBar />
        <div style={{ flexGrow: 3 }}>MOVIELIST</div>
      </div>
    </main>
  );
}
export default App;
