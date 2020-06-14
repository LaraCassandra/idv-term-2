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

  const [history, setHistory] = useState(0);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/history")
      .then((response) => response.json())
      .then((data) => {
        setHistory(parseInt(data.length));
      })
      .catch((err) => {
        console.log(`Fetch failed: ${err}`);
      });
  }, []);

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
