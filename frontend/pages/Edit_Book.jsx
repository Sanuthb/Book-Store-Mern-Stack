import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './Book.css'

const Edit_Book = () => {
    const [title,settitle]=useState('')
    const [Author,setauthor]=useState('')
    const [Description,setdescription]=useState('')
    const [Price,setprice]=useState()

    const {id} = useParams()

    useEffect(() =>{
        axios
       .get(`http://localhost:5555/books/${id}`)
       .then((res)=>{
        settitle(res.data.title)
        setauthor(res.data.author)
        setdescription(res.data.description)
        setprice(res.data.price)
 
       })
       .catch((err)=>{
        alert('No details  found'+err)
       })
    },[])

    const handelEdit = () =>{
        const editeddata = {
            title:title,
            author:Author,
            description:Description,
            price:Price
        }
        axios
        .put(`http://localhost:5555/books/${id}`,editeddata)
        .then(()=>{
            alert('Updated book')
            window.location.reload()
        })
        .catch((err)=>{
            alert('Failed to update'+err)
         })
    }
  return (
    <div className='editbook'>
        <h1>Editing Book Details</h1>
        <form>
            <div className="form-group">
                <label>Title</label>
                <input type="text" className="form-control" value={title} onChange={(text)=>settitle(text.target.value)}/>
            </div>
            <div className="form-group">
                <label>Author</label>
                <input type="text" className="form-control" value={Author} onChange={(text)=>setauthor(text.target.value)} />
            </div>
            <div className="form-group">
                <label>Description</label>
                <textarea name="" id="" cols="30" rows="10" value={Description} onChange={(text)=>setdescription(text.target.value)}></textarea>
            </div>
            <div className="form-group">
                <label>Price</label>
                <input type="number" className="form-control" value={Price} onChange={(text)=>setprice(text.target.value)} />
            </div>
            <button type="submit" className="btn " onClick={handelEdit}>Submit</button>
        </form>
    </div>
  )
}

export default Edit_Book
