import Link from 'next/link';
import { FaHome, FaExclamationTriangle } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-default-50">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="flex justify-center">
          <div className="p-4 bg-danger-100 text-danger-500 rounded-full animate-bounce">
            <FaExclamationTriangle size={48} />
          </div>
        </div>

  
        <div className="space-y-2">
          <h2 className="text-4xl font-extrabold text-default-900">404</h2>
          <h3 className="text-2xl font-bold text-default-700">Page Not Found</h3>
          <p className="text-default-500">
               Sorry, the page you are looking for could not be found          </p>
        </div>


        <Link 
          href="/" 
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-xl shadow-lg hover:bg-primary-600 transition-all duration-300 transform hover:scale-105"
        >
          <FaHome size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  );
}