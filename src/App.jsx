import { Routes, Route} from "react-router-dom";
// import {lazy} from "react";
import  {Layout}  from "./components/Layout/Layout"

// const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
// const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));
// const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage/MovieDetailsPage"));


export const App = () => {
 
  return (
    <Routes>
       <Route path='/' element={<Layout />}>
      </Route> 
    </Routes> 
  );
  }