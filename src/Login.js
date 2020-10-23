import React, { useState } from 'react'

import './Login.css'

function Login() {
    const [username,setUsername]= useState();
    const[password,setPassword] =useState();

    const  formHandle =(e) => {
       e.preventDefault();
       
      alert("welcome to our page ")
      setUsername("");
      setPassword("");
      
          
    }
    return (
        <div className="login__page">

         <div className="login__container">
         

         <h1>login page</h1>
        
           <form onSubmit={formHandle}>
             <input type="text" placeholder="username" value={username} onChange={e=>{setUsername(e.target.value)}} className="input"/>
             <input type="password" placeholder="password" value={password} onChange={e=>{setPassword(e.target.value)}} className="input"/>
   
             <button className="button">Sign in </button>

   
             
           </form>
           </div> 
         
         
         </div>      
        
    )
}

export default Login