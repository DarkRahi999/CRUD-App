import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from '../pages/Home.jsx'
import AddBook from '../pages/AddBook.jsx'
import ReadBook from '../features/Bookview.jsx'
import EditBook from '../pages/EditBook.jsx'
import ErrorPage from '../pages/Error.jsx'
import Navbar from '../Layouts/Navbar.jsx'

const Index = () => {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/addBook' element={<AddBook />} />
        <Route path='/readBook' element={<ReadBook />} />
        <Route path='/editBook' element={<EditBook />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Index;