const connectDB = require("./db/connect");
const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const userRouter = require("./routes/userRoutes");

//middleware
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // Enable credentials (cookies, authorization headers, etc.)
  })
);
app.use(express.json());

//routes
app.use("/api/v1/user", userRouter);

const port = process.env.Port || 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    console.log("connected to db");
    app.listen(port, () => console.log(`listening to the port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
