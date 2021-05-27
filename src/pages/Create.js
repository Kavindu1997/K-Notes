import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import KeyboardArrowRightOutlinedIcon from '@material-ui/icons/KeyboardArrowRightOutlined';
import {makeStyles, FormControl,FormControlLabel,FormHelperText, FormLabel, TextField, RadioGroup,Radio} from '@material-ui/core';


const useStyles=makeStyles({
  btn:{
    marginTop:10
    // backgroundColor:'violet',
    // '&:hover':{
    //   backgroundColor:'green'
    // }
  },
  field:{
    marginTop:20,
    marginBottom:20,
    display:'block'
  }

})
export default function Create() {
  const classes=useStyles()
  const [title,setTitle]=useState('')
  const [details,setDetails]=useState('')
  const [titleError,setTitleError]=useState(false)
  const [detailsError,setDetailsError]=useState(false)
  const [category,setCategory]=useState('todos')

  const handleSubmit=(e)=>{
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);

    if(title==""){
      setTitleError(true)
    }

    if(details==""){
      setDetailsError(true)
    }

    if(title && details){
      console.log(title,details,category);
    }
  }
  return (
    <Container>
      <Typography
       variant="h6"
       component="h2"
       color="textSecondary"
       gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
         <TextField
           onChange={(e)=>setTitle(e.target.value)}
           className={classes.field}
           id="note-title"
           label="Note Title"
           color="primary"
           variant="outlined"
           fullWidth
           required
           error={titleError}
         />
          <TextField
           onChange={(e)=>setDetails(e.target.value)}
           id="note-details"
           label="Details"
           color="primary"
           variant="outlined"
           fullWidth
           required
           multiline
           rows={4}
           error={detailsError}
         />

          <FormControl className={classes.field}>
              <FormLabel>Note Category</FormLabel>
                <RadioGroup value={category} onChange={(e)=>setCategory(e.target.value)}>
                    <FormControlLabel value="academic" control={<Radio/>} label="Academic" />
                    <FormControlLabel value="todos" control={<Radio/>} label="Todos" />
                    <FormControlLabel value="reminders" control={<Radio/>} label="Reminders" />
                    <FormControlLabel value="work" control={<Radio/>} label="Work" />
                </RadioGroup>
          </FormControl>  

          <Button 
            className={classes.btn}
           // onClick={()=>console.log("You clicked Me!")}
            type="submit"
            variant="contained"
            color="primary"
            disableElevation
            endIcon={<KeyboardArrowRightOutlinedIcon/>}
          >
            Submit
          </Button>
      </form>

   
    </Container>
  )
}
