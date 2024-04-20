import React, { useState } from "react";
import axios from "axios";

const Add_book = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [description, setdescription] = useState("");
  const [price, setprice] = useState("");

  const handlenewbook = () => {
    const newbookdata = {
      title: title,
      author: author,
      description: description,
      price: price,
    };
    axios
      .post("http://localhost:5555/books", newbookdata)
      .then(() => {
        alert("Successfully Added Book");
      })
      .catch((err) => {
        alert("Failed to Add Book");
      });
  };

  return (
    <div className="add_details">
      <h1>Add Book</h1>
      <form>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => settitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            value={author}
            onChange={(e) => setauthor(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            className="form-control"
            value={description}
            onChange={(e) => setdescription(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label>Price</label>
          <input
            type="text"
            className="form-control"
            value={price}
            onChange={(e) => setprice(e.target.value)}
          />
        </div>
        <button type="button" className="addbtn" onClick={handlenewbook}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add_book;
