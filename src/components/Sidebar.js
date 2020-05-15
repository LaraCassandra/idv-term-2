import React from 'react'
import "../style.css";
import { makeStyles, Drawer, Button } from '@material-ui/core';

const useStyles = makeStyles({
    drawerStyle: {
        background: "black",
    },
    drawerButton: {
        width: "200px",
        textDecoration: "none",
        color: "White",
        backgroundColor: "#292929",
        borderRadius: "0"
    }
});


export const Sidebar = props => {
    const classes = useStyles();

    return (
        <div>

            <Drawer open="true" anchor="left" variant="permanent" className={classes.drawerStyle} >
                
                <Button className={classes.drawerButton}>Dashboard</Button>

                <Button className={classes.drawerButton}>Profile</Button>

                <Button className={classes.drawerButton}>Help</Button>

                <Button className={classes.drawerButton}>Settings</Button>
            
            </Drawer>

        </div>
    );
};