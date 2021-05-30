import { Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles, Typography } from '@material-ui/core'
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons'
import React from 'react'
import { useHistory, useLocation } from 'react-router'

const drawerWidth=240
const useStyles=makeStyles((theme)=>{
    return{
        page:{
            background:'whitesmoke',
            width:'100%',
            padding:theme.spacing(3)
        },
        drawer:{
            width:drawerWidth
        },
        drawerPaper:{
            width:drawerWidth
        },
        root:{
            display:'flex'
        },
        active:{
            background:'peachpuff'
        },
        title:{
            padding:theme.spacing(2)
        }
    }
 
})
export default function Layout({children}){
    const classes=useStyles()
    const history=useHistory()
    const location=useLocation()

    const menuItems=[
        {
            text:'My Notes',
            icon:<SubjectOutlined color="secondary"/>,
            path:'/'
        },
        {
            text:'Add Note',
            icon:<AddCircleOutlineOutlined color="secondary"/>,
            path:'/create'
        }
    ]

    return(
      <div className={classes.root}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper:classes.drawerPaper}}
          >
              <div>
                  <Typography variant="h5" className={classes.title}>
                       K-Notes
                  </Typography>
              </div>
             <List>
                 {menuItems.map(item=>(
                   <ListItem
                     button
                     key={item.text}
                     onClick={()=>history.push(item.path)}
                     className={location.pathname == item.path ? classes.active : null}
                   >
                       <ListItemIcon>{item.icon}</ListItemIcon>
                       <ListItemText primary={item.text}/>
                   </ListItem>
                 ))}
             </List>

          </Drawer>
            <div className={classes.page}>
                {children}
            </div>
      </div>
    )
}