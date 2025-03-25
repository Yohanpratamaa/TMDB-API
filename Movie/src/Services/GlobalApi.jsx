import axios from "axios";

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "api_key";

const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

// Endpoint untuk trending videos
const getTrendingVideos = axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);

// Endpoint untuk film berdasarkan genre
const getMovieByGenreId = (id) => axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);

// Endpoint baru untuk pencarian film berdasarkan nama
const getMovieBySearch = (query) =>
    axios.get(`${movieBaseUrl}/search/movie?api_key=${api_key}&query=${encodeURIComponent(query)}`);

export default {
    getTrendingVideos,
    getMovieByGenreId,
    getMovieBySearch,
};