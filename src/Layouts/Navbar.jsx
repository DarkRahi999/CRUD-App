import { Link } from "react-router"

const Navbar = () => {
  return (
    <nav className="h-20 flex px-20 justify-between items-center bg-slate-800 text-white ">
      <div className="logo">
        <Link to="/" className="text-2xl">CRUD App</Link>
      </div>
      <div className="menu flex justify-center">
      <Link to="/" className="NabLink px-3 active:text-yellow-400 hover:bg-slate-700 py-2 m-1 rounded-lg">Home</Link>
      <Link to="/addBook" className="NabLink px-3 active:text-yellow-400 hover:bg-slate-700 py-2 m-1 rounded-lg">Add Book</Link>
      <Link to="/readBook" className="NabLink px-3 active:text-yellow-400 hover:bg-slate-700 py-2 m-1 rounded-lg">Read Book</Link>
      </div>
    </nav>
  )
}

export default Navbar
