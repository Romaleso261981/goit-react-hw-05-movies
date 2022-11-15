import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './components/Layout/Layout';
import { Container } from './components/Container/Container';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('./pages/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('./pages/MovieDetailsPage/MovieDetailsPage')
);
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));

export const App = () => {
  return (
    <Container>
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
         <Route path="/movies/:movieId/"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieDetailsPage />
              </Suspense> }>
            <Route path='/movies/:movieId/cast' element={<Suspense fallback={<div>Loading...</div>}><Cast /></Suspense> } />
            <Route path='/movies/:movieId/Reviews' element={<Suspense fallback={<div>Loading...</div>}><Reviews /></Suspense>} />
        </Route>
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Container>
  );
};
