import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Product from '../components/Product';
import '../App.css';
import image1 from '../img/Asgaard sofa 3.png';
import image3 from '../img/Outdoor sofa set 2.png';
import image4 from '../img/Outdoor sofa set_2 1.png';
import image5 from '../img/Stuart sofa 1.png';
import image6 from '../img/Maya sofa three seater (1) 1.png';
import imagaBawah1 from '../img/Cloud sofa three seater + ottoman_1 1.png';
import imagaBawah2 from '../img/Cloud sofa three seater + ottoman_2 1 (1).png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const SingleProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const products = [
        {
            id: 1,
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            images: [image1, image3, image4, image5, image6]
        },
        {
            id: 2,
            name: 'Leviosa',
            description: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            images: [image1, image3, image4, image5, image6]
        },
        {
            id: 3,
            name: 'Lolito',
            description: 'Luxury big sofa',
            price: 'Rp 7.000.000',
            images: [image1, image3, image4, image5, image6]
        },
        {
            id: 4,
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rp 500.000',
            images: [image1, image3, image4, image5, image6]
        },
        {
            id: 5,
            name: 'Grifo',
            description: 'Night lamp',
            price: 'Rp 1.500.000',
            images: [image1, image3, image4, image5, image6]
        },
        {
            id: 6,
            name: 'Muggo',
            description: 'Small mug',
            price: 'Rp 150.000',
            images: [image1, image3, image4, image5, image6]
        },
        {
            id: 7,
            name: 'Pingky',
            description: 'Cute bed set',
            price: 'Rp 7.000.000',
            images: [image1, image3, image4, image5, image6]
        },
        {
            id: 8,
            name: 'Potty',
            description: 'Minimalist flower pot',
            price: 'Rp 500.000',
            images: [image1, image3, image4, image5, image6]
        }
    ];

    const product = products.find(product => product.id === parseInt(id));

    const increment = () => setQuantity(quantity + 1);
    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleAddToCart = () => {
        navigate('/cart');
    };

    const handleAddToCompare = () => {
        navigate('/productcomparasion');
    };

    return (
        <>
            <Navbar />
            <header
                className="relative bg-cover bg-center h-24 flex items-center"
                style={{ backgroundColor: '#F9F1E7' }}
            >
                <div className="text-black ml-4">
                    <h1 className="text-xl">
                        Home &gt; Shop &gt; | {product ? product.name : 'Product Not Found'}
                    </h1>
                </div>
            </header>
            <main className="container mx-auto py-12 px-4 md:px-0">
                {product ? (
                    <div className="flex flex-col md:flex-row items-start">
                        <div className="flex flex-col md:flex-row items-start md:mr-8 mb-8 md:mb-0">
                            <div className="flex flex-col mr-4">
                                {product.images.slice(1).map((image, index) => (
                                    <div key={index} className="bg-[#F9F1E7] p-2 rounded mb-4">
                                        <img
                                            src={image}
                                            alt={`${product.name} ${index + 1}`}
                                            className="w-20 h-20"
                                        />
                                    </div>
                                ))}
                            </div>
                            <div className="bg-[#F9F1E7] p-4 rounded">
                                <img
                                    src={product.images[0]}
                                    alt={product.name}
                                    className="w-80 h-96"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-auto">
                            <h1 className="text-4xl mb-1">{product.name}</h1>
                            <p className="text-xl text-gray-400">{product.price}</p>
                            <div className="flex items-center my-4">
                                {[...Array(5)].map((_, index) => (
                                    <FontAwesomeIcon key={index} icon={faStar} style={{ color: '#FFD700' }} />
                                ))}
                                <span className="ml-2 text-gray-400">| 5 Customer Review</span>
                            </div>
                            <p className="mb-6">{product.description}</p>
                            <p className="text-gray-400 mb-2">Size</p>
                            <div className="flex gap-2">
                                {['L', 'XL', 'XS'].map(size => (
                                    <button
                                        key={size}
                                        className="w-8 h-8 bg-[#F9F1E7] border-none rounded cursor-pointer transition-colorsduration-300 hover:bg-[#B88E2F]"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                            <p className="text-gray-400 mt-8 mb-2">Color</p>
                            <div className="flex gap-2">
                                <div
                                    className="w-8 h-8 bg-[#816DFA] rounded-full cursor-pointer"
                                ></div>
                                <div
                                    className="w-8 h-8 bg-black rounded-full cursor-pointer"
                                ></div>
                                <div
                                    className="w-8 h-8 bg-[#B88E2F] rounded-full cursor-pointer"
                                ></div>
                            </div>
                            <div className="flex flex-col md:flex-row gap-2 mt-14 items-center w-full md:w-auto">
                                <div className="flex items-center border border-black rounded-xl">
                                    <button
                                        className="w-16 h-16 border-none cursor-pointer rounded-l"
                                        onClick={decrement}
                                    >
                                        -
                                    </button>
                                    <span className="px-4">{quantity}</span>
                                    <button
                                        className="w-16 h-16 border-none cursor-pointer rounded-r"
                                        onClick={increment}
                                    >
                                        +
                                    </button>
                                </div>
                                <button
                                    className="w-52 h-16 border border-black rounded-xl cursor-pointer"
                                    onClick={handleAddToCart}
                                >
                                    Add to cart
                                </button>
                                <button
                                    className="w-52 h-16 border border-black rounded-xl cursor-pointer"
                                    onClick={handleAddToCompare}
                                >
                                    Compare
                                </button>
                            </div>
                            <hr className="border-t border-[#D9D9D9] my-8 w-full" />
                            <div className='text-gray-400 flex flex-col gap-1'>
                                <div className='flex'>
                                    <p className='w-24'>SKU</p>
                                    <p className='w-3'>:</p>
                                    <p>SS001</p>
                                </div>
                                <div className='flex'>
                                    <p className='w-24'>Category</p>
                                    <p className='w-3'>:</p>
                                    <p>Sofas</p>
                                </div>
                                <div className='flex'>
                                    <p className='w-24'>Tags</p>
                                    <p className='w-3'>:</p>
                                    <p>Sofa, Chair, Home, Shop</p>
                                </div>
                                <div className='flex items-center'>
                                    <p className='w-24'>Share</p>
                                    <p className='w-3'>:</p>
                                    <div className='flex gap-2'>
                                        <a href='https://www.facebook.com' target='_blank' rel='noopener noreferrer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-black">
                                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.991H7.897v-2.887h2.541V9.797c0-2.513 1.493-3.887 3.776-3.887 1.094 0 2.238.195 2.238.195v2.476h-1.261c-1.241 0-1.628.771-1.628 1.562v1.878h2.773l-.443 2.887h-2.33V21.878C18.343 21.128 22 16.991 22 12z" />
                                            </svg>
                                        </a>
                                        <a href='https://www.linkedin.com' target='_blank' rel='noopener noreferrer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-black">
                                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.5 19h-2v-11h2v11zm-1-12.276c-.666 0-1.21-.546-1.21-1.222 0-.676.544-1.222 1.21-1.222s1.21.546 1.21 1.222c0 .676-.544 1.222-1.21 1.222zm12.5 12.276h-2v-5.771c0-1.378-.494-2.319-1.731-2.319-.945 0-1.508.646-1.757 1.269-.091.224-.113.537-.113.85v5.971h-2v-11h2v1.554c.284-.44.791-1.065 1.925-1.065 1.404 0 2.689.917 2.689 2.888v7.623z" />
                                            </svg>
                                        </a>
                                        <a href='https://www.twitter.com' target='_blank' rel='noopener noreferrer'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 text-black">
                                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.723-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.723 0-4.927 2.204-4.927 4.927 0 .386.044.762.128 1.124-4.094-.205-7.725-2.166-10.148-5.144-.424.729-.667 1.576-.667 2.476 0 1.708.87 3.215 2.188 4.099-.808-.026-1.568-.248-2.228-.617v.062c0 2.385 1.697 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.317 0-.626-.031-.928-.089.626 1.956 2.444 3.379 4.6 3.419-1.684 1.32-3.808 2.107-6.115 2.107-.398 0-.79-.023-1.175-.069 2.179 1.396 4.768 2.212 7.548 2.212 9.054 0 14.001-7.496 14.001-13.986 0-.213-.005-.426-.014-.637.961-.695 1.8-1.562 2.462-2.549z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <p>Product not found</p>
                )}
            </main>
            <hr className="border-t border-[#D9D9D9] my-8 w-full" />
            <section className="container mx-auto py-12 px-4 md:px-0 text-center">
                <div className="flex flex-col md:flex-row gap-8 justify-center mb-7">
                    <h2 className="text-3xl mb-6">Description</h2>
                    <h2 className="text-3xl text-gray-400 mb-6">Additional Information</h2>
                    <h2 className="text-3xl text-gray-400 mb-6">Reviews [5]</h2>
                </div>
                <p className="text-l text-gray-400 mb-8">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</p>
                <p className="text-l text-gray-400 mb-8">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <div className="bg-[#F9F1E7] p-4 w-full rounded-lg md:w-auto">
                        <img src={imagaBawah1} alt="Collection Image 1" className="w-[605px] h-[348px] object-cover rounded" style={{ background: '#F9F1E7' }} />
                    </div>
                    <div className="bg-[#F9F1E7] p-4 w-full rounded-lg md:w-auto">
                        <img src={imagaBawah2} alt="Collection Image 2" className="w-[605px] h-[348px] object-cover rounded" style={{ background: '#F9F1E7' }} />
                    </div>
                </div>
            </section>
            <hr className="border-t border-[#D9D9D9] my-8 w-full" />
            <section className="container mx-auto py-12 px-4 md:px-0 text-center">
                <h1 className='text-4xl text-gray-600 mb-8'>Related Products</h1>
                <Product filter="all" sort="name-asc" showTitle={false} limit={4} />
            </section>
            <Footer />
        </>
    );
};

export default SingleProduct;
