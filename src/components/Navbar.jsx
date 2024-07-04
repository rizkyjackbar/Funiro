import { useState, useEffect, useRef } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import logo from '../img/Meubel House_Logos-05.png';
import productImage from '../img/Asgaard sofa 5.png';

const Navbar = () => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [cartItems, setCartItems] = useState([
        { id: 1, name: "Asgaard sofa", quantity: 1, price: 250000 },
        { id: 2, name: "Casaliving Wood", quantity: 1, price: 270000 }
    ]);

    const sidebarRef = useRef(null);

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
            setIsCartOpen(false);
        }
    };

    useEffect(() => {
        if (isCartOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isCartOpen]);

    const removeItemFromCart = (itemId) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const calculateSubtotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    return (
        <div>
            <nav className="bg-black-500 p-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="flex items-center">
                        <img src={logo} alt="Logo" className="h-auto w-auto max-h-12 max-w-full mr-4" />
                        <span className="font-montserrat text-2xl font-bold leading-tight text-left">Furniro</span>
                    </div>
                    <div className="hidden md:flex space-x-8">
                        <Link to="/" className="text-black text-lg">Home</Link>
                        <Link to="/shop" className="text-black text-lg">Shop</Link>
                        <Link to="/about" className="text-black text-lg">About</Link>
                        <Link to="/contact" className="text-black text-lg">Contact</Link>
                    </div>
                    <div className="flex items-center space-x-4">
                        <AccountCircleIcon className="h-8 w-8" />
                        <SearchIcon className="h-8 w-8" />
                        <FavoriteIcon className="h-8 w-8" />
                        <ShoppingCartIcon className="h-8 w-8 cursor-pointer" onClick={toggleCart} />
                        <div className="md:hidden flex items-center">
                            <button onClick={toggleMenu}>
                                {isMenuOpen ? <CloseIcon className="h-8 w-8" /> : <MenuIcon className="h-8 w-8" />}
                            </button>
                        </div>
                    </div>
                </div>
                {isMenuOpen && (
                    <div className="md:hidden flex flex-col space-y-2 mt-2">
                        <Link to="/" className="text-black text-lg">Home</Link>
                        <Link to="/shop" className="text-black text-lg">Shop</Link>
                        <Link to="/about" className="text-black text-lg">About</Link>
                        <Link to="/contact" className="text-black text-lg">Contact</Link>
                    </div>
                )}
            </nav>

            <div ref={sidebarRef} className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/3 bg-white shadow-lg z-50 transition-transform duration-300 ${isCartOpen ? 'transform translate-x-0' : 'transform translate-x-full'}`}>
                <div className="p-4 flex flex-col h-full">
                    <h2 className="text-2xl font-bold my-4">Shopping Cart</h2>
                    <hr className="border-t border-[#D9D9D9] mb-10 mt-3" />
                    <div className="space-y-4 flex-1 overflow-auto">
                        {cartItems.map(item => (
                            <div key={item.id} className="flex items-center">
                                <img src={productImage} alt="Product" className="w-20 h-20 object-cover rounded-lg" />
                                <div className="ml-4 flex-1">
                                    <h3 className="text-lg font-semibold">{item.name}</h3>
                                    <div className="flex items-center text-gray-500">
                                        <p>{item.quantity}</p>
                                        <span className="mx-3">X</span>
                                        <p className='text-[#B88E2F]'>{`Rp. ${item.price.toLocaleString('id-ID')}`}</p>
                                    </div>
                                </div>
                                <button onClick={() => removeItemFromCart(item.id)} className="ml-3 bg-gray-400 border border-gray-400 rounded-full">
                                    <CloseIcon className=" text-white" />
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className='flex justify-between my-6'>
                        <h3>Subtotal</h3>
                        <span className='text-lg text-[#B88E2F]'>{`Rp. ${calculateSubtotal().toLocaleString('id-ID')}`}</span>
                    </div>
                    <hr className="border-t border-[#D9D9D9] w-full" />
                    <div className="mt-4 flex justify-between space-x-2">
                        <Link to="/cart" className="w-1/3 px-4 py-2 bg-white text-black border border-black rounded-full text-center">Cart</Link>
                        <Link to="/checkout" className="w-1/3 px-4 py-2 bg-white text-black border border-black rounded-full text-center">Checkout</Link>
                        <Link to="/productcomparasion" className="w-1/3 px-4 py-2 bg-white text-black border border-black rounded-full text-center">Comparison</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
