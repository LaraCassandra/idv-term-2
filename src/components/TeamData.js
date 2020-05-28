import React, { Fragment, useEffect, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    item: {
        listStyle: "none",
        backgroundColor: "#202020",
        width: "600px",
        height: "20px",
        textAlign: "left",
        padding: "20px",
        marginBottom: "10px"
    }
});

export const TeamData = () => {
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

    const handleOnChange = (e) => {

    }

    return (
        <Fragment>
            {/*
            <form>
                <select onChange={handleOnChange}>
                    <label>Sort Rating</label>
                    <option value="Ascending">Ascending</option>
                    <option value="Descending">Desecending</option>
                </select>
            </form>
            */}

            <ul>
               {teams.length
               ? teams.map(s => {
                   return (
                       <li key={s.id} className={classes.item}>
                           <Typography>success rate: {s.success_rate_pct}</Typography>
                       </li>
                   );
               })
            : "no ships available"} 
            </ul>

        {/* <pre>{JSON.stringify(teams, null, 2)}</pre> */}

        </Fragment>
    )
}

export default TeamData