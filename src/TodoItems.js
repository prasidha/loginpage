import React ,{useState} from 'react'
import { List , ListItem ,ListItemText, IconButton ,Checkbox} from '@material-ui/core'
import DeleteIcon from '@material-ui/icons/Delete';


import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  ListItemStyles:{
     backgroundColor:'white',
    marginLeft:'-5%',
    borderRadius:'20px'
  },
}));

function Todos({id,date,text,onDelete}) {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);


  };

  
    return (
        <>
       

        <List className={classes.listStyles}>
        <ListItem className={classes.ListItemStyles}>
       
      

        <Checkbox
        checked={checked}
        onChange={handleChange}
        
        inputProps={{ 'aria-label': 'primary checkbox' }}
      />
      <ListItemText 
      primary={text} secondary={date}/>
      
      
          <IconButton onClick={() =>{onDelete(id)}}>
          <DeleteIcon />
          </IconButton>
          
        
        </ListItem>
        
        </List>
        
        </>
    )
}

export default Todos
