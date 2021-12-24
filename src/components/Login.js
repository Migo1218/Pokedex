import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const Login = () => {
  return (
    <Card>
      <Card.Header>
        <h1 className="text-center">LOGIN</h1>
      </Card.Header>
      <Card.Body>
        <Form className="formlogin" >
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Ingresa tu email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingresa tu email"
              name="email"
            
            />

          
          
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Ingresa tu contraseña</Form.Label>
            <Form.Control
              type="password"
              placeholder="Ingresa tu contraseña"
              name="password"
             
            />
           
          </Form.Group>
          <hr className="mt-4" />
          <div className="d-flex justify-content-center mt-2">
            <div  className="poiter">
              <span
                className="iconify py-2 "
                data-icon="flat-color-icons:google"
                data-width="50"
              ></span>
            </div>
            <div  className="poiter">
              <span
                className="iconify py-2 pe"
                data-icon="logos:facebook"
                data-width="50"
              ></span>
            </div>
          </div>
          <hr className="mt-4" />
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </div>
          <hr className="mt-2" />
          
        </Form>
      </Card.Body>
    </Card>
  );
};

export default Login;
