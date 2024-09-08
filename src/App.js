import gatorLogo from './gator.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gatorLogo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>
          Hello World! This is our team project.
        </p>	
      </header>
    </div>
  );
}

export default App;
