import React, { useState, useEffect } from 'react';

export const Players = () => {
    const [players, setPlayers] = useState([]);
    return (
        <div>
            <h1>Players</h1>
            {players.length > 0
            ? "There are some players"
            : "There are no players available"}
        </div>
    )
}