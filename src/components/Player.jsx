import PropTypes from "prop-types";
const Player = ({player,handleSelectedPlayer}) => {
    const {player_name,player_img,country,role,batter_type,bowler_type,player_price} = player;
    return (
        <div>
            <div className="card card-compact bg-base-100 w-96 shadow-xl p-5 border">
                <figure>
                    <img className="w-96 h-64 object-cover"
                    src={player_img}
                    alt="Shoes" />
                </figure>
                <h1 className="mt-3 text-xl p-2"><i className="fa-solid fa-user"></i> {player_name}</h1>
                <div className="flex justify-between items-center mb-4">
                    <p><i className="text-gray-300 fa-solid fa-flag p-2"></i> {country}</p>
                    <button className="btn border">{role}</button>
                </div>
                <hr />
                <div className="flex justify-between mt-2 p-2">
                    <p>Batsman Type :<br/><span className="text-gray-500 text-md">{batter_type}</span></p>
                    <p>Bowler Type :<br/><span className="text-gray-500 text-md">{bowler_type}</span></p>
                </div>
                <div className="flex justify-between items-center p-2 mt-2">
                    <p>Price: {player_price}</p>
                    <button onClick={()=>handleSelectedPlayer(player)} className="btn border shadow-lg">Choose Player</button>
                </div>
            </div>
        </div>
    );
};

Player.propTypes = {
    player: PropTypes.object.isRequired,
    handleSelectedPlayer:  PropTypes.func.isRequired

}
export default Player;