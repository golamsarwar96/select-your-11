import footerImg from "/assets/logo-footer.png"
const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="footer text-base-content flex flex-col items-center">
                <div className="w-32 h-32 mt-10">
                    <img src={footerImg} alt="" />
                </div>
                <div className="border-b-2 text-gray-800 md:p-16 p-10 flex flex-col md:flex-row justify-center items-center md:items-end md:gap-52 gap-10 text-center md:text-left">
                    <nav className="w-48">
                        <h6 className="footer-title text-white">About Us</h6>
                        <p className="text-white">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </nav>
                    <nav className="flex flex-col">
                        <h6 className="footer-title mb-2 text-white">Quick Links</h6>
                        <a className="link link-hover text-gray-300">• Home</a>
                        <a className="link link-hover text-gray-300">• Services</a>
                        <a className="link link-hover text-gray-300">• About</a>
                        <a className="link link-hover text-gray-300">• Contact</a>
                    </nav>
                    <form>
                        <h6 className="footer-title text-2xl text-white">Subscribe</h6>
                        <p className="text-white">Subscribe to our newsletter fot the latest updates.</p>
                        <fieldset className="form-control w-80">
                        <div className="join mt-2">
                            <input
                            type="text"
                            placeholder="username@site.com"
                            className="input input-bordered join-item" />
                            <button className="btn join-item px-6 py-2 bg-gradient-to-r from-pink-500 to-amber-500 text-black border-none">Subscribe</button>
                        </div>
                        </fieldset>
                    </form>
                </div>
                <p className="text-center mb-5">@2024 Your Company All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;