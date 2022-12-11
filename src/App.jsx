import './App.css';
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Home Page
        </p>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <Link to="/lima">Lima</Link>
          <Link to="/cusco">Cusco</Link>
          <Link to="/machupicchu">Machu Picchu</Link>
        </div>
      </header>
    </div>
  );
}

export default App;
