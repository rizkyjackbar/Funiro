import '../App.css';
import { useState } from 'react';
import Navbar from '../components/Navbar';
import headerImage from '../img/HeaderShop.png';
import Feature from '../components/Features';
import Footer from '../components/Footer';
import blogIcon from '../img/Meubel House_Logos-05.png';
import image1 from '../img/Rectangle 68.png';
import image2 from '../img/Rectangle 68 (1).png';
import image3 from '../img/Rectangle 68 (2).png';
import recentPostImage1 from '../img/Rectangle 69.png';
import recentPostImage2 from '../img/Rectangle 69 (1).png';
import recentPostImage3 from '../img/Rectangle 69 (2).png';
import recentPostImage4 from '../img/Rectangle 69 (3).png';
import recentPostImage5 from '../img/Rectangle 69 (4).png';
import { MagnifyingGlassIcon, UserIcon, CalendarDaysIcon, TagIcon } from '@heroicons/react/24/solid';

function About() {
    const [currentPage, setCurrentPage] = useState(1);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return (
        <>
            <Navbar />
            <header className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${headerImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white">
                    <img src={blogIcon} alt="Blog Icon" className="h-auto w-auto mb-1 mx-auto" />
                    <h1 className="text-4xl font-bold">About/Blog</h1>
                    <p className="mt-2">Home &gt; About/Blog</p>
                </div>
            </header>
            <div className="container mx-auto p-6 mt-24 flex">
                <div className="w-full md:w-2/3">
                    <div className="mb-8">
                        <img src={image1} alt="Image 1" className="w-full h-auto rounded-md" />
                        <div className="flex items-center mt-4 text-gray-400 text-sm">
                            <UserIcon className="h-4 w-4 mr-1" /> Admin
                            <CalendarDaysIcon className="h-4 w-4 mr-1 ml-4" /> 14 Oct 2022
                            <TagIcon className="h-4 w-4 mr-1 ml-4" /> Wood
                        </div>
                        <h2 className="text-2xl font-bold mt-4">Going all-in with millennial design</h2>
                        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                        <a href="#" className="text-black border-b-2 border-gray-800 mt-2 inline-block">Read more</a>
                    </div>
                    <div className="mb-8">
                        <img src={image2} alt="Image 2" className="w-full h-auto rounded-md" />
                        <div className="flex items-center mt-4 text-gray-400 text-sm">
                            <UserIcon className="h-4 w-4 mr-1" /> Admin
                            <CalendarDaysIcon className="h-4 w-4 mr-1 ml-4" /> 14 Oct 2022
                            <TagIcon className="h-4 w-4 mr-1 ml-4" /> Handmade
                        </div>
                        <h2 className="text-2xl font-bold mt-4">Exploring new ways of decorating</h2>
                        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                        <a href="#" className="text-black border-b-2 border-gray-800 mt-2 inline-block">Read more</a>
                    </div>
                    <div className="mb-8">
                        <img src={image3} alt="Image 3" className="w-full h-auto rounded-md" />
                        <div className="flex items-center mt-4 text-gray-400 text-sm">
                            <UserIcon className="h-4 w-4 mr-1" /> Admin
                            <CalendarDaysIcon className="h-4 w-4 mr-1 ml-4" /> 14 Oct 2022
                            <TagIcon className="h-4 w-4 mr-1 ml-4" /> Wood
                        </div>
                        <h2 className="text-2xl font-bold mt-4">Handmade pieces that took time to make</h2>
                        <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mus mauris vitae ultricies leo integer malesuada nunc. In nulla posuere sollicitudin aliquam ultrices. Morbi blandit cursus risus at ultrices mi tempus imperdiet. Libero enim sed faucibus turpis in. Cursus mattis molestie a iaculis at erat. Nibh cras pulvinar mattis nunc sed blandit libero. Pellentesque elit ullamcorper dignissim cras tincidunt. Pharetra et ultrices neque ornare aenean euismod elementum.</p>
                        <a href="#" className="text-black border-b-2 border-gray-800 mt-2 inline-block">Read more</a>
                    </div>
                    <div className="flex justify-center items-center mt-8 p-4 space-x-4">
                        <button
                            onClick={handlePreviousPage}
                            className="px-4 py-2"
                            style={{ backgroundColor: '#F9F1E7' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#B88E2F'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#F9F1E7'}
                            disabled={currentPage === 1}
                        >
                            Back
                        </button>
                        <span className="text-lg">{currentPage}</span>
                        <button
                            onClick={handleNextPage}
                            className="px-4 py-2"
                            style={{ backgroundColor: '#F9F1E7' }}
                            onMouseEnter={(e) => e.target.style.backgroundColor = '#B88E2F'}
                            onMouseLeave={(e) => e.target.style.backgroundColor = '#F9F1E7'}
                        >
                            Next
                        </button>
                    </div>
                </div>
                <div className="w-full md:w-1/3 md:pl-6 mt-6 md:mt-0">
                    <div className="mb-8 relative">
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                        />
                        <MagnifyingGlassIcon className="absolute right-3 top-3 h-5 w-5 text-gray-400" />
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl mb-4">Categories</h2>
                        <ul className="list-disc list-inside">
                            <li className="text-gray-400 flex justify-between my-6">
                                <span>Crafts</span>
                                <span>2</span>
                            </li>
                            <li className="text-gray-400 flex justify-between my-6">
                                <span>Design</span>
                                <span>8</span>
                            </li>
                            <li className="text-gray-400 flex justify-between my-6">
                                <span>Handmade</span>
                                <span>7</span>
                            </li>
                            <li className="text-gray-400 flex justify-between my-6">
                                <span>Interior</span>
                                <span>1</span>
                            </li>
                            <li className="text-gray-400 flex justify-between my-6">
                                <span>Wood</span>
                                <span>6</span>
                            </li>
                        </ul>
                    </div>
                    <div className="mb-8">
                        <h2 className="text-2xl mb-4 mt-24">Recent Posts</h2>
                        <div className="flex mb-4">
                            <img src={recentPostImage1} alt="Recent Post 1" className="w-20 h-20 object-cover rounded-md" />
                            <div className="ml-4">
                                <h3 className="text-lg">Going all-in with millennial design</h3>
                                <p className="text-gray-400 text-sm">03 Aug 2022</p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <img src={recentPostImage2} alt="Recent Post 2" className="w-20 h-20 object-cover rounded-md" />
                            <div className="ml-4">
                                <h3 className="text-lg">Exploring new ways of decorating</h3>
                                <p className="text-gray-400 text-sm">03 Aug 2022</p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <img src={recentPostImage3} alt="Recent Post 3" className="w-20 h-20 object-cover rounded-md" />
                            <div className="ml-4">
                                <h3 className="text-lg">Handmade pieces that took time to make</h3>
                                <p className="text-gray-400 text-sm">03 Aug 2022</p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <img src={recentPostImage4} alt="Recent Post 4" className="w-20 h-20 object-cover rounded-md" />
                            <div className="ml-4">
                                <h3 className="text-lg">Modern home in Milan</h3>
                                <p className="text-gray-400 text-sm">03 Aug 2022</p>
                            </div>
                        </div>
                        <div className="flex mb-4">
                            <img src={recentPostImage5} alt="Recent Post 5" className="w-20 h-20 object-cover rounded-md" />
                            <div className="ml-4">
                                <h3 className="text-lg">Colorful office redesign</h3>
                                <p className="text-gray-400 text-sm">03 Aug 2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Feature />
            <Footer />
        </>
    );
}

export default About;
