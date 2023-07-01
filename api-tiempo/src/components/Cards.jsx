import { Card, ListGroup, Alert } from "react-bootstrap";
import cards from "../assets/img/cards.png";

//Componente de tarjetas que muestra la información de las estaciones climáticas.
const Cards = ({ data, limit }) => {
  // Obtiene las tarjetas a renderizar según el límite especificado.
  const cardsToRender = data.slice(0, limit);

  // Renderiza las tarjetas si hay datos disponibles, de lo contrario muestra un mensaje de alerta.
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "30px",
      }}
    >
      {cardsToRender.length > 0 ? (
        cardsToRender.map((station) => (
          <Card
            key={station.code}
            style={{
              height: "300px",
              width: "350px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "7px",
            }}
          >
            <Card.Body>
              <img
                src={cards}
                style={{ height: "70px", margin: "20px" }}
                alt="img"
              />
              <Card.Title>{station.name}</Card.Title>
              <Card.Text> Actual: {station.temperature}°C</Card.Text>
              <Card.Text>Presión: {station.pressure_hpa} hPa</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <h5>Pronóstico de ayer</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                Minima Temperatura:{station.yesterday?.minimum?.temperature}°C
              </ListGroup.Item>
              <ListGroup.Item>
                Maxima Temperatura:{station.yesterday?.maximum?.temperature}°C
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))
      ) : (
        <Alert variant="danger">No se encontraron resultados.</Alert>
      )}
    </div>
  );
};

export default Cards;
