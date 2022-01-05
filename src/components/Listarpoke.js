import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listar } from "../actions/listarAction";
import Pokemon from "./Pokemon";
import "../styles/styles.css";

const Listarpoke = () => {
  const dispatch = useDispatch();

  const pokemones = useSelector((state) => state.listar.pokemones);

  useEffect(() => {
    dispatch(listar());
  }, [dispatch]);

  return (
    <div className=" divlistar">
      <div className="container mt-4">
        <div className="d-flex row row-cols-1 row-cols-md-2 row-cols-xl-4 g-4">
          {pokemones.map(({ imagen, nombre, numero, tipos }) => {
            return (
              <Pokemon
                key={numero}
                nombre={nombre}
                imagen={imagen}
                tipos={tipos}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Listarpoke;
