import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchFilmReviews } from '../services/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewsInfo, setReviewsInfo] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchFilmReviews(movieId)
      .then(({ results }) => {
        const rewiewList = results.map(({ author, content, id }) => ({
          author,
          content,
          id,
        }));
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
