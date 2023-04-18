import { google } from "googleapis";
import Song from "../models/Song";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY
const PLAYLIST_ID = 'RDGMEM0s70dY0AfCwh3LqQ-Bv1xg'
const youtube = google.youtube({
    version: "v3",
    auth: YOUTUBE_API_KEY,
})

export const getPopularSongs = async () => {
    try {
        const res = await youtube.playlistItems.list({
            part: "snippet",
            playlistId: PLAYLIST_ID,
            maxResults: 10,
        })

        const songs = res.data.items.map((item) => {
            const song = item.snippet;
      
            return new Song({
              id: song.resourceId.videoId,
              title: song.title,
              des: song.description,
              image: song.thumbnails.default.url,
              views: 0,
            });
        });

        await Song.insertMany(songs);

        return songs;
    } catch (error) {
        console.log(error);
    }
};