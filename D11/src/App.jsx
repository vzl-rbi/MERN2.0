import About from "./About";
import Contact from "./Contact";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Soul-Society");

  return (
    <>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>;
      <button onClick={() => setCount(count - 1)}>-</button>;
      <button onClick={() => setCount(0)}>Reset</button>;<h1>{name}</h1>
      <button onClick={() => setName("Soul-Reaper")}>NameChange</button>;
    </>
  );
}

export default App;
