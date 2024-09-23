import express from "express";
import { getBooks, createBook } from "../controllers/bookController.js";

const router = express.Router();

const books = [
  {
    id: 1,
    title: "Example title",
    author: "Adam Example",
    category: ["horror"],
  },
  {
    id: 2,
    title: "Wiedźmin",
    author: "Andrzej Sapkowski",
    category: ["fantasy"],
  },
  {
    id: 3,
    title: "Pan Wołodyjowski",
    author: "Henryk Sienkiewicz",
    category: ["history", "Sci-fun"],
  },
  {
    id: 4,
    title: "Narnia",
    author: "example",
    category: ["history"],
  },
];

router.get("/", getBooks);
router.post("/", createBook);

export default router;
