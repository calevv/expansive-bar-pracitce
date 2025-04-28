import { useState } from "react";
import "./App.css";
import AppBar from "./components/AppBar/AppBar";

function App() {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };
  const submitText = (e) => {
    e.preventDefault();
    setMessage(text);
  };
  return (
    <div>
      <AppBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <form onSubmit={submitText}>
          <input type="text" value={text} onChange={handleTextChange} />
          <button type="submit">send</button>
        </form>
      </div>
      <p>{message}</p>
    </div>
  );
}

export default App;
