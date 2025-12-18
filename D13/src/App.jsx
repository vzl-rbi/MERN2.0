import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import AddBook from "./pages/addBook/AddBook";
import EditBook from "./pages/editBok/EditBook";
import SingleBook from "./pages/singleBook/SingleBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book/:id" element={<SingleBook />} />
          <Route path="/addBook" element={<AddBook />} />
          <Route path="/editBook" element={<EditBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
