
import PropTypes from "prop-types";
const PlayerSelected = ({singlePlayer, handleDeletePlayer}) => {
    const {player_name,country,player_img,player_id,role,player_price} = singlePlayer;
    console.log(player_name,country);
    return (
        <div>
            <div className="flex justify-between p-3 border mt-3 items-center">
                <div className="flex gap-10">
                    <img className="w-[150px]" src={player_img} alt="" />
                    <div>
                        <h1 className="text-3xl font-bold">{player_name}</h1>
                        <p>Player Role: {role}</p>
                        <p>Bidding Price: {player_price}</p>
                    </div>
                </div>
                <div>
                    <button onClick={()=>handleDeletePlayer(player_id)}><i className="p-3 rounded-full border bg-lime-300 text-black fa-solid fa-trash"></i></button>
                </div>
            </div>
        </div>
    );
};

PlayerSelected.propTypes = {
    singlePlayer: PropTypes.object,
    handleDeletePlayer: PropTypes.func
}
export default PlayerSelected;