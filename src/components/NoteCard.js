import React  from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import { IconButton, Typography } from '@material-ui/core';
import { DeleteOutlined } from '@material-ui/icons';

export default function NoteCard({mynote,myhandleDelete}){
    return(
        <div>
            <Card elevation={1}>
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