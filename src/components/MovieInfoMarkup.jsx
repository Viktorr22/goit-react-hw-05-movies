import { FilmBox, SolidBox } from '../Pages/MovieDetails.styled';
import { getPoster } from '../services/api';

export const MovieInfo = ({ movieData }) => {
  const { title, genres, overview, poster_path, release_date, vote_average } =
    movieData;

  const date = String(release_date).slice(0, 4);
  const score = String(vote_average * 10).slice(0, 2);
  const poster = getPoster(poster_path);
  const genresList = genres.map(genre => genre.name).join(', ');

  return (
    <SolidBox>
      <FilmBox>
        <img src={poster} alt={title} width={200} />
        <div>
          <h2>
            {title}({date})
          </h2>
          <p>User Scores: {score}%</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genresList}</p>
        </div>
      </FilmBox>
    </SolidBox>
  );
};
