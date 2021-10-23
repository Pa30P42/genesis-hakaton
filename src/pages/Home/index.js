import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { getMoviesList } from '../../redux/slices/movies/selectors';
import MovieList from './components/MovieList';
import './style.scss';

const Home = () => {
  const movies = useSelector(getMoviesList);
  const perPage = 6;
  const [pageCount] = useState(Math.round(movies.length / perPage));
  const [currentPage, setCurrentPage] = useState(1);
  // const [from, setFrom] = useState(0);
  const [currentMovies, setCurrentMovies] = useState([]);

  // const selectedMovies = {
  //   1: movies.splice(0, 10),
  // };

  // const selectedMovies = data => {
  //   console.log(currentPage, from);
  //   return data.slice(from, currentPage * perPage);
  // };

  useEffect(() => {
    console.log('CDU', currentPage, currentMovies);
  }, [currentPage]);

  // useEffect(() => {
  //   if (from > 0) {
  //     const result = selectedMovies(movies);
  //     setCurrentMovies(result);
  //   }
  // }, [from]);

  const handlePageClick = e => {
    const result = movies.slice(0, perPage);
    setCurrentMovies(result);
    setCurrentPage(e.selected + 1);
    if (currentPage > 1) {
      console.log(`handlePageClick`, e.selected + 1, currentPage);
      const result = movies.slice(
        (currentPage - 1) * perPage,
        currentPage * perPage,
      );
      setCurrentMovies(result);
      // setFrom(from + perPage);
    }
  };

  return (
    <div>
      <h2>Home</h2>
      <>
        {/* <button onClick={() => handlePageClick(from)}>Click</button> */}
        <MovieList items={currentMovies} />
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          initialPage={1}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          subContainerClassName="pages pagination"
          breakLinkClassName="page-link"
          containerClassName="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          previousClassName="page-item"
          previousLinkClassName="page-link"
          nextClassName="page-item"
          nextLinkClassName="page-link"
          activeClassName="active"
        />
      </>
    </div>
  );
};

export default Home;
