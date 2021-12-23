import axios from "axios";

import { url } from "../helpers/url";
import { types } from "../types/types";

//LISTAR O LEER DATOS

export const listar = () => {
  return async (dispatch) => {
    const response = await axios.get(url);
    console.log(response)
    response.data.results.forEach(async ({url}) => {
        const pokemon = await axios.get(url)
        const data = {
            imagen: pokemon.data.sprites.other.dream_world.front_default,
            nombre: pokemon.data.name,
            numero: pokemon.data.id,
            tipos: pokemon.data.types,
        }
        dispatch(listarpo(data))

        // sprites.other.dream_world.front_default
    })
    // dispatch(listarpo(response.data.results))
  };
  
};

export const listarpo = (pokemones) => {
  return {
    type: types.listar,
    payload: pokemones,
  };
};
