import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code>
        </p>
        <p>This is a starter template for React with Tailwind configuration.</p>
        <p>Created by Anish Prashun. Feel free to connect 🔥. </p>
        <a style={{ color: "white" }} href="https://github.com/Anishpras">
          Github
        </a>
        <a style={{ color: "white" }} href="https://github.com/Anishpras">
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
