import React, { Fragment } from 'react'
import { makeStyles, Typography, Divider } from '@material-ui/core';
import TeamsChart from './TeamsChart'
import TeamButton from './TeamsButton'
import { TeamPlayers } from "./TeamPlayers";
import Heroes from "./Heroes"


const useStyles = makeStyles({
    mainArea: {
        width: "auto",
        height: "3300px",
        backgroundImage: "linear-gradient(#181818, black)",
    },
    content1: {
        width: "80%",
        marginLeft: "15%",
        color: "white",
        padding: "20px",
        float: "left"
    },
    content2: {
        width: "80%",
        marginLeft: "15%",
        color: "white",
        padding: "20px",
        float: "left"
    },
    title: {
        textAlign: "left",
        fontSize: "27px",
        marginLeft: "60px",
        marginTop: "20px",
        textTransform: "uppercase"
    },
    subtitle: {
        textAlign: "left",
        fontSize: "25px",
        marginLeft: "60px",
        marginTop: "20px",
        textTransform: "uppercase"
    },
    graph: {
        width: "45%",
        float: "left",
        marginLeft: "20px",
        marginTop: "50px"
    },
    TeamButtons: {
        marginTop: "50px",
    },
    herolist: {
        marginLeft: "20px",
        marginTop: "50px"
    },
    dividerColour: {
        height: "1px",
        backgroundColor: "#484848",
        marginLeft: "50px",
        marginTop: "20px",
    },
});

export const Main = props => {
    const classes = useStyles();

    return(

        <Fragment>

        <div className={classes.mainArea}>

            

            {/* CONTENT 1 - PROFESSIONAL TEAMS */}
            <div className={classes.content1}>
            <Divider></Divider>
                
                <Typography className={classes.title}>Professional Teams</Typography>
                <Divider s={0} variant="middle" orientation="horizontal" classes={{root: classes.dividerColour}}></Divider>

                <div className={classes.TeamButtons}>
                    <TeamButton />
                </div>

                <Typography className={classes.subtitle}>Players</Typography>

                <div className={classes.graph}>
                    <TeamPlayers />
                </div>

                <div className={classes.graph}>
                    <TeamsChart />
                </div>

            </div>



            {/* CONTENT 2 - HEROES */}
            <div className={classes.content2}>

                <Typography className={classes.title}>HEROES</Typography>
                <Divider s={0} variant="middle" orientation="horizontal" classes={{root: classes.dividerColour}}></Divider>

                <div className={classes.herolist}>
                    <Heroes />
                </div>

            </div>

        </div>

        </Fragment>

    );
};