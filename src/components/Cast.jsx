import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8378c884a6341b6bb6a7cfb362550079';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w200/';

async function fetchFilm(id) {
  try {
    const responce = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
    return responce.data;
  } catch (error) {
    throw new Error(error);
  }
}

const Cast = () => {
  const { movieId } = useParams();
  const [actorInfo, setActorInfo] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFilm(movieId)
      .then(({ cast }) => {
        const actorList = cast.map(
          ({ profile_path, original_name, character, id }) => ({
            profile_path,
            original_name,
            character,
            id,
          })
        );
        console.log(actorList);
        return { actorList };
      })
      .then(({ actorList }) => {
        setActorInfo([...actorList]);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [movieId]);

  return (
    <>
      <ul>
        {actorInfo.map(({ profile_path, original_name, character, id }) => (
          <li key={id}>
            <img src={IMAGE_BASE_URL + profile_path} alt={original_name} />
            <p>{original_name}</p>
            <p>{character}</p>
          </li>
        ))}
      </ul>
      {error && <p>{error}</p>}
    </>
  );
};

export default Cast;
