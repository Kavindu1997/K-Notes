import React  from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

const useStyles=makeStyles({
  test:{
    border:(mynote)=>{
      if(mynote.category=='work'){
        return '1px solid black'
      }else if(mynote.category=='academic'){
        return '1px solid lightskyblue'
      }else if(mynote.category=='reminders'){
        return '1px solid darkorange'
      }else if(mynote.category=='todos'){
        return '1px solid teal'
      }
    }
  }
})

export default function NoteCard({mynote,myhandleDelete}){
    const classes=useStyles(mynote)

    return(
        <div>
            <Card elevation={1} className={classes.test}>
                <CardHeader
                  action={
                    <IconButton onClick={()=>myhandleDelete(mynote.id)}>
                      <DeleteOutlined />
                    </IconButton>
                  }
                  title={mynote.title}
                  subheader={mynote.category}
                />
                <CardContent>
                    <Typography variant="body2" color="textSecondary">
                        {mynote.details}
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}
