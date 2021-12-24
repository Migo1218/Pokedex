
import { types } from "../types/types"

//BUSQUEDA



export const searchPokemon = (busqueda) => {
    return{
        type: types.search,
        payload: busqueda
    }
}