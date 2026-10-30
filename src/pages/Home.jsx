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

      {/* SIMPLE PROBLEM AREAS */}
      <section id="how-i-think" className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-center">What I Help Dealers See More Clearly</h2>
          <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto mb-10">
            Before adding more complexity, look at what is already costing you time, customers, or margin.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Leads & Sales Execution</h3>
              <p className="text-gray-700 leading-relaxed">Understand what happens between the first customer conversation and a completed sale — including qualifying, follow-up, and lost opportunities.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">People & Repeatable Processes</h3>
              <p className="text-gray-700 leading-relaxed">Make hiring, training, coaching, and handoffs more consistent without depending on one exceptional employee.</p>
            </div>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-bold mb-3">Owner Visibility & Profit Protection</h3>
              <p className="text-gray-700 leading-relaxed">Spot avoidable rework, margin leakage, and accountability gaps before they become another fire to put out.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED VIDEO PREVIEW */}
      <section className="py-16 px-4 bg-blue-50 border-y border-blue-100">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Learn From Real Experience
            </h2>
            <p className="text-lg text-gray-700">
              Teaching videos on systems thinking and practical solutions for flooring dealers.
            </p>
          </div>
          
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
              <Link
                to="/insights-resources"
                className="inline-block text-gray-900 font-medium hover:underline"
              >
                Watch More Videos & Access Resources →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ONE PRACTICAL RESOURCE PATH */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Start With Something You Can Use</h2>
          <p className="text-lg text-gray-700 mb-6">Explore free tools from my 2026 CCA Education Day presentation, including a one-page diagnostic for identifying your biggest operational leak.</p>
          <Link to="/education-day" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors">Explore the Free Resource Pack →</Link>
          <p className="mt-5 text-sm text-gray-600">Or <Link to="/insights-resources" className="underline hover:text-gray-900">browse all videos and resources</Link>.</p>
        </div>
      </section>

      {/* CONCISE PROOF */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-8">Experience Behind the Ideas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-center mb-8">
            <div className="bg-white border border-gray-200 rounded-lg p-5"><p className="text-2xl font-bold">Nearly 20 Years</p><p className="text-sm text-gray-600 mt-2">Inside a family flooring business</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-5"><p className="text-2xl font-bold">CCA Speaker</p><p className="text-sm text-gray-600 mt-2">Education Day 2026</p></div>
            <div className="bg-white border border-gray-200 rounded-lg p-5"><p className="text-2xl font-bold">4.89 / 5</p><p className="text-sm text-gray-600 mt-2">Attendee session rating</p></div>
          </div>
          <blockquote className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-lg p-6 text-center">
            <p className="text-gray-700 italic mb-3">“Great presentation. Love the systemized approach for hiring fresh salespeople. We need to convert Tribal knowledge to systems.”</p>
            <p className="text-sm text-gray-600">CCA Education Day attendee</p>
          </blockquote>
          <div className="text-center mt-6">
            <Link to="/results-feedback" className="font-medium text-gray-900 underline hover:text-gray-700">See more results and feedback →</Link>
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

      