import express from "express";
import cors from "cors";
import {DATA} from "./data.js";
const app = express();

app.use(cors());

app.get("/", (req, res) => {
    res.json(DATA);
});

app.listen(5000, () => {console.log("API is working")});


