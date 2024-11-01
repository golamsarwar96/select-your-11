import PropTypes from "prop-types";
import { ToastContainer } from "react-toastify";
import logo from "/assets/banner-main.png"
import bannerImg from '/assets/bg-shadow.png'
const Banner = ({handleFreeCredit,notify}) => {
        console.log(notify)
    return (
        <div className="max-w-7xl mx-auto mt-7">
            <div className="hero min-h-screen bg-stone-900" style={{backgroundImage: `url(${bannerImg})`}}>
                <div className="hero-content text-center">
                    <div className="w-5/6 flex items-center flex-col text-white">
                        <img src={logo} className="mb-7 w-72" alt="" />
                        <h1 className="text-5xl font-bold">Assemble Your Ultimate Dream 11 Cricket Team</h1>
                        <h3 className="py-6 text-2xl text-gray-300">
                            Beyond Boundaries Beyond Limits
                        </h3>
                        <div className="border border-lime-400 p-3 rounded-2xl">
                            <button onClick={()=>{handleFreeCredit(),notify()}} className="btn bg-lime-400 px-8 text-[#131313]">Claim Free Credit</button>
                        </div>
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

Banner.propTypes = {
    handleFreeCredit: PropTypes.func,
    notify:PropTypes.func
}

export default Banner;