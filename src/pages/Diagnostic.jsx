import { Link } from 'react-router-dom';

/**
 * DIAGNOSTIC PAGE
 * 
 * ⚠️ INTERNAL NOTE:
 * This page embeds a Google Form for the Flooring Systems Diagnostic.
 * To update the form, replace the GOOGLE_FORM_EMBED_URL constant below.
 */

// TODO: Replace this with your actual Google Form embed URL
// Get it from: Google Form → Send → Embed HTML → Copy the src="..." URL
const GOOGLE_FORM_EMBED_URL = "https://docs.google.com/forms/d/e/PLACEHOLDER/viewform?embedded=true";

export default function Diagnostic() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Flooring Systems Diagnostic
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-12 text-center leading-relaxed">
            A structured, objective snapshot of where your operation is strong, where it's leaking margin or time, and what to fix first — without sales pressure.
          </p>

          {/* WHAT YOU'LL GET */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">What you'll get:</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  A simple scorecard across 5 core system areas
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  Your Top 3 constraint areas (the real bottlenecks)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-lg text-gray-700">
                  A short stabilization plan: what to fix first and why
                </span>
              </li>
            </ul>
          </div>

          {/* TIME + EXPECTATIONS */}
          <div className="mb-12 p-6 bg-gray-50 rounded-lg">
            <p className="text-base text-gray-700 leading-relaxed">
              This takes about 20–30 minutes. Answer based on how your business actually runs today (not how you wish it ran). You'll receive a written summary + scorecard after review.
            </p>
          </div>

          {/* START DIAGNOSTIC SECTION */}
          <div className="text-center mb-6">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
              Start the Diagnostic
            </h2>
            <p className="text-sm text-gray-500">
              No hype. No gimmicks. No sales tactics. Just clarity.
            </p>
          </div>
        </div>
      </section>

      {/* EMBEDDED GOOGLE FORM */}
      <section className="pb-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden">
            <iframe
              src={GOOGLE_FORM_EMBED_URL}
              width="100%"
              height="2000"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title="Flooring Systems Diagnostic Form"
              className="w-full"
            >
              Loading form...
            </iframe>
          </div>

          {/* POST-SUBMISSION HELPER TEXT */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-3">
              After submitting, you'll see a confirmation message.
            </p>
            <Link
              to="/diagnostic/confirmation"
              className="text-gray-900 font-medium hover:underline"
            >
              Already submitted? Click here for confirmation →
            </Link>
          </div>

          {/* BACK TO HOME */}
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 underline text-sm"
            >
              ← Back to home
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Matt Shelton
          </p>
          <p className="text-gray-600 mb-1">
            Systems-built clarity for flooring business owners
          </p>
          <p className="text-sm text-gray-500">
            Operator experience. Ethical execution. Practical results.
          </p>
        </div>
      </footer>
    </div>
  );
}
