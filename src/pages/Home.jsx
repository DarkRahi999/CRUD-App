import { Link } from "react-router-dom";
import Footer from "../Layouts/Footer";

export default function HomePage() {
  return (
    <div>
      <div className="bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-slate-800 pt-10">📚 Book Manager</h1>
            <p className="text-gray-600 mt-2 mb-14">Manage your books easily with CRUD features.</p>
          </header>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <Link to="/readBook" className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition min-h-[260px] flex items-center justify-center text-center">
                <div>
                  <h2 className="text-xl font-semibold text-blue-600">📖 View All Books</h2>
                  <p className="text-gray-600 mt-2 pb-20">Browse the list of all books.</p>
                </div>
              </Link>

              <Link to="/addBook" className="bg-white shadow-md rounded-xl p-6 hover:shadow-xl transition min-h-[260px] flex items-center justify-center text-center">
                <div>
                  <h2 className="text-xl font-semibold text-green-600">➕ Add New Book</h2>
                  <p className="text-gray-600 mt-2 pb-20">Add a new book to your collection.</p>
                </div>
              </Link>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
