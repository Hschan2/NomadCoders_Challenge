import Song from "../models/Song";

const API_KEY = process.env.LAST_FM_API_KEY
const SECRET_KEY = process.env.LAST_FM_SECRET_KEY
const API_URL = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=${API_KEY}&format=json&method=chart.gettoptracks&limit=10`;

export const getPopularSongs = async () => {
    const response = await fetch(API_URL)
    const data = await response.json()
    const tracks = data.tracks.track

    const popularSongs = tracks.map(track => {
        return new Song({
            title: track.name,
            artist: track.artist,
            audio: track.url,
            views: track.listeners,
            imageUrl: track.image[3]['#text'],
        })
    })

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
