import React ,{useState}from 'react'
import "./Todo.css"
import {Button ,FormControl,InputLabel,Input} from '@material-ui/core'
import TodoItems from './TodoItems'
import moment from 'moment'


function Todo() {
    const[input ,setInput] = useState("");
    const[items,setItems]=useState([
        
        {
           
            text:"todolist",
            date:moment().format("lll"),
            timestamp:Date.now().toLocaleString(),
        }
    ]);
    const date =new Date().toLocaleString();

    const addTodo = () => {
        setItems([...items,
            {
                
                text:input,
                date:moment().format("lll"),
                timestamp: Date.now(),
              },
        
        ]);
        setInput("");
    }

    const deleteLists = (id) => {
      
        setItems(items.filter((arr,i)=>{
            return i!==id;
         }))

    }

   

  
    return (
        <div className="Todo">
        {date}
        <h1> Todo App </h1>
        
   

     <form className="form">
 <FormControl>
        <InputLabel >WRITE TODO LISTS</InputLabel>
        <Input value={input} onChange={ e=>setInput(e.target.value)} />
     
 </FormControl>
 
 <Button disabled={!input} variant ="contained" color="primary" type ="submit"  onClick={addTodo}>
 Add Todo
</Button>
     
  </form> 

     <ul>
     {items.map((item,i)=>
        <TodoItems
        key={i}
        id={i}
        text={item.text}
        date={item.date}
        onDelete={deleteLists}
        
        />
     )}
        
     
     </ul>
        
    </div>
)
}

export default Todo
