import { Link } from 'react-router-dom';

/**
 * HOME PAGE - THE PERSON BEHIND A BODY OF THINKING, SYSTEMS, EDUCATION & RESOURCES
 * 
 * Strategy: Position Matt as the SOURCE of practical flooring-business knowledge, not just a consultant-for-hire
 * Build architecture for future scalable learning ecosystem (self-guided, guided, direct work)
 * 
 * Design Philosophy: 
 * - Clean, premium, calm, modern, operator-led
 * - Experienced, grounded, human
 * - Show systems thinking
 * - Make it easy to learn, explore, connect
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Get More Control From the Flooring Business You Already Have.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
            Before adding more leads, more people, or more complexity, it may be worth looking at what's already slipping through the cracks.
          </p>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Nearly two decades inside a family flooring business taught me that growth problems are not always demand problems. Sometimes they are visibility problems, handoff problems, accountability problems, people-development problems, pricing problems — or systems trapped inside one person's head.
          </p>
          
          <p className="text-2xl font-semibold text-gray-900 mb-8 italic">
            Stop being the system. Start building one.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://forms.gle/wmRC3FWVHirc35QT9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Tell Me What You're Working On
            </a>
            <a
              href="#how-i-think"
              className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
            >
              See How I Think
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            Flooring-industry leader · Systems builder · CCA Education Day speaker · 4.89/5 attendee rating
          </p>
        </div>
      </section>

      {/* MEET MATT VIDEO SPACE - Placeholder for future video */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 border-2 border-gray-200 rounded-lg p-12 text-center">
            <div className="max-w-sm mx-auto mb-6">
              <img
                src="/matt-shelton-headshot.jpg"
                alt="Matt Shelton"
                className="rounded-lg w-full shadow-lg"
              />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Meet Matt — Why I'm Building This
            </h3>
            <p className="text-base text-gray-600 mb-6 leading-relaxed">
              Nearly two decades inside a family flooring business gave me a front-row seat to where independent dealers quietly lose control, capacity, and profit. I'm building this to share what I've learned — and create something that outlasts my time in the industry.
            </p>
            <Link
              to="/about"
              className="inline-block text-gray-900 font-medium hover:underline"
            >
              Read More About Matt →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2 — CREDIBILITY STRIP */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">Nearly 20 Years</div>
              <div className="text-sm text-gray-600">Flooring-industry leadership experience</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">CCA Speaker</div>
              <div className="text-sm text-gray-600">Education Day 2026</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.89 / 5</div>
              <div className="text-sm text-gray-600">Attendee rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — THE PROBLEM BENEATH THE PROBLEM */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            The Problem Beneath the Problem
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              When flooring dealers face pressure, the natural response is often to reach for <strong>more</strong>:
            </p>
            
            <ul className="space-y-2 ml-8">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>More leads</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>More advertising</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Another salesperson</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Another software tool</span>
              </li>
            </ul>
            
            <p>
              Sometimes those are necessary. But sometimes more inputs simply amplify a weak underlying process.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-gray-900 p-6 my-8">
              <p className="text-xl font-semibold text-gray-900 italic">
                "If you have a leak, more water doesn't fix the bucket."
              </p>
            </div>
            
            <p>
              Over nearly two decades inside a family flooring business, I kept seeing a pattern: the real problem was often not <em>what was missing</em>, but <em>what was breaking</em> inside the systems that were already there.
            </p>
            
            <div className="bg-gray-50 border-l-4 border-gray-900 p-6 my-8">
              <p className="text-xl font-semibold text-gray-900 italic mb-3">
                "The system had become a person."
              </p>
              <p className="text-base text-gray-700">
                When the owner, manager, or strongest salesperson becomes the place where knowledge, decisions, follow-up, or accountability lives, the business becomes fragile.
              </p>
            </div>
            
            <p>
              My work focuses on helping dealers see those leaks, strengthen the underlying systems, and reduce dependence on individual heroics.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 4 — FIVE METHODOLOGY PILLARS */}
      <section className="py-16 px-4 bg-gray-50" id="how-i-think">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Five Areas I Help Dealers Strengthen
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            These are not theoretical categories. They are the real patterns I've worked on inside an operating flooring business.
          </p>
          
          <div className="space-y-6">
            {/* Pillar 1 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-gray-400 flex-shrink-0">1</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Get More from the Opportunities You Already Have
                  </h3>
                  <p className="text-base text-gray-700 mb-4 leading-relaxed">
                    Lead visibility, lead ownership, qualifying, follow-up, salesperson capacity, project development, marketing accountability, reviews and referrals.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1 font-semibold">Dealer-language problem:</p>
                    <p className="text-sm text-gray-700 italic mb-2">"We need more leads."</p>
                    <p className="text-sm text-gray-600 mb-1 font-semibold">My question:</p>
                    <p className="text-sm text-gray-700">"What is happening to the opportunities you already have?"</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pillar 2 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-gray-400 flex-shrink-0">2</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Build People Who Can Execute a Process
                  </h3>
                  <p className="text-base text-gray-700 mb-4 leading-relaxed">
                    Hiring, onboarding, training, coaching, expectations, accountability, manager rhythm, reducing dependence on finding an experienced flooring superstar.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1 font-semibold">Dealer-language problem:</p>
                    <p className="text-sm text-gray-700 italic">"Good people are impossible to find."</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pillar 3 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-gray-400 flex-shrink-0">3</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Protect the Profit You've Already Earned
                  </h3>
                  <p className="text-base text-gray-700 mb-4 leading-relaxed">
                    Pricing discipline, margin, vendor accountability, claims, callbacks, rework, discounting, avoidable leakage.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1 font-semibold">Dealer-language problem:</p>
                    <p className="text-sm text-gray-700 italic">"We're busy, but the money doesn't seem to show it."</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pillar 4 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-gray-400 flex-shrink-0">4</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Make the Handoffs Harder to Break
                  </h3>
                  <p className="text-base text-gray-700 mb-4 leading-relaxed">
                    Proposal clarity, drawings, internal notes, sales → operations, scheduling, installation, customer expectations, photos/documentation, closeout.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1 font-semibold">Dealer-language problem:</p>
                    <p className="text-sm text-gray-700 italic">"Somebody said something, but nobody knew about it."</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Pillar 5 */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 border-2 border-gray-900">
              <div className="flex items-start gap-4">
                <div className="text-3xl font-bold text-gray-900 flex-shrink-0">5</div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Give the Owner Control Without Making the Owner the System
                  </h3>
                  <p className="text-base text-gray-700 mb-4 leading-relaxed">
                    Visibility, KPIs, one source of truth, delegation, management cadence, accountability, surfacing problems earlier, reducing owner dependence.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-600 mb-1 font-semibold">Dealer-language problem:</p>
                    <p className="text-sm text-gray-700 italic mb-2">"Everything still comes back to me."</p>
                    <p className="text-sm text-gray-600 mt-3">
                      <strong>This is the destination the other four contribute toward.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 5 — THINGS I'VE BUILT */}
      <section className="py-16 px-4" id="things-built">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Things I've Built
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Tangible systems and tools — not vague expertise.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Sales Development System */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sales Development System
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                A structured approach to hiring, onboarding, training, and accountability focused on developing retail salespeople — including those without prior flooring experience.
              </p>
              <a
                href="https://forms.gle/wmRC3FWVHirc35QT9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium hover:underline"
              >
                Ask About This →
              </a>
            </div>
            
            {/* Lead Conversion & Follow-Up System */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Lead Conversion & Follow-Up System
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Call → voicemail → text rhythms, pipeline visibility, and lead-ownership discipline designed to create more consistent follow-up while protecting salesperson time.
              </p>
              <Link
                to="/education-day"
                className="text-gray-900 font-medium hover:underline"
              >
                View Example →
              </Link>
            </div>
            
            {/* Review & Reputation System */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Review & Reputation System
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Processes for building and leveraging customer reviews to improve lead quality and reduce reliance on expensive paid advertising.
              </p>
              <a
                href="https://forms.gle/wmRC3FWVHirc35QT9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 font-medium hover:underline"
              >
                Ask About This →
              </a>
            </div>
            
            {/* Manager KPI / Accountability Tools */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Manager KPI / Accountability Tools
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                15-minute weekly cadences, scorecards, and pattern-based management that creates accountability without micromanagement.
              </p>
              <Link
                to="/education-day"
                className="text-gray-900 font-medium hover:underline"
              >
                See Resources →
              </Link>
            </div>
            
            {/* Quote & Margin Protection Tools */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quote & Margin Protection Tools
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Lightweight accuracy checks that reduce silent margin erosion, callbacks, and rework without slowing sales down.
              </p>
              <Link
                to="/education-day"
                className="text-gray-900 font-medium hover:underline"
              >
                See Resources →
              </Link>
            </div>
            
            {/* SOP / Process Tools */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SOP / Process Tools
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Frameworks for converting tribal knowledge into documented processes that work for average performers, not just your best people.
              </p>
              <Link
                to="/education-day"
                className="text-gray-900 font-medium hover:underline"
              >
                See Resources →
              </Link>
            </div>
            
            {/* CCA Education Day Resource Pack */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 md:col-span-2 bg-blue-50">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                CCA Education Day Resource Pack
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                8 downloadable tools focused on finding hidden revenue, improving conversion, and reducing operational chaos — rated 4.89/5 by attendees.
              </p>
              <Link
                to="/education-day"
                className="text-gray-900 font-medium hover:underline"
              >
                View All Resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — PROFESSIONAL TESTIMONIALS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            What People Say
          </h2>
          
          <div className="space-y-8">
            {/* Keith Enslow */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                "If there's a smarter, better way to do something, he'll find it—and make it happen."
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Keith Enslow</span> — Director of Finance
              </p>
            </div>
            
            {/* Ben McElroy */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <p className="text-xl text-gray-700 mb-6 leading-relaxed italic">
                "I have found Matt to carry into every circumstance a clear, focused mind, diligent effort and a heart for those he is dealing with. I trust in him to do what he says when he says he will, and if something goes wrong, as things inevitably may, he will make it right."
              </p>
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Ben McElroy</span> — Entrepreneur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 7 — RESULTS & FEEDBACK PREVIEW */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Results & Feedback
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
            The systems I've built grew out of necessity — they had to work in real life, not just sound good in a presentation.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Talent Development Result */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Talent Development
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                In 2025, one salesperson I hired with no prior sales or flooring experience went on to set a new full-year sales high within our core retail-sales cohort, surpassing the previous best by 7.6%.
              </p>
            </div>
            
            {/* Systems Built */}
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Systems Built
              </h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Built or led roughly two dozen documented sales, marketing, and operations systems addressing sales development, inconsistency, accountability, lead conversion, margin pressure, and leadership dependence.
              </p>
            </div>
          </div>
          
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-8 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-lg text-gray-700 mb-2 leading-relaxed italic">
                  "Great presentation. Love the systemized approach for hiring fresh salespeople. We need to convert Tribal knowledge to systems."
                </p>
                <p className="text-sm text-gray-600">
                  — CCA Education Day attendee
                </p>
              </div>
              <div className="text-center flex-shrink-0">
                <p className="text-3xl font-bold text-gray-900">4.89 / 5</p>
                <p className="text-sm text-gray-600">Session Rating</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/results-feedback"
              className="inline-block text-gray-900 font-medium hover:underline text-lg"
            >
              See More Results & Feedback →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 8 — GOLD BENEATH YOUR FEET PHILOSOPHY */}
      <section className="py-20 px-4 bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Gold Beneath Your Feet
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed mb-12">
            <p className="text-center max-w-3xl mx-auto">
              Sometimes the next opportunity is not outside the business. It may already be sitting inside:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                <p className="text-base text-gray-700">Leads already paid for</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                <p className="text-base text-gray-700">Existing customers</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                <p className="text-base text-gray-700">Current employees</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                <p className="text-base text-gray-700">Knowledge trapped in someone's head</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                <p className="text-base text-gray-700">Margin leaking from a process</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                <p className="text-base text-gray-700">Callbacks and rework</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                <p className="text-base text-gray-700">Missed follow-up</p>
              </div>
              <div className="bg-white p-4 rounded-lg border border-blue-200 text-center">
                <p className="text-base text-gray-700">Poor handoffs</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg p-8 mb-8 text-center border-2 border-gray-900">
            <p className="text-2xl md:text-3xl font-bold text-gray-900 italic mb-4">
              "Stop being the system. Start building one."
            </p>
            <p className="text-base text-gray-600">
              This is the idea I keep coming back to.
            </p>
          </div>
          
          <div className="text-center">
            <Link
              to="/about"
              className="inline-block text-gray-900 font-medium hover:underline text-lg"
            >
              Read More About How I Think →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — INSIGHTS & RESOURCES PREVIEW */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Insights & Resources
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
            Learn something. Try something. Use something.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* WATCH */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl mb-4">🎥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">WATCH</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Teaching videos and practical demonstrations
              </p>
            </div>
            
            {/* READ */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">READ</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Field notes, insights, and operating philosophy
              </p>
            </div>
            
            {/* USE */}
            <div className="bg-white p-8 rounded-lg border border-gray-200 text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">USE</h3>
              <p className="text-base text-gray-700 leading-relaxed">
                Checklists, scripts, worksheets, and downloadable tools
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
              Available Now: CCA Education Day Resource Pack
            </h3>
            <p className="text-base text-gray-700 mb-4 leading-relaxed text-center">
              8 downloadable tools focused on finding hidden revenue, improving conversion, and reducing operational chaos.
            </p>
            <div className="text-center">
              <Link
                to="/education-day"
                className="inline-block text-gray-900 font-medium hover:underline"
              >
                View Resources →
              </Link>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-sm text-gray-600 mb-4">
              More practical resources are being added.
            </p>
            <Link
              to="/insights-resources"
              className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Explore Insights & Resources
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 10 — WAYS TO LEARN/WORK WITH MATT */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Ways to Learn From / Work With Matt
          </h2>
          <p className="text-xl text-gray-700 mb-12 text-center leading-relaxed max-w-3xl mx-auto">
            Different businesses need different amounts of help.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Pathway 1: Learn */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4 text-center">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Learn from Matt
              </h3>
              <p className="text-base text-gray-700 mb-4 leading-relaxed text-center">
                Ideas, videos, practical tools, and resources dealers can use on their own.
              </p>
              <div className="text-center">
                <Link
                  to="/insights-resources"
                  className="text-gray-900 font-medium hover:underline"
                >
                  Explore Resources →
                </Link>
              </div>
            </div>
            
            {/* Pathway 2: Get Guidance */}
            <div className="bg-white p-8 rounded-lg border border-gray-200">
              <div className="text-4xl mb-4 text-center">💬</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Get Guidance
              </h3>
              <p className="text-base text-gray-700 mb-4 leading-relaxed text-center">
                For dealers who want a second set of eyes while applying ideas or working through a specific problem.
              </p>
              <div className="text-center">
                <a
                  href="https://forms.gle/wmRC3FWVHirc35QT9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-900 font-medium hover:underline"
                >
                  Tell Me What You're Working On →
                </a>
              </div>
            </div>
            
            {/* Pathway 3: Work Directly */}
            <div className="bg-white p-8 rounded-lg border-2 border-gray-900">
              <div className="text-4xl mb-4 text-center">🤝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                Work Directly with Matt
              </h3>
              <p className="text-base text-gray-700 mb-4 leading-relaxed text-center">
                For situations requiring deeper diagnosis, system design, implementation help, or selected hands-on involvement.
              </p>
              <div className="text-center">
                <Link
                  to="/work-with-matt"
                  className="text-gray-900 font-medium hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-base text-gray-600 mb-6">
              Not sure which pathway makes sense? Start by telling me what you're working on.
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
        </div>
      </section>
      
      {/* SECTION 11 — ABOUT PREVIEW */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <img
                src="/matt-shelton-headshot.jpg"
                alt="Matt Shelton"
                className="rounded-lg w-full max-w-xs mx-auto shadow-lg"
              />
            </div>
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About Matt
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Nearly two decades of hands-on experience inside a family flooring business: selling, managing, hiring, coaching, troubleshooting, building systems, solving operating problems.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Over time, I began seeing the same pattern: Many problems that looked like "sales problems" or "people problems" were often system problems underneath.
              </p>
              <Link
                to="/about"
                className="inline-block text-gray-900 font-medium hover:underline text-lg"
              >
                Read Matt's Story →
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* SECTION 12 — WHY I'M BUILDING THIS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
            Why I'm Building This
          </h2>
          
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              After nearly two decades inside a family flooring business, I want to share the lessons, mistakes, systems, tools, and experience accumulated over that time rather than letting that knowledge simply disappear.
            </p>
            
            <p>
              I also have a broader life mission: eventually creating experiences on the water for foster kids, underprivileged kids, and their families — fishing, boating, exploring nature, spending meaningful time outdoors together.
            </p>
            
            <p className="font-medium">
              This is part of what I hope this next chapter gives me the capacity to do.
            </p>
          </div>
        </div>
      </section>
      {/* SECTION 13 — FINAL OPEN-DOOR CTA */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            What Are You Trying to Solve?
          </h2>
          
          <p className="text-xl text-gray-700 mb-8 leading-relaxed">
            You don't need to know which "service" you need. If there's a problem in your flooring business you're trying to solve, tell me what's going on. I may already have a tool, process, or resource that can help. If not, I'll tell you whether it's something I can help with.
          </p>
          
          <a
            href="https://forms.gle/wmRC3FWVHirc35QT9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-10 py-5 rounded-lg text-xl font-medium hover:bg-gray-800 transition-colors"
          >
            Tell Me What's Going On
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
            <Link to="/work-with-matt" className="text-gray-600 hover:text-gray-900">
              Work With Matt
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
