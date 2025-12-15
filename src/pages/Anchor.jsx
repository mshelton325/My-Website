import { Link } from 'react-router-dom';

export default function Anchor() {
  return (
    <div className="min-h-screen bg-white">
      {/* SECTION 1 — HERO */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Systems-built clarity for independent flooring business owners.
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-700 mb-4 leading-relaxed">
            I help owners reduce chaos, protect margin, and regain time — using real-world systems built inside an operating flooring business, not theory.
          </p>
          
          <p className="text-sm text-gray-500">
            No hype. No gimmicks. No burnout culture.
          </p>
        </div>
      </section>

      {/* SECTION 2 — HOW I WORK */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            How I Work
          </h2>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                I build systems from inside real flooring operations — not from consulting theory
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                I focus on execution and clarity, not motivation or pressure
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                I believe ethics and profitability are not opposites
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                I design businesses that work without heroics or constant owner involvement
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* SECTION 3 — PROOF SNAPSHOT */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            Documented Results
          </h2>
          
          <div className="grid md:grid-cols-2 gap-3 mb-5">
            <div className="bg-white border border-gray-200 rounded p-4 shadow-sm">
              <p className="text-gray-900 font-semibold text-base mb-0.5">60% revenue growth</p>
              <p className="text-gray-600 text-sm">($4.57M → $7.3M)</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded p-4 shadow-sm">
              <p className="text-gray-900 font-semibold text-base mb-0.5">64% marketing spend reduction</p>
              <p className="text-gray-600 text-sm">($110k → $40k annually)</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded p-4 shadow-sm">
              <p className="text-gray-900 font-semibold text-base mb-0.5">52.5% close rate</p>
              <p className="text-gray-600 text-sm">(vs. 35–40% industry average)</p>
            </div>
            
            <div className="bg-white border border-gray-200 rounded p-4 shadow-sm">
              <p className="text-gray-900 font-semibold text-base mb-0.5">20–30 hours/week owner workload</p>
              <p className="text-gray-600 text-sm">(vs. 80+ industry norm)</p>
            </div>
          </div>
          
          <p className="text-sm text-gray-500 text-center">
            These results come from real implementation in a competitive retail market. Full documentation exists.
          </p>
        </div>
      </section>

      {/* SECTION 4 — ONE NEXT STEP */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            Start With Clarity
          </h2>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            If this way of thinking resonates, the simplest place to begin is with a clear, objective look at where your operation stands today.
          </p>
          
          <Link
            to="/diagnostic"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors mb-3"
          >
            Start With the Flooring Systems Diagnostic
          </Link>
          
          <p className="text-sm text-gray-500">
            No pressure. No sales tactics. Just clarity.
          </p>
        </div>
      </section>

      {/* SECTION 5 — FOOTER */}
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
