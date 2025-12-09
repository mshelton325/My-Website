import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function ResourceAccess({ 
  title, 
  description, 
  resourceType = "manual",
  downloadUrl = null,
  embedUrl = null,
  additionalResources = []
}) {
  const [showEmbed, setShowEmbed] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="text-primary-100 hover:text-white mb-4 inline-block">
            ← Back to Matt Shelton Consulting
          </Link>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            🎉 Access Granted
          </h1>
          <p className="text-primary-100 text-lg">
            Your purchased resource is ready below
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-12">
        {/* Resource Info Card */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-primary-100 rounded-lg p-4">
              {resourceType === 'manual' && (
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              )}
              {resourceType === 'video' && (
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              {resourceType === 'package' && (
                <svg className="w-8 h-8 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              )}
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {title}
              </h2>
              <p className="text-gray-600 text-lg">
                {description}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            {embedUrl && (
              <button
                onClick={() => setShowEmbed(!showEmbed)}
                className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                {showEmbed ? 'Hide' : 'View Online'}
              </button>
            )}
            
            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Copy
              </a>
            )}
          </div>

          {/* Info Box */}
          <div className="bg-primary-50 border-l-4 border-primary-700 p-4 rounded">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-primary-700 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div className="text-sm">
                <p className="font-semibold text-primary-900 mb-1">Your Access Information:</p>
                <ul className="text-primary-800 space-y-1">
                  <li>• This link is unique to you and your purchase</li>
                  <li>• You can access this resource anytime using this URL</li>
                  <li>• Bookmark this page for easy future access</li>
                  <li>• Questions? Email matt@mattshelton.co</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Embedded Content */}
        {showEmbed && embedUrl && (
          <div className="bg-white rounded-lg shadow-lg p-4 mb-8">
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0, overflow: 'hidden' }}>
              <iframe
                src={embedUrl}
                className="absolute top-0 left-0 w-full h-full rounded"
                style={{ minHeight: '800px', paddingBottom: 0 }}
                title={title}
              />
            </div>
          </div>
        )}

        {/* Additional Resources */}
        {additionalResources.length > 0 && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              📦 Bonus Materials Included
            </h3>
            <div className="space-y-3">
              {additionalResources.map((resource, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="font-semibold text-gray-900">{resource.name}</p>
                      {resource.description && (
                        <p className="text-sm text-gray-600">{resource.description}</p>
                      )}
                    </div>
                  </div>
                  {resource.url && (
                    <a
                      href={resource.url}
                      download
                      className="text-primary-700 hover:text-primary-800 font-semibold text-sm"
                    >
                      Download
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Support Section */}
        <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-3">Need Help?</h3>
          <p className="text-primary-100 mb-6">
            I'm here to support your implementation. If you have questions or need clarification on anything in this resource, don't hesitate to reach out.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:matt@mattshelton.co"
              className="bg-white text-primary-700 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Email Matt
            </a>
            <Link
              to="/contact"
              className="bg-primary-800 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors border-2 border-white"
            >
              Schedule a Call
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2">© 2024 Matt Shelton Consulting. All rights reserved.</p>
          <p className="text-sm">
            This resource is licensed for your personal/business use only. Please do not share or redistribute.
          </p>
        </div>
      </footer>
    </div>
  );
}
