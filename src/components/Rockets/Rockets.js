import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    listStyle: "none",
    border: "1px solid #014871",
    width: "290px",
    height: "40px",
    padding: "20px",
    marginBottom: "50px",
    marginRight: "30px",
    color: "white",
    float: "left",
  },
});

export const Rockets = () => {
  const classes = useStyles();

  const [rocket, setRockets] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/rockets")
      .then((response) => response.json())
      .then((data) => {
        setRockets(data);
      })
      .catch((err) => {
        console.log(`Fetch failed: ${err}`);
      });
  }, []);

  return (
    <Fragment>
      <ul>
        {rocket.length
          ? rocket.map((s) => {
              return (
                <li key={s.id} className={classes.item}>
                  <Typography variant="h6">{s.rocket_name}</Typography>
                </li>
              );
            })
          : "no rockets available"}
      </ul>
    </Fragment>
  );
};

export default Rockets;
