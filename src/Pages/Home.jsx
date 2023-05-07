import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8378c884a6341b6bb6a7cfb362550079';

async function fetchFilm() {
  try {
    const responce = await axios.get(`trending/movie/week?api_key=${API_KEY}`);
    return responce.data;
  } catch (error) {
    throw new Error(error);
  }
}

const Home = () => {
  const location = useLocation();
  const [movieList, setMovieList] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFilm()
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
