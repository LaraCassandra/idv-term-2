import React, { Fragment } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import Chart from './Chart';

const useStyles = makeStyles({
    mainArea: {
        width: "auto",
        height: "100vh",
        backgroundImage: "linear-gradient(#181818, black)",
    },
    content1: {
        width: "80%",
        marginLeft: "15%",
        backgroundColor: "red",
        padding: "0",
    }
});

export const Main = props => {
    const classes = useStyles();

    return(

        <Fragment>

        <div className={classes.mainArea}>

            <div className={classes.content1}>
                <Typography variant="h4">Professional Teams</Typography>
            </div>

            <Chart />

        </div>

        </Fragment>

    );
};