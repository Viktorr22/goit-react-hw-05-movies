import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { BackLink, FilmBox, SolidBox } from './MovieDetails.styled';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8378c884a6341b6bb6a7cfb362550079';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

async function fetchFilm(id) {
  try {
    const responce = await axios.get(`movie/${id}?api_key=${API_KEY}`);
    return responce.data;
  } catch (error) {
    throw new Error(error);
  }
}

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [movieInfo, setMovieInfo] = useState({});
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFilm(movieId)
      .then(
        ({
          genres,
          id,
          title,
          poster_path,
          overview,
          release_date,
          vote_average,
        }) => {
          const movieDet = {
            genres,
            id,
            title,
            poster_path,
            overview,
            release_date,
            vote_average,
          };
          return { movieDet };
        }
      )
      .then(({ movieDet }) => {
        setMovieInfo({ ...movieDet });
      })
      .catch(error => {
        setError(error.message);
      });
  }, [movieId]);

  let date = movieInfo.release_date;
  date = String(date).slice(0, 4);
  let score = movieInfo.vote_average * 10;
  score = String(score).slice(0, 2);

  const { title, genres, overview, poster_path } = movieInfo;

  return (
    <>
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      {genres && (
        <SolidBox>
          <FilmBox>
            <img src={IMAGE_BASE_URL + poster_path} alt={title} />
            <div>
              <h2>
                {title}({date})
              </h2>
              <p>User Scores: {score}%</p>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h3>Genres</h3>
              <p>{genres.map(genre => genre.name).join(', ')}</p>
            </div>
          </FilmBox>
        </SolidBox>
      )}
      <SolidBox>
        <h3>Additional information</h3>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
        {error && <p>{error}</p>}
      </SolidBox>

      <Outlet />
    </>
  );
};

export default MovieDetails;
