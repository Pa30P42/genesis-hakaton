import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { getMoviesList } from '../../redux/slices/movies/selectors';
import MovieList from './components/MovieList';
import './style.scss';

const MOVIES_PER_PAGE = 12;

const Home = () => {
  const movies = useSelector(getMoviesList);
  const [pageCount] = useState(Math.round(movies.length / MOVIES_PER_PAGE));
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovies, setCurrentMovies] = useState([]);

  useEffect(() => {
    const result = movies.slice(0, MOVIES_PER_PAGE);
    setCurrentMovies(result);
  }, []);

  const handlePageClick = e => {
    window.scrollTo(0, 0);
    const result = movies.slice(
      (currentPage - 1) * MOVIES_PER_PAGE,
      currentPage * MOVIES_PER_PAGE,
    );
    setCurrentPage(e.selected + 1);
    setCurrentMovies(result);
  };

  return (
    <>
      {currentMovies.length && <MovieList movie={currentMovies} />}
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
  );
};

export default Home;
