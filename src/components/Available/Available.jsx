import Players from '../Players';
import Selected from '../Selected/Selected';
import './Available.css'
import PropTypes from 'prop-types';
const Available = ({handleAvailableBtn,isActive, selectedPlayer,handleDeletePlayer, handleSelectedPlayer,showAvailable}) => {
    console.log(selectedPlayer);
    return (
        <div>
            <div className="flex justify-between text-2xl font-bold my-8">
                <h1 className="">Available Players</h1>
                <div className='flex'>
                    <button onClick={()=>handleAvailableBtn("available")} className=
                    {`${isActive.available?"btn rounded-r-none active" : "btn rounded-r-none"}`}>Available</button>
                    <button onClick={()=>handleAvailableBtn("selected")} className=
                    {`${isActive.available?"btn rounded-l-none" : "btn active rounded-l-none"}`}>Selected ({selectedPlayer.length})</button>
                </div>            
            </div>
            {
                isActive.available?<Players handleSelectedPlayer={handleSelectedPlayer}></Players>: <Selected selectedPlayer={selectedPlayer} showAvailable={showAvailable} handleDeletePlayer={handleDeletePlayer}></Selected>

            }   
        </div>
    );
};

Available.propTypes = {
    selectedPlayer: PropTypes.object,
    handleAvailableBtn: PropTypes.func.isRequired,
    isActive: PropTypes.object,
    choosePlayer: PropTypes.array,
    handleDeletePlayer: PropTypes.func,
    handleSelectedPlayer: PropTypes.func,
    showAvailable: PropTypes.func

}

export default Available;