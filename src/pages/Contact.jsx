import '../App.css';
import Navbar from '../components/Navbar';
import headerImage from '../img/HeaderShop.png';
import blogIcon from '../img/Meubel House_Logos-05.png';
import Feature from '../components/Features';
import Footer from '../components/Footer';
import { MapPinIcon, PhoneIcon, ClockIcon } from '@heroicons/react/24/outline';

function Contact() {
    return (
        <>
            <Navbar />
            <header className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${headerImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white">
                    <img src={blogIcon} alt="Blog Icon" className="h-auto w-auto mb-1 mx-auto" /> 
                    <h1 className="text-4xl font-bold">Contact</h1>
                    <p className="mt-2">Home &gt; Contact</p>
                </div>
            </header>
            <section className="text-center my-12">
                <h2 className="text-3xl font-bold">Get In Touch With Us</h2>
                <p className="mt-4 text-sm text-gray-400">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
            </section>
            <section className="container mx-auto my-12 px-4">
                <div className="flex flex-wrap -mx-4">
                    <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
                        <div className="flex items-center mb-4">
                            <MapPinIcon className="h-6 w-6 text-gray-500 mr-2" />
                            <h3 className="text-2xl font-bold">Address</h3>
                        </div>
                        <p className="ml-8">236 5th SE Avenue, New York NY10000, United States</p>
                        <div className="flex items-center mb-4 mt-14">
                            <PhoneIcon className="h-6 w-6 text-gray-500 mr-2" />
                            <h3 className="text-2xl font-bold">Phone</h3>
                        </div>
                        <p className="ml-8">Mobile: +(84) 546-6789</p>
                        <p className="ml-8">Hotline: +(84) 456-6789</p>
                        <div className="flex items-center mt-14 mb-4">
                            <ClockIcon className="h-6 w-6 text-gray-500 mr-2" />
                            <h3 className="text-2xl font-bold">Working Time</h3>
                        </div>
                        <p className="ml-8">Monday-Friday: 9:00 - 22:00</p>
                        <p className="ml-8">Saturday-Sunday: 9:00 - 21:00</p>
                    </div>
                    <div className="w-full md:w-1/2 px-4">
                        <form className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Your Name</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input type="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Subject</label>
                                <input type="text" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2" rows="4"></textarea>
                            </div>
                            <div>
                                <button type="submit" className="inline-flex items-center px-12 py-2 my-5 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-[#B88E2F]">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            <Feature />
            <Footer />
        </>
    );
}

export default Contact;
