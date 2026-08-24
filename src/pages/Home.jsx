import { Link } from 'react-router-dom';

/**
 * HOME PAGE - CREDIBILITY HUB & PASSIVE BUSINESS DEVELOPMENT ASSET
 * 
 * Strategy: Position Matt as flooring operator + systems builder + practical problem solver
 * NOT primarily as a generic "consultant"
 * 
 * Design Philosophy: 
 * - Clean, premium, calm, modern, operator-led
 * - Avoid hype, excessive animation, giant walls of copy
 * - Show credibility rather than claim it
 * - Make it easy to reach out about any problem
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Practical systems for independent flooring businesses — built by someone who has actually had to make them work.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Nearly two decades inside a family flooring business taught me where good companies quietly lose sales, margin, time, and good people. I build practical systems, tools, and processes that help owners fix those leaks without turning the business upside down.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="#things-built"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              See What I've Built
            </a>
            <a
              href="https://forms.gle/wmRC3FWVHirc35QT9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
            >
              Tell Me What You're Working On
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            Flooring operator · Systems builder · CCA Education Day speaker · 4.89/5 attendee rating
          </p>
        </div>
      </section>

      {/* SECTION 2 — DOCUMENTED PROOF */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">Nearly 20 Years</div>
              <div className="text-sm text-gray-600">Inside an independent family flooring business</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">60% Growth</div>
              <div className="text-sm text-gray-600">Revenue: $4.57M → $7.3M</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">52.5%</div>
              <div className="text-sm text-gray-600">Close Rate</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">$110K → $40K</div>
              <div className="text-sm text-gray-600">Annual marketing spend reduction</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">4.89 / 5</div>
              <div className="text-sm text-gray-600">CCA Education Day attendee rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 — EARLY THIRD-PARTY PROOF */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-blue-50 border border-blue-100 rounded-lg p-8">
            <p className="text-lg text-gray-700 mb-4 leading-relaxed italic">
              "Great presentation. Love the systemized approach for hiring fresh salespeople. We need to convert Tribal knowledge to systems. Would love to hear more about this topic."
            </p>
            <p className="text-sm text-gray-600 mb-6">
              — CCA Education Day attendee
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-blue-200">
              <div className="text-center sm:text-left">
                <p className="text-2xl font-bold text-gray-900">4.89 / 5</p>
                <p className="text-sm text-gray-600">Session Rating</p>
              </div>
              <a
                href="/results-feedback"
                className="text-gray-900 font-medium hover:underline text-sm"
              >
                See More Dealer Feedback →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PROBLEMS I'VE WORKED ON */}
      <section className="py-16 px-4 bg-gray-50" id="problems">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Problems I've Worked On
          </h2>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Real issues I've encountered and built systems to solve — inside an operating flooring business.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Sales Conversion & Follow-Up
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Lead ownership, follow-up, pipeline visibility, closing discipline, and lost-opportunity analysis.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Hiring & Salesperson Development
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Creating structured systems that can develop people without years of flooring experience.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Accountability & Management
              </h3>
              <p className="text-gray-700 leading-relaxed">
                KPIs, scorecards, manager rhythms, pipeline review, and accountability without constant chasing.
              </p>
            </div>
            
            {/* Card 4 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                SOPs & Operational Clarity
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Turning tribal knowledge and inconsistent execution into processes people can actually follow.
              </p>
            </div>
            
            {/* Card 5 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Reviews, Reputation & Lead Quality
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Building repeatable systems around customer reviews, reputation, and stronger inbound opportunity.
              </p>
            </div>
            
            {/* Card 6 */}
            <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Margin & Execution Leaks
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Quote accuracy, handoffs, callbacks, claims, documentation, and the small breakdowns that quietly cost money.
              </p>
            </div>
          </div>
          
          {/* Different Problem Card */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Have a Different Problem?
              </h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                I've encountered plenty of strange, specific flooring-business problems over the years. If something is keeping you up at night and you're wondering whether I've dealt with it before, ask me.
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
                A repeatable system that takes people with zero flooring or sales background and develops them into top performers — not occasionally, but as a pattern.
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
                Call → voicemail → text rhythms, pipeline visibility, and lead ownership discipline that protects time while increasing response rates.
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

      {/* SECTION 7 — COMPACT REAL-WORLD STORY */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            From Heroics to Systems
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The systems I've built grew out of necessity — running and improving a real flooring operation while dealing with sales development, inconsistency, accountability challenges, lead conversion problems, errors, margin pressure, and owner dependence.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
            They were built because they had to work in real life, not because they sounded good in a presentation.
          </p>
          
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
            <p className="text-base text-gray-700 mb-3 leading-relaxed">
              Over nearly two decades:
            </p>
            <ul className="space-y-2 text-base text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Grew revenue from $4.57M to $7.3M (60% growth)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Reduced annual marketing spend from $110K to $40K</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Achieved 52.5% close rate through systematic follow-up and conversion processes</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span>Repeatedly developed salespeople with zero flooring experience into top performers</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 8 — CCA EDUCATION DAY */}
      <section className="py-16 px-4 bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">
            Gold Beneath Your Feet
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 text-center leading-relaxed max-w-3xl mx-auto">
            A CCA Education Day session focused on helping flooring dealers find hidden revenue, improve conversion, reduce operational chaos, and turn tribal knowledge into repeatable systems.
          </p>
          
          <div className="bg-white rounded-lg p-8 mb-8 text-center border border-blue-200">
            <p className="text-3xl font-bold text-gray-900 mb-2">4.89 / 5</p>
            <p className="text-base text-gray-600 mb-4">Attendee Rating</p>
            <p className="text-base text-gray-700">
              90% of the class stayed after the scheduled session for more
            </p>
          </div>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <p className="text-base text-gray-700 italic mb-3">
                "Matt was inspirational. Could have used his insights 28 years ago."
              </p>
              <p className="text-sm text-gray-600">— CCA Member</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg border border-blue-200">
              <p className="text-base text-gray-700 italic mb-3">
                "I would love to get more of the actual details of his systems. We are in desperate need of great SOPs like that."
              </p>
              <p className="text-sm text-gray-600">— I-5 Carpet One</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link
              to="/education-day"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              View Education Day Resources
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 9 — RESOURCES (simplified for now) */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Practical Tools You Can Use
          </h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I believe in showing how I think, not just telling you to trust me. The tools and resources on this site are designed to be immediately useful — whether you work with me or not.
          </p>
          <Link
            to="/education-day"
            className="inline-block border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-50 transition-colors"
          >
            View Resources
          </Link>
        </div>
      </section>

      {/* SECTION 10 — SHORT ABOUT SECTION */}
      <section className="py-16 px-4 bg-gray-50">
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
                Matt spent nearly two decades inside a multi-generation family flooring business, moving from sales into leadership, training, systems development, and cross-functional problem solving.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                His focus became finding repeatable ways to make the business less dependent on tribal knowledge, individual heroics, and constant management intervention.
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

      {/* SECTION 11 — FINAL OPEN-DOOR CTA */}
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
            Flooring operator · Systems builder · Practical problem solver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <Link to="/about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link to="/education-day" className="text-gray-600 hover:text-gray-900">
              Resources
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
