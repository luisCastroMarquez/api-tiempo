import { useState } from "react";
import Buscador from "./components/Buscador";
import MiApi from "./components/MiApi";
import Cards from "./components/Cards";

const App = () => {
  // Estado para almacenar los datos de todas las estaciones.
  // Estado para almacenar los datos filtrados según la búsqueda.
  // Estado para almacenar el término de búsqueda.
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  //Maneja el evento de búsqueda y actualiza el término de búsqueda.
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
    filterData(searchTerm);
  };

  //Maneja la recuperación de datos y los almacena en el estado.
  //También filtra los datos según el término de búsqueda actual.
  const handleDataFetch = (stations) => {
    setData(stations);
    filterData(searchTerm, stations);
  };

  //Filtra los datos de las estaciones según el término de búsqueda especificado.
  const filterData = (searchTerm, stations = data) => {
    const filteredStations = stations.filter((stations) =>
      stations.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredData(filteredStations);
  };

  // Renderiza la aplicación.
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
