import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Book.css'
import { Link } from 'react-router-dom';

const BookMain = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetchBooks();
    }, []); 

    function fetchBooks() {
        axios.get('http://localhost:5555/books')
        .then((res) => {
            setBooks(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    const HandelDelete = (bookid) =>{
            axios
            .delete(`http://localhost:5555/books/${bookid}`)
            .then(()=>{
                alert("Book deleted successfully")
                fetchBooks();
            })
            .catch((err)=>{
                alert("Error deleting book"+ err);
            })
    }
    
    return (
        <div className='bookdisplay'>
            <div className="box"><h1>BOOK STORE MERN STACK</h1><Link to='/' className=''>Logout</Link></div>
           <table className='table'>
            <tr>
                <th>Sno</th>
                <th>Title</th>
                <th>Author</th>
                <th>Description</th>
                <th>Price</th>
            </tr>
                {
                    books.map((book, index) => {
                        return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{book.title}</td>
                                <td>{book.author}</td>
                                <td>{book.description}</td>
                                <td>{book.price}</td>
                                <td>
                                    <Link to={`/view/${book._id}`} className='btn btn-primary'>View</Link>
                                    <Link to ={`/edit/${book._id}`} className='btn btn-edit'>Edit</Link>
                                    <button className='btn btn-danger'onClick={()=>{HandelDelete(book._id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
           </table>
           <Link to='/add' className='addbtn '>Add Book</Link>
        </div>
    );
};

export default BookMain;
