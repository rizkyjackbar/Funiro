import '../App.css';

const Footer = () => {
    return (
        <footer className="bg-white-800">
            <hr className="border-t border-[#D9D9D9] w-full" />
            <div className="container mx-auto my-10 px-4 md:px-0">
                <div className="flex flex-col md:flex-row items-start md:items-start justify-between">
                    <div className="mb-4 md:mb-0">
                        <h3 className="text-xl font-bold">Furniro</h3>
                        <div className="my-4 text-gray-300">
                            <p>400 University Drive Suite 200 Coral </p>
                            <p>Gables,</p>
                            <p>FL 33134 USA</p>
                        </div>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg text-gray-300 font-normal">Links</h4>
                        <ul className="mt-2">
                            <li><a href="#home" className="hover:underline">Home</a></li>
                            <li><a href="#shop" className="hover:underline">Shop</a></li>
                            <li><a href="#about" className="hover:underline">About</a></li>
                            <li><a href="#contact" className="hover:underline">Contact</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg text-gray-300 font-normal">Help</h4>
                        <ul className="mt-2">
                            <li><a href="#faq" className="hover:underline">Payment Options</a></li>
                            <li><a href="#support" className="hover:underline">Returns</a></li>
                            <li><a href="#privacy" className="hover:underline">Privacy Policy</a></li>
                        </ul>
                    </div>
                    <div className="mb-4 md:mb-0">
                        <h4 className="text-lg text-gray-300 font-normal">Newsletter</h4>
                        <form className="mt-2 flex flex-col md:flex-row items-start">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="w-full md:w-auto border-b-2 border-gray-800 px-2 py-1 text-gray-800 placeholder-gray-500 placeholder-opacity-100"
                                style={{ paddingLeft: 0 }}
                            />
                            <button
                                type="submit"
                                className="w-full md:w-auto border-b-2 border-gray-800 text-gray-800 font-semibold py-1 mt-2 md:mt-0 md:ml-2 focus:outline-none"
                            >
                                SUBSCRIBE
                            </button>
                        </form>
                    </div>
                </div>
                <hr className="border-gray-200 my-4" />
                <div className="text-start">
                    <p>&copy; 2023 furniro. All rights reserved</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
