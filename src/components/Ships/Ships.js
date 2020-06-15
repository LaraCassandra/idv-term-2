import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    listStyle: "none",
    backgroundColor: "#232323",
    width: "292px",
    height: "55px",
    padding: "20px",
    marginBottom: "30px",
    marginRight: "30px",
    color: "white",
    float: "left",
  },
  images: {
    border: "3px solid orange",
    height: "50px",
    width: "50px",
    borderRadius: "100px",
    backgroundPosition: "center",
    backgroundSize: "contain",
    margin: "0px 0 30px 10px",
    float: "left",
    "&hover": {
      height: "80px",
      width: "80px",
    },
  },
});

export const Ships = () => {
  const classes = useStyles();

  //Create constants to set API data to
  const [ship, setShip] = useState([]);

  //Call API and set data to setShip array
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/ships")
      .then((response) => response.json())
      .then((data) => {
        setShip(data);
      })
      //Send an error if the API call fails
      .catch((err) => {
        console.log(`Fetch failed: ${err}`);
      });
  }, []);

  return (
    <Fragment>
      <ul>
        {ship.length
          ? ship.map((s) => {
              return (
                <li key={s.id} className={classes.item}>
                  <img alt="" src={s.image} className={classes.images} />
                  <Typography variant="subtitle1">{s.ship_name}</Typography>
                  <Typography variant="subtitle2">
                    Ship type: {s.ship_type}
                  </Typography>
                </li>
              );
            })
          : "no ships available"}
      </ul>
    </Fragment>
  );
};

export default Ships;
