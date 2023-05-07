import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8378c884a6341b6bb6a7cfb362550079';

async function fetchFilm(query) {
  try {
    const responce = await axios.get(
      `search/movie?api_key=${API_KEY}&query=${query}&page=1`
    );
    return responce.data;
  } catch (error) {
    throw new Error(error);
  }
}

const Movies = () => {
  const [requestName, setRequestName] = useState('');
  const [error, setError] = useState('');
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') ?? '';
  const location = useLocation();

  const FetchMoviesFilms = e => {
    if (!e) return;
    fetchFilm(e)
      .then(({ results }) => {
        const requestList = results.map(({ original_title, id }) => ({
          original_title,
          id,
        }));
        console.log(requestList);
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
    console.log(requestName);
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

// import { Link, useLocation, useSearchParams } from 'react-router-dom';
// import { useState } from 'react';
// import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// const API_KEY = '8378c884a6341b6bb6a7cfb362550079';

// async function fetchFilm(query) {
//   try {
//     const responce = await axios.get(
//       `search/movie?api_key=${API_KEY}&query=${query}&page=1`
//     );
//     return responce.data;
//   } catch (error) {
//     throw new Error(error);
//   }
// }

// const Movies = () => {
//   const [movies, setMovies] = useState([]);
//   const [searchParams, setSearchParams] = useSearchParams();
//   const query = searchParams.get('query') ?? '';
//   const location = useLocation();
//   const [error, setError] = useState('');

//   const handleNameChange = evt => {
//     const queryValue = evt.target.value;
//     if (queryValue === '') {
//       return setSearchParams({});
//     }
//     setSearchParams({ query: queryValue });
//   };

//   const handleSubmit = event => {
//     event.preventDefault();

//     if (query.trim() === '') {
//       alert('Введите запрос');
//       return;
//     }
//     console.log(query);
//     if (!query) return;
//     fetchFilm(query)
//       .then(({ results }) => {
//         const requestList = results.map(({ original_title, id }) => ({
//           original_title,
//           id,
//         }));
//         console.log(requestList);
//         return { requestList };
//       })
//       .then(({ requestList }) => {
//         setMovies([...requestList]);
//       })
//       .catch(error => {
//         setError(error.message);
//       });
//     setSearchParams({ query: query });
//     // setSearchParams({ query: query });
//     // setSearchParams({});
//     // setMovies([]);
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={query} onChange={handleNameChange} />
//         <button type="submit">Search</button>
//       </form>
//       <ul>
//         {movies.map(({ id, original_title }) => (
//           <li key={id}>
//             <Link to={`${id}`} state={{ from: location }}>
//               {original_title}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       {error && <p>{error}</p>}
//     </>
//   );
// };

// export default Movies;
