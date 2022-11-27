import { Routes, Route} from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Layout } from './components/Layout/Layout';
import { Container } from './components/Container/Container';
import { NotFound } from './pages/NotFound/NotFound';

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
        <Route index path="/" element={<h1>Helo</h1>} />
        <Route path="/movies"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <h1>movieId</h1>
            </Suspense>
          }
        />
        <Route path='/movies/:movieId'
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <MovieDetailsPage />
              </Suspense> }>
            <Route path='cast' element={<Cast /> } />
            <Route path='reviews' element={<Reviews />} />
        </Route>  
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Container>
  );
};
