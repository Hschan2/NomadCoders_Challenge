import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    audio: { type: String, required: true },
    views: { type: Number, required: true },
    imageUrl: { type: String, required: true },
});

const Song = mongoose.model("Song", songSchema);

export default Song;
