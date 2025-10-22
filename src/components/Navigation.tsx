import { Link } from 'react-router-dom';

export default function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex space-x-8">
            <Link to="/" className="flex items-center px-2 py-2 text-gray-900">
              Home
            </Link>
            <Link to="/portfolio" className="flex items-center px-2 py-2 text-gray-900">
              Portfolio
            </Link>
            <Link to="/about" className="flex items-center px-2 py-2 text-gray-900">
              About
            </Link>
            <Link to="/contact" className="flex items-center px-2 py-2 text-gray-900">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}