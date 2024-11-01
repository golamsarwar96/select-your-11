const Newsletter = () => {
    const bgNews = {
        backgroundImage: "url('/assets/bg-shadow.png')"
    }
    return (
        <div className="border-2 px-3 rounded-2xl my-16 relative z-10" >
            <div className="flex justify-center flex-col h-72 text-center my-8 space-y-3 rounded-2xl border" style={bgNews}>
                <h1 className="text-4xl font-bold">Subscribe to our Newsletter</h1>
                <p className="text-lg text-gray-700">Get the latest updates and news right in your inbox!</p>
                <div className="flex gap-3 justify-center">
                    <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" />
                    <button className="btn px-6 py-2 bg-gradient-to-r from-pink-500 to-amber-500 text-black">Subscribe</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;