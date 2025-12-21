import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";

const SingleBook = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [book, setBook] = useState(null);

  const fetchBook = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/book/${id}`);
      if (res.status === 200) {
        setBook(res.data.data);
      }
    } catch (err) {
      console.error("Failed to fetch book", err);
    }
  };

  useEffect(() => {
    fetchBook();
  }, [id]);

  if (!book) {
    return (
      <>
        <Navbar />
        <p className="text-center mt-10">Loading...</p>
      </>
    );
  }

  const image = book.imageUrl?.startsWith("http")
    ? book.imageUrl
    : book.imageUrl
    ? `http://localhost:8000/${book.imageUrl}`
    : "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c";

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (!confirmDelete) return;
    try {
      await axios.delete(`http://localhost:8000/book/${id}`);
      alert("Book deleted successfully");
      navigate("/");
    } catch (error) {
      console.log("Book Delete Error!!", error);
      alert("Book deleted Error");
    }
  };

  return (
    <>
      <Navbar />

      <div className="max-w-xl mx-auto mt-10 border rounded-lg p-6 bg-white">
        <img
          src={image}
          alt={book.bookName}
          className="h-60 mx-auto object-contain mb-4"
        />

        <h1 className="text-2xl font-semibold mb-2">{book.bookName}</h1>

        <p className="text-gray-600 mb-1">
          <span className="font-medium">Author:</span> {book.authorName}
        </p>

        <p className="text-gray-600 mb-1">
          <span className="font-medium">Publication:</span>{" "}
          {book.publication || "N/A"}
        </p>
        <p className="text-gray-600 mb-1">
          <span className="font-medium">ISBN:</span> {book.isbnNumber || "N/A"}
        </p>

        <p className="text-gray-600 mb-1">
          <span className="font-medium">Published At:</span>{" "}
          {new Date(book.publishedAt).toDateString()}
        </p>

        <p className="text-indigo-600 text-xl font-bold mt-4">
          ₹{book.bookPrice}
        </p>
        <button
          onClick={handleDelete}
          className="flex justify-end text-xl w-full  cursor-pointer text-red-600 hover:text-red-800"
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default SingleBook;
