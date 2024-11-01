import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ImCoinDollar } from "react-icons/im";
import PropTypes from "prop-types";
import headerLogo from "/assets/logo.png"
const Header = ({freeCredit, updateCoin}) => {

    return (
        <div className="max-w-7xl mx-auto py-2">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <li><a>Home</a></li>
                            <li><a>Pictures</a></li>
                            <li><a>Teams</a></li> 
                            <li><a>Schedules</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl w-36"><img src={headerLogo} alt="" /></a>
                    <div className="md:hidden flex items-center">
                        <a className="border-2 p-2 px-3 rounded-2xl text-xs flex items-center gap-[6px]">{freeCredit-updateCoin}<span>Coin</span><ImCoinDollar className="text-lg text-amber-500"></ImCoinDollar></a>
                    </div>
                </div>
                {/* {MAIN NAVBAR} */}
                <div className="navbar-end hidden lg:flex mt-4">
                    <ul className="text-gray-600 menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Pictures</a></li>
                        <li><a>Teams</a></li> 
                        <li><a>Schedules</a></li>
                    </ul>
                    <div className="flex items-center">
                        <a className="border-2 p-2 px-3 rounded-2xl text-sm flex items-center gap-2">{freeCredit-updateCoin} Coin<ImCoinDollar className="text-lg text-amber-500"></ImCoinDollar></a>
                    </div>
                </div>
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

Header.propTypes = {
    freeCredit: PropTypes.number,
    updateCoin: PropTypes.func
}
export default Header;