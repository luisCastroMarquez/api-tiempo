import { useEffect, useState } from "react";
import axios from "axios";

const MiApi = ({ onDataFetch }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(true);

      try {
        const response = await fetch(
          "https://api.libreapi.cl/weather/stations"
        );

        const station = await response.data.data;
        onDataFetch(station);
        onDataFetch(station);
      } catch (error) {
        setError.error("Error al obtener datos", error);
      }
    };

    fetchData();
  }, [onDataFetch]);

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <div></div>;
};

export default MiApi;
