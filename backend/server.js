const express = require("express");

const products = require("./data/products.js");
var cors = require('cors');


const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {

    const selectedProduct = products.find(item => item._id === req.params.id)

  res.json(selectedProduct);
});

app.listen(5000, console.log("Hello ths server is running"));
