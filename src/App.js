import React, { useState, useEffect } from 'react'
import './App.css'
import Login from './Login'
import Home from './Home'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

function App() {
  
     const[isLoggedIn,setIsLoggedIn]= useState(false);
     const[isToken,setIsToken] =useState(false);

 useEffect(() => {
    if(localStorage.getItem("isToken") ){
      setIsToken(true)
    }
  
}, [])
  return (
    <Router>
        <Switch>
  
            <Route 
                exact 
                path="/"  
                render ={
                  ()=> 
                    isLoggedIn && isToken ? 
                      <Redirect to ="/todo" /> : 
                        <Login setIsLoggedIn={setIsLoggedIn}
                            setIsToken={setIsToken}
                            />}/> 

              <Route
                  exact
                  path="/todo"
                  render={
                    () =>
                      isLoggedIn && isToken ?
                        <Home setIsLoggedIn={setIsLoggedIn}
                          setIsToken={setIsToken}
                          /> :
                             <Redirect to="/" />
                            }
                          />
        </Switch>
    </Router>
  );
}

export default App;
