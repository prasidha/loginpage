import React ,{useState}from 'react'
import "./Todo.css"
import {Button, TextField} from '@material-ui/core'
import TodoItems from './TodoItems'
import moment from 'moment'
import CompletedTodo from './CompletedTodo'

function Todo() {
    const[input ,setInput] = useState("");
    const[items,setItems]=useState([
        
        {
            index:0,
            text:"todolist1",
            date:moment().format("lll"),
            isCompleted: false,
            timestamp:Date.now().toLocaleString(),
        }
    ]);

    const[completedItems,setCompletedItems]=useState([
        {
            index:0,
            text:"completedtodolist1",
            date:moment().format("lll"),
            isCompleted: true,
            timestamp:Date.now().toLocaleString(),
        }
    ])
    const date =new Date().toLocaleString()
    const addTodo = () => {
        setItems([...items,
            {    
                index:0, 
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

    const completedDeleteLists = (id) => {
        setCompletedItems(completedItems.filter((array,i) => {
            return i!==id;
        }))
    }

   
    return (
        <div className="Todo">
           <h1> Todo App </h1>
       <form className="form">
            <TextField
            placeholder="your todo lists"
            className="textfeild"
            margin="normal"
            fullWidth
            value={input} 
            onChange={ e=>setInput(e.target.value)}      
        />
        <Button disabled={!input} variant ="contained" color="primary" type ="submit"  onClick={addTodo} fullWidth>
        Add Todo
        </Button>   
        </form> 
     <ul>
     {items.map((item,i)=>
        !item.isCompleted && (
           
        <TodoItems
        data={item}
        key={i}
        index={i}
        text={item.text}
        date={item.date}
        onDelete={completedDeleteLists} 
        setItems={setItems}
        items={items}
        completedItems={completedItems}
        setCompletedItems={setCompletedItems}  
         
        />)
     )}

     
     </ul>


     <ul>
     {completedItems.map((item,i)=>
       item.isCompleted && (
        <CompletedTodo
        key={i}
        id={i}
        text={item.text}
        date={item.date}
        onDelete={deleteLists} 
        setItems={setItems}
        items={items}
        completedItems={completedItems}
        setCompletedItems={setCompletedItems}  
         
        />)
     )}

     
     </ul>


    
    </div>
)
}

export default Todo
