import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer()  {
return(
    <>
     <footer className="bg-gray-900  dark:bg-gray-800 text-gray-300 dark:text-gray-100 py-10 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        
        {/* Section 1: Logo / Name */}
        <div>
          <h1 className="text-2xl font-bold text-white mb-2">React Training</h1>
          
        </div>

        {/* Section 2: Quick Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4">روابط سريعة</h2>
          <ul className="space-y-2">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Services</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* Section 3: Social Media */}
        <div>
          <h2 className="text-xl font-semibold mb-4">تابعنا على</h2>
          <div className="flex gap-4 text-white text-lg">
            <a href="#" className="hover:text-blue-500"><FaFacebookF /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>

      </div>

      {/* حقوق الملكية */}
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
        &copy; 2025 React Training. جميع الحقوق محفوظة.
      </div>
    </footer>
    
    </>
)
}

  

export default Footer;
