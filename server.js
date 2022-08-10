const express = require("express");
const bodyParser = require("body-parser");
const fs = rquire("fs");
const morgan = require("morgan");
const cors = require("cors")

require("dotenv").config();

//app
const app = express();

//middlewares

app.use(morgan("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

//gives us req.body and converts it to standard javascript object
app.use(bodyParser.json({ limit: "2mb" }));
app.use(cors())

const port = process.env.PORT || 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
