import React from 'react';
import Slider from 'react-slick';
import { FaMapMarkerAlt, FaAnchor, FaShip, FaWarehouse } from 'react-icons/fa';

// Carousel Data
const carouselItems = [
  {
    imgSrc: 'https://images.pexels.com/photos/2936810/pexels-photo-2936810.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Strategic Location',
    description: 'Located at a prime spot for major shipping routes.',
    icon: <FaMapMarkerAlt className="text-4xl text-blue-500" />,
  },
  {
    imgSrc: 'https://wallpaperbat.com/img/1449096-free-container-ship-cargo-ship-image.jpg',
    title: 'Advanced Facilities',
    description: 'Equipped with the latest technology for efficient operations.',
    icon: <FaAnchor className="text-4xl text-green-500" />,
  },
  {
    imgSrc: 'https://images.pexels.com/photos/2178734/pexels-photo-2178734.jpeg?auto=compress&cs=tinysrgb&w=600',
    title: 'Efficient Shipping',
    description: 'Streamlined processes for faster and more reliable shipping.',
    icon: <FaShip className="text-4xl text-yellow-500" />,
  },
  {
    imgSrc: 'https://wallpapercrafter.com/th800/223352-a-large-number-of-shipping-containers-in-a-busy-ca.jpg',
    title: 'Comprehensive Storage',
    description: 'Large storage facilities for various types of cargo.',
    icon: <FaWarehouse className="text-4xl text-red-500" />,
  }
];

const HomeCarousel = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true
  };

  return (
    <div className="relative bg-gray-200 py-20">
      <div className="container mx-auto">
        <Slider {...settings}>
          {carouselItems.map((item, index) => (
            <div key={index} className="relative h-96">
              <img
                src={item.imgSrc}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-6">
                {item.icon}
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-lg">{item.description}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default HomeCarousel;
