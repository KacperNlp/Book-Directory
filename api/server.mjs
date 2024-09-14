const express = require("express");
const port = process.env.PORT;
const app = express();
const dotenv = require("dotenv");

dotenv.config();

app.listen(port, () => {
  console.log(`App is working on port: ${port}`);
});

app.use(require('./routes'));

