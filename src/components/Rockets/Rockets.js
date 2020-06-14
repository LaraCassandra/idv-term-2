import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    listStyle: "none",
    backgroundColor: "#232323",
    borderLeft: "5px solid red",
    width: "328px",
    height: "80px",
    margin: "0 30px 30px 0",
    paddingTop: "15px",
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
                  <Typography variant="subtitle2">
                    First Flight:{s.first_flight}
                  </Typography>
                </li>
              );
            })
          : "no rockets available"}
      </ul>
    </Fragment>
  );
};

export default Rockets;
