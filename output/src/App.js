import { Link } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      Welcome to ibag
      <p>goto page <Link to='/a'>A</Link></p>
      <p>goto page <Link to='/b'>B</Link></p>
      <p>goto page <Link to='/c'>C</Link></p>
    </div>
  );
}

export default App;
