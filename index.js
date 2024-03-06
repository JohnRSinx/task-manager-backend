const express = require("express");
const dotenv = require("dotenv");

const connectToDatabase = require("./src/database/mongoose.database");

dotenv.config();
connectToDatabase();

const app = express();
app.listen(8000, () => console.log("Listening on port 8000!"));
