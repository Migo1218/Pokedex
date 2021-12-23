import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listar } from "../actions/listarAction";
import Pokemon from "./Pokemon";

const Listarpoke = () => {
  const dispatch = useDispatch();

  const pokemones = useSelector((state) => state.listar.pokemones);
  console.log(pokemones);

  useEffect(() => {
    dispatch(listar());
  }, [dispatch]);

  return (
    <div>
      {pokemones.map(({ imagen, nombre, numero, tipos }) => {
        return (
          <Pokemon key={numero} nombre={nombre} imagen={imagen} tipos={tipos} />
        );
      })}
    </div>
  );
};

export default Listarpoke;
