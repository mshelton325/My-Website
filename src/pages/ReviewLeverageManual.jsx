export default function ReviewLeverageManual() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-8 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-3">
            The Salesperson's Guide to Google Reviews
          </h1>
          <p className="text-xl text-primary-100">
            How to Turn Every Sale Into Warmer Leads, Easier Closes, and Higher Commissions
          </p>
          <p className="text-sm text-primary-200 mt-4">
            Part of the Review Leverage System by Matt Shelton
          </p>
        </div>
      </header>

      {/* Manual Content - Embedded */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Action Buttons */}
          <div className="bg-primary-50 border-b border-primary-200 p-6">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/resources/review-leverage-manual.html"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Open in New Tab
              </a>
              <a
                href="/resources/review-leverage-manual.html"
                download="Review-Leverage-Manual.html"
                className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Copy
              </a>
            </div>
            <p className="text-center text-sm text-gray-600 mt-4">
              💡 Tip: Click "Open in New Tab" for best viewing experience, or download for offline access
            </p>
          </div>

          {/* Embedded Manual */}
          <div className="p-4">
            <iframe
              src="/resources/review-leverage-manual.html"
              className="w-full border-0 rounded"
              style={{ height: '1200px', minHeight: '800px' }}
              title="Review Leverage Manual"
            />
          </div>
        </div>

        {/* What's Inside Box */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📚 What's Inside This Manual
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4">
              <div className="text-3xl">💰</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Why This Matters to YOU</h3>
                <p className="text-gray-600 text-sm">
                  How Google reviews directly impact your paycheck through warmer leads and higher commissions
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">📊</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">The Data</h3>
                <p className="text-gray-600 text-sm">
                  Real numbers showing 30-40% lead volume increase and 3x digital lead growth
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🎯</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">4-Step Capture System</h3>
                <p className="text-gray-600 text-sm">
                  Plant the seed, make the call, text the link, follow up - only 3 minutes per customer
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">💬</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Word-for-Word Scripts</h3>
                <p className="text-gray-600 text-sm">
                  Exact language for consultations, post-install calls, texts, and follow-ups
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">🔧</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">How to Use Reviews to Close</h3>
                <p className="text-gray-600 text-sm">
                  6 tactics for leveraging reviews during sales conversations and objection handling
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">📈</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Track Your Impact</h3>
                <p className="text-gray-600 text-sm">
                  Measure how reviews increase your commissions and prove the ROI to yourself
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">✅</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">30-Day Challenge</h3>
                <p className="text-gray-600 text-sm">
                  Step-by-step implementation plan to test the system and see results
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-3xl">📋</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Printable Checklist</h3>
                <p className="text-gray-600 text-sm">
                  Keep it on your desk for quick reference during customer interactions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Key Results Box */}
        <div className="mt-8 bg-gradient-to-br from-green-50 to-primary-50 rounded-lg shadow-lg p-8 border-2 border-green-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            🎯 Real Results from This System
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl font-bold text-primary-700 mb-2">30-40%</div>
              <div className="text-gray-700 font-semibold">Lead Volume Increase</div>
              <div className="text-sm text-gray-600 mt-1">During consistent review months</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-700 mb-2">3x</div>
              <div className="text-gray-700 font-semibold">Digital Leads Growth</div>
              <div className="text-sm text-gray-600 mt-1">Web forms, texts, clicks</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary-700 mb-2">70%</div>
              <div className="text-gray-700 font-semibold">Calls from Google</div>
              <div className="text-sm text-gray-600 mt-1">People viewing your reviews</div>
            </div>
          </div>
          <p className="text-center text-gray-700 mt-6 font-semibold">
            Every review you capture feeds the pipeline that keeps your calendar full of warm leads.
          </p>
        </div>

        {/* Questions Section */}
        <div className="mt-8 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            ❓ Questions About This System?
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="font-semibold text-gray-900 mb-2">💡 Want to implement this in your business?</p>
              <p className="text-gray-600 text-sm">
                I help flooring dealers build review systems, train sales teams, and create operational frameworks that reduce chaos and increase profitability.
              </p>
            </div>

            <div className="bg-primary-50 p-4 rounded-lg border-l-4 border-primary-700">
              <p className="font-semibold text-primary-900 mb-2">📧 Get in Touch</p>
              <p className="text-primary-800 text-sm mb-3">
                Schedule a consultation to discuss how this system can work for your team.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href="mailto:matt@mattshelton.consulting"
                  className="inline-block bg-primary-700 text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary-800 transition-colors text-center text-sm"
                >
                  Email Matt
                </a>
                <a
                  href="https://5175-i329azavze6e3zxg2coku-ad490db5.sandbox.novita.ai/contact"
                  className="inline-block bg-white text-primary-700 border-2 border-primary-700 px-6 py-2 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center text-sm"
                >
                  Schedule a Call
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© 2024 Matt Shelton Consulting. All rights reserved.</p>
          <p className="mt-2">This manual is provided for your review. Please do not redistribute without permission.</p>
        </div>
      </main>
    </div>
  );
}
