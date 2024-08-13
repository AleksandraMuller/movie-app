const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
export const urls = {
  GET_GENRE: `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`,
  GET_MOVIES_BY_TITLE: `${BASE_URL}/search/movie?include_adult=false&language=en-US&api_key=${API_KEY}`,
  GET_MOVIES_BY_GENRE: `${BASE_URL}/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&api_key=${API_KEY}`,
};
