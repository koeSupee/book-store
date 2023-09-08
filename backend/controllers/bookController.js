import { Books } from "../models/bookModel.js";

// Create a new book
const createBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Please enter data field title, author and publisher",
      });
    }

    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Books.create(newBook);
    if (!book) {
      return res.status(400).send({ message: "Error creating book" });
    }
    res.status(201).send(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// Get all books
const getAllBook = async (req, res) => {
  try {
    const books = await Books.find({});
    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// Get a one books
const getABook = async (req, res) => {
  // console.log(req.params);
  // or const id = req.params.id;

  try {
    const { id } = req.params;
    const books = await Books.findById(id);
    res.status(200).json({
      count: books.length,
      data: books,
    });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

// update books
const updateBook = async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        message: "Please enter data field title, author and publisher",
      });
    }
    const { id } = req.params;

    const result = await Books.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "Error book not found" });
    }

    res.status(200).send({ message: "Updated successfully!" });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

// delete books
const delBook = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await Books.findByIdAndDelete(id);
    if (!result) {
      return res.status(404).send({ message: "Error book not found" });
    }

    res.status(200).send({ message: `Deleted successfully : ${id}` });
  } catch (error) {
    console.log(error.message);
    res.status(500).send({ message: error.message });
  }
};

export { createBook, getAllBook, getABook, updateBook, delBook };
