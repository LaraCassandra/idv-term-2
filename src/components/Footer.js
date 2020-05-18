import React from 'react'
import { AppBar, makeStyles, Toolbar, Avatar, InputBase, Divider, Grid } from '@material-ui/core';

const useStyles = makeStyles({
    partOne: {

    },
    partTwo: {

    },
});

export const Footer = props => {
    const classes = useStyles();

    return(

        <div>

            <div className={classes.partOne}></div>

            <div className={classes.partTwo}></div>

        </div>

    );
};