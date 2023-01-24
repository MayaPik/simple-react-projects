import { useEffect, useState } from "react";
import VehicleTable from "./VehicleTable";

const GetVehicles = async () => {
  let url = "https://swapi.py4e.com/api/vehicles/";
  let pages = [];
  while (url) {
    const res = await fetch(url);
    const data = await res.json();
    pages = [...pages, ...data.results];
    url = data.next;
  }
  return pages;
};

const GetPopulation = async () => {
  const vehicles = await GetVehicles();

  const vehiclesWithPopulation = await Promise.all(
    vehicles.map(async (vehicle) => {
      if (!vehicle?.pilots) {
        return;
      }

      const pilotPromises = vehicle.pilots.map(async (pilot) => {
        const pilotData = await (await fetch(pilot)).json();
        const homeWorldData = await (await fetch(pilotData.homeworld)).json();
        return { pilotData, homeWorldData };
      });

      const pilots = await Promise.all(pilotPromises);
      const pilotPopulations = pilots.map(
        (pilot) => pilot.homeWorldData.population
      );

      const totalPopulation = pilotPopulations.reduce(
        (acc, cur) => Number(acc) + Number(cur),
        0
      );

      return { ...vehicle, totalPopulation, pilots }; //adds total Population and pilots to the object
    })
  );

  const sortedVehicles = vehiclesWithPopulation.sort(
    (a, b) => b.totalPopulation - a.totalPopulation
  );
  return sortedVehicles[0]; //the one with the biggest population;
};

export const SetPopulatedVehicle = () => {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    const fetchVehicle = async () => {
      const fetchedVehicle = await GetPopulation();
      setVehicle(fetchedVehicle);
    };
    fetchVehicle();
  }, []);

  return (
    <div>
      <VehicleTable vehicle={vehicle} />
    </div>
  );
};
