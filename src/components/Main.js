import { NavLink } from "react-router-dom";
import logo from "./logo.svg";
import "./Main.css";

function Main() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <NavLink to="/about">About</NavLink>
      </header>
    </div>
  );
}

export default Main;
