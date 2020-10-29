import { Button } from '@material-ui/core'
import Todo from './Todo'
import React ,{useState}from 'react'
import './Home.css'
import { useHistory } from 'react-router-dom'



function Home() {
   
    const history = useHistory()

    return (
        <div className="home">

        <Button color="primary" variant="contained" onClick={()=>history.push("/")}> logout</Button>
        
        <div className="todo__part">
              
                 <Todo/>
        </div>

         
            
        </div>
    )
}

export default Home
