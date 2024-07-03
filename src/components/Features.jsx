import highQualityImage from '../img/trophy 1.png';
import warrantyImage from '../img/guarantee.png';
import freeShippingImage from '../img/shipping.png';
import supportImage from '../img/customer-support.png';

const Features = () => {
    return (
        <div className="p-4 mx-auto" style={{ backgroundColor: '#FAF3EA', width: '1440px', height: '270px' }}>
            <div className="flex justify-around items-center h-full">
                <div className="flex items-center">
                    <img src={highQualityImage} alt="High Quality" className="w-10 h-10 mr-2" />
                    <div className="text-start">
                        <h2 className="text-md font-semibold">High Quality</h2>
                        <p className="mt-1 text-gray-400 text-xs">crafted from top materials</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src={warrantyImage} alt="Warranty Protection" className="w-10 h-10 mr-2" />
                    <div className="text-start">
                        <h2 className="text-md font-semibold">Warranty Protection</h2>
                        <p className="mt-1 text-gray-400 text-xs">Over 2 years</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src={freeShippingImage} alt="Free Shipping" className="w-10 h-10 mr-2" />
                    <div className="text-start">
                        <h2 className="text-md font-semibold">Free Shipping</h2>
                        <p className="mt-1 text-gray-400 text-xs">Order over 150 $</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <img src={supportImage} alt="24/7 Support" className="w-10 h-10 mr-2" />
                    <div className="text-start">
                        <h2 className="text-md font-semibold">24/7 Support</h2>
                        <p className="mt-1 text-gray-400 text-xs">Dedicated support</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Features;
