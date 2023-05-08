import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchMovies } from '../services/api';

const Movies = () => {
  const [requestName, setRequestName] = useState('');
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const FetchMoviesFilms = e => {
    if (!e) return;
    fetchMovies(e)
      .then(({ results }) => {
        const requestList = results.map(({ original_title, id }) => ({
          original_title,
          id,
        }));
        return { requestList };
      })
      .then(({ requestList }) => {
        setMovies([...requestList]);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  useEffect(() => {
    FetchMoviesFilms(query);
  }, [query]);

  const handleNameChange = evt => {
    const queryValue = evt.target.value;
    if (queryValue === '') {
      return setRequestName('');
    }
    setRequestName(queryValue);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (requestName.trim() === '') {
      alert('Введите запрос');
      return;
    }
    FetchMoviesFilms(requestName);
    setSearchParams({ query: requestName });
    setRequestName('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={requestName} onChange={handleNameChange} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(({ id, original_title }) => (
          <li key={id}>
            <Link to={`${id}`} state={{ from: location }}>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </>
  );
};

export default Movies;
