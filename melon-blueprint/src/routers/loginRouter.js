import express from "express";
import { async } from "regenerator-runtime";
import { userLogin } from "../controllers/userController";

const loginRouter = express.Router();
let isLoading = false;

loginRouter.get("/", userLogin).post(async (req, res, next) => {
    if (!isLoading) {
        isLoading = true;
        const login = await req.body;
        const user = await User.findOne({ userId: login.id });
        
        if (!user) {
          res.json({ loginResult: false, message: "잘못된 입력입니다." });
        } else {
            if (user.userPw == login.pw && user.userId == login.id) {
                req.session.loggedIn = true;
                req.session.user = user;
                next();
                res.redirect("/");
            } else {
                res.json({ loginResult: false, message: "잘못된 입력입니다." });
            }
        }
        isLoading = false;
    }
});

export default loginRouter;
