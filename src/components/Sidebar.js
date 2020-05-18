import React from 'react'
import "../style.css";
import { makeStyles, Drawer, Button } from '@material-ui/core';
import EqualizerIcon from '@material-ui/icons/Equalizer';
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles({
    drawerStyle: {
        background: "black",
        backgroundColor: "black",
    },
    drawerButton: {
        width: "190px",
        height: "60px;",
        textDecoration: "none",
        color: "White",
        backgroundColor: "#292929",
        borderRadius: "0",
        margin: "10px 0",
        alignItems: "left",
    },
    extraSpace: {
        backgroundColor: "black",
        width: "190px",
        height: "100%",
    },
    dtLogo: {
        width: "190px",
        height: "190px",
        backgroundSize: "contain",
        backgroundPosition: "center",
    },
});


export const Sidebar = props => {
    const classes = useStyles();

    return (
        <div>

            <Drawer open="true" anchor="left" variant="permanent" className={classes.drawerStyle} >

                <div className={classes.extraSpace}>

                <div className={classes.dtLogo}>
                    <img alt="logo"/>
                </div>
                
                    <Button className={classes.drawerButton}>
                    <EqualizerIcon></EqualizerIcon>
                        Dashboard
                    </Button>

                    <Button className={classes.drawerButton}>
                    <PersonIcon></PersonIcon>
                        Profile
                    </Button>

                    <Button className={classes.drawerButton}>
                    <HelpIcon></HelpIcon>
                        Help
                    </Button>

                    <Button className={classes.drawerButton}>
                    <SettingsIcon></SettingsIcon>
                        Settings
                    </Button>

                </div>
            
            </Drawer>

        </div>
    );
};