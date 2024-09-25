
function Footer() {
    return (
        <div className=" mt-auto w-full  bg-gray-800 text-white font-switzer font-extralight p-6 md:p-10">
            <div className="flex flex-col md:flex-row justify-between">
                <div className="mb-4 md:mb-0">
                    <p className="font-semibold">Join Our Community</p>
                    <div className="max-w-xs  mt-2">
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            required 
                            placeholder="name@example.com" 
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block min-w-80 p-2.5"
                        />
                    </div>
                </div>
                <div className="flex flex-col md:flex-row gap-10">
                    <div>
                        <p className="font-semibold">ABOUT US</p>
                        <p>FAQ</p>
                        <p>CONTACT US</p>
                        <p>TERMS OF SERVICE</p>
                        <p>REFUND POLICY</p>
                    </div>
                    <div>
                        <p className="font-semibold">POLICIES</p>
                        <p>PRIVACY POLICY</p>
                        <p>DELIVERY POLICY</p>
                        <p>TERMS OF USE</p>
                    </div>
                    <div>
                        <p className="font-semibold">HELP</p>
                        <p>HOW TO ORDER</p>
                        <p>TRACK YOUR ORDER</p>
                        <p>RETURN & EXCHANGES</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between mt-8">
                <div>
                    <p>2024 <span>AuraLuxe</span> ALL RIGHTS RESERVED</p>
                </div>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:underline">INSTAGRAM</a>
                    <a href="#" className="hover:underline">FACEBOOK</a>
                    <a href="#" className="hover:underline">TWITTER</a>
                </div>
            </div>
        </div>
    );
}

export default Footer;