import { NavLink } from "react-router-dom";


export default function Cars() {
  

  const vehicles = [
    {
      id: 1,
      name: 'Model S',
      description: 'The most aerodynamic production car on Earth with the quickest acceleration and longest range.',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-S-Main-Hero-Desktop-LHD.jpg',
      specs: [
        { value: '396 mi', label: 'Range' },
        { value: '1.99s', label: '0-60 mph' },
        { value: '200mph', label: 'Top Speed' },
      ]
    },
    {
      id: 2,
      name: 'Model 3',
      description: 'Combines safety, performance, and efficiency with premium styling and advanced technology.',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-3-Main-Hero-Desktop-LHD.jpg',
      specs: [
        { value: '358 mi', label: 'Range' },
        { value: '3.1s', label: '0-60 mph' },
        { value: '162mph', label: 'Top Speed' },
      ]
    },
    {
      id: 3,
      name: 'Model X',
      description: 'With the most power and quickest acceleration of any SUV, Model X sets the standard for performance.',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-X-Main-Hero-Desktop-LHD.jpg',
      specs: [
        { value: '348 mi', label: 'Range' },
        { value: '2.5s', label: '0-60 mph' },
        { value: '155mph', label: 'Top Speed' },
      ]
    },
    {
      id: 4,
      name: 'Model Y',
      description: 'Versatile, spacious and efficient with room for up to seven passengers and their cargo.',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Model-Y-Main-Hero-Desktop-LHD.jpg',
      specs: [
        { value: '330 mi', label: 'Range' },
        { value: '3.5s', label: '0-60 mph' },
        { value: '155mph', label: 'Top Speed' },
      ]
    },
    {
      id: 5,
      name: 'Cybertruck',
      description: 'Built with an exterior shell made for ultimate durability and passenger protection.',
      image: 'https://digitalassets.tesla.com/tesla-contents/ima+ge/upload/f_auto,q_auto/Cybertruck-Main-Hero-Desktop.jpg',
      specs: [
        { value: '500+ mi', label: 'Range' },
        { value: '2.9s', label: '0-60 mph' },
        { value: '130mph', label: 'Top Speed' },
      ]
    },
    {
      id: 6,
      name: 'Roadster',
      description: 'The quickest car in the world, with record-setting acceleration, range and performance.',
      image: 'https://digitalassets.tesla.com/tesla-contents/image/upload/f_auto,q_auto/Roadster-Main-Hero-Desktop.jpg',
      specs: [
        { value: '620 mi', label: 'Range' },
        { value: '1.9s', label: '0-60 mph' },
        { value: '250+mph', label: 'Top Speed' },
      ]
    },
  ];

  return (
    <div className="font-sans text-gray-900 bg-white">



      <main className="pt-32 pb-16 px-4 sm:px-8 max-w-7xl mx-auto">
        <section className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-4 relative inline-block after:absolute after:w-14 after:h-0.5 after:bg-red-600 after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
            Electric Vehicle Lineup
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Discover Tesla's range of high-performance, all-electric vehicles designed for sustainability without compromise
          </p>
        </section>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {vehicles.map((vehicle) => (
            <div key={vehicle.id} className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
              <div 
                className="h-56 bg-cover bg-center relative after:absolute after:inset-0 after:bg-gradient-to-b after:from-black/10 after:to-black/30"
                style={{ backgroundImage: `url(${vehicle.image})` }}
              ></div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3">{vehicle.name}</h3>
                <p className="text-gray-600 mb-6 min-h-[60px]">{vehicle.description}</p>
                
                <div className="grid grid-cols-3 gap-4 my-6 py-6 border-t border-b border-gray-100">
                  {vehicle.specs.map((spec, index) => (
                    <div key={index} className="text-center px-2">
                      <div className="text-red-600 font-semibold text-xl mb-1">{spec.value}</div>
                      <div className="text-gray-600 text-xs uppercase tracking-wider">{spec.label}</div>
                    </div>
                  ))}
                </div>
                
                <NavLink 
                  to="/contact" 
                  className="block w-full py-3 px-8 bg-red-600 text-white text-center font-medium rounded-full border-2 border-red-600 hover:bg-transparent hover:text-red-600 transition-colors duration-300"
                >
                  Order Now
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </main>

     
    </div>
  );
}