import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation";
import PokemonPage from "./pages/PokemonPage";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import ErrorPage from "./pages/ErrorPage";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="pokemon/:id" element={<PokemonPage />} />

        <Route path="search" element={<SearchPage />} />
      </Route>

      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};
