import './App.css';
import Search from './components/Search';
import Latest from './components/Latest';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Search />
        <Latest />
      </div>
    </div>
  );
}

export default App;
