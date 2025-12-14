import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
function App() {
  return <RouterProvider router={router} />;
}

export default App;
