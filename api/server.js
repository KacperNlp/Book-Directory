import express from "express";
import cors from 'cors';
import authRoutes from './routes/auth.js';
import booksRoutes from './routes/books.js';

const app = express();

const port = process.env.PORT;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api/auth', authRoutes);
app.use('/api/books', booksRoutes);

app.listen(port, () => {
  console.log(`App is working on port: ${port}`);
});

