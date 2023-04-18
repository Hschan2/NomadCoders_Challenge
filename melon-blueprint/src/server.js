import express from "express";
import morgan from "morgan";
import session from "express-session";
import flash from "express-flash";
import MongoStore from "connect-mongo";
import { localsMiddleware } from "./middlewares";
import rootRouter from "./routers/rootRouter";
import listenRouter from "./routers/listenRouter";
import loginRouter from "./routers/loginRouter";
import playListRouter from './routers/playListRouter';

const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
  })
);
app.use(flash());
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));

app.use("/", rootRouter);
app.use("/listen", listenRouter);
app.use("/login", loginRouter);
app.use("/logout", (req, res) => {
  req.session.destroy(error => {
    if (error) console.log(error);
    else res.redirect('/');
  })
});
app.use("/playlist", playListRouter);

export default app;
