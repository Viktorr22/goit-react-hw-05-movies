import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from 'components/Layout';

const Home = lazy(() => import('../../Pages/Home'));
const Movies = lazy(() => import('../../Pages/Movies'));
const MovieDetails = lazy(() => import('../../Pages/MovieDetails'));
const Cast = lazy(() => import('../Cast'));
const Reviews = lazy(() => import('../Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
