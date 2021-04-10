const express = require("express");

const morgan = require("morgan");

const dotenv = require("dotenv");

const connectDB = require("./config/connectDB");

const traineesRoute = require("./routes/traineesRoute");

dotenv.config();

const app = express();

//CONNECTION
connectDB();

//MIDDLEWARES
app.use(express.json());

app.use(morgan("dev"));

//ROUTES

app.use("/api/v1/trainees", traineesRoute);

//HOME ROUTE

app.get("/", (req, res) => {
  res.send("<h2> This is our trainees api</h2>");
});

const port = process.env.PORT || 7000;

app.listen(port, () => console.log(`server is running on ${port}`));
