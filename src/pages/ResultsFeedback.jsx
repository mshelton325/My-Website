import { Link } from 'react-router-dom';

/**
 * RESULTS & FEEDBACK PAGE
 * 
 * Purpose: Central proof library containing documented results, dealer feedback,
 * professional endorsements, and systems in practice.
 * 
 * Design: Clean, credible presentation without overselling.
 */

export default function ResultsFeedback() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Results & Feedback
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Documented outcomes, dealer feedback, and what people I've worked with have to say.
          </p>
        </div>
      </section>

      {/* DOCUMENTED RESULTS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Performance & Development
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Talent Development
              </h3>
              <p className="text-base text-gray-700 leading-relaxed mb-4">
                In 2025, one salesperson Matt hired with no prior sales or flooring experience posted the highest full-year Written Net Sales among the full-year results in the 10-person core retail-sales cohort's available RFMS history from 2018–2025 — surpassing the previous high by 7.6%.
              </p>
              <p className="text-sm text-gray-600 italic">
                This result reflects structured training and accountability systems that can develop people without years of flooring experience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Systems Built
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Matt built or led roughly two dozen documented sales, marketing, and operations systems and processes over nearly two decades inside a family flooring business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEALER FEEDBACK - CCA EDUCATION DAY */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Dealer Feedback
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            CCA Education Day — January 2026
          </p>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 mb-8 text-center">
            <p className="text-4xl font-bold text-gray-900 mb-2">4.89 / 5</p>
            <p className="text-base text-gray-600 mb-4">Attendee Rating</p>
            <p className="text-base text-gray-700">
              90% of the class stayed after the scheduled session time for more
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "Matt was inspirational. Could have used his insights 28 years ago."
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "Great presentation. Love the systemized approach for hiring fresh salespeople. We need to convert Tribal knowledge to systems. Would love to hear more about this topic."
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "I would love to get more of the actual details of his systems. We are in desperate need of great SOPs like that."
              </p>
              <p className="text-sm text-gray-600">— I-5 Carpet One</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "This was great! Bring him back for more."
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "Thank you for including your tools! Great and very informative session!"
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "Amazing, I wish we had more time."
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
                "Excellent speaker"
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link
              to="/education-day"
              className="inline-block text-gray-900 font-medium hover:underline"
            >
              View Education Day Resources →
            </Link>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL ENDORSEMENTS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            What People I've Worked With Say
          </h2>
          
          <div className="space-y-8">
            {/* Keith Enslow - Full Version */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "Matt brings a rare mix of strategic insight and genuine passion to everything he takes on. He's results-driven, but never at the expense of integrity or compassion for others. Well-read and intellectually curious, he consistently brings thoughtful perspective to every conversation. I continue to be impressed by Matt's logical, thoughtful and impactful decision-making, both professionally and in his personal life. If there's a smarter, better way to do something, he'll find it—and make it happen."
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Keith Enslow</span> — Director of Finance
              </p>
            </div>
            
            {/* Ben McElroy - Full Version */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "I have found Matt to carry into every circumstance a clear, focused mind, diligent effort and a heart for those he is dealing with. I trust in him to do what he says when he says he will, and if something goes wrong, as things inevitably may, he will make it right."
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Ben McElroy</span> — Entrepreneur
              </p>
            </div>
            
            {/* Al Boulogne - Faith/Character */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed italic">
                "Matt lives his faith passionately. We met at a secular business dinner and he was eager to share his journey as a Christian with my wife and I. The Holy Spirit is moving in Matt and his calling to help disciple fellow Christians in their walk inside and outside of the workplace is something that the world needs right now. He is on fire for God and sees the places where he can apply those spiritual gifts."
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Al Boulogne</span> — Mannington
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SYSTEMS IN PRACTICE */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Systems in Practice
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            How these systems were built and deployed in a real operating environment.
          </p>
          
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              From Heroics to Systems
            </h3>
            
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              The systems grew out of nearly two decades of hands-on experience inside a family flooring business — dealing with sales development, inconsistency, accountability, lead conversion, errors, margin pressure, and leadership dependence.
            </p>
            
            <p className="text-base text-gray-700 mb-6 leading-relaxed font-medium">
              They were built because they had to work in real life, not because they sounded good in a presentation.
            </p>
            
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <p className="text-base text-gray-700 mb-3 font-semibold">
                Focus Areas:
              </p>
              <ul className="space-y-2 text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Sales development and lead conversion systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Hiring and training structured processes</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Accountability and management infrastructure</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Operational clarity and documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-gray-400 mt-1">•</span>
                  <span>Reduced dependence on tribal knowledge and individual heroics</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Working on Something Similar?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            If you're trying to solve similar problems in your flooring business, let's talk about what you're working on.
          </p>
          <a
            href="https://forms.gle/wmRC3FWVHirc35QT9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Tell Me What's Going On
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold text-gray-900 mb-2">
            Matt Shelton
          </p>
          <p className="text-gray-600 mb-4">
            Flooring operator · Systems builder · Practical problem solver
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
