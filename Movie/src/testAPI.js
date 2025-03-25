import GlobalApi from './Services/GlobalApi'; // Sesuaikan path

// 1. Get Trending Videos
GlobalApi.getTrendingVideos.then((response) => {
  console.log("Trending Videos:", response.data.results);
}).catch((error) => {
  console.error("Error fetching trending videos:", error);
});

// 2. Get Movie by Genre ID (contoh dengan genre Action, ID: 28)
GlobalApi.getMovieByGenreId(28).then((response) => {
  console.log("Movies by Genre (Action):", response.data.results);
}).catch((error) => {
  console.error("Error fetching movies by genre:", error);
});

// 3. Get Movie by Search (contoh dengan query "Avengers")
GlobalApi.getMovieBySearch("Avengers").then((response) => {
  console.log("Search Results for 'Avengers':", response.data.results);
}).catch((error) => {
  console.error("Error fetching search results:", error);
});