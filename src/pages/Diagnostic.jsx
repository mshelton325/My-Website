export default function Diagnostic() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Flooring Systems Diagnostic
        </h1>
        
        <p className="text-xl text-gray-700 mb-8">
          This diagnostic tool is currently being prepared.
        </p>
        
        <p className="text-lg text-gray-600 mb-8">
          For now, you can reach out directly:
        </p>
        
        <a
          href="mailto:matt@mattshelton.co?subject=Flooring Systems Diagnostic"
          className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
        >
          Email: matt@mattshelton.co
        </a>
        
        <div className="mt-12">
          <a
            href="/"
            className="text-gray-600 hover:text-gray-900 underline"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </div>
  );
}
