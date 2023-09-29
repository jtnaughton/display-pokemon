import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Bulbasaur } from "./components/bulbasaur";
import { Ivysaur } from "./components/ivysaur";
import { Venusaur } from "./components/venusaur";
import { Charmander } from "./components/charmander";
import { Charmeleon } from "./components/charmeleon";
import { Notfound } from "./components/notfound";

function App() {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=5";
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchPokemonList = () => {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results))
  }

  useEffect(() => {
    fetchPokemonList();
  }, []);

  return (
    <>
      <h1>Pokemons</h1>
      <ul>
        {data.map((pokemon) => {
          return (
            <button
              value={pokemon.name}
              onClick={(e) => navigate(e.target.value)}
            >
              {pokemon.name}
            </button>
          );
        })}
      </ul>

      <Routes>
        <Route path="/bulbasaur" element={<Bulbasaur />} />
        <Route path="/ivysaur" element={<Ivysaur />} />
        <Route path="/venusaur" element={<Venusaur />} />
        <Route path="/charmander" element={<Charmander />} />
        <Route path="/charmeleon" element={<Charmeleon />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
