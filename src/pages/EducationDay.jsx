/**
 * EDUCATION DAY LANDING PAGE - REFINED VERSION
 * 
 * ⚠️ INTERNAL NOTE:
 * Updated structure: More owner-focused, clearer flow, better positioning.
 * Copy is exact - do not rewrite or summarize.
 * 
 * Purpose: Deliver resources, build trust, position as operator.
 * Design: Calm confidence, sequential flow, no hype.
 */

export default function EducationDay() {
  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Gold Beneath Your Feet
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">Stop Chasing. Start Converting.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed max-w-3xl mx-auto">
            A practical owner-level system for uncovering hidden revenue, reducing chaos, and converting more of what you already have — without adding headcount.
          </p>
          
          <p className="text-base text-gray-600">
            Thank you for attending the CCA Education Day session. The resources below are the exact tools referenced during the presentation.
          </p>
        </div>
      </section>

      {/* HOW TO USE THIS PAGE */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Start Here (5 Minutes)
          </h2>
          
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            You do not need to download or use everything at once.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The goal is clarity — not activity.
          </p>
          
          <p className="text-lg text-gray-700 mb-3 leading-relaxed">
            If you take just one action after today's session, let it be this:
          </p>
          
          <ol className="space-y-2 mb-6 ml-6">
            <li className="text-lg text-gray-700">
              1. Identify your biggest internal leak
            </li>
            <li className="text-lg text-gray-700">
              2. Fix that one thing first
            </li>
          </ol>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            The resources below are designed to be used sequentially, not all at once.
          </p>
        </div>
      </section>

      {/* PRIMARY OWNER DIAGNOSTIC */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Step 1: Find Your Biggest Leak
          </h2>
          
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            This short diagnostic helps owners quickly identify where opportunity is being lost after the lead comes in — before blaming marketing, pricing, or people.
          </p>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
            Use this first. Everything else builds on it.
          </p>
          
          <div className="space-y-4">
            <a
              href="/pdfs/opportunity-leak-map.pdf"
              download
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Download: Owner One-Page Diagnostic
            </a>
            
            <div className="mt-4">
              <a
                href="/pdfs/owner-self-diagnosis-worksheet.pdf"
                download
                className="text-base text-gray-600 hover:text-gray-900 underline"
              >
                Optional: Owner Reflection Worksheet
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CORE EXECUTION TOOLS */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Step 2: Fix the Leak (Execution Tools)
          </h2>
          
          <p className="text-lg text-gray-700 mb-12 leading-relaxed">
            Once you know where the problem is, these tools help you design the fix — without rewriting your entire business.
          </p>

          {/* TOOL BLOCK A - ONE-LEAK 30-DAY SPRINT (MOVED TO TOP) */}
          <div className="mb-12 pb-12 border-b border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              One Leak, 30 Days
            </h3>
            
            <p className="text-base text-gray-700 mb-6 leading-relaxed">
              A short sprint guide to fix one operational or sales leak at a time — instead of attempting a full overhaul.
            </p>
            
            <a
              href="/pdfs/one-leak-30-day-sprint.pdf"
              download
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors"
            >
              Download: One-Leak 30-Day Sprint Guide
            </a>
          </div>

          {/* PLACEHOLDERS FOR FUTURE TOOLS */}
          <div className="space-y-12">
            {/* Tool Block B - Follow-Up (Coming Soon) */}
            <div className="pb-12 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Sales Follow-Up & Conversion
              </h3>
              
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                A proven call → voicemail → text rhythm that protects your time, humanizes follow-up, and increases response without pressure.
              </p>
              
              <div className="space-y-3">
                <a
                  href="/pdfs/call-voicemail-text-playbook.pdf"
                  download
                  className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors mr-4"
                >
                  Download: Call-Voicemail-Text Follow-Up Playbook
                </a>
                <a
                  href="/pdfs/follow-up-enforcement-sop.pdf"
                  download
                  className="inline-block text-gray-600 hover:text-gray-900 underline text-base"
                >
                  Manager Version: Follow-Up Enforcement SOP
                </a>
              </div>
            </div>

            {/* Tool Block C - Quote Accuracy (Coming Soon) */}
            <div className="pb-12 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Quote Accuracy & Margin Protection
              </h3>
              
              <p className="text-base text-gray-700 mb-6 leading-relaxed">
                A lightweight accuracy check designed to reduce silent margin erosion, callbacks, and rework — without slowing sales down.
              </p>
              
              <a
                href="/pdfs/quote-accuracy-checklist.pdf"
                download
                className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors"
              >
                Download: Quote Accuracy & Margin Protection Checklist
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* MANAGEMENT & ACCOUNTABILITY */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Step 3: Reinforce Without Micromanaging
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Systems only work when they're reinforced — but reinforcement does not mean hovering or approving every action.
          </p>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            These tools are designed for pattern-based management, not daily intervention.
          </p>
          
          <div>
            <a
              href="/pdfs/weekly-kpi-cadence.pdf"
              download
              className="inline-block bg-gray-900 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-gray-800 transition-colors"
            >
              Download: 15-Minute Weekly KPI Performance Cadence
            </a>
            <p className="text-sm text-gray-500 mt-3">
              Designed for owners and GMs
            </p>
          </div>
        </div>
      </section>

      {/* OPTIONAL NEXT STEP */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Optional Next Step
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            If this session helped you see things differently — and you'd like support turning clarity into execution — you're welcome to reach out.
          </p>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I work with a limited number of owners who want systems that reduce chaos, improve conversion, and hold up without constant oversight.
          </p>
          
          <div>
            <a
              href="/private-note"
              className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
            >
              Quiet Intake Form
            </a>
            <p className="text-sm text-gray-500 mt-3">
              No pitch. No obligation. Used to understand fit.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT / POSITIONING */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            About Matt
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I'm an operator first — not a theorist.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I run a flooring business and built these tools out of necessity: manager turnover, inconsistent execution, margin erosion, and the constant pressure of being the backstop.
          </p>
          
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            The systems you see here were designed to:
          </p>
          
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                Work with real people
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                Reduce dependency on heroics
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                Convert more opportunity without adding staff
              </span>
            </li>
          </ul>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            My focus is simple: help owners design businesses that perform without constant supervision.
          </p>
          
          <div className="mt-8">
            <a
              href="/about"
              className="text-gray-900 font-medium hover:underline"
            >
              Read full mission →
            </a>
          </div>
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
