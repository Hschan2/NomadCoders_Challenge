import express from "express";
import { playList } from "../controllers/userController";

const playListRouter = express.Router();

playListRouter.get("/", playList);

export default playListRouter;
