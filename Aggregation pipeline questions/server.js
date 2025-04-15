import DBConnect from "./mongoDb.js";
import express from "express";
import dotenv from "dotenv";

dotenv.config();
const app = express();
DBConnect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT} `));
