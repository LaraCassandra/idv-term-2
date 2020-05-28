import React, { Fragment } from 'react'
import { makeStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    item: {
        listStyle: "none",
        backgroundColor: "#202020",
        width: "600px",
        height: "20px",
        textAlign: "left",
        padding: "20px",
        fontSize: "20px"
    }
});

function ListItem () {
    const classes = useStyles();

    return(

        <Fragment>

            <div>

                <ul>
                    <li className={classes.item}>
                        <Typography variant="subtitle1">
                        </Typography>
                    </li>
                </ul>

            </div>

        </Fragment>

    );
};

export default ListItem