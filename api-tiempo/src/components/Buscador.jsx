import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "./Alert";

//Componente de buscador que permite al usuario buscar una ciudad.
const Buscador = ({ onSearch }) => {
  // Estado para almacenar el término de búsqueda.
  const [searchTerm, setSearchTerm] = useState("");

  //Maneja el cambio en el campo de entrada y actualiza el término de búsqueda.
  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  //Maneja el envío del formulario de búsqueda.
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      onSearch(searchTerm);
      setSearchTerm("");
    } else {
      Alert("fallo la busqueda");
    }
  };

  // Renderiza el formulario de búsqueda.
  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        height: "140px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Buscar una ciudad..."
        style={{ height: "45px", width: "250px", borderRadius: "7px" }}
      />
      <Button
        type="submit primary"
        style={{ height: "45px", width: "300px", borderRadius: "7px" }}
      >
        Buscar
      </Button>
    </Form>
  );
};

export default Buscador;
