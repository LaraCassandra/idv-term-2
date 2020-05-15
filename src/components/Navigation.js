import React from 'react'
import "../style.css";
import { AppBar, makeStyles, Toolbar, Avatar, InputBase } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
    grow: {
        flexGrow: 1
    },
});

export const Navigation = () => {
    const classes = useStyles();

    return (
        <div className={classes.appbarStyle}>
            
            <AppBar position="static">
                <Toolbar>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                    <SearchIcon />
                    </div>
                    <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </div>
                    <Avatar ></Avatar>
                </Toolbar>
            </AppBar>

        </div>
    );
};