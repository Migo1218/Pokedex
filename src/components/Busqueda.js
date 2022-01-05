import { useFormik } from "formik";
import React, { useState } from "react";
import {  Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchPokemon } from "../actions/Busquedaaction";
import poke from "../img/poke.png";

const Busqueda = () => {
  const redirectHome = useNavigate()
  const pokemones = useSelector((state) => state.listar.pokemones);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: "",
    },

    onSubmit: ({ search }) => {
      console.log(search)
      const busqueda = pokemones.filter((p) => p.nombre == search);
      console.log(busqueda);
      dispatch(searchPokemon(busqueda));
    },
  });
  return (
    <div className="divlistar">
      <div className="container mt-5">
        <div onClick={() => redirectHome('/')}>
        <img src={poke} className="img" />
        </div>
        
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="text"
              name="search"
              placeholder="Ingrese su búsqueda"
              onChange={formik.handleChange}
            />
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default Busqueda;
