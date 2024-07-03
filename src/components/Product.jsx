import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import image1 from '../img/image 1.png';
import image3 from '../img/image 8.png';
import image4 from '../img/image 3.png';
import image5 from '../img/image 4.png';
import image6 from '../img/image 5.png';
import image7 from '../img/image 6.png';
import image8 from '../img/image 7.png';
import image9 from '../img/image 2.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareAlt, faBalanceScale, faHeart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ filter, sort, showTitle, limit }) => {
    const navigate = useNavigate();

    const products = [
        {
            id: 1,
            name: 'Syltherine',
            description: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            image: image1,
            isDiscount: true
        },
        {
            id: 2,
            name: 'Leviosa',
            description: 'Stylish cafe chair',
            price: 'Rp 2.500.000',
            image: image9,
        },
        {
            id: 3,
            name: 'Lolito',
            description: 'Luxury big sofa',
            price: 'Rp 7.000.000',
            image: image4,
            isDiscount: true
        },
        {
            id: 4,
            name: 'Respira',
            description: 'Outdoor bar table and stool',
            price: 'Rp 500.000',
            image: image5,
            isNew: true
        },
        {
            id: 5,
            name: 'Grifo',
            description: 'Night lamp',
            price: 'Rp 1.500.000',
            image: image6
        },
        {
            id: 6,
            name: 'Muggo',
            description: 'Small mug',
            price: 'Rp 150.000',
            image: image7,
            isNew: true
        },
        {
            id: 7,
            name: 'Pingky',
            description: 'Cute bed set',
            price: 'Rp 7.000.000',
            image: image8,
            isDiscount: true
        },
        {
            id: 8,
            name: 'Potty',
            description: 'Minimalist flower pot',
            price: 'Rp 500.000',
            image: image3,
            isNew: true
        }
    ];

    const filteredProducts = products.filter(product => {
        if (filter === 'new') return product.isNew;
        if (filter === 'discount') return product.isDiscount;
        return true;
    });

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sort === 'price-asc') return parseInt(a.price.replace('Rp ', '').replace(/\./g, '')) - parseInt(b.price.replace('Rp ', '').replace(/\./g, ''));
        if (sort === 'price-desc') return parseInt(b.price.replace('Rp ', '').replace(/\./g, '')) - parseInt(a.price.replace('Rp ', '').replace(/\./g, ''));
        if (sort === 'name-asc') return a.name.localeCompare(b.name);
        if (sort === 'name-desc') return b.name.localeCompare(a.name);
        return 0;
    });

    const limitedProducts = sortedProducts.slice(0, limit);

    const handleCardClick = (id) => {
        navigate(`/product/${id}`);
    };

    const handleAddToCart = () => {
        navigate('/cart');
    };

    const handleCompare = (e) => {
        e.stopPropagation();
        navigate('/productcomparasion');
    };

    return (
        <div className="container mx-auto py-12 px-4 md:px-0 text-center">
            {showTitle && <h2 className="text-3xl font-bold mb-12">Our Products</h2>}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                {limitedProducts.map(product => (
                    <div
                        key={product.id}
                        className="relative bg-gray-100 shadow-md rounded-lg overflow-hidden group cursor-pointer"
                        onClick={() => handleCardClick(product.id)}
                    >
                        <div className="w-full relative">
                            {product.isNew && (
                                <div className="absolute top-2 right-2 bg-green-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-sm">New</div>
                            )}
                            {product.isDiscount && (
                                <div className="absolute top-2 right-2 bg-red-500 text-white w-12 h-12 flex items-center justify-center rounded-full text-sm">-50%</div>
                            )}
                            <img
                                className="w-full h-full object-cover"
                                src={product.image}
                                alt={product.name}
                            />
                        </div>
                        <div className="p-4">
                            <h3 className="text-xl font-semibold text-start">{product.name}</h3>
                            <p className="text-gray-600 text-start my-1">{product.description}</p>
                            <p className="text-lg font-bold text-start">{product.price}</p>
                        </div>
                        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button
                                className="bg-white text-[#B88E2F] py-2 px-4 mb-4"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddToCart();
                                }}
                            >
                                Add to Cart
                            </button>
                            <div className="flex space-x-4 text-white">
                                <button className="flex items-center hover:text-gray-300">
                                    <FontAwesomeIcon icon={faShareAlt} className="mr-2" />
                                    Share
                                </button>
                                <button className="flex items-center hover:text-gray-300" onClick={handleCompare}>
                                    <FontAwesomeIcon icon={faBalanceScale} className="mr-2" />
                                    Compare
                                </button>
                                <button className="flex items-center hover:text-gray-300">
                                    <FontAwesomeIcon icon={faHeart} className="mr-2" />
                                    Like
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

Product.propTypes = {
    filter: PropTypes.string.isRequired,
    sort: PropTypes.string.isRequired,
    showTitle: PropTypes.bool,
    limit: PropTypes.number
};

Product.defaultProps = {
    showTitle: true,
    limit: 8
};

export default Product;
