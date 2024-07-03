import '../App.css';
import Navbar from '../components/Navbar';
import headerImage from '../img/HeaderShop.png';
import blogIcon from '../img/Meubel House_Logos-05.png';
import Features from '../components/Features'
import Footer from '../components/Footer';
import productImage from '../img/Asgaard sofa 5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Cart() {
    const cartItems = [
        {
            id: 1,
            name: 'Asgaard sofa',
            price: 'Rp 250.000.00',
            quantity: 1,
            subtotal: 'Rp 250.000.00',
            image: productImage
        }
    ];

    const navigate = useNavigate();

    const handleCheckout = () => {
        navigate('/checkout');
    };

    return (
        <>
            <Navbar />
            <header className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${headerImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white">
                    <img src={blogIcon} alt="Blog Icon" className="h-auto w-auto mb-1 mx-auto" /> 
                    <h1 className="text-4xl font-bold">Cart</h1>
                    <p className="mt-2">Home &gt; Cart</p>
                </div>
            </header>
            <main className="container mx-auto py-12 px-4 flex flex-col lg:flex-row">
                <div className="overflow-x-auto w-full lg:w-2/3 mb-8 lg:mb-0">
                    <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                        <thead className="bg-[#F9F1E7]">
                            <tr>
                                <th className="px-6 py-3 text-left text-sm leading-4 text-gray-600 tracking-wider">Product</th>
                                <th className="px-6 py-3 text-left text-sm leading-4 text-gray-600 tracking-wider">Price</th>
                                <th className="px-6 py-3 text-left text-sm leading-4 text-gray-600 tracking-wider">Quantity</th>
                                <th className="px-6 py-3 text-left text-sm leading-4 text-gray-600 tracking-wider">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.id} className="border-b-2 border-gray-200">
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="flex items-center">
                                            <div className="flex-shrink-0 h-20 w-20 bg-[#F9F1E7] rounded-lg">
                                                <img className="h-20 w-20 rounded" src={item.image} alt={item.name} />
                                            </div>
                                            <div className="ml-4">
                                                <div className="text-sm leading-5 font-medium text-gray-400">{item.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 text-gray-400">{item.price}</div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap">
                                        <div className="text-sm leading-5 ml-8 text-gray-900">{item.quantity}</div>
                                    </td>
                                    <td className="px-6 py-10 whitespace-no-wrap flex items-center">
                                        <div className="text-sm text-gray-900 flex items-center">
                                            <span>{item.subtotal}</span>
                                        </div>
                                        <button className="text-[#B88E2F] ml-9">
                                            <FontAwesomeIcon icon={faTrash} />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div className="w-full lg:w-1/3 pl-0 lg:pl-8">
                    <div className="bg-[#F9F1E7] p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold mb-4 text-center">Cart Totals</h2>
                        <div className="flex justify-between text-sm font-medium text-gray-700 mb-2">
                            <span>Subtotal</span>
                            <span className='text-gray-400'>Rp 2.500.000</span>
                        </div>
                        <div className="flex justify-between text-sm font-medium text-gray-700 mb-6">
                            <span>Total</span>
                            <span className='text-xl text-[#B88E2F]'>Rp 2.500.000</span>
                        </div>
                        <button onClick={handleCheckout} className="w-full bg-[#B88E2F] text-white py-2 rounded-lg font-semibold">Check Out</button>
                    </div>
                </div>
            </main>
            <Features />
            <Footer />
        </>
    );
}

export default Cart;
