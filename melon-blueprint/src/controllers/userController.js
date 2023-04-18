import User from "../models/User";

export const userLogin = async (req, res) => {
    const userData = await User.find({});

    return res.render("login", { pageTitle: "login", data: userData });
};

export const playList = async (req, res) => {
    let user = null;
    if (req.session.user) {
        user = await User.find({ _id: req.session.user._id });
    }

    return res.render("playlist", {
        pageTitle: "playlist",
        data: user[0].playlist,
        userData: user[0],
    });
};