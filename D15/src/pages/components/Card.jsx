import React, { useState } from "react";
import { Link } from "react-router-dom";
const Card = ({ book }) => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => Math.max(c - 1, 0));
  //yo pani use garda bhayo sabai id ko image ayesi // image ko thauma src= {image} garne book ko personal image show hunxa
  // const image = book.imageUrl?.startsWith("http")
  //   ? book.imageUrl
  //   : book.imageUrl
  //   ? `http://localhost:8000/${book.imageUrl}`
  //   : "https://via.placeholder.com/150";

  return (
    <div className="border border-gray-300 rounded-md p-3 w-60 bg-white">
      <div className="flex justify-center mb-2">
        <img
          src={
            book.imageUrl
              ? book.imageUrl
              : "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
          }
          alt={book.bookName}
          className="h-40 object-contain"
        />
      </div>

      <h2 className="font-semibold text-lg truncate">{book.bookName}</h2>

      <p className="text-sm text-gray-500">Author: {book.authorName}</p>

      <p className="text-sm text-gray-500">
        Publication: {book.publication || "N/A"}
      </p>

      <p className="text-indigo-600 font-bold text-lg mt-2">
        ${book.bookPrice}
      </p>

      <div className="mt-3 flex justify-between">
        <div>
          <button className="cursor-pointer">
            <Link to={`/book/${book._id}`}>See More</Link>
          </button>
        </div>
        <div>
          {count === 0 ? (
            <button
              onClick={increment}
              className="bg-indigo-100 border border-indigo-300 px-4 py-1 rounded text-indigo-600 cursor-pointer"
            >
              Add
            </button>
          ) : (
            <div className="flex items-center gap-2 bg-indigo-200 px-2 rounded">
              <button onClick={decrement}>-</button>
              <span>{count}</span>
              <button onClick={increment}>+</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
