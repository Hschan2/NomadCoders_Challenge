import { getPopularSongs } from "../db/saveSongs";
import Song from "../models/Song";
import User from "../models/User";

export const home = async (req, res) => {
  try {
    const popularSongs = await Song.find().sort({ views: "desc" }).limit(20);
    
    if (popularSongs.length === 0) {
      const newPopularSongs = await getPopularSongs();
      for (let i = 0; i < newPopularSongs.length; i++) {
        const popularSong = newPopularSongs[i];
        try {
          await popularSong.save();
        } catch (error) {
          console.log(error);
        }
      }

      const updatedPopularSongs = await Song.find()
        .sort({ views: "desc" })
        .limit(10);
      return res.render("home", {
        pageTitle: "Home",
        popularSongs: updatedPopularSongs,
      });
    }
    
    return res.render("home", { pageTitle: "Home", popularSongs });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", popularSongs: [] });
  }
};
