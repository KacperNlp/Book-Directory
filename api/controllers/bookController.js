import Book from "../models/bookModel.js";

const getBooks = async (req, res) => {
  try {
    const books = await Book.find();
    console.log(books);
    res.json(books);
  } catch (ex) {
    res.status(500).send("Server Error: Unable to fetch books");
  }
};

const createBook = async (req, res) => {
  try {
    const newBook = new Book({
      title: "Test",
      author: "Adam Mic",
      categories: "history",
    });

    await newBook.save();
    res.status(201).json(newBook);
  } catch (ex) {
    res.status(400).send("Error creating a book");
  }
};

export { getBooks, createBook };
