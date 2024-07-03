import '../App.css';
import Navbar from '../components/Navbar';
import headerImage from '../img/HeaderShop.png';
import Feature from '../components/Features';
import Footer from '../components/Footer';
import blogIcon from '../img/Meubel House_Logos-05.png';

function About() {
    return (
        <>
            <Navbar />
            <header className="relative bg-cover bg-center h-64 flex items-center justify-center" style={{ backgroundImage: `url(${headerImage})` }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 text-center text-white">
                    <img src={blogIcon} alt="Blog Icon" className="h-auto w-auto mb-1 mx-auto" /> 
                    <h1 className="text-4xl font-bold">Blog</h1>
                    <p className="mt-2">Home &gt; Blog</p>
                </div>
            </header>
            <Feature />
            <Footer />
        </>
    );
}

export default About;
