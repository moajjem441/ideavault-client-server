// src/components/Footer.jsx (Next.js version)
import Link from 'next/link';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    
    // <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white pt-12 pb-6">
    //   <div className="container mx-auto px-4 md:px-8">
    //     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
    //       {/* Platform Links */}
    //       <div>
    //         <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">IdeaVault</h3>
    //         <ul className="space-y-2 text-gray-300">
    //           <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
    //           <li><Link href="/ideas" className="hover:text-blue-400 transition">All Ideas</Link></li>
    //           <li><Link href="/categories/tech" className="hover:text-blue-400 transition">Tech</Link></li>
    //           <li><Link href="/categories/health" className="hover:text-blue-400 transition">Health</Link></li>
    //           <li><Link href="/categories/ai" className="hover:text-blue-400 transition">AI</Link></li>
    //           <li><Link href="/categories/education" className="hover:text-blue-400 transition">Education</Link></li>
    //         </ul>
    //       </div>

    //       {/* Contact Info */}
    //       <div>
    //         <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">Contact</h3>
    //         <ul className="space-y-3 text-gray-300">
    //           <li className="flex items-center gap-2">
    //             <FaEnvelope className="text-blue-400" />
    //             <a href="mailto:support@ideavault.com" className="hover:text-blue-400">support@ideavault.com</a>
    //           </li>
    //           <li className="flex items-center gap-2">
    //             <FaPhoneAlt className="text-blue-400" />
    //             <span>+1 (555) 123-4567</span>
    //           </li>
    //           <li className="flex items-center gap-2">
    //             <FaMapMarkerAlt className="text-blue-400" />
    //             <span>123 Innovation St, Silicon Valley, CA</span>
    //           </li>
    //         </ul>
    //       </div>

    //       {/* Social Links */}
    //       <div>
    //         <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">Follow Us</h3>
    //         <div className="flex gap-4">
    //           <a href="https://x.com/ideavault" target="_blank" rel="noopener noreferrer" 
    //              className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
    //             <SiX className="w-5 h-5" />
    //           </a>
    //           <a href="https://github.com/ideavault" target="_blank" rel="noopener noreferrer"
    //              className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
    //             <FaGithub className="w-5 h-5" />
    //           </a>
    //           <a href="https://linkedin.com/company/ideavault" target="_blank" rel="noopener noreferrer"
    //              className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
    //             <FaLinkedin className="w-5 h-5" />
    //           </a>
    //           <a href="https://facebook.com/ideavault" target="_blank" rel="noopener noreferrer"
    //              className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
    //             <FaFacebook className="w-5 h-5" />
    //           </a>
    //         </div>
    //         <div className="mt-4">
    //           <p className="text-gray-400 text-sm">Join our community for daily startup insights!</p>
    //         </div>
    //       </div>

    //       {/* Newsletter */}
    //       <div>
    //         <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">Stay Updated</h3>
    //         <p className="text-gray-300 text-sm mb-3">Get the latest ideas and trends directly in your inbox.</p>
    //         <div className="flex flex-col sm:flex-row gap-2">
    //           <input type="email" placeholder="Your email" 
    //                  className="px-3 py-2 rounded bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-blue-500" />
    //           <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition">Subscribe</button>
    //         </div>
    //       </div>
    //     </div>

    //     {/* Copyright Section */}
    //     <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
    //       <p>&copy; {currentYear} IdeaVault – Startup Idea Sharing Platform. All rights reserved.</p>
    //       <p className="mt-1">
    //         <Link href="/privacy" className="hover:text-blue-400 mx-2">Privacy Policy</Link> |
    //         <Link href="/terms" className="hover:text-blue-400 mx-2">Terms of Service</Link>
    //       </p>
    //     </div>
    //   </div>
    // </footer>





<footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10  lg:flex justify-between items-center">
  <nav>
    <div >
             <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">IdeaVault</h3>
             <ul className="space-y-2 text-gray-300">
               <li><Link href="/" className="hover:text-blue-400 transition">Home</Link></li>
               <li><Link href="/ideas" className="hover:text-blue-400 transition">All Ideas</Link></li>
               <li><Link href="/categories/tech" className="hover:text-blue-400 transition">Tech</Link></li>
               <li><Link href="/categories/health" className="hover:text-blue-400 transition">Health</Link></li>
               <li><Link href="/categories/ai" className="hover:text-blue-400 transition">AI</Link></li>
               <li><Link href="/categories/education" className="hover:text-blue-400 transition">Education</Link></li>
             </ul>
           </div>
  </nav>
  <nav>
    {/* Contact Info */}
           <div>
             <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">Contact</h3>
             <ul className="space-y-3 text-gray-300">
               <li className="flex items-center gap-2">
                 <FaEnvelope className="text-blue-400" />
                 <a href="mailto:support@ideavault.com" className="hover:text-blue-400">support@ideavault.com</a>
               </li>
               <li className="flex items-center gap-2">
                 <FaPhoneAlt className="text-blue-400" />
                 <span>+1 (555) 123-4567</span>
               </li>
               <li className="flex items-center gap-2">
                 <FaMapMarkerAlt className="text-blue-400" />
                 <span>123 Innovation St, Silicon Valley, CA</span>
               </li>
             </ul>
           </div>
    </nav>
  <nav>
    <div>
          <h3 className="text-xl font-bold mb-4 border-l-4 border-blue-500 pl-3">Follow Us</h3>
          <div className="flex gap-4">
            <a href="https://x.com/ideavault" target="_blank" rel="noopener noreferrer" 
               className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
              <SiX className="w-5 h-5" />
            </a>
            <a href="https://github.com/ideavault" target="_blank" rel="noopener noreferrer"
               className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
              <FaGithub className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/ideavault" target="_blank" rel="noopener noreferrer"
               className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
              <FaLinkedin className="w-5 h-5" />
            </a>
            <a href="https://facebook.com/ideavault" target="_blank" rel="noopener noreferrer"
               className="bg-gray-700 p-3 rounded-full hover:bg-blue-500 transition">
              <FaFacebook className="w-5 h-5" />
            </a>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
           <p>&copy; {currentYear} IdeaVault – Startup Idea Sharing Platform. All rights reserved.</p>
           <p className="mt-1">
             <Link href="/privacy" className="hover:text-blue-400 mx-2">Privacy Policy</Link> |
             <Link href="/terms" className="hover:text-blue-400 mx-2">Terms of Service</Link>
           </p>
         </div>
        </div>
  </nav>
</footer>

















  );
};

export default Footer;