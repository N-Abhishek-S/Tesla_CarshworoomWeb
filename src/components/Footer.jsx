import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-white text-center py-12 mt-16">
        <div className="max-w-6xl mx-auto px-8 flex flex-col items-center">
          <div className="flex gap-6 mb-6">
            <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-red-500 hover:text-white hover:-translate-y-1 transition-all">
              <FaFacebookF />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-red-500 hover:text-white hover:-translate-y-1 transition-all">
              <FaTwitter />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-red-500 hover:text-white hover:-translate-y-1 transition-all">
              <FaInstagram />
            </a>
            <a href="#" className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center text-xl hover:bg-red-500 hover:text-white hover:-translate-y-1 transition-all">
              <FaYoutube />
            </a>
          </div>
          <p className="text-lg mb-6">Experience automotive perfection at Marsidi Cars</p>
          <div className="text-sm text-white/70 mt-4">&copy; 2025 Marsidi Car Show. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
