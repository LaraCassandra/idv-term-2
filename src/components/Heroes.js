import React, { Fragment, useEffect, useState } from 'react'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    item: {
        listStyle: "none",
        backgroundColor: "#202020",
        width: "300px",
        height: "20px",
        padding: "20px",
        marginBottom: "10px",
        marginRight: "20px",
        color: "white",
        textAlign: "center",
        float: "left",
    },
});

export const Heroes = () => {
    const classes = useStyles();

    const [heroes, setHeroes] = useState([])

    useEffect(() => {
        fetch("https://api.opendota.com/api/heroes")
        .then(repsonse => repsonse.json())
        .then(data => {
            setHeroes(data);
        })
        .catch(err => {
            console.log(`Fetch failed: ${err}`);
        })
    }, [])

    return (
        <Fragment>

            <div>
                <form>
                </form>
            </div>

            <ul>
               {heroes.length
               ? heroes.map(s => {
                   return (
                       <li key={s.id} className={classes.item}>
                           <Typography>{s.localized_name}</Typography>
                       </li>

                   );
               })
            : "No heroes available"} 
            </ul>

        </Fragment>
    )
}

export default Heroes