import { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";

const AddBook = () => {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [bookPrice, setBookprice] = useState("");
  const [isbnNumber, setIsbnNumber] = useState(null);
  const [publication, setPublication] = useState("");
  const [publicationAt, setPublicationAt] = useState("");
  const [image, setImage] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(
      "http://localhost:8000/book",
      {
        bookName,
        authorName,
        bookPrice,
        isbnNumber,
        publication,
        publicationAt,
        image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 border p-6 rounded bg-white">
        <h2 className="text-xl font-semibold mb-4">Add Book</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="bookName"
            placeholder="Book Name"
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setBookName(e.target.value)}
          />

          <input
            type="text"
            name="authorName"
            placeholder="Author Name"
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setAuthorName(e.target.value)}
          />

          <input
            type="number"
            name="bookPrice"
            placeholder="Book Price"
            // value={form.bookPrice}
            // onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setBookprice(e.target.value)}
          />

          <input
            type="number"
            name="isbnNumber"
            placeholder="ISBN Number"
            // value={form.isbnNumber}
            // onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setIsbnNumber(e.target.value)}
          />

          <input
            type="text"
            name="publication"
            placeholder="Publication"
            // value={form.publication}
            // onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setPublication(e.target.value)}
          />

          <input
            type="date"
            name="publishedAt"
            // value={form.publishedAt}
            // onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
            onChange={(e) => setPublicationAt(e.target.value)}
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            // onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md text-gray-800 cursor-pointer "
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;

//workable code below
/* import React, { useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";

const AddBook = () => {
  const [form, setForm] = useState({
    bookName: "",
    bookPrice: "",
    isbnNumber: "",
    authorName: "",
    publication: "",
    publishedAt: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.bookName || !form.bookPrice || !image) {
      alert("Book name, price, and image are required");
      return;
    }

    const formData = new FormData();
    Object.keys(form).forEach((key) => {
      formData.append(key, form[key]);
    });
    formData.append("image", image);

    try {
      await axios.post("http://localhost:8000/book", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Book added successfully");

      setForm({
        bookName: "",
        bookPrice: "",
        isbnNumber: "",
        authorName: "",
        publication: "",
        publishedAt: "",
      });
      setImage(null);
    } catch (err) {
      console.error(err);
      alert("Failed to add book");
    }
  };

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 border p-6 rounded bg-white">
        <h2 className="text-xl font-semibold mb-4">Add Book</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="bookName"
            placeholder="Book Name"
            value={form.bookName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="text"
            name="authorName"
            placeholder="Author Name"
            value={form.authorName}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="number"
            name="bookPrice"
            placeholder="Book Price"
            value={form.bookPrice}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="number"
            name="isbnNumber"
            placeholder="ISBN Number"
            value={form.isbnNumber}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="text"
            name="publication"
            placeholder="Publication"
            value={form.publication}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="date"
            name="publishedAt"
            value={form.publishedAt}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          />

          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            className="mt-1 p-2 w-full border rounded-md text-gray-800 cursor-pointer "
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Add Book
          </button>
        </form>
      </div>
    </>
  );
};

export default AddBook;
*/
