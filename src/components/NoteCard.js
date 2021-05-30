import React  from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { Avatar, IconButton, makeStyles, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';
import { blue, brown, orange, pink, purple, red, teal } from '@material-ui/core/colors';

const useStyles=makeStyles({
  test:{
    border:(mynote)=>{
      if(mynote.category=='work'){
        return '1px solid brown'
      }else if(mynote.category=='academic'){
        return '1px solid lightskyblue'
      }else if(mynote.category=='reminders'){
        return '1px solid crimson'
      }else if(mynote.category=='todos'){
        return '1px solid teal'
      }
    }
  },
  avatar:{
    backgroundColor:(mynote)=>{
      if(mynote.category=='work'){
        return brown[700]
      }else if(mynote.category=='academic'){
        return blue[500]
      }else if(mynote.category=='reminders'){
        return pink[700]
      }else if(mynote.category=='todos'){
        return teal[500]
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
                  avatar={
                    <Avatar className={classes.avatar}>{mynote.category[0].toUpperCase()}</Avatar>
                  }
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
