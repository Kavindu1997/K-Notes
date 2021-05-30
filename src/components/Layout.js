import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyles=makeStyles({
    page:{
        background:'whitesmoke',
        width:'100%'
    }
})
export default function Layout({children}){
    const classes=useStyles()

    return(
      <div>
            <div className={classes.page}>
                {children}
            </div>
      </div>
    )
}