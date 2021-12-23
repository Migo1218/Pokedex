import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { searchAsyn } from "../actions/Busquedaaction";

const Busqueda = () => {
  


  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: "",
    },

    onSubmit: ({ search }) => {
      console.log(search);
      dispatch(searchAsyn(search));
    },
  });
  return (
    <div>
      <Form onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="text"
            name="search"
            placeholder="Ingrese su búsqueda"
            onChange={formik.handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Busqueda;
