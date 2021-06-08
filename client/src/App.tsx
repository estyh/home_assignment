import io from "socket.io-client";
import "./App.css";

let socket = io("/", {
  path: "/ws",
});

socket.on("connect", () => {
  console.log("Connected to websocket server");
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
