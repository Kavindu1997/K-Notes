import { Drawer, makeStyles, Typography } from '@material-ui/core'
import React from 'react'

const drawerWidth=240
const useStyles=makeStyles({
    page:{
        background:'whitesmoke',
        width:'100%'
    },
    drawer:{
        width:drawerWidth
    },
    drawerPaper:{
        width:drawerWidth
    },
    root:{
        display:'flex'
    }
})
export default function Layout({children}){
    const classes=useStyles()

    return(
      <div className={classes.root}>
          <Drawer
            className={classes.drawer}
            variant="permanent"
            anchor="left"
            classes={{paper:classes.drawerPaper}}
          >
              <div>
                  <Typography variant="h5">
                       K-Notes
                  </Typography>
              </div>
          </Drawer>
            <div className={classes.page}>
                {children}
            </div>
      </div>
    )
}