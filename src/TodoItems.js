import React ,{useState} from 'react'
import { List , ListItem ,ListItemText, IconButton ,Checkbox} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper:{
    marginTop:'4rem',
    backgroundColor:'white',
    width:'80%',
    marginLeft:'3rem',
    borderRadius:'50px', 
  },
}));

function Todos({index, date, text, onDelete,data, items, setCompletedItems, setItems ,completedItems,isCompleted}) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
console.log("TODOS ko data",data);

  const updateItems = (index) => {
    // console.log("updated list ",data);
  data.isCompleted=true
   console.log(index)
   const completed = setCompletedItems([...completedItems,data]);
    
   console.log(completedItems)
   
  };
 
 
 return (
        <>
        <List className={classes.paper}>
        <ListItem className={classes.ListItemStyles}>
       
            <Checkbox
            checked={checked}
            name="checked"
            onClick={()=>updateItems(index)}
            
            
          />
           <ListItemText primary={text} secondary={date}/>
      {(items.isCompleted === true) && <p>completed</p>}
      
          <IconButton onClick={() =>{onDelete(index)}}>
          <DeleteIcon />
          </IconButton>
          
        
        </ListItem>
        
        </List>
        
        </>
    )
}

export default Todos
