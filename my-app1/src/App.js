import './App.css';
import { Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      Welcome to ibag
      <p>goto page <Link to='/a'>A</Link></p>
      <p>goto page <Link to='/b'>B</Link></p>
    </div>
  );
}

export default App;
