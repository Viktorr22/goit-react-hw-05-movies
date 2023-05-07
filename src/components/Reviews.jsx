import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '8378c884a6341b6bb6a7cfb362550079';

async function fetchFilm(id) {
  try {
    const responce = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
    return responce.data;
  } catch (error) {
    throw new Error(error);
  }
}

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFilm(movieId)
      .then(({ results }) => {
        const rewiewList = results.map(({ author, content, id }) => ({
          author,
          content,
          id,
        }));
        console.log(rewiewList);
        return { rewiewList };
      })
      .then(({ rewiewList }) => {
        setReviewsInfo([...rewiewList]);
      })
      .catch(error => {
        setError(error.message);
      });
  }, [movieId]);

  return (
    <>
      {reviewsInfo.length === 0 ? (
        <p>We don't have any reviews for this movie</p>
      ) : (
        <ul>
          {reviewsInfo.map(({ author, content, id }) => (
            <li key={id}>
              <h3>{author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}

      {error && <p>{error}</p>}
    </>
  );
};

export default Reviews;
