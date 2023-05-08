import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { BackLink, SolidBox } from './MovieDetails.styled';
import { fetchMovieDetails } from '../services/api';
import { MovieInfo } from 'components/MovieInfoMarkup';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
  const [movieInfo, setMovieInfo] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMovieDetails(movieId)
      .then(movieDet => {
        setMovieInfo(movieDet);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [movieId]);

  return (
    <>
      <BackLink to={backLinkLocationRef.current}>Go back</BackLink>
      {movieInfo && <MovieInfo movieData={movieInfo} />}
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
