import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Pokemon = ({ imagen, nombre, tipos }) => {
  return (
    <div className="d-flex flex-row">
      <Row xs={1} md={2} className="g-4">
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={imagen} />
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <h3>Tipos</h3>
              {tipos.map((tipo) => {
                return <div key={tipo.slot}>{tipo.type.name}</div>;
              })}
              <Button variant="primary">Detalle</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Pokemon;
