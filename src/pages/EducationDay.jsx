/**
 * EDUCATION DAY LANDING PAGE
 * 
 * ⚠️ INTERNAL NOTE:
 * This is a standalone resource delivery page for "Gold Beneath Your Feet" session.
 * Copy is intentionally precise - do not rewrite or summarize.
 * 
 * Purpose: Deliver promised resources, build trust, position as operator (not vendor).
 * Design: Calm, credible, owner-focused. No hype, no pressure.
 */

export default function EducationDay() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Thanks for attending Gold Beneath Your Feet
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
            Below are the resources I promised — designed to help you identify leverage that already exists inside your business.
          </p>
          
          <p className="text-sm text-gray-500">
            No upsell. No pitch. Just practical tools you can actually use.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            If you're like most owners, the challenge isn't effort — it's knowing where design actually matters.
          </p>
          
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The tools below are meant to help you:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                See where opportunity is leaking between lead and profit
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                Focus on one meaningful fix instead of chasing everything at once
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                Reduce noise, stress, and unnecessary complexity
              </span>
            </li>
          </ul>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            Use them in order, or start with whichever one speaks to you most.
          </p>
        </div>
      </section>

      {/* DELIVERABLES SECTION */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* RESOURCE 1 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Opportunity Leak Map
            </h2>
            <p className="text-base text-gray-600 mb-6 font-medium">
              Visual Diagnostic
            </p>
            
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              This is a visual map of the most common places opportunity leaks after a lead comes in — from first contact through install and follow-up.
            </p>
            
            <p className="text-base text-gray-700 mb-3 leading-relaxed">
              Use it to quickly identify:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Where your process creates uncertainty
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Where handoffs break down
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Where small design changes can have outsized impact
                </span>
              </li>
            </ul>
            
            <a
              href="#"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors"
            >
              Download: Opportunity Leak Map (PDF)
            </a>
          </div>

          {/* RESOURCE 2 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Owner Self-Diagnosis Worksheet
            </h2>
            <p className="text-base text-gray-600 mb-6 font-medium">
              Clarity Before Action
            </p>
            
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              This short worksheet helps you step out of the weeds and assess your business at an owner level.
            </p>
            
            <p className="text-base text-gray-700 mb-3 leading-relaxed">
              It's designed to surface:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Which systems are helping you
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Which ones are quietly draining energy or profit
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Where not to spend time right now
                </span>
              </li>
            </ul>
            
            <a
              href="#"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors"
            >
              Download: Owner Self-Diagnosis Worksheet (PDF)
            </a>
          </div>

          {/* RESOURCE 3 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              One-Leak 30-Day Design Sprint
            </h2>
            <p className="text-base text-gray-600 mb-6 font-medium">
              Focused Execution Plan
            </p>
            
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              Most owners try to fix too much at once. This sprint is built to do the opposite.
            </p>
            
            <p className="text-base text-gray-700 mb-3 leading-relaxed">
              It walks you through:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Choosing one meaningful constraint
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Designing guardrails instead of micromanaging
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Making progress in 30 days without overwhelming your team
                </span>
              </li>
            </ul>
            
            <a
              href="#"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors"
            >
              Download: One-Leak 30-Day Design Sprint (PDF)
            </a>
          </div>

          {/* RESOURCE 4 */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Owner Reflection & Follow-Up Prompt
            </h2>
            <p className="text-base text-gray-600 mb-6 font-medium">
              Turn Insight into Action
            </p>
            
            <p className="text-base text-gray-700 mb-4 leading-relaxed">
              This is a short written reflection designed to be completed after the session — or later, when things quiet down.
            </p>
            
            <p className="text-base text-gray-700 mb-3 leading-relaxed">
              It helps you:
            </p>
            
            <ul className="space-y-2 mb-6">
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Clarify what actually resonated
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Decide what deserves attention now
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-gray-400 mt-1">•</span>
                <span className="text-base text-gray-700">
                  Avoid losing momentum when you return to day-to-day operations
                </span>
              </li>
            </ul>
            
            <a
              href="#"
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors"
            >
              Download: Owner Reflection Prompt (PDF)
            </a>
          </div>

        </div>
      </section>

      {/* WHY THIS APPROACH WORKS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
            Most businesses don't need more ideas.
          </p>
          
          <p className="text-lg text-gray-700 mb-3 leading-relaxed">
            They need:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                Fewer assumptions
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                Clearer design
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                Less reliance on heroics
              </span>
            </li>
          </ul>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            The goal of these tools isn't to overhaul your business — it's to help you design around what already exists, so things feel lighter instead of heavier.
          </p>
        </div>
      </section>

      {/* ABOUT THE SPEAKER */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            About the Speaker
          </h2>
          
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            I run a flooring business.
          </p>
          
          <p className="text-base text-gray-700 mb-3 leading-relaxed">
            This work didn't come from theory or consulting frameworks — it came from being in the middle of the mess:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-base text-gray-700">
                Carrying the business when systems didn't exist
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-base text-gray-700">
                Training teams without relying on "superstars"
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-base text-gray-700">
                Learning the hard way where profit and energy actually leak
              </span>
            </li>
          </ul>
          
          <p className="text-base text-gray-700 mb-6 leading-relaxed">
            I care about systems because they create stability — not just financially, but emotionally for owners and teams.
          </p>
          
          <a
            href="#"
            className="text-gray-900 font-medium hover:underline"
          >
            About & Mission
          </a>
        </div>
      </section>

      {/* SOFT CLOSE */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            If something here helped you see your business differently, I'm glad.
          </p>
          
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Use what's useful. Ignore the rest.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            And if you want to talk through a specific situation, feel free to find me this week.
          </p>
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
