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

      {/* FEATURED VIDEOS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-4xl mb-4">🎥</div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              WATCH
            </h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Teaching videos on systems thinking, operating problems, and practical solutions for flooring dealers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Video 1 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/_0cQITQITUE"
                  title="Before You Spend More on Leads, Fix This First"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Before You Spend More on Leads, Fix This First
                </h3>
                <p className="text-base text-gray-700 mb-4">
                  Why throwing more money at lead generation might be masking a deeper conversion problem in your sales process.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=_0cQITQITUE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium hover:underline inline-flex items-center"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>

            {/* Video 2 */}
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/5uzk6iAH1tM"
                  title="Why Most Sales Meetings Don't Change Anything"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Why Most Sales Meetings Don't Change Anything
                </h3>
                <p className="text-base text-gray-700 mb-4">
                  What's missing from most sales meetings that prevents real behavior change and accountability.
                </p>
                <a
                  href="https://www.youtube.com/watch?v=5uzk6iAH1tM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium hover:underline inline-flex items-center"
                >
                  Watch on YouTube →
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-sm text-gray-600 italic">
            More teaching content being added.
          </p>
        </div>
      </section>

      {/* AVAILABLE RESOURCES */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">Free Tools You Can Use Now</h2>
          <div className="bg-blue-50 border border-blue-100 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">Gold Beneath Your Feet — Resource Pack</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">Eight downloadable tools from my January 2026 CCA Education Day session, organized to help you identify one operational leak and take a practical next step.</p>
            <p className="text-sm text-gray-600 mb-6">Attendee session rating: 4.89 / 5</p>
            <Link to="/education-day" className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800">Explore the 8 Free Tools →</Link>
          </div>
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
