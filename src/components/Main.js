import React, { Fragment } from 'react'
import { makeStyles, Typography } from '@material-ui/core';
import Teams from './Teams'
import ListItem from './ListItem'
import TeamData from './TeamData'

const useStyles = makeStyles({
    mainArea: {
        width: "auto",
        height: "100vh",
        backgroundImage: "linear-gradient(#181818, black)",
    },
    content1: {
        width: "80%",
        marginLeft: "15%",
        color: "white",
        padding: "20px",
        float: "left"
    },
    graph: {
        width: "50%",
        float: "right",
    },
    list: {
        marginTop: "50px",
        float: "left"
    }
});

export const Main = props => {
    const classes = useStyles();

    return(

        <Fragment>

        <div className={classes.mainArea}>

            <div className={classes.content1}>
                <Typography variant="h5">Professional Teams</Typography>

            <div className={classes.list}>
                <TeamData />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </div>

            <div className={classes.graph}>
                <Teams />
            </div>

            </div>

        </div>

        </Fragment>

    );
};