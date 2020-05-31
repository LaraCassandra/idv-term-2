import React, { Fragment, useEffect, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    item: {
        listStyle: "none",
        border: "solid",
        borderWidth: "1px",
        borderColor: "#BF2200",
        width: "500px",
        height: "18px",
        padding: "20px",
        marginBottom: "10px",
        color: "white",
        textAlign: "left"
    }
});

export const TeamPlayers = () => {
    const classes = useStyles();

    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch("https://api.opendota.com/api/teams/1838315/players")
        .then(repsonse => repsonse.json())
        .then(data => {
            setTeams(data);
        })
        .catch(err => {
            console.log(`Fetch failed: ${err}`);
        })
    }, [])

    return (
        <Fragment>

            <ul>
               {teams.length
               ? teams.map(s => {
                   return (
                       <li key={s.id} className={classes.item}>
                           <Typography>{s.name}</Typography>
                       </li>

                   );
               })
            : "no teams available"} 
            </ul>

        </Fragment>
    )
}

export default TeamPlayers