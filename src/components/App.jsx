import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Appbar from './AppBar/AppBar';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));

const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../pages/MovieDetailsPage/MovieDetailsPage')
);
const Reviews = lazy(() => import('../pages/Reviews/Reviews'));
const Cast = lazy(() => import('../pages/Cast/Cast'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Appbar />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/movies" element={<MoviesPage />}></Route>

            <Route path="/movies/:movieId/" element={<MovieDetailsPage />}>
              <Route path="reviews" element={<Reviews />} />
              <Route path="cast" element={<Cast />} />
            </Route>
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
