import express from "express";
import { BookModel } from "../data_schema/Book_schema.js";

const bookroutes = express.Router();

bookroutes.get("/", async (req, res) => {
  try {
    const book = await BookModel.find({});
    return res.status(200).json(book);
  } catch (err) {
    res.status(500).send(err);
  }
});

bookroutes.post("/", async (req, res) => {
  try {
    if (
      !req.body.title ||
      !req.body.author ||
      !req.body.description ||
      !req.body.price
    ) {
      return res.status(400).send("Please provide all the details");
    }
    const newbookdata = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      price: req.body.price,
    };
    const book = await BookModel.create(newbookdata);

    return res.status(201).send(book);
  } catch (err) {
    console.log(err.message);
    res.status(500).send(err.message);
  }
});

bookroutes.get("/:id", async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    return res.status(200).json(book);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

bookroutes.put("/:id", async (req, res) => {
  try {
    const book = await BookModel.findById(req.params.id);
    if (!book) {
      return res.status(404).send("Book not found");
    }

    const updatedBook = {
      title: req.body.title,
      author: req.body.author,
      description: req.body.description,
      price: req.body.price,
    };

    const updatedBookData = await BookModel.findByIdAndUpdate(
      req.params.id,
      updatedBook
    );
    return res.status(200).json(updatedBookData);
  } catch (err) {
    res.status(500).send(err.message);
  }
});
bookroutes.delete('/:id',async(req,res)=>{

    try {
        const result = await BookModel.findByIdAndDelete(req.params.id);
        if(!result){
            return res.status(404).json({message: 'Book not found'})
        }
        return res.status(200).json({message: 'Book deleted successfully'})
    }
    catch (err) {
        res.status(500).send(err.message)
    }
})


export default bookroutes;
