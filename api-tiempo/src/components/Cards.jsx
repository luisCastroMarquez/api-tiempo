import { Card, ListGroup, Alert } from "react-bootstrap";

const Cards = ({ data, limit }) => {
  const cardsToRender = data.slice(0, limit);

  return (
    <div>
      {cardsToRender.length > 0 ? (
        cardsToRender.map((station) => (
          <Card
            key={station.code}
            style={{
              height: "330px",
              width: "380px",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              borderRadius: "7px",
            }}
          >
            <CardBody>
              <img
                src={cards}
                style={{ height: "70px", margin: "20px " }}
                alt="img"
              />
              <Card.Title>{station.name}</Card.Title>
              <Card.Text>{station.temperature}°C</Card.Text>
            </CardBody>
            <ListGroup className="list-group-flush">
              <ListGroup.Item>
                minumun Temperature: {station.yesterday?.minimum?.temperature}°C
              </ListGroup.Item>
              <ListGroup.Item>
                maximun Temperature: {station.yesterday?.maximun?.temperature}°C
              </ListGroup.Item>
            </ListGroup>
          </Card>
        ))
      ) : (
        <Alert></Alert>
      )}
    </div>
  );
};

export default Cards;
