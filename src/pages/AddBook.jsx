import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addBooks } from "../features/bookSlice";
import { useNavigate } from "react-router";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const dispatch = useDispatch();
  const navButton = useNavigate();
  const numberOfBooks = useSelector((state) => state.book.book.length);
  
  const handleSubmit = (e) => {
  e.preventDefault();
  const book = { id: numberOfBooks + 1, title, author };
  dispatch(addBooks(book));
  setTitle("");
  setAuthor("");
  navButton("/readBook", {replace : true});
};
 
  return (
    <div className="flex justify-center bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md hover:shadow-md hover:shadow-gray-400 mt-28">
        <h2 className="text-3xl font-bold text-center mb-4 text-slate-800">Want to add your book!!</h2>

          <div className="form-title mb-4">
            <h3 className="text-xl font-semibold text-center text-indigo-600">Add Book</h3>
          </div>

          <div className="form-elements">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title :</label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <div className="mb-6">
                <label htmlFor="author" className="block text-gray-700 font-medium mb-2">Author :</label>
                <input
                  type="text"
                  name="author"
                  id="author"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-700 transition duration-300"
              >
                Add Book
              </button>
            </form>
          </div>
        </div>
      </div>

  )
}

export default AddBook;