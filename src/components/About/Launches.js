import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    listStyle: "none",
    border: "2px solid #07a3b2",
    backgroundColor: "#232323",
    width: "328px",
    height: "100px",
    margin: "0 30px 30px 40px",
    paddingTop: "15px",
    color: "#07a3b2",
    float: "left",
  },
});

export const Launches = () => {
  const classes = useStyles();

  const [launches, setLaunches] = useState(0);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/launches")
      .then((response) => response.json())
      .then((data) => {
        setLaunches(parseInt(data.length));
      })
      .catch((err) => {
        console.log(`Fetch failed: ${err}`);
      });
  }, []);

  return (
    <Fragment>
      <div className={classes.item}>
        <Typography variant="h6">Total Launches:</Typography>
        <Typography variant="h4">{launches}</Typography>
      </div>
    </Fragment>
  );
};

export default Launches;
