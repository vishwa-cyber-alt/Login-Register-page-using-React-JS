import download from './download.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={download} className="App-logo" alt="logo" />
        <p>
          
        </p>
        <p id="lf">Login Form</p>
        <form>
      <label id="un">Enter your Username:
        <input id="ut" type ="text" />
      </label>
      <label id="p">Enter your Password:
        <input id="pp" type="password" />
      </label>
      <label id="cp">Enter your Confirm Password:
        <input id="cpp" type="password" />
      </label>
    </form>
    <div>
      <a href="https://nextstep.tcs.com/campus/#/" target="_blank" rel="noopener noreferrer">
        <button id="login">Register</button>
        <button id="signin">Login</button>
      </a>
    </div>
      </header>
    </div>
  );
}

export default App;
