import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Alert from "./Alert";

const Buscador = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      onSearch(searchTerm);
      setSearchTerm("");
    } else {
      Alert("fallo");
    }
  };

  return (
    <Form
      onSubmit={handleSubmit}
      style={{
        height: "140px",
        display: "flex",
        flexFlow: "row wrap",
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
