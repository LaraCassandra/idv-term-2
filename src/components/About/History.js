import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    listStyle: "none",
    border: "2px solid red",
    backgroundColor: "#232323",
    width: "328px",
    height: "100px",
    margin: "0 30px 30px 0px",
    paddingTop: "15px",
    color: "red",
    float: "left",
  },
});

export const History = () => {
  const classes = useStyles();

  //Create variable to store the API data
  const [history, setHistory] = useState(0);

  //Call API and set data to the variable
  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/history")
      .then((response) => response.json())
      .then((data) => {
        setHistory(parseInt(data.length));
      })
      //Send an error if the API call fails
      .catch((err) => {
        console.log(`Fetch failed: ${err}`);
      });
  }, []);

  //Use the variable to display API data
  return (
    <Fragment>
      <div className={classes.item}>
        <Typography variant="h6">Total Historical Events:</Typography>
        <Typography variant="h4">{history}</Typography>
      </div>
    </Fragment>
  );
};

export default History;
