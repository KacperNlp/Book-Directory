const express = require("express");
const port = process.env.PORT;
const app = express();

app.listen(port, () => {
  console.log(`App is working on port: ${port}`);
});

const books = [
  {
    title: "asdfasdf",
    author: "sadf",
    img: "sadf",
  },
];

app.get("/books", (req, res) => {
  console.log("Request");
  res.send(books);
});
