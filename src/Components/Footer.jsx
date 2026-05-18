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













<footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
  <nav>
    <div>
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
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Social</h6>
    <div className="grid grid-flow-col gap-4">
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
        </svg>
      </a>
      <a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="fill-current">
          <path
            d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
        </svg>
      </a>
    </div>
  </nav>
</footer>

















  );
};

export default Footer;