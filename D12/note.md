## i installed react using this command `npm create vite@latest fileName`

## i also installed react-router-dom to make smooth routes for my app using this command `npm install react-router-dom`

## 1st and most used routing method

import { BrowserRouter, Route, Routes } from "react-router-dom";
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/contact" element={<Contact />} />
</Routes>
</BrowserRouter>

## 2nd and new routing method

routes.jsx

`import { createBrowserRouter } from "react-router-dom";

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
`
App.jsx
import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
function App() {
return <RouterProvider router={router} />;
}
