// src/components/Footer.jsx (Next.js version)
// import Link from 'next/link';
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
// import { SiX } from 'react-icons/si';

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (


// <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10  lg:flex justify-between items-center">
//   <nav>
//     <div >
//              <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">IdeaVault</h3>
//              <ul className="space-y-2 text-gray-300">
//                <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
//                <li><Link href="/ideas" className="hover:text-blue-400 transition">All Ideas</Link></li>
//                <li><Link href="/categories/tech" className="hover:text-blue-400 transition">Tech</Link></li>
//                <li><Link href="/categories/health" className="hover:text-blue-400 transition">Health</Link></li>
//                <li><Link href="/categories/ai" className="hover:text-blue-400 transition">AI</Link></li>
//                <li><Link href="/categories/education" className="hover:text-blue-400 transition">Education</Link></li>
//              </ul>
//            </div>
//   </nav>
//   <nav>
//     {/* Contact Info */}
//            <div>
//              <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">Contact</h3>
//              <ul className="space-y-3 text-gray-300">
//                <li className="flex items-center gap-2">
//                  <FaEnvelope className="text-blue-400" />
//                  <a href="mailto:support@ideavault.com" className="hover:text-blue-400">support@ideavault.com</a>
//                </li>
//                <li className="flex items-center gap-2">
//                  <FaPhoneAlt className="text-blue-400" />
//                  <span>+1 (555) 123-4567</span>
//                </li>
//                <li className="flex items-center gap-2">
//                  <FaMapMarkerAlt className="text-blue-400" />
//                  <span>123 Innovation St, Silicon Valley, CA</span>
//                </li>
//              </ul>
//            </div>
//     </nav>
//   <nav>
//     <div>
//           <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">Follow Us</h3>
//           <div className="flex gap-4">
//             <a href="https://x.com/ideavault" target="_blank" rel="noopener noreferrer" 
//                className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
//               <SiX className="w-5 h-5" />
//             </a>
//             <a href="https://github.com/ideavault" target="_blank" rel="noopener noreferrer"
//                className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
//               <FaGithub className="w-5 h-5" />
//             </a>
//             <a href="https://linkedin.com/company/ideavault" target="_blank" rel="noopener noreferrer"
//                className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
//               <FaLinkedin className="w-5 h-5" />
//             </a>
//             <a href="https://facebook.com/ideavault" target="_blank" rel="noopener noreferrer"
//                className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
//               <FaFacebook className="w-5 h-5" />
//             </a>
//           </div>
//           <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
//            <p>&copy; {currentYear} IdeaVault – Startup Idea Sharing Platform. All rights reserved.</p>
//            <p className="mt-1">
//              <Link href="/privacy" className="hover:text-blue-400 mx-2">Privacy Policy</Link> |
//              <Link href="/terms" className="hover:text-blue-400 mx-2">Terms of Service</Link>
//            </p>
//          </div>
//         </div>
//   </nav>
// </footer>


//   );
// };

// export default Footer;


import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-default-100 text-default-800 border-t border-default-200  mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
   
        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold border-l-4 border-primary pl-3 text-default-900">
            IdeaVault
          </h3>
          <ul className="space-y-2 text-default-600 font-medium">
            <li><Link href="/" className="hover:text-primary transition duration-200">Home</Link></li>
            <li><Link href="/ideas" className="hover:text-primary transition duration-200">All Ideas</Link></li>
            <li><Link href="/my-ideas" className="hover:text-primary transition duration-200">My Ideas</Link></li>
            <li><Link href="/add-ideas" className="hover:text-primary transition duration-200">Add Ideas</Link></li>
            <li><Link href="/my-interaction" className="hover:text-primary transition duration-200">My Interaction</Link></li>
            
          </ul>
        </div>




        <div className="flex flex-col gap-3">
          <h3 className="text-xl font-bold border-l-4 border-primary pl-3 text-default-900">
            Contact
          </h3>
          <ul className="space-y-3 text-default-600 font-medium">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-primary" />
              <a href="mailto:support@ideavault.com" className="hover:text-primary transition duration-200">
                support@ideavault.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-primary" />
              <span>123 Innovation St, Silicon Valley, CA</span>
            </li>
          </ul>
        </div>






        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold border-l-4 border-primary pl-3 text-default-900">
            Follow Us
          </h3>
          <div className="flex gap-3">
            <a href="https://x.com/ideavault" target="_blank" rel="noopener noreferrer" 
               className="bg-default-200 p-3 rounded-full text-default-700 hover:bg-primary hover:text-white transition duration-300 shadow-sm">
              <SiX className="w-5 h-5" />
            </a>
            <a href="https://github.com/ideavault" target="_blank" rel="noopener noreferrer"
               className="bg-default-200 p-3 rounded-full text-default-700 hover:bg-primary hover:text-white transition duration-300 shadow-sm">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/ideavault" target="_blank" rel="noopener noreferrer"
               className="bg-default-200 p-3 rounded-full text-default-700 hover:bg-primary hover:text-white transition duration-300 shadow-sm">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/ideavault" target="_blank" rel="noopener noreferrer"
               className="bg-default-200 p-3 rounded-full text-default-700 hover:bg-primary hover:text-white transition duration-300 shadow-sm">
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>


      <div className="border-t border-default-200 bg-default-50">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-default-500 text-sm font-medium">
          <p>&copy; {currentYear} IdeaVault – Startup Idea Sharing Platform. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-primary transition duration-200">Privacy Policy</Link>
            <span className="text-default-300">|</span>
            <Link href="/terms" className="hover:text-primary transition duration-200">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;