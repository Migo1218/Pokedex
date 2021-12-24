import { useFormik } from "formik";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { searchPokemon } from "../actions/Busquedaaction";
import poke from '../img/poke.png'
import '../styles/styles.css'

const Busqueda = () => {
  const pokemones = useSelector(state => state.listar.pokemones)
  


  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      search: "",
    },
    
    onSubmit: ({ search }) => {
        const busqueda = pokemones.filter(p=>p.nombre == search)
        console.log(busqueda);
      dispatch(searchPokemon(busqueda));
    },
  });
  return (
    <div className="container mt-5">
        <img src={poke} className="img"/>
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
  );
};

export default Busqueda;
