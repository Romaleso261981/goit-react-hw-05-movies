import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './components/Layout/Layout';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);

export const App = () => {
  return (
    <>
      <Layout />
            <Routes>
        <Route index path="/" element={<HomePage />} />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MoviesPage />
            </Suspense>
          }
        />
        <Route
          path="/movies/:movieId/*"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <MovieDetailsPage />
            </Suspense>
          }
        />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </>
  );
};
