import axios from "axios";
import { url } from "../helpers/url";
import { types } from "../types/types"

//BUSQUEDA

export const searchAsyn = (terminoBusqueda) => {

    return async(dispatch) => {
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
    //    console.log(data)

      

        // sprites.other.dream_world.front_default
    })
        // const productos = collection(db,"productos");
        // console.log(productos)
        // const q = query(productos,where("description","==",producto))
        // const datos = await getDocs(q);
        // console.log(datos)
        // const productoM = [];
        // datos.forEach((docu) => {
        //     console.log(docu)
        //     productoM.push(docu.data())
        // }) 
        // console.log(productoM)
        // dispatch(searchSync(productoM))
    }
}


export const searchSync = (busqueda) => {
    return{
        type: types.search,
        payload: busqueda
    }
}