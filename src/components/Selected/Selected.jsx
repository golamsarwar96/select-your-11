
import PropTypes from "prop-types";
import PlayerSelected from "../PlayerSelected";
import { ToastContainer } from "react-toastify";
const Selected = ({selectedPlayer, handleDeletePlayer,showAvailable}) => {
    return (
        <div className="mb-2">
            <h1>Player Select: {selectedPlayer.length}/6</h1>
            {
                selectedPlayer.map((singlePlayer,idx)=><PlayerSelected key={idx} handleDeletePlayer={handleDeletePlayer} singlePlayer={singlePlayer}></PlayerSelected>)
            }
            <div>
                <button onClick={showAvailable} className="btn px-5 py-2 border my-5">Add More Players</button>
            </div>
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

Selected.propTypes ={
    selectedPlayer:PropTypes.object,
    handleDeletePlayer: PropTypes.func,
    showAvailable: PropTypes.func
}
export default Selected;