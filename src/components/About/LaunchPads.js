import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    listStyle: "none",
    border: "2px solid orange",
    backgroundColor: "#232323",
    width: "328px",
    height: "100px",
    margin: "0 30px 40px 0px",
    paddingTop: "15px",
    color: "orange",
    float: "left",
    "&hover": {
      backgroundColor: "#232323",
    },
  },
});

export const LaunchPads = () => {
  const classes = useStyles();

  //Create variable to store API data
  const [launchPads, setLaunchPads] = useState(0);

  //Call API and set data to variable
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launchpads")
      .then((response) => response.json())
      .then((data) => {
        setLaunchPads(parseInt(data.length));
      })
      //Send an error if API call fails
      .catch((err) => {
        console.log(`Fetch failed: ${err}`);
      });
  }, []);

  //Use variable to display API data
  return (
    <Fragment>
      <div className={classes.item}>
        <Typography variant="h6">Total Launch Pads:</Typography>
        <Typography variant="h4">{launchPads}</Typography>
      </div>
    </Fragment>
  );
};

export default LaunchPads;
