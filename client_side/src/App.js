import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  SearchBar from './components/SearchBar';
import  M2 from './components/M2';

function App() {
  return (
    <div className="App">
      <h1>main page</h1>
      <SearchBar/>
      <M2 />
    </div>
  );
}
export default App;
