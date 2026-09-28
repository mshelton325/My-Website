import { Link } from 'react-router-dom';

/**
 * 404 NOT FOUND PAGE
 * 
 * Simple, polished fallback for invalid routes
 */

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Page Not Found
          </h1>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            The page you're looking for doesn't exist or may have been moved.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Go to Home
            </Link>
            <Link
              to="/work-with-matt"
              className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Work With Matt
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
