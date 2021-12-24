import React from 'react'
import Busqueda from '../components/Busqueda'
import Listarpoke from '../components/Listarpoke'
import Login from '../components/Login'

const Principal = () => {
    return (
        <div>
           <Login/>
            <Busqueda/>
            <Listarpoke/>
        </div>
    )
}

export default Principal
