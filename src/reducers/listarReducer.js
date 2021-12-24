import { types } from "../types/types";

const initialState = {
  pokemones: [],
};

export const listarReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.listar:
      return {
        pokemones: [...state.pokemones, action.payload],
      };

    case types.search:
      return {
        pokemones: action.payload,
      };

    default:
      return state;
  }
};
