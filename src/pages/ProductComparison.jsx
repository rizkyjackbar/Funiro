import '../App.css';
import Navbar from '../components/Navbar';
import headerImage from '../img/HeaderShop.png';
import blogIcon from '../img/Meubel House_Logos-05.png';
import Features from '../components/Features';
import Footer from '../components/Footer';

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
            <Features />
            <Footer />
        </>
    );
}

export default ProductComparasion;
