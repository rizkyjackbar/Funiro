import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from '../img/image 1.png';
import image2 from '../img/image 3.png';
import image3 from '../img/image 4.png';

const Inspirations = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        centerMode: true,
        centerPadding: '60px',
    };

    return (
        <div className="bg-[#FAF3EA] flex flex-col md:flex-row p-8 md:p-16 mb-8">
            <div className="flex flex-col justify-center md:w-1/2">
                <h1 className="text-3xl font-bold mb-4">50+ Beautiful rooms
                    inspiration</h1>
                <p className="text-lg mb-6">
                    Our designer already made a lot of beautiful prototipe of rooms that inspire you
                </p>
                <button
                    className="bg-[#B88E2F] text-white w-44 h-12 mt-6"
                >
                    Explore More
                </button>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0">
                <Slider {...settings}>
                    <div className="px-2">
                        <img src={image1} alt="Inspiration 1" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-2">
                        <img src={image2} alt="Inspiration 2" className="w-full h-full object-cover" />
                    </div>
                    <div className="px-2">
                        <img src={image3} alt="Inspiration 3" className="w-full h-full object-cover" />
                    </div>
                </Slider>
            </div>
        </div>
    );
}

export default Inspirations;
