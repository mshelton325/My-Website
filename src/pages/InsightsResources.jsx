import { Link } from 'react-router-dom';

/**
 * INSIGHTS & RESOURCES PAGE
 * 
 * Learning hub - foundation for future scalable education ecosystem
 * Structure: WATCH (videos) / READ (field notes) / USE (tools)
 */

export default function InsightsResources() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Insights & Resources
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Learn something. Try something. Use something.
          </p>
          <p className="text-base text-gray-600 max-w-2xl mx-auto">
            Practical tools, ideas, and systems thinking for independent flooring dealers — whether you work with me or not.
          </p>
        </div>
      </section>

      {/* SECTION CATEGORIES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* WATCH */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🎥</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                WATCH
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Teaching videos on systems thinking, operating problems, and practical solutions for flooring dealers.
              </p>
              <p className="text-sm text-gray-500 mt-4 italic">
                More teaching content being added.
              </p>
            </div>
            
            {/* READ */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">📝</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                READ
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Field notes, practical insights, and operating philosophy from nearly two decades inside a flooring business.
              </p>
              <p className="text-sm text-gray-500 mt-4 italic">
                Articles and insights coming soon.
              </p>
            </div>
            
            {/* USE */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4">🛠️</div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                USE
              </h2>
              <p className="text-base text-gray-700 leading-relaxed">
                Checklists, scripts, worksheets, and tools you can download and use immediately in your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AVAILABLE RESOURCES */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            Available Resources
          </h2>
          
          <div className="space-y-6">
            {/* CCA Education Day Pack */}
            <div className="bg-blue-50 border border-blue-100 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                CCA Education Day Resource Pack
              </h3>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">
                8 downloadable tools from the January 2026 "Gold Beneath Your Feet" session, which attendees rated 4.89 / 5.
              </p>
              <Link
                to="/education-day"
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors"
              >
                View All 8 Resources →
              </Link>
            </div>
            
            {/* Individual Tool Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Owner One-Page Diagnostic
                </h4>
                <p className="text-base text-gray-700 mb-4">
                  Quickly identify where opportunity is being lost after the lead comes in — before blaming marketing, pricing, or people.
                </p>
                <Link
                  to="/education-day"
                  className="text-gray-900 font-medium hover:underline text-sm"
                >
                  View Resource →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Call-Voicemail-Text Follow-Up Playbook
                </h4>
                <p className="text-base text-gray-700 mb-4">
                  A practical follow-up rhythm designed to keep opportunities moving without relying on pressure or constant manual remembering.
                </p>
                <Link
                  to="/education-day"
                  className="text-gray-900 font-medium hover:underline text-sm"
                >
                  View Resource →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  Quote Accuracy & Margin Protection Checklist
                </h4>
                <p className="text-base text-gray-700 mb-4">
                  A checklist designed to surface quote, scope, pricing, and handoff details that can contribute to margin loss, callbacks, or rework.
                </p>
                <Link
                  to="/education-day"
                  className="text-gray-900 font-medium hover:underline text-sm"
                >
                  View Resource →
                </Link>
              </div>
              
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <h4 className="text-lg font-bold text-gray-900 mb-2">
                  15-Minute Weekly KPI Cadence
                </h4>
                <p className="text-base text-gray-700 mb-4">
                  Pattern-based management that creates accountability without micromanagement.
                </p>
                <Link
                  to="/education-day"
                  className="text-gray-900 font-medium hover:underline text-sm"
                >
                  View Resource →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FUTURE CONTENT THEMES */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            What's Coming
          </h2>
          <p className="text-base text-gray-600 mb-8 text-center">
            Planned topics for future articles, videos, and resources:
          </p>
          
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-base text-gray-700">
                Fix the Recipe Before You Promote the Restaurant
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-base text-gray-700">
                When the System Becomes a Person
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-base text-gray-700">
                Why More Flooring Leads May Be the Wrong Answer
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-base text-gray-700">
                Why Flooring Claims Become Chaos
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-base text-gray-700">
                A Sale Isn't Finished When the Customer Says Yes
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Have a Specific Problem?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            If there's a flooring-business problem you're working through and you're wondering whether I have a tool, resource, or idea that could help, let me know what's going on.
          </p>
          <a
            href="https://forms.gle/wmRC3FWVHirc35QT9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Tell Me What You're Working On
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Matt Shelton
          </p>
          <p className="text-gray-600 mb-4">
            Flooring-industry systems builder · Coach · Practical problem solver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link to="/" className="text-gray-600 hover:text-gray-900">
              Home
            </Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/results-feedback" className="text-gray-600 hover:text-gray-900">
              Results & Feedback
            </Link>
            <Link to="/insights-resources" className="text-gray-600 hover:text-gray-900">
              Insights & Resources
            </Link>
            <Link to="/speaking" className="text-gray-600 hover:text-gray-900">
              Speaking
            </Link>
            <a
              href="https://forms.gle/wmRC3FWVHirc35QT9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
