import { createBrowserRouter } from "react-router-dom";
import Home from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Hello, This is Home Page</h1>,
  },
  {
    path: "/about",
    element: <h1>Hello, This is About Page</h1>,
  },
  {
    path: "/contact",
    element: <h1>Hello, This is Contact Page</h1>,
  },
]);
