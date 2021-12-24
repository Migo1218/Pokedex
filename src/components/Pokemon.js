import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";

const Pokemon = ({ imagen, nombre, tipos }) => {
  return (
    <div>
      <div>
        <Card style={{ height: "36rem" }}>
          <Card.Img style={{ height: "18rem" }} variant="top" src={imagen} />
          <Card.Body>
            <Card.Title className="nombrepoke">{nombre}</Card.Title>
            
            {tipos.map((tipo) => {
              return <div key={tipo.slot}><p className="tipo">
                Tipos: {tipo.type.name}
                </p></div>;
            })}
            <div class="d-grid gap-2">
              <button className="btn btn-dark" type="button">
                Detalle
              </button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Pokemon;
