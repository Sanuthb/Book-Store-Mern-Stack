import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Book.css'
const View_book = () => {
    const {id} = useParams()
    const [book, setBook] = useState([])
    useEffect(()=>{
        try{
            axios
            .get(`http://localhost:5555/books/${id}`)
            .then(res=>{
                 setBook(res.data)
             })
        }
        catch(err){
            console.log(err)
        }
    },[])
  return (
    <div className='view_book'>
      <h1>View Book</h1>
      <div className="bookdetails">
      <p>Title : {book.title}</p>
      <p>Author : {book.author}</p>
      <p>Description : {book.description}</p>
      <p>Price : {book.price}</p>
      </div>
    </div>
  )
}

export default View_book
