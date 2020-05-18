import React from 'react'
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    mainArea: {
        width: "auto",
        height: "100vh",
        backgroundImage: "linear-gradient(#181818, black)",
    },
    partTwo: {

    },
});

export const Main = props => {
    const classes = useStyles();

    return(

        <div>

            <div className={classes.mainArea}></div>

        </div>

    );
};