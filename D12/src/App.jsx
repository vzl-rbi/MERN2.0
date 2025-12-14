import About from "./About";
import Contact from "./Contact";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { useEffect, useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  //first type //An empty array:
  // useEffect(() => {
  //   console.log("useEffect is Called"); //Runs only on the first render
  // }, []);
  //second type useEffect //Props or state values:

  useEffect(() => {
    document.title = "useEffect" + count;
  }, [count]);
  //Runs on the first render
  //And any time any dependency value changes

  //Third type useEffect -< rarely used // No dependency passed:
  // useEffect(() => {
  //   console.log("useEffect is called!!");
  // });   //Runs on every render
  return (
    <>
      <h1>Learning useEffect</h1>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}> + </button>
    </>
  );
}

export default App;
