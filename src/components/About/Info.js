import React, { Fragment, useEffect, useState } from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  item: {
    listStyle: "none",
    backgroundColor: "#232323",
    width: "1320px",
    height: "100px",
    margin: "0 30px 40px 40px",
    padding: "50px",
    color: "white",
    float: "left",
  },
  title: {
    textAlign: "left",
    fontSize: "27px",
    marginBottom: "20px",
  },
  description: {
    textAlign: "left",
    fontSize: "22px",
    marginBottom: "20px",
  },
});

export const Info = () => {
  const classes = useStyles();

  const [founder, setFounder] = useState(0);
  const [description, setDescription] = useState(0);
  const [company, setCompany] = useState(0);
  const [founded, setFounded] = useState(0);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/info")
      .then((response) => response.json())
      .then((data) => {
        setFounder(data.founder);
        setFounded(data.founded);
        setCompany(data.name);
        setDescription(data.summary);
      })
      .catch((err) => {
        console.log(`Fetch failed: ${err}`);
      });
  }, []);

  return (
    <Fragment>
      <div className={classes.item}>
        <Typography className={classes.title} variant="h4">
          {founder} founded {company} in {founded}
        </Typography>
        <Typography className={classes.description}>{description}</Typography>
      </div>
    </Fragment>
  );
};

export default Info;
