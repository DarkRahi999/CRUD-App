import { useSelector } from "react-redux";



const BookView = () => {
  const books = useSelector((state) => state.book.book);
  return (
    <div>
      <h2 className="py-10">List of Books !!</h2>
        <table className="table-auto border border-gray-400 mx-auto mt-4 w-2/3 text-center">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Id</th>
              <th className="border border-gray-400 px-4 py-2">Name</th>
              <th className="border border-gray-400 px-4 py-2">Author</th>
              <th className="border border-gray-400 px-4 py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {books && books.map(({ id, title, author }) => (
              <tr key={id} className="hover:bg-gray-100">
                <td className="border border-gray-400 px-4 py-2">{id}</td>
                <td className="border border-gray-400 px-4 py-2">{title}</td>
                <td className="border border-gray-400 px-4 py-2">{author}</td>
                <td className="border border-gray-400 px-4 py-2 space-x-2">
                  <button className="bg-green-600 text-white px-4 py-1 rounded mr-1">Edit</button>
                  <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default BookView;