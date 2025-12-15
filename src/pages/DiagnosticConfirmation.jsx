import { Link } from 'react-router-dom';

/**
 * DIAGNOSTIC CONFIRMATION PAGE
 * 
 * ⚠️ INTERNAL NOTE:
 * This page is intentionally calm and clear. No upsells, no pressure.
 * Purpose: Confirm submission and set clear expectations.
 */

export default function DiagnosticConfirmation() {
  return (
    <div className="min-h-screen bg-white">
      {/* CONFIRMATION SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            Diagnostic received — thank you.
          </h1>
          
          <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed">
            Your responses are in. You'll receive your written summary + scorecard after review.
          </p>

          {/* WHAT HAPPENS NEXT */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">What happens next:</h2>
            
            <ol className="space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold">
                  1
                </span>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I review your responses and identify the Top 3 constraints affecting performance and owner load.
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold">
                  2
                </span>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    I prepare a clear scorecard and written summary (no fluff).
                  </p>
                </div>
              </li>

              <li className="flex items-start gap-4">
                <span className="flex-shrink-0 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center font-semibold">
                  3
                </span>
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    You receive it by email with next-step recommendations you can act on immediately.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* DELIVERY TIMEFRAME */}
          <div className="mb-8">
            <p className="text-base text-gray-700 leading-relaxed mb-3">
              Typical turnaround: 3–5 business days.
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              If you don't see your diagnostic in your inbox, please check your spam or promotions folder.
            </p>
          </div>

          {/* BOUNDARY STATEMENT */}
          <div className="p-6 bg-gray-50 rounded-lg mb-8">
            <p className="text-base text-gray-700 leading-relaxed font-medium">
              This diagnostic is designed to stand on its own. There is no obligation to schedule a call or engage further.
            </p>
          </div>

          {/* OPTIONAL FINAL LINE */}
          <div className="text-center mb-12">
            <p className="text-base text-gray-600 leading-relaxed">
              If you want implementation support after reviewing your results, you'll have that option — but the diagnostic comes first.
            </p>
          </div>

          {/* BACK TO HOME */}
          <div className="text-center">
            <Link
              to="/"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Return to Home
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
