import React from 'react';
import './style.scss';

const MovieListItem = ({ item }) => {
  return (
    <>
      <div className="filmContainer trendingListItem">
        <p className="filmTitle"> {item.title}</p>
        <p
        // onClick={redirectToArtistPage}
        >
          {item.overview}
        </p>
        <img src={item.backdrop_path} alt="film pic" width="200" />
        <a
          // href={url}
          target="_blank "
          rel="noopener noreferrer"
          // className={style.trackLink}
        >
          Link
        </a>
      </div>
    </>
  );
};

export default MovieListItem;
