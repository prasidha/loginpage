import React ,{useState, useEffect} from 'react'
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

function CompletedTodo({index,text,date,CompletedItems,setCompletedItems,onDelete}) {
  const classes = useStyles();


 
  
 return (
        <>
        <List className={classes.paper}>
        <ListItem className={classes.ListItemStyles}>
       
          
           <ListItemText primary={text} secondary={date}/>
      
      
          <IconButton >
          <DeleteIcon onClick={() =>{onDelete(index)}}/>
          </IconButton>
          
        
        </ListItem>
        
        </List>
        
        </>
    )
}

export default CompletedTodo

