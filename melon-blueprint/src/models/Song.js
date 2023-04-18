import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    des: { type: String, required: true },
    image: { type: String, required: true },
    views: { type: Number, required: true },
});

const Song = mongoose.model("Song", songSchema);

export default Song;
