import { useEffect, useState } from "react";
import axios from "axios";

//Componente que realiza una solicitud a una API para obtener datos de estaciones climáticas.
const MiApi = ({ onDataFetch }) => {
  // Estado para controlar si se está cargando la solicitud.
  // Estado para almacenar cualquier error que ocurra durante la solicitud.
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  //Función asincrónica para realizar la solicitud a la API y manejar los datos recuperados.
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await axios.get(
          "https://api.libreapi.cl/weather/stations"
        );

        const stations = response.data.data;
        onDataFetch(stations);
      } catch (error) {
        setError("Falla en la conexión... disculpe las molestias!.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [onDataFetch]);

  // Si se está cargando la solicitud, se muestra un componente de carga.
  if (loading) {
    return <div></div>;
  }
  // Si hay un error, se muestra un mensaje de error.
  if (error) {
    return <div>{error}</div>;
  }

  return;
};

export default MiApi;
