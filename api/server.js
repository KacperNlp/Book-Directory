import express from "express";
import booksRoutes from './routes/books.js';
const app = express();

const port = process.env.PORT;

app.use('/api/books', booksRoutes);

app.listen(port, () => {
  console.log(`App is working on port: ${port}`);
});

