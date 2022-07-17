import mongoose from "mongoose";
import dotenv from "dotenv";
import DBconnect from "./config/db.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import colors from "colors";
import products from "./data/products.js";
import users from "./data/users.js";

dotenv.config();

DBconnect();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const insertedUsers = await User.insertMany(users);

    const adminUser = insertedUsers[0]._id;

    const parsedProducts = products.map((product) => ({
      ...product,
      user: adminUser,
    }));

    await Product.insertMany(parsedProducts);

    console.log(":::: Data added :::".green.bold);
    process.exit();
  } catch (error) {
    console.log(":::: ERROR ::::", error);
    process.exit(1);
  }
};
const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    console.log(":::: Data Destroyed :::".green.bold.inverse);
    process.exit();
  } catch (error) {
    console.log(":::: ERROR ::::", error.red.bold);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") destroyData();
else importData();
