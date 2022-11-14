import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { HomePage } from './pages/HomePage/HomePage';
import { Navigation } from './components/Navigation/Navigation';
// import { CardMovie } from './pages/CardMovie/CardMovie';

const CardMovie = lazy(() => import('./pages/CardMovie/CardMovie'));
// const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));

export const App = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <CardMovie />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};
