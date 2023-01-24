import { useEffect, useState } from "react";
import { Box } from "@mui/material";

import "./App.css";

const GetPlantes = async () => {
  let url = "https://swapi.py4e.com/api/planets/";
  let pages = [];
  while (url) {
    const res = await fetch(url);
    const data = await res.json();
    pages = [...pages, ...data.results];
    url = data.next;
  }
  return pages;
};

const GetPlantesData = async () => {
  const planets = await GetPlantes();
  const newPlanets = planets.filter(
    (planet) =>
      planet.name === "Tatooine" ||
      planet.name === "Alderaan" ||
      planet.name === "Naboo" ||
      planet.name === "Bespin" ||
      planet.name === "Endor"
  );
  let newObjects = newPlanets.map((planet) => {
    let chartHeight;
    if (planet.population >= 3000000000) {
      chartHeight = 500;
    } else if (planet.population >= 100000000) {
      chartHeight = 400;
    } else if (planet.population >= 10000000) {
      chartHeight = 300;
    } else if (planet.population >= 1000000) {
      chartHeight = 200;
    } else {
      chartHeight = 100;
    }
    return {
      name: planet.name,
      population: planet.population,
      chartHeight,
    };
  });

  return newObjects;
};

export function SetPlanetsData() {
  const [planetsData, setPlanetsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await GetPlantesData();
      setPlanetsData(data);
    }
    fetchData();
  }, []);
  return (
    <div className="data">
      {planetsData &&
        planetsData.map((planet, index) => (
          <div key={planet.name} className="each">
            <p>{planet.name}</p>
            <Box
              sx={{
                width: 100,
                height: `${planet.chartHeight}px`,
                backgroundColor: "purple",
              }}
            />
            <p>{planet.population}</p>
          </div>
        ))}
    </div>
  );
}
