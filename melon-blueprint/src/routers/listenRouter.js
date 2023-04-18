import express from "express";
import { async } from "regenerator-runtime";
import Song from "../models/Song";

const listenRouter = express.Router();
let isLoading = false;

listenRouter.post("/", async (req, res) => {
    if (!isLoading) {
        isLoading = true;
        const id = await req.body;
        const data = await Song.findOne({ videoId: id.id });
        data.views += 1;
        await data.save();
        isLoading = false;

        return res.json({ views: data.views });
    }
});

export default listenRouter;