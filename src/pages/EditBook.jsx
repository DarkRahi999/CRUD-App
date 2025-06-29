import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { updateBook } from "../features/bookSlice";

const EditBook = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const book = location.state?.book;

  if (!book) {
    return <p>No book data found! Please navigate from BookView.</p>;
  }

  const [title, setTitle] = useState(book.title);
  const [author, setAuthor] = useState(book.author);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateBook({
      id: book.id,
      title,
      author,
    }));
    navigate("/readBook", {replace: true});
  };

  return (
    <div className="p-28">
      <h2 className="text-3xl font-semibold pb-10 text-slate-800">Edit Book (ID: {book.id})</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
        <div>
          <label className="block mb-1">Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <div className="pb-6">
          <label className="block mb-1">Author:</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border p-2 w-full"
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default EditBook;