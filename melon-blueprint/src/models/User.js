import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    userPw: { type: String, required: true },
    playList: [
        {
        id: String,
        title: String,
        des: String,
        image: String,
        views: Number,
        },
    ],
});

const User = mongoose.model("User", userSchema);

export default User;
