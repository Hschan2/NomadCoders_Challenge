import { google } from "googleapis";
import Song from "../models/Song";

const youtube = google.youtube({
  version: "v3",
  auth: process.env.YOUTUBE_API_KEY,
});

export const getPopularSongs = async () => {
    const response = await youtube.videos.list({
        chart: "mostPopular",
        part: ["snippet", "statistics"],
        maxResults: 20,
        videoCategoryId: 10,
        regionCode: "KR",
    });

    const videos = response.data.items;
    const popularSongs = [];

    for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        const popularSong = new Song({
        title: video.snippet.title,
        artist: video.snippet.channelTitle,
        videoId: video.id,
        views: video.statistics.viewCount,
        });

        popularSongs.push(popularSong);
    }

    return popularSongs;
};

export const savePopularSongs = async () => {
    const popularSongs = await getPopularSongs();

    for (let i = 0; i < popularSongs.length; i++) {
        const popularSong = popularSongs[i];
        try {
        await popularSong.save();
        } catch (error) {
        console.log(error);
        }
    }
};
