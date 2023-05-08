import axios from 'axios';
import defaultImage from '../defaultImage.jpg';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8378c884a6341b6bb6a7cfb362550079';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200/';
const NOT_FOUND_IMAGE_URL = defaultImage;

export const getPoster = url =>
  url ? IMAGE_BASE_URL + url : NOT_FOUND_IMAGE_URL;

// _______________________MovieDetails________________________________________

export async function fetchMovieDetails(e) {
  try {
    const responce = await axios.get(`movie/${e}?api_key=${API_KEY}`);
    const {
      genres,
      id,
      title,
      poster_path,
      overview,
      release_date,
      vote_average,
    } = responce.data;
    return {
      genres,
      id,
      title,
      poster_path,
      overview,
      release_date,
      vote_average,
    };
  } catch (error) {
    throw new Error(error);
  }
}

// ______________________________Movies________________________________________

export async function fetchMovies(query) {
  try {
    const responce = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&page=1`
    );
    return responce.data;
  } catch (error) {
    throw new Error(error);
  }
}

// ______________________________Home____________________________________________

export async function fetchFilmHome() {
  try {
    const responce = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
    return responce.data;
  } catch (error) {
    throw new Error(error);
  }
}

// _______________________________Cast_________________________________________________

export async function fetchFilmCast(id) {
  try {
    const responce = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
    return responce.data;
  } catch (error) {
    throw new Error(error);
  }
}

// _______________________________Reviews______________________________________________________

export async function fetchFilmReviews(id) {
  try {
    const responce = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
    return responce.data;
  } catch (error) {
    throw new Error(error);
  }
}
