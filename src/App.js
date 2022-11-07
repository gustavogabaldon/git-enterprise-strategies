import gatorLogo from './gator.gif';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={gatorLogo} className="App-logo" alt="logo" />
        <p> Hello World! </p>
        <p> My name is Gustavo and this is my project. </p>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
