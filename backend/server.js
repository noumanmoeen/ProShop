import express from "express";
import dotenv from "dotenv";
import products from "./data/products.js";
import cors from "cors";
import DBconnect from "./config/db.js";
import colors from 'colors'

dotenv.config();
const app = express();

DBconnect();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});
app.get("/api/products", (req, res) => {
  res.json(products);
});
app.get("/api/products/:id", (req, res) => {
  const selectedProduct = products.find((item) => item._id === req.params.id);

  res.json(selectedProduct);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Hello ths server is running on ${PORT} IN ${process.env.NODE_ENV}`.yellow.bold
  )
);
