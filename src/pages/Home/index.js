import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useSelector } from 'react-redux';
import { getMoviesList } from '../../redux/slices/movies/selectors';
import MovieList from './components/MovieList';
import './style.scss';

const Home = () => {
  const movies = useSelector(getMoviesList);
  const perPage = 12;
  const [pageCount] = useState(Math.round(movies.length / perPage));
  const [currentPage, setCurrentPage] = useState(1);
  const [currentMovies, setCurrentMovies] = useState([]);

  useEffect(() => {
    const result = movies.slice(0, perPage);
    setCurrentMovies(result);
  }, []);

  const handlePageClick = e => {
    const result = movies.slice(
      (currentPage - 1) * perPage,
      currentPage * perPage,
    );
    setCurrentPage(e.selected + 1);
    setCurrentMovies(result);
  };

  return (
    <>
      {currentMovies.length && <MovieList items={currentMovies} />}
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
