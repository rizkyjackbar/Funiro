import galleryImage1 from '../img/image 106.png';
import galleryImage2 from '../img/Image-living room.png';
import galleryImage3 from '../img/image 101.png';
import '../App.css';

const Gallery1 = () => {
    return (
        <div className="container mx-auto py-12 px-4 md:px-0 text-center">
            <h2 className="text-3xl font-bold mb-4">Browse The Range</h2>
            <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="gallery-container">
                <div className="gallery-item">
                    <img src={galleryImage1} alt="Gallery 1" className="w-full h-full rounded-lg shadow-lg" />
                    <p className="gallery-caption">Dining</p>
                </div>
                <div className="gallery-item">
                    <img src={galleryImage2} alt="Gallery 2" className="w-full h-full rounded-lg shadow-lg" />
                    <p className="gallery-caption">Living</p>
                </div>
                <div className="gallery-item">
                    <img src={galleryImage3} alt="Gallery 3" className="w-full h-full rounded-lg shadow-lg" />
                    <p className="gallery-caption">Bedroom</p>
                </div>
            </div>
        </div>
    );
}

export default Gallery1;
