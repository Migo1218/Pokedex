import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { getAuth, onAuthStateChanged } from "@firebase/auth";
import { useDispatch } from 'react-redux'

import Principal from '../container/Principal';
import { login } from '../actions/loginAction';
import Login from '../components/Login';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';


const AppRouter = () => {
    const dispatch = useDispatch()
    
    const auth = getAuth()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                dispatch(login(user.uid, user.displayName))
                
            } 
        })
    }, [auth, dispatch]) 
    return (
            <Router>
                <Routes>
                <Route exact path="/"  element={<Login/>}/>
                <Route exact path="/"  element={(
                    <PublicRoute>
                        <Login />
                    </PublicRoute>)}/>

                    <Route exact path="/main"  element={(
                    <PrivateRoute>
                        <Principal />
                    </PrivateRoute>
                )}/>         
               
                </Routes>  
            </Router>
    )
}

export default AppRouter