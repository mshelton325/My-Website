/**
 * FIT PAGE - "Who This Is For (and Who It's Not)"
 * 
 * Purpose: Pre-qualify prospects, reinforce positioning, build trust
 * Design: Direct, honest filtering — not for everyone
 */

export default function Fit() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADLINE */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Who This Is For
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">(and Who It's Not)</span>
          </h1>
        </div>
      </section>

      {/* OPENING */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I don't need every client, so I can be direct and honest instead of saying whatever it takes to close.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            This is my filter — almost more than a sales pitch. I'm done pushing ropes.
          </p>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            This Is For You If:
          </h2>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-1">✓</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You're willing to do the work yourself — not just delegate it
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-1">✓</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You respect and invest in your employees' experience
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-1">✓</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You want to build a real system to manage and convert what you already have — not just chase more leads
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-1">✓</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You're looking for a real, repeatable process — not a quick fix
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-1">✓</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You're willing to commit to the full system — not cherry-pick pieces or doubt it before trying it
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-1">✓</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You operate ethically and value long-term reputation
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-600 text-xl mt-1">✓</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You want a business that runs without requiring your constant presence
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* WHO THIS IS NOT FOR */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            This Is NOT For You If:
          </h2>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl mt-1">✗</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You want the result but won't do the work yourself
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl mt-1">✗</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You don't respect or invest in your employees
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl mt-1">✗</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You're chasing lead volume as a number instead of building a system
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl mt-1">✗</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You're looking for a quick fix or magic bullet
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl mt-1">✗</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You doubt the system before trying it, or want to cherry-pick pieces
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl mt-1">✗</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You operate unethically or cut corners
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-600 text-xl mt-1">✗</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                You want someone to do the work for you
              </span>
            </li>
          </ul>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            If any of the above describes you, this isn't the fit — and that's okay. There are other consultants who will take your money regardless.
          </p>
        </div>
      </section>

      {/* THE DIFFERENCE */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            What Makes Working Together Different
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            If you're serious about building systems that work, we'll have a good conversation.
          </p>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            Here's what that looks like:
          </p>
          
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Plain-English over jargon</span> — I explain the why, not just the what
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Iterative, no-overwhelm implementation</span> — small steps, built to actually stick
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Systems that respect family business dynamics</span> — not generic corporate playbooks dropped on top of you
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Evidence-based over opinion-based</span> — proven, repeatable results, not gut feel
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Transferable systems, not dependency</span> — you run it without me, not the other way around
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* OPEN DOOR INVITATION */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            If This Resonates
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Here's what I've built and what I'm good at. If something specific is keeping you up at night in your business, reach out and let's talk it through.
          </p>
          
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            No pressure on either side. No commitment to rates or scope up front. Just a conversation.
          </p>
          
          <a
            href="https://forms.gle/wmRC3FWVHirc35QT9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 transition-colors"
          >
            Start a Conversation
          </a>
        </div>
      </section>

      {/* CLOSING */}
      <section className="py-16 px-4 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 leading-relaxed">
            The right fit matters more than the right pitch.
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
