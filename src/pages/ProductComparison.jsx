import '../App.css';
import Navbar from '../components/Navbar';
import headerImage from '../img/HeaderShop.png';
import blogIcon from '../img/Meubel House_Logos-05.png';
import Features from '../components/Features';
import Footer from '../components/Footer';
import { StarIcon } from '@heroicons/react/24/solid';
import productImage1 from '../img/Asgaard sofa 3.png';
import productImage2 from '../img/Cloud sofa three seater + ottoman_1 1.png';

function ProductComparasion() {
    return (
        <>
            <Navbar />
            <header className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${headerImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white">
                    <img src={blogIcon} alt="Blog Icon" className="h-auto w-auto mb-1 mx-auto" />
                    <h1 className="text-4xl font-bold">Product Comparasion</h1>
                    <p className="mt-2">Home &gt; Product Comparasion</p>
                </div>
            </header>
            <div className="container mx-auto p-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-start" style={{ fontSize: '28px', lineHeight: '35.42px' }}>
                            Go to Product page for more Products
                        </h2>
                        <p className="text-lg font-medium text-gray-400 mt-1 border-b-2 border-gray-400 inline-block">View More</p>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-6">
                        <div className="bg-white p-3 rounded shadow-md">
                            <div className="mb-4 mx-auto" style={{ background: '#F9F1E7', padding: '10px', borderRadius: '10px', width: '200px', height: '177px' }}>
                                <img src={productImage1} alt="Product 1" className="w-full h-full object-cover" style={{ borderRadius: '10px' }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Asgaard Sofa</h3>
                            <p className="text-gray-700 mb-2">Rp. 250,000.00</p>
                            <div className="flex items-center justify-center mb-2">
                                <span className="flex items-center text-sm">
                                    4.2
                                    <StarIcon className="h-4 w-4 text-yellow-500 ml-1" />
                                    <StarIcon className="h-4 w-4 text-yellow-500" />
                                    <StarIcon className="h-4 w-4 text-yellow-500" />
                                    <StarIcon className="h-4 w-4 text-yellow-500" />
                                    <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                                </span>
                                <span className="text-gray-600 text-sm">| 104 Reviews</span>
                            </div>
                        </div>
                        <div className="bg-white p-3 rounded shadow-md">
                            <div className="mb-4 mx-auto" style={{ background: '#F9F1E7', padding: '10px', borderRadius: '10px', width: '200px', height: '177px' }}>
                                <img src={productImage2} alt="Product 2" className="w-full h-full object-cover" style={{ borderRadius: '10px' }} />
                            </div>
                            <h3 className="text-xl font-bold mb-2">Outdoor Sofa Set</h3>
                            <p className="text-gray-700 mb-2">Rp. 224,000.00</p>
                            <div className="flex items-center justify-center mb-2">
                                <span className="flex items-center text-sm">
                                    4.2
                                    <StarIcon className="h-4 w-4 text-yellow-500 ml-1" />
                                    <StarIcon className="h-4 w-4 text-yellow-500" />
                                    <StarIcon className="h-4 w-4 text-yellow-500" />
                                    <StarIcon className="h-4 w-4 text-yellow-500" />
                                    <StarIcon className="h-4 w-4 text-yellow-500 mr-1" />
                                </span>
                                <span className="text-gray-600 text-sm">| 145 Reviews</span>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <h2 className="text-2xl font-bold mb-4 text-left w-full md:w-1/2">Add A Product</h2>
                        <div className="relative w-full md:w-1/2">
                            <select id="addProduct" name="addProduct" className="appearance-none block w-full pl-3 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md bg-[#B88E2F] text-white">
                                <option value="product3">Choose a Product</option>
                                <option value="product4">Product 3</option>
                                <option value="product5">Product 4</option>
                                <option value="product6">Product 5</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                <svg className="h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-300" />
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border-gray-300">
                        <thead>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="pl-1 pr-80 py-4 border-r border-gray-300 text-sm text-gray-600 font-bold">General</td>
                                <td className="px-6 py-4 border-r border-gray-300"></td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Sales Package</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">1 sectional sofa</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">1 Three Seater, 2 Single Seater</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Model Number</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">TFCBLIGRBL6SRHS</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">DTUBLIGRBL568</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Secondary Material</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">Solid Wood</td>
                                <td className="px-6 border-gray-300 text-sm text-gray-600">Solid Wood</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Configuration</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">L-shaped</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">L-shaped</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Upholstery Material</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">Fabric + Cotton</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">Fabric + Cotton</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Upholstery Color</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">Bright Grey & Lion</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">Bright Grey & Lion</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600 font-bold">Product</td>
                                <td className="px-6 py-4 border-r border-gray-300"></td>
                                <td className="px-6 py-4 border-gray-300"></td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Filling Material</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">Foam</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">Matte</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Finish Type</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">Bright Grey & Lion</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">Bright Grey & Lion</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Adjustable Headrest</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">No</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">Yes</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Maximum Load Capacity</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">280 KG</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">300 KG</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Origin of Manufacture</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">India</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">India</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600 font-bold">Dimension</td>
                                <td className="px-6 py-4 border-r border-gray-300"></td>
                                <td className="px-6 py-4 border-gray-300"></td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Width</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">265.32 cm</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">265.32 cm</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Height</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">76 cm</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">76 cm</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Depth</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">167.76 cm</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">167.76 cm</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Weight</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">45 KG</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">65 KG</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Seat Height</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">41.52 cm</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">41.52 cm</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Leg Height</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">5.46 cm</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">5.46 cm</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600 font-bold">Warranty</td>
                                <td className="px-6 py-4 border-r border-gray-300"></td>
                                <td className="px-6 py-4 border-gray-300"></td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Warranty Summary</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">1 Year Manufacturing Warranty</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">1.2 Year Manufacturing Warranty</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Warranty Service Type</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">For Warranty Claims or Any Product Related Issues Please Email at operations@trevifurniture.com</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">For Warranty Claims or Any Product Related Issues Please Email at support@xyz.com</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Covered in Warranty</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">Warranty Against Manufacturing Defect</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">Warranty of the product is limited to manufacturing defects only.</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Not Covered in Warranty</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">The Warranty Does Not Cover Damages Due To Usage Of The Product Beyond Its Intended Use And Wear & Tear In The Natural Course Of Product Usage.</td>
                            </tr>
                            <tr>
                                <td className="pl-1 py-4 border-r border-gray-300 text-sm text-gray-600">Domestic Warranty</td>
                                <td className="px-6 py-4 border-r border-gray-300 text-sm text-gray-600">1 Year</td>
                                <td className="px-6 py-4 border-gray-300 text-sm text-gray-600">3 Months</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <Features />
            <Footer />
        </>
    );
}

export default ProductComparasion;
