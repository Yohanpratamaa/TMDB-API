import { useState } from 'react';
import './App.css'
import Header from './Componets/Header';
import Slider from './Componets/Slider';
import ProductionHouse from './Componets/ProductionHouse';
import GenreMovieList from './Componets/GenreMovieList';
import MovieList from './Componets/MovieList';
import GlobalApi from './Services/GlobalApi';

export default function App() {
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (query) => {
    if (query.length > 2) {
      GlobalApi.getMovieBySearch(query)
        .then((response) => {
          console.log("Search Results:", response.data.results);
          setSearchResults(response.data.results);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div className="">
      <Header onSearch={handleSearch} />
      <Slider />
      <ProductionHouse />
      {searchResults.length > 0 ? (
        <div className='p-8 px-8 md:px-16'>
          <h2 className='text-[20px] text-white font-bold'>Search Results</h2>
          <MovieList movieList={searchResults} index_={0} />
        </div>
      ) : (
        <GenreMovieList />
      )}
    </div>
  );
}