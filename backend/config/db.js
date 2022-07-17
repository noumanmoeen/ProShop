import mongoose from  "mongoose";

const DBconnect = async () => {
  try {
    const res = await mongoose.connect(process.env.MONGO_URI);
    console.log("DB connected ====== ", res.connection.host.cyan.underline);
  } catch (err) {
    console.log("ERROR ------", err.red.bold.underline);
    process.exit(1);
  }
};

export default DBconnect;
