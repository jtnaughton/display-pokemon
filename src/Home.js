import React from "react";
import "./App.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const url = "https://pokeapi.co/api/v2/pokemon?limit=5";
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchPokemon = () => { 
    return fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data.results));
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  function handleClick() {
    navigate('/venusaur')
  }

  return (
    <div className="App">
      <h1>Users Page</h1>
      <ul>
        {data.map((pokemon) => {
          return <button onClick={handleClick}> {pokemon.name}</button>;
        })}
      </ul>
    </div>
  );
};
