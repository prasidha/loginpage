import {IconButton } from '@material-ui/core'
import Todo from './Todo'
import React,{useState} from 'react'
import './Home.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';


function Home(props) {
    
    return (
        <div className="home">

        <IconButton  onClick={() =>{
            props.setIsToken(false);
            props.setIsLoggedIn(false);
            localStorage.removeItem('isToken')
        }}>

        <ExitToAppIcon />logout
        </IconButton>

        
        
        <div className="todo__part">
              
                 <Todo />

                
        </div>

         
            
        </div>
    )
}

export default Home
