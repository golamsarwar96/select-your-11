import { ToastContainer } from 'react-toastify';
import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Player from "./Player";
const Players = ({handleSelectedPlayer}) => {
    const [players, setPlayers] = useState([]);

    useEffect(()=>{
        fetch('players.json')
        .then(res => res.json())
        .then(data => setPlayers(data));
    },[])

    // grid md:grid-cols-3 grid-cols-1 gap-16
    //{`${isActive.available?"grid md:grid-cols-3 grid-cols-1 gap-16" : "hidden"}`}
    
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-16">
            {
                players.map((player,idx) => <Player handleSelectedPlayer={handleSelectedPlayer} key={idx} player={player}></Player>)
            }
            <ToastContainer
                position="top-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </div>
    );
};

Players.propTypes = {
    handleSelectedPlayer: PropTypes.func
}

export default Players;