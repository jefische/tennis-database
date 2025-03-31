const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config();
let bodyParser = require("body-parser");

// Mount bodyParse middleware for POST requests
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "client/src/dist")));
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client/src/dist/index.html"));
});

app.post("/data/videos", async (req, res) => {
	var user = req.body;
	console.log("posting video data....");

	res.json({ title: user.tournament, year: user.year });
});

const listener = app.listen(process.env.PORT || 3000, () => {
	console.log("Your app is listening on port " + listener.address().port);
});

// ES6 Modules setup
//////////////////////////////////////////////////
// import express from "express";
// import cors from "cors";
// import { configDotenv } from "dotenv";
// configDotenv();
// import bodyParser from "body-parser";
//////////////////////////////////////////////////
// import { fileURLToPath } from "url";
// import { dirname } from "path";
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = dirname(__filename);
