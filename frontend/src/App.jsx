
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BookMain from '../pages/BookMain'
import './App.css'
import View_book from '../pages/View_book'
import Edit_Book from '../pages/Edit_Book'
import Add_book from '../pages/Add_book'
import Login_page from '../pages/Login_page'

const App = () => {
  return (
   <Routes>
    <Route path="/" element={<Login_page/>}/>
    <Route path="/books" element={<BookMain/>}/>
    <Route path="/add" element={<Add_book/>}/>
    <Route path="/view/:id" element={<View_book/>}/>
    <Route path="/edit/:id" element={<Edit_Book/>}/>
   </Routes>
  )
}

export default App
