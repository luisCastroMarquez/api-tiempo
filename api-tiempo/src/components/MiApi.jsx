import { useEffect, useState } from "react";
import axios from "axios";

const MiApi = ({ onDataFetch }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <div></div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return <div></div>;
};

export default MiApi;
