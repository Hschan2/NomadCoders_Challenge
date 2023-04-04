import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    videoId: { type: String, required: true, unique: true },
    views: { type: Number, required: true },
});

const Song = mongoose.model("Song", songSchema);

export default Song;
