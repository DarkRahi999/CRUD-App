import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router'
import HomePage from './pages/Home.jsx'
import AddBook from './pages/AddBook.jsx'
import ReadBook from './pages/ReadBook.jsx'
import EditBook from './pages/EditBook.jsx'
import ErrorPage from './pages/Error.jsx'
import Navbar from './Layouts/Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
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
  </StrictMode>,
              {/* <App /> */}
)
