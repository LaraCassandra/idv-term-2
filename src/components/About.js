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

export const About = () => {
  const classes = useStyles();

  const [rocket, setRockets] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v3/info")
      .then((response) => response.json())
      .then((data) => {
        setRockets(data);
        console.log(setRockets);
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
                  <Typography>{s.founder}</Typography>
                </li>
              );
            })
          : "no information available"}
      </ul>
    </Fragment>
  );
};

export default About;
