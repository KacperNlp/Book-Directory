import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/auth.js";
import booksRoutes from "./routes/books.js";
import mongoose from "mongoose";

const app = express();

const port = process.env.PORT;
const uri = process.env.DATABASE_URI;

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB with Mongoose"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

app.use(
  cors({
    origin: "http://localhost:3000", // Frontend URL
    credentials: true, //
  })
);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/auth", authRoutes);
app.use("/api/books", booksRoutes);

app.listen(port, () => {
  console.log(`App is working on port: ${port}`);
});
