const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
require("dotenv").config(); // Load .env file variables into process.env
let bodyParser = require("body-parser");

const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI);
// Mount bodyParse middleware for POST requests
app.use(bodyParser.urlencoded({ extended: false }));

app.use(cors());

app.use(express.static(path.join(__dirname, "..", "client/src/dist")));
app.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "..", "client/src/dist/index.html"));
});

app.use(express.json()); // Middleware to parse JSON

// Define URL schema for MongoDB
const Schema = mongoose.Schema;

const VideoSchema = new Schema({
	tournament: { type: String, required: true },
	year: { type: Number, required: true },
	round: String,
	youtube_id: { type: String, required: true, unique: true },
	player1: { type: String, required: true },
	player2: { type: String, required: true },
	title: { type: String, required: true },
});

// Create a Model
let TVideo = mongoose.model("Tennis Videos", VideoSchema);

TVideo.init()
	.then(() => {
		console.log("Indexes created");
	})
	.catch((err) => {
		console.error("Index creation failed:", err);
	});

app.get("/api/items", async (req, res) => {
	try {
		const items = await TVideo.find({});
		console.log("loading videos...");
		res.json(items);
	} catch (error) {
		res.status(500).json({ message: "Error fetching data", error });
	}
});

app.post("/data/videos", async (req, res) => {
	console.log("posting video data....");
	var videoEntry = req.body;

	try {
		console.log(req.body);
		const userEntry = new TVideo({
			tournament: videoEntry.tournament,
			year: videoEntry.year,
			round: videoEntry.round,
			youtube_id: videoEntry.youtubeid,
			player1: videoEntry.player1,
			player2: videoEntry.player2,
			title: videoEntry.title,
		});

		await userEntry.save();
		res.redirect("/");
	} catch (error) {
		if (error.code === 11000) {
			// Duplicate key error
			res.status(400).json({ status: 400, error: "This id is already registered." });
		} else {
			// Other errors
			res.status(500).json({ error: "An error occurred." });
		}
	}

	// res.json({
	// 	tournament: videoEntry.tournament,
	// 	year: videoEntry.year,
	// 	round: videoEntry.round,
	// 	youtubeId: videoEntry.youtubeid,
	// 	player1: videoEntry.player1,
	// 	player2: videoEntry.player2,
	// 	title: videoEntry.title,
	// });
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
