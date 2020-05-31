import React, { Fragment, useEffect, useState } from 'react'
import { makeStyles, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles({
    item: {
        listStyle: "none",
        backgroundColor: "#202020",
        width: "300px",
        height: "300px",
        padding: "20px",
        marginBottom: "10px",
        marginRight: "10px",
        float: "left",
        color: "white"
    }
});

export const TeamButton = () => {
    const classes = useStyles();

    const [teams, setTeams] = useState([])

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/rockets")
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
                    <Button>
                       <li key={s.id} className={classes.item}>
                           <Typography>success rate: {s.success_rate_pct}</Typography>
                       </li>
                    </Button>
                   );
               })
            : "no teams available"} 
            </ul>

        {/* <pre>{JSON.stringify(teams, null, 2)}</pre> */}

        </Fragment>
    )
}

export default TeamButton