import React from 'react';
import './style.scss';

const MovieListItem = ({ item }) => {
  return (
    <>
      {/* <div className="filmTitle">{item.title}</div> */}

      <div className="filmContainer">
        <div className={style.infoWrapper}>
          <p> {item.title}</p>
          <p className={style.artistName} onClick={redirectToArtistPage}>
            {artist}
          </p>
        </div>
        <img src={picture} alt="artist pic" width="200" />
        <a
          href={url}
          target="_blank "
          rel="noopener noreferrer"
          className={style.trackLink}
        >
          Listen to me now
        </a>
      </div>
    </>
  );
};

export default MovieListItem;
