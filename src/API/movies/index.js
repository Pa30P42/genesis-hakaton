export const getMovies = page =>
  fetch(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=6ec0f3fba1c42a32b5dafc2780b519a4&page=${page}`,
    { headers: { 'Cache-Control': 'no-store, max-age=0' } },
  );
