import { Card, ListGroup, Alert } from "react-bootstrap";
import cards from "../assets/img/cards.png";

const Cards = ({ data, limit }) => {
  const cardsToRender = data.slice(0, limit);

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
              height: "350px",
              width: "400px",
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
              <Card.Text>{station.temperature}°C</Card.Text>
              <Card.Text>Pressure: {station.pressure_hpa} hPa</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                <h5>Pronóstico de ayer</h5>
              </ListGroup.Item>
              <ListGroup.Item>
                minimun Temperature: {station.yesterday?.minimum?.temperature}°C
              </ListGroup.Item>
              <ListGroup.Item>
                maximun Temperature: {station.yesterday?.maximun?.temperature}°C
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
