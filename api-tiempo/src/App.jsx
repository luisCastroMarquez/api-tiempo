import { useState } from "react";
import Buscador from "./components/Buscador";
import MiApi from "./components/MiApi";
import Cards from "./components/Cards";

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    filterData(searchTerm);
  };

  const handleDataFetch = (stations) => {
    setData(stations);
    filterData(searchTerm, stations);
  };

  const filterData = (searchTerm, stations = data) => {
    const filteredStations = stations.filter((stations) =>
      stations.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredStations);
  };

  return (
    <>
      <h1 style={{ color: "blue", display: "flex", justifyContent: "center" }}>
        App clima regiones Chile
      </h1>
      <Buscador onSearch={handleSearch} />
      <MiApi onDataFetch={handleDataFetch} />
      <Cards data={filteredData} limit={8} />
    </>
  );
};

export default App;
