import headerImage from '../img/scandinavian-interior-mockup-wall-decal-background 1.png';
import '../App.css';

const Header = () => {
    return (
        <div className="relative w-full h-auto">
            <img src={headerImage} alt="Header" className="header-image" />
            <div className="absolute inset-0 flex items-center justify-center md:justify-end">
                <div className="container mx-auto flex justify-center md:justify-end px-4 md:px-8">
                    <div className="bg-[#FFF3E3] p-6 md:p-12 rounded-lg shadow-lg text-start flex flex-col justify-between w-full md:w-[643px] h-auto md:h-[443px]">
                        <div>
                            <h3 className="font-poppins mb-2 font-medium" style={{ letterSpacing: '2px', color: '#333333' }}>New Arrival</h3>
                            <h1 className="custom-h1 font-poppins custom-h1-top">Discover Our</h1>
                            <h1 className="custom-h1 font-poppins custom-h1-bottom">New Collection</h1>
                            <p className="font-poppins mt-4 md:mt-8" style={{ fontWeight: 500 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur adipisci odio illum, enim dolor laboriosam?</p>
                        </div>
                        <div className="flex justify-start">
                            <button className="px-4 mt-3 text-white rounded-lg shadow font-bold w-full md:w-[222px] h-[50px] md:h-[74px]" style={{ backgroundColor: '#B88E2F' }}>
                                BUY NOW
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;
