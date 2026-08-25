import { Link } from 'react-router-dom';

/**
 * SPEAKING PAGE
 * 
 * Features Gold Beneath Your Feet CCA Education Day session
 * and Matt's teaching approach for independent flooring dealers
 */

export default function Speaking() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Speaking & Education
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Practical systems thinking for independent flooring dealers.
          </p>
        </div>
      </section>

      {/* GOLD BENEATH YOUR FEET - CCA EDUCATION DAY */}
      <section className="py-16 px-4 bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Gold Beneath Your Feet
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
            A CCA Education Day session focused on helping flooring dealers find hidden revenue, improve conversion, reduce operational chaos, and turn tribal knowledge into repeatable systems.
          </p>
          
          <div className="bg-white rounded-lg p-8 mb-8 text-center border border-blue-200">
            <p className="text-4xl font-bold text-gray-900 mb-2">4.89 / 5</p>
            <p className="text-base text-gray-600 mb-4">Attendee Rating</p>
            <p className="text-base text-gray-700 font-medium">
              January 2026 · CCA Education Day
            </p>
          </div>
          
          <div className="text-center mb-12">
            <Link
              to="/education-day"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              View Session Resources
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT ATTENDEES SAID */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
            What Attendees Said
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 italic mb-3">
                "Matt was inspirational. Could have used his insights 28 years ago."
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 italic mb-3">
                "Great presentation. Love the systemized approach for hiring fresh salespeople. We need to convert Tribal knowledge to systems. Would love to hear more about this topic."
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 italic mb-3">
                "I would love to get more of the actual details of his systems. We are in desperate need of great SOPs like that."
              </p>
              <p className="text-sm text-gray-600">— I-5 Carpet One</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 italic mb-3">
                "This was great! Bring him back for more."
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 italic mb-3">
                "Amazing, I wish we had more time."
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 italic mb-3">
                "90% of the Class stayed AFTER the class for more."
              </p>
              <p className="text-sm text-gray-600">— CCA attendee feedback</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="text-lg text-gray-700 italic mb-3">
                "Excellent speaker"
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
          </div>
        </div>
      </section>

      {/* TEACHING APPROACH */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Teaching Approach
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Matt spent nearly two decades inside a family flooring business — selling, managing, hiring, coaching, troubleshooting, and building systems to solve real operating problems.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            His teaching comes from lived experience, not consulting theory. He focuses on:
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                <span className="font-semibold">Practical systems thinking</span> — seeing the problems underneath the obvious problems
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                <span className="font-semibold">Real examples</span> — tools, processes, and frameworks built inside an operating business
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                <span className="font-semibold">Honest diagnosis</span> — addressing hard truths about tribal knowledge, owner dependence, and fragile systems
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                <span className="font-semibold">Actionable direction</span> — dealers leave with ideas they can implement, not just motivation
              </span>
            </li>
          </ul>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium italic">
            "Stop being the system. Start building one."
          </p>
        </div>
      </section>

      {/* POTENTIAL TOPICS */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Potential Speaking Topics
          </h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Gold Beneath Your Feet: Finding Revenue You Already Have
              </h3>
              <p className="text-base text-gray-700">
                Before chasing more leads, look at what's slipping through the cracks — opportunities already paid for, follow-up already missed, margin already lost.
              </p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                When the System Becomes a Person
              </h3>
              <p className="text-base text-gray-700">
                What happens when knowledge, decisions, and accountability live inside one person — and why that makes businesses fragile.
              </p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Why "More Leads" May Be the Wrong Answer
              </h3>
              <p className="text-base text-gray-700">
                How visibility problems, handoff problems, and accountability problems can look like demand problems — and what to fix first.
              </p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Fix the Recipe Before You Promote the Restaurant
              </h3>
              <p className="text-base text-gray-700">
                Why driving more traffic to a broken process amplifies the problem instead of solving it.
              </p>
            </div>
            
            <div className="border-l-4 border-gray-300 pl-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Building People Without Flooring Superstars
              </h3>
              <p className="text-base text-gray-700">
                How structured hiring, onboarding, and development can help dealers build capable salespeople without requiring years of prior flooring experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INQUIRY CTA */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Interested in Having Matt Speak?
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            If you're organizing an event for flooring dealers and think Matt's practical systems approach would resonate with your audience, let's talk about what you're planning.
          </p>
          <a
            href="https://forms.gle/wmRC3FWVHirc35QT9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Get in Touch
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
