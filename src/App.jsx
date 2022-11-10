import { Routes, Route, Navigate } from "react-router-dom";
import {lazy} from "react";
import  {Layout}  from "./components/Layout/Layout"

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));


export const App = () => {
 
  return (
    <Routes>
       <Route path='/' element={<Layout />}>
        <Route index path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId/*" element={<MovieDetailsPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Route> 
    </Routes> 
  );
  }