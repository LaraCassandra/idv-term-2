import React from 'react'
import "../style.css";
import { makeStyles, Drawer, Button } from '@material-ui/core';


const useStyles = makeStyles({
    drawerStyle: {
        background: "black",
        backgroundColor: "black",
    },
    drawerButton: {
        width: "190px",
        textDecoration: "none",
        color: "White",
        backgroundColor: "#292929",
        borderRadius: "0",
        margin: "10px 0"
    },
    extraSpace: {
        backgroundColor: "black",
        width: "190px",
        height: "100%",
    },
    dtLogo: {
        width: "190px",
        height: "190px",
    },
});


export const Sidebar = props => {
    const classes = useStyles();

    return (
        <div>

            <Drawer open="true" anchor="left" variant="permanent" className={classes.drawerStyle} >
                
                <div className={classes.extraSpace}>

                    <div className={classes.dtLogo}>
                        <img src="/img/LOGO.png" alt="Dota Insight Logo"></img>
                    </div>
                
                    <Button className={classes.drawerButton}>Dashboard</Button>

                    <Button className={classes.drawerButton}>Profile</Button>

                    <Button className={classes.drawerButton}>Help</Button>

                    <Button className={classes.drawerButton}>Settings</Button>

                </div>
            
            </Drawer>

        </div>
    );
};