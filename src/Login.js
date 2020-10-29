import React, { useState ,useEffect} from 'react'
import './Login.css'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'

function Login(props) {
    const [username,setUsername]= useState();
    const[password,setPassword] =useState();
   
    

    const  logInForm =(e) => {
      e.preventDefault();
      if(username==="admin" && password==="admin"){
        props.setIsLoggedIn(true)
        localStorage.setItem("isToken","logged in")
        
       
        
        

         }
      setUsername("");
      setPassword("");
      console.log(isAuth)
     
          
    }
    // useEffect(() => {
    //   if(localStorage.setItem("token") === "logged in"){
    //    props.history("/todo")
    //   }
    // })
    
    return (
        <div className="login__page">

         <div className="login__container">
         

         <h1>login page</h1>
            
           <form onSubmit={e=>logInForm(e)}>
             <input type="text" placeholder="username" value={username} onChange={e=>{setUsername(e.target.value)}} className="input"/>
             <input type="password" placeholder="password" value={password} onChange={e=>{setPassword(e.target.value)}} className="input"/>
   
             <button className="button" type="submit">Sign in </button>

   
             
           </form>
           </div> 
         
         
         </div>      
        
    )
}

export default Login