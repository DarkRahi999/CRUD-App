import { useState } from "react";

const AddBook = () => {
  const {title, setTitle} = useState("");
  const {author, setAuthor} = useState("");
  return (
    <div className="flex justify-center py-28 bg-gray-100">
        <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">Want to add your book!!</h2>

          <div className="form-title mb-4">
            <h3 className="text-xl font-semibold text-center text-indigo-600">Add Book</h3>
          </div>

          <div className="form-elements">
            <form action="">
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