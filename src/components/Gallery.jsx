import { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import Footer from './Footer';

const GalleryPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('all');

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const filterGallery = (filter) => {
    setActiveFilter(filter);
  };

  const galleryItems = [
    {
      id: 1,
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Mercedes-Benz S-Class',
      description: 'The pinnacle of automotive luxury and technology'
    },
    {
      id: 2,
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Porsche 911 Turbo',
      description: 'Legendary performance with everyday usability'
    },
    {
      id: 3,
      category: 'super',
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Lamborghini Aventador',
      description: 'Exhilarating performance and head-turning design'
    },
    {
      id: 4,
      category: 'classic',
      image: 'https://images.unsplash.com/photo-1550353127-b0da3aeaa0ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: '1969 Ford Mustang',
      description: 'American muscle at its finest'
    },
    {
      id: 5,
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Range Rover Autobiography',
      description: 'Ultimate luxury in any terrain'
    },
    {
      id: 6,
      category: 'sports',
      image: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Audi R8',
      description: 'Supercar performance with everyday practicality'
    },
    {
      id: 7,
      category: 'super',
      image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Ferrari 488 GTB',
      description: 'Italian engineering at its most passionate'
    },
    {
      id: 8,
      category: 'luxury',
      image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
      title: 'Rolls-Royce Phantom',
      description: 'The ultimate expression of automotive luxury'
    }
  ];

  const filteredItems = activeFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
     
      <section className="pt-32 pb-16">
        <div className="container mx-auto px-5 lg:px-10 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 relative inline-block pb-4 after:absolute after:w-20 after:h-1 after:bg-red-500 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2 after:rounded">
              Automotive Excellence
            </h2>
            <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto mt-6 leading-relaxed">
              Immerse yourself in our curated collection of the world's most extraordinary vehicles, captured in stunning detail to showcase their beauty and engineering
            </p>
          </div>

          <div className="flex justify-center flex-wrap gap-4 mb-14">
            <button 
              onClick={() => filterGallery('all')}
              className={`px-8 py-2 rounded-full font-semibold uppercase text-sm tracking-wide border-2 ${activeFilter === 'all' ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/30' : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30'} transition-all`}
            >
              All Vehicles
            </button>
            <button 
              onClick={() => filterGallery('luxury')}
              className={`px-8 py-2 rounded-full font-semibold uppercase text-sm tracking-wide border-2 ${activeFilter === 'luxury' ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/30' : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30'} transition-all`}
            >
              Luxury
            </button>
            <button 
              onClick={() => filterGallery('sports')}
              className={`px-8 py-2 rounded-full font-semibold uppercase text-sm tracking-wide border-2 ${activeFilter === 'sports' ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/30' : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30'} transition-all`}
            >
              Sports
            </button>
            <button 
              onClick={() => filterGallery('classic')}
              className={`px-8 py-2 rounded-full font-semibold uppercase text-sm tracking-wide border-2 ${activeFilter === 'classic' ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/30' : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30'} transition-all`}
            >
              Classic
            </button>
            <button 
              onClick={() => filterGallery('super')}
              className={`px-8 py-2 rounded-full font-semibold uppercase text-sm tracking-wide border-2 ${activeFilter === 'super' ? 'bg-red-500 text-white border-red-500 shadow-lg shadow-red-500/30' : 'border-red-500 text-red-500 hover:bg-red-500 hover:text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-red-500/30'} transition-all`}
            >
              Supercars
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="relative overflow-hidden rounded-xl shadow-xl aspect-video group transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl"
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-10">
                  <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">{item.title}</h3>
                  <p className="text-white/90 drop-shadow-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      <Footer />
    </div>
  );
};

export default GalleryPage;