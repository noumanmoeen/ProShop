import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import DBconnect from "./config/db.js";
import colors from "colors";
import ProductRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler } from "./middleWares/errorMiddleWare.js";
dotenv.config();
const app = express();

DBconnect();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/products", ProductRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Hello ths server is running on ${PORT} IN ${process.env.NODE_ENV}`.yellow
      .bold
  )
);
