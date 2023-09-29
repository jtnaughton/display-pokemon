import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./Home";
import { Bulbasaur } from "./components/bulbasaur";
import { Ivysaur } from "./components/ivysaur";
import { Venusaur } from "./components/venusaur";
import { Charmander } from "./components/charmander";
import { Charmeleon } from "./components/charmeleon";
import { Notfound } from "./components/notfound";

function App() {
  return (
    <Home>
      <BrowserRouter>
        <Routes>
          <Route path="/bulbasaur" element={<Bulbasaur />} />
          <Route path="/ivysaur" element={<Ivysaur />} />
          <Route path="/venusaur" element={<Venusaur />} />
          <Route path="/charmander" element={<Charmander />} />
          <Route path="/charmeleon" element={<Charmeleon />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </Home>
  );
}

export default App;
