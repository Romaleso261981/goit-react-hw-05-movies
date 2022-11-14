import { Routes, Route } from 'react-router-dom';
// import { lazy } from "react";
import { HomePage } from './pages/HomePage/HomePage';
import { SearchBar } from './components/SearchBar/SearchBar';
import { AppBar } from './components/AppBar/AppBar';
import Container from './components/Container/Container';

// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));

export const App = () => {
  return (
    <Container>
      <AppBar/>
      <SearchBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Container>
  );
};
