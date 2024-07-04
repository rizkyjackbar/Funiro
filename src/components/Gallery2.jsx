import '../App.css';
import image1 from '../img/Rectangle 40.png';
import image2 from '../img/Rectangle 41.png';
import image3 from '../img/Rectangle 43.png';
import image4 from '../img/Rectangle 44.png';
import image5 from '../img/Rectangle 45.png';
import image6 from '../img/Rectangle 36.png';
import image7 from '../img/Rectangle 37.png';
import image8 from '../img/Rectangle 38.png';
import image9 from '../img/Rectangle 39.png';

const Gallery2 = () => {
    return (
        <div className="mb-8 text-center" style={{ overflow: 'auto' }}>
            <p className="text-lg text-gray-600 px-4">Share your setup with</p>
            <h2 className="text-3xl font-bold" style={{ marginBottom: '15px' }}>#FurniroFurniture</h2>
            <div className="relative" style={{ height: '800px' }}>
                <div className="absolute" style={{ width: '295px', height: '392px', top: '215px', left: '561px' }}>
                    <img src={image1} alt="Gallery Image Center" className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute" style={{ width: '290px', height: '348px', top: '158px', left: '872px' }}>
                    <img src={image3} alt="Gallery Image Right 1" className="w-full h-full object-cover" />
                </div>
                <div className="absolute" style={{ width: '178px', height: '242px', top: '522px', left: '872px' }}>
                    <img src={image2} alt="Gallery Image Right 2" className="w-full h-full object-cover" />
                </div>
                <div className="absolute" style={{ width: '425px', height: '433px', top: '73px', left: '1178px' }}>
                    <img src={image5} alt="Gallery Image Right 3" className="w-full h-full object-cover" />
                </div>
                <div className="absolute" style={{ width: '258px', height: '196px', top: '522px', left: '1066px' }}>
                    <img src={image4} alt="Gallery Image Right 4" className="w-full h-full object-cover" />
                </div>
                
                <div className="absolute" style={{ width: '451px', height: '312px', top: '129px', left: '94px' }}>
                    <img src={image8} alt="Gallery Image Left 1" className="w-full h-full object-cover" />
                </div>
                <div className="absolute" style={{ width: '344px', height: '242px', top: '457px', left: '201px' }}>
                    <img src={image9} alt="Gallery Image Left 2" className="w-full h-full object-cover" />
                </div>
                <div className="absolute" style={{ width: '381px', height: '323px', top: '457px', left: '-196px' }}>
                    <img src={image7} alt="Gallery Image Left 3" className="w-full h-full object-cover" />
                </div>
                <div className="absolute" style={{ width: '274px', height: '382px', top: '59px', left: '-196px' }}>
                    <img src={image6} alt="Gallery Image Left 4" className="w-full h-full object-cover" />
                </div>
            </div>
        </div>
    );
}

export default Gallery2;
