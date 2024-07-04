import '../App.css';
import Navbar from '../components/Navbar';
import headerImage from '../img/HeaderShop.png';
import blogIcon from '../img/Meubel House_Logos-05.png';
import Feature from '../components/Features'
import Footer from '../components/Footer';

function Checkout() {
    return (
        <>
            <Navbar />
            <header className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${headerImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white">
                    <img src={blogIcon} alt="Blog Icon" className="h-auto w-auto mb-1 mx-auto" />
                    <h1 className="text-4xl font-bold">Checkout</h1>
                    <p className="mt-2">Home &gt; Checkout</p>
                </div>
            </header>
            <div className="container mx-auto p-6 mt-16 mb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Billing Details Form */}
                    <div className="">
                        <h2 className="text-2xl font-bold mb-4">Billing Details</h2>
                        <form>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block mb-2">First Name</label>
                                    <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                                </div>
                                <div>
                                    <label className="block mb-2">Last Name</label>
                                    <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                                </div>
                            </div>
                            <div className="my-9">
                                <label className="block mb-2">Company Name (optional)</label>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                            </div>
                            <div className="my-9">
                                <label className="block mb-2">Country/Region</label>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                            </div>
                            <div className="my-9">
                                <label className="block mb-2">Street Address</label>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                            </div>
                            <div className="my-9">
                                <label className="block mb-2">Town/City</label>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                            </div>
                            <div className="my-9">
                                <label className="block mb-2">Province</label>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                            </div>
                            <div className="my-9">
                                <label className="block mb-2">Phone</label>
                                <input type="text" className="w-full border border-gray-300 p-2 rounded" />
                            </div>
                            <div className="my-9">
                                <label className="block mb-2">Email Address</label>
                                <input type="email" className="w-full border border-gray-300 p-2 rounded" />
                            </div>
                            <div className="my-9">
                                <textarea className="w-full border border-gray-300 p-2 rounded" placeholder="Additional information"></textarea>
                            </div>
                        </form>
                    </div>
                    {/* Order Summary */}
                    <div className="">
                        <div className="py-4 flex justify-between mt-4">
                            <span className=''>Product</span>
                            <span className=''>Subtotal</span>
                        </div>
                        <div className="py-4 flex justify-between">
                            <span className='text-gray-400'>Asgaard sofa</span>
                            <span className=''>x 1</span>
                            <span className='text-gray-300'>Rp. 250,000.00</span>
                        </div>
                        <div className="py-4 flex justify-between">
                            <span>Subtotal</span>
                            <span className='text-gray-300'>Rp. 250,000.00</span>
                        </div>
                        <div className="py-4 flex justify-between">
                            <span>Total</span>
                            <span className='text-[#B88E2F] font-semibold'>Rp. 250,000.00</span>
                        </div>
                        <div className="border-t border-gray-200"></div>
                        {/* Payment Methods */}
                        <div className="mt-4">
                            <h2 className="text-2xl font-bold mb-4">Payment Methods</h2>
                            <div className="flex items-center mb-2">
                                <input type="radio" name="paymentMethod" id="bankTransfer" className="mr-2" />
                                <label htmlFor="bankTransfer" className="cursor-pointer">Direct Bank Transfer</label>
                            </div>
                            <p className="text-sm text-gray-600 mb-4">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
                            <div className="flex items-center mb-2">
                                <input type="radio" name="paymentMethod" id="cashOnDelivery" className="mr-2" />
                                <label htmlFor="cashOnDelivery" className="cursor-pointer">Cash On Delivery</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input type="radio" name="paymentMethod" id="creditCard" className="mr-2" />
                                <label htmlFor="creditCard" className="cursor-pointer">Credit Card</label>
                            </div>
                        </div>
                        <p className='my-5 text-sm text-gray-600'>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                        <div className="flex justify-center">
                            <button className="mt-6 w-1/2 bg-white text-black p-3 rounded-lg border border-black">Place Order</button>
                        </div>
                    </div>
                </div>
            </div>
            <Feature />
            <Footer />
        </>
    );
}

export default Checkout;
