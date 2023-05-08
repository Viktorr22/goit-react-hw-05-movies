import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmCast, getPoster } from '../services/api';

const Cast = () => {
  const { movieId } = useParams();
  const [actorInfo, setActorInfo] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFilmCast(movieId)
      .then(({ cast }) => {
        const actorList = cast.map(
          ({ profile_path, original_name, character, id }) => ({
            profile_path,
            original_name,
            character,
            id,
          })
        );
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
            <img
              src={getPoster(profile_path)}
              alt={original_name}
              width={120}
            />
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
