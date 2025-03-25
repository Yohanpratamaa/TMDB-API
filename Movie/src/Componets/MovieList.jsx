import React, { useEffect, useRef, useState } from 'react'
import GlobalApi from '../Services/GlobalApi'
import MovieCard from './MovieCard';
import { IoChevronBackOutline, IoChevronForwardOutline } from 'react-icons/io5';
import HrMovieCard from './HrMovieCard';

export default function MovieList({ genreId, index_, movieList: movieListProp }) {
  const [movieList, setMovieList] = React.useState(movieListProp || []);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!movieListProp && genreId) {
      getMovieByGenreId();
    } else {
      setMovieList(movieListProp || []);
    }
  }, [genreId, movieListProp]);

  const getMovieByGenreId = () => {
    GlobalApi.getMovieByGenreId(genreId).then((resp) => {
      console.log("Movie By Genre =", resp.data.results);
      setMovieList(resp.data.results);
    });
  };

  const slideRight = (element) => {
    element.scrollLeft += 500;
  };

  const slideLeft = (element) => {
    element.scrollLeft -= 500;
  };

  return (
    <div className='relative'>
        <IoChevronBackOutline onClick={() => slideLeft(elementRef.current)}
            className={`text-[50px] text-white p-2 z-10 cursor-pointer hidden md:block absolute ${
            index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'
            }`}/>

        <div ref={elementRef} className='flex overflow-x-auto gap-8 scrollbar-none scroll-smooth pt-4 px-3 pb-4'>
                {movieList.map((item, index) => (
                    <React.Fragment key={item.id}>
                        {index % 3 === 0 ? <HrMovieCard movie={item} /> : <MovieCard movie={item} />}
                    </React.Fragment>
                ))}
        </div>

        <IoChevronForwardOutline
            onClick={() => slideRight(elementRef.current)}
            className={`text-[50px] text-white hidden md:block p-2 cursor-pointer z-10 top-0 absolute right-0 ${
            index_ % 3 === 0 ? 'mt-[80px]' : 'mt-[150px]'}`}/>

    </div>
  );
}