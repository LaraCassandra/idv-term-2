import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    listStyle: "none",
    border: "2px solid purple",
    backgroundColor: "#232323",
    width: "328px",
    height: "100px",
    margin: "0 30px 30px 0px",
    paddingTop: "15px",
    color: "purple",
    float: "left",
  },
});

export const Missions = () => {
  const classes = useStyles();

  //Create variable to store API data
  const [missions, setMissions] = useState(0);

  //Call API and set data to variable
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/missions")
      .then((response) => response.json())
      .then((data) => {
        setMissions(parseInt(data.length));
      })
      //Send an error if the API call fails
      .catch((err) => {
        console.log(`Fetch failed: ${err}`);
      });
  }, []);

  //Use variable to display API data
  return (
    <Fragment>
      <div className={classes.item}>
        <Typography variant="h6">Total Missions:</Typography>
        <Typography variant="h4">{missions}</Typography>
      </div>
    </Fragment>
  );
};

export default Missions;
