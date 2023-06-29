import { useState } from "react";
import MiApi from "./components/MiApi";
import Buscador from "./components/Buscador";
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
      <div>
        <h1>Tiempo</h1>
        <Buscador onSearch={handleSearch} />
        <MiApi onDataFetch={handleDataFetch} />
        <Cards data={filteredData} limit={6} />
      </div>
    </>
  );
};

export default App;
