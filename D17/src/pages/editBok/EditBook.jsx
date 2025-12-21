import React, { useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditBook = () => {
  const { id } = useParams();
  // console.log(id);
  const navigate = useNavigate();
  const [data, setData] = useState({
    bookName: "",
    authorName: "",
    bookPrice: "",
    isbnNumber: "",
    publishedAt: "",
    publication: "",
  });
  const [image, setImage] = useState(null);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(data).forEach(([Key, value]) => {
      formData.append(Key, value);
    });
    formData.append("image", image);
    try {
      await axios.patch(`http://localhost:8000/book/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      navigate("/");
    } catch (error) {
      console.error(error);
      alert("Failed to update book");
    }
  };
  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-10 border p-6 rounded bg-white">
        <h2 className="text-xl font-semibold mb-4">Edit Book</h2>

        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="bookName"
            placeholder="Book Name"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="authorName"
            placeholder="Author Name"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />

          <input
            type="number"
            name="bookPrice"
            placeholder="Book Price"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />

          <input
            type="number"
            name="isbnNumber"
            placeholder="ISBN Number"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />

          <input
            type="text"
            name="publication"
            placeholder="Publication"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />

          <input
            type="date"
            name="publishedAt"
            className="w-full border px-3 py-2 rounded"
            onChange={handleChange}
          />

          <input
            type="file"
            name="image"
            accept="image/*"
            className="mt-1 p-2 w-full border rounded-md text-gray-800 cursor-pointer "
            onChange={(e) => setImage(e.target.files[0])}
          />

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700"
          >
            Update Book
          </button>
        </form>
      </div>
    </>
  );
};

export default EditBook;
