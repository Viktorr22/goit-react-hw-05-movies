import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { fetchFilmHome } from '../services/api';

const Home = () => {
  const location = useLocation();
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFilmHome()
      .then(({ results, id }) => {
        const requestList = results.map(({ title, id }) => ({ title, id }));
        return { requestList };
      })
      .then(({ requestList }) => {
        setMovieList([...requestList]);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      <div>Trending today</div>
      <ul>
        {movieList.map(({ id, title }) => (
          <li key={id}>
            <Link to={`movies/${id}`} state={{ from: location }}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </>
  );
};

export default Home;
