import { Link } from 'react-router-dom';

/**
 * WORK WITH MATT PAGE
 * 
 * Three pathways: Learn from Matt / Get Guidance / Work Directly with Matt
 * Problem-first approach, no rigid pricing or offers
 */

export default function WorkWithMatt() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Different Businesses Need Different Amounts of Help
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Tell me what you're trying to solve — we'll figure out what makes sense from there.
          </p>
        </div>
      </section>

      {/* THREE PATHWAYS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {/* Pathway 1: Learn from Matt */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">📚</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    1. Learn from Matt
                  </h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    Ideas, videos, practical tools, and resources dealers can use on their own.
                  </p>
                  <p className="text-base text-gray-600 mb-6">
                    For dealers who prefer self-guided learning and want access to systems thinking, frameworks, and downloadable resources they can implement at their own pace.
                  </p>
                  <Link
                    to="/insights-resources"
                    className="inline-block text-gray-900 font-medium hover:underline"
                  >
                    Browse Resources →
                  </Link>
                </div>
              </div>
            </div>

            {/* Pathway 2: Get Guidance */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-4xl">💬</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    2. Get Guidance
                  </h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    For dealers who want a second set of eyes while applying ideas or working through a specific problem.
                  </p>
                  <p className="text-base text-gray-600 mb-6">
                    This might look like reviewing your approach to a hiring decision, talking through a systems-design problem, or getting feedback on a process you're building.
                  </p>
                  <a
                    href="https://forms.gle/wmRC3FWVHirc35QT9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-900 font-medium hover:underline"
                  >
                    Tell Me What You're Working On →
                  </a>
                </div>
              </div>
            </div>

            {/* Pathway 3: Work Directly with Matt */}
            <div className="bg-white p-8 rounded-lg border-2 border-blue-200 bg-blue-50">
              <div className="flex items-start gap-4">
                <div className="text-4xl">🤝</div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    3. Work Directly with Matt
                  </h2>
                  <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                    For situations requiring deeper diagnosis, system design, implementation help, or selected hands-on involvement.
                  </p>
                  <p className="text-base text-gray-600 mb-6">
                    This might include diagnosing where a business is losing control, building a sales-development system, creating accountability infrastructure, or working through complex operating problems that require sustained attention.
                  </p>
                  <a
                    href="https://forms.gle/wmRC3FWVHirc35QT9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-gray-900 font-medium hover:underline"
                  >
                    Start a Conversation →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM EXAMPLES */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            What Are You Trying to Solve?
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
            You don't need to know which pathway makes sense yet. Tell me what's going on, and we'll figure out the right approach together.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Problem Card 1 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Lead & Opportunity Visibility
              </h3>
              <p className="text-base text-gray-700">
                Where are opportunities going? Who owns what? What's falling through the cracks?
              </p>
            </div>
            
            {/* Problem Card 2 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Inconsistent Sales Execution
              </h3>
              <p className="text-base text-gray-700">
                Some salespeople close, some don't. No clear process. Tribal knowledge everywhere.
              </p>
            </div>
            
            {/* Problem Card 3 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Hiring, Training & Accountability
              </h3>
              <p className="text-base text-gray-700">
                Can't find experienced people. New hires struggle. No structured development path.
              </p>
            </div>
            
            {/* Problem Card 4 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Owner Dependence
              </h3>
              <p className="text-base text-gray-700">
                Everything comes back to the owner. Business doesn't run when they're not there.
              </p>
            </div>
            
            {/* Problem Card 5 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Pricing, Margin & Leakage
              </h3>
              <p className="text-base text-gray-700">
                Busy but the money doesn't show it. Discounting, errors, callbacks quietly eroding profit.
              </p>
            </div>
            
            {/* Problem Card 6 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Sales-to-Installation Handoffs
              </h3>
              <p className="text-base text-gray-700">
                "Somebody said something, but nobody knew about it." Chaos at the handoff.
              </p>
            </div>
            
            {/* Problem Card 7 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Manager Visibility & Control
              </h3>
              <p className="text-base text-gray-700">
                Managers don't have visibility. No one source of truth. Reactive instead of proactive.
              </p>
            </div>
            
            {/* Problem Card 8 */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">
                Process & Operating Systems
              </h3>
              <p className="text-base text-gray-700">
                Everything's informal. Tribal knowledge. Every person does it differently.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-6">
              If something on this list sounds familiar — or if you're dealing with something different — let me know what's going on.
            </p>
            <a
              href="https://forms.gle/wmRC3FWVHirc35QT9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-10 py-5 rounded-lg text-xl font-medium hover:bg-gray-800 transition-colors"
            >
              Tell Me What You're Working On
            </a>
          </div>
        </div>
      </section>

      {/* PHILOSOPHY */}
      <section className="py-16 px-4 bg-gray-50 border-y border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl font-semibold text-gray-900 mb-6 italic">
            "Stop being the system. Start building one."
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Nearly two decades inside a family flooring business taught me that when knowledge, decisions, and accountability live inside one person, the business becomes fragile. The work I do focuses on helping dealers build systems that work without constant heroics.
          </p>
        </div>
      </section>

      {/* START WITH THE PROBLEM */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Start With the Problem
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed text-center">
            You don't need to know which kind of help makes sense before reaching out. Some dealers need an idea or resource. Some want guidance applying it. Others need deeper involvement.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed text-center">
            Start by telling me what's happening.
          </p>
          <div className="text-center">
            <a
              href="https://forms.gle/wmRC3FWVHirc35QT9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Start a Conversation
            </a>
          </div>
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
