import { useState } from "react";
import { FaTwitter, FaLinkedin } from "react-icons/fa";

const About = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="font-sans text-gray-900 bg-white">
    
      <section className="py-24 px-4 sm:px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8 text-red-600 relative inline-block after:absolute after:w-20 after:h-0.5 after:bg-red-600 after:-bottom-3 after:left-1/2 after:-translate-x-1/2">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            Tesla was founded in 2003 by a group of engineers who wanted to
            prove that people didn't need to compromise to drive electric – that
            electric vehicles can be better, quicker and more fun to drive than
            gasoline cars.
          </p>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Today, Tesla builds not only all-electric vehicles but also
            infinitely scalable clean energy generation and storage products.
            Tesla believes the faster the world stops relying on fossil fuels
            and moves towards a zero-emission future, the better.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">4M+</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">
                Teslas on Road
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">15B+</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">
                Miles Driven
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">25M+</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">
                Tons CO₂ Saved
              </div>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="text-4xl font-bold text-red-600 mb-2">50K+</div>
              <div className="text-gray-600 uppercase tracking-wider text-sm">
                Superchargers
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 px-4 sm:px-6 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-semibold mb-4">Our Journey</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            From a Silicon Valley startup to a global leader in sustainable
            energy
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto py-10">
          <div className="absolute w-0.5 bg-red-600 top-0 bottom-0 left-1/2 -ml-px md:left-10"></div>

          <div className="relative pl-0 md:pl-20 pr-0 md:pr-20 mb-8">
            <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all">
              <div className="absolute top-5 -left-16 text-2xl font-bold text-red-600">
                2003
              </div>
              <h3 className="text-2xl font-semibold mb-4">Tesla is Founded</h3>
              <p className="text-gray-300 leading-relaxed">
                Martin Eberhard and Marc Tarpenning establish Tesla Motors,
                named after electrical engineer Nikola Tesla.
              </p>
            </div>
          </div>

          <div className="relative pl-0 md:pl-20 pr-0 md:pr-20 mb-8">
            <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all">
              <div className="absolute top-5 -right-16 text-right text-2xl font-bold text-red-600">
                2004
              </div>
              <h3 className="text-2xl font-semibold mb-4">Elon Musk Joins</h3>
              <p className="text-gray-300 leading-relaxed">
                Elon Musk leads $7.5 million Series A funding round and joins as
                Chairman of the Board.
              </p>
            </div>
          </div>

          <div className="relative pl-0 md:pl-20 pr-0 md:pr-20 mb-8">
            <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all">
              <div className="absolute top-5 -left-16 text-2xl font-bold text-red-600">
                2008
              </div>
              <h3 className="text-2xl font-semibold mb-4">
                Roadster & Model S
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Tesla delivers first Roadster and unveils plans for Model S, its
                first sedan.
              </p>
            </div>
          </div>

          <div className="relative pl-0 md:pl-20 pr-0 md:pr-20 mb-8">
            <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all">
              <div className="absolute top-5 -right-16 text-right text-2xl font-bold text-red-600">
                2012
              </div>
              <h3 className="text-2xl font-semibold mb-4">Model S Delivery</h3>
              <p className="text-gray-300 leading-relaxed">
                Tesla begins deliveries of Model S, which goes on to win
                numerous awards.
              </p>
            </div>
          </div>

          <div className="relative pl-0 md:pl-20 pr-0 md:pr-20 mb-8">
            <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all">
              <div className="absolute top-5 -left-16 text-2xl font-bold text-red-600">
                2015
              </div>
              <h3 className="text-2xl font-semibold mb-4">Energy Products</h3>
              <p className="text-gray-300 leading-relaxed">
                Tesla expands into energy products with Powerwall and Powerpack
                batteries.
              </p>
            </div>
          </div>

          <div className="relative pl-0 md:pl-20 pr-0 md:pr-20">
            <div className="bg-white/5 p-8 rounded-lg hover:bg-white/10 hover:-translate-y-1 transition-all">
              <div className="absolute top-5 -right-16 text-right text-2xl font-bold text-red-600">
                2020
              </div>
              <h3 className="text-2xl font-semibold mb-4">Global Expansion</h3>
              <p className="text-gray-300 leading-relaxed">
                Tesla becomes world's most valuable automaker and opens
                Gigafactories worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 bg-white text-center">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-semibold mb-4">Leadership</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The visionaries driving Tesla's mission forward
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl mx-auto mt-16">
          <div className="bg-gray-50 rounded-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">
            <div
              className="h-96 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://www.tesla.com/sites/default/files/images/blogs/musk_2014.jpg')",
              }}
            ></div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Elon Musk</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">
                CEO & Product Architect
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-900 hover:text-red-600">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-900 hover:text-red-600">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">
            <div
              className="h-96 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://www.tesla.com/sites/default/files/images/team/drew_baglino.jpg')",
              }}
            ></div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Drew Baglino</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">
                Senior VP, Powertrain & Energy
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-900 hover:text-red-600">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-900 hover:text-red-600">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg overflow-hidden transition-all hover:-translate-y-2 hover:shadow-xl">
            <div
              className="h-96 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://www.tesla.com/sites/default/files/images/team/tom_zhu.jpg')",
              }}
            ></div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold mb-2">Tom Zhu</h3>
              <p className="text-gray-600 text-sm uppercase tracking-wider mb-4">
                Senior VP, Automotive
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-gray-900 hover:text-red-600">
                  <FaTwitter size={20} />
                </a>
                <a href="#" className="text-gray-900 hover:text-red-600">
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
