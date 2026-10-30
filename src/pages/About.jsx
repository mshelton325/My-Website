/**
 * ABOUT / MISSION PAGE
 * 
 * ⚠️ INTERNAL NOTE:
 * This page is intentionally grounded and operator-focused.
 * Copy is exact - do not rewrite or add credentials/offers.
 * 
 * Purpose: Establish credibility through lived experience, not credentials.
 * Design: Calm, credible, operator-led (not consultant-led).
 */

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADLINE */}
      <section className="py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Stop Being the System. Start Building One.
          </h1>
        </div>
      </section>

      {/* OPENING: WHY I HAD TO BUILD SYSTEMS */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How I Got Here</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Early in my leadership career at our family flooring business, a longtime manager left and the retail sales team went from roughly six people to essentially two — including me. There wasn't a clear playbook to follow. Much of what made the business run lived in people's heads.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I used to describe it as being put on a treadmill running at 12 miles an hour when I'd only been conditioned for four. The customers, quotes, installations, hiring, and training didn't stop just because we were short-handed. When something broke, I became the workaround.
          </p>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I had to learn to accomplish more with less: find the wasted steps, protect the opportunities already coming in, develop people without years of experience, and turn knowledge into repeatable processes.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            That's why I care so much about systems today. They aren't about making people work harder. They're about building a business that can perform without consuming the people running it.
          </p>
        </div>
      </section>

            {/* CORE SHIFT */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            When a business runs on tribal knowledge and heroics, it only works:
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                When the right people are present
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                When nothing unusual happens
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                When the manager or key leader is available
              </span>
            </li>
          </ul>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed font-medium">
            That's not a system. That's a fragile arrangement.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I didn't want a business that only worked when key people were stressed, present, and solving problems in real time.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            I wanted a business that held together because the design did.
          </p>
        </div>
      </section>

      {/* CREDIBILITY & TRACK RECORD */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Experience
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I spent nearly two decades inside a multi-generation family flooring business — starting in sales and growing into leadership, management, coaching, systems-building, and cross-functional problem-solving.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Some of the retail salespeople I personally hired — including people with no prior sales or flooring experience — went on to become some of the strongest producers on our team. That experience shaped how I think about hiring, onboarding, coaching, accountability, and the role good systems can play in developing people.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            It also shaped how I think about a challenge many dealers raise: how to build capable teams when experienced flooring talent is difficult to find.
          </p>
        </div>
      </section>

      {/* RECENT WORK */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Recent Work
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            In January 2026, I presented at the CCA Education Day — a session focused on helping flooring dealers uncover hidden revenue, reduce operational chaos, and convert more of what they already have.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            The session was rated <span className="font-semibold">4.89 out of 5</span> by attendees. Written feedback repeatedly highlighted the practical systems, tools, and ideas dealers wanted to hear more about.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Feedback from dealers consistently highlighted the same themes: practical tools they could implement immediately, systems for converting tribal knowledge into repeatable processes, and a clear path forward without needing to rebuild everything at once.
          </p>
          
          <a
            href="/education-day"
            className="text-gray-900 font-medium hover:underline inline-flex items-center gap-2"
          >
            View the 8 resources from that session →
          </a>
        </div>
      </section>

      {/* WHAT MAKES THIS DIFFERENT */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What Makes This Different
          </h2>
          
          <ul className="space-y-4 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Not a generic sales consultant</span> — lived experience with the specific dysfunction of a family business trying to professionalize without losing what makes it itself
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Understands both sides</span> — the operational and the emotional/relational side of these businesses (family dynamics, legacy staff, succession anxiety)
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Builds transferable systems, not unnecessary dependency</span> — the goal is to make the business clearer and more capable, not make Matt the new bottleneck
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700 leading-relaxed">
                <span className="font-semibold">Leads with lead quality and management, not volume</span> — "Do you have a uniform accountability system, a set process, a recipe?" before "more leads"
              </span>
            </li>
          </ul>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            I give you the recipe and the ingredients, not just instructions to follow blindly.
          </p>
        </div>
      </section>

      {/* WHO THIS WORKS BEST FOR */}
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Who This Works Best For
          </h2>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            This approach tends to work best with owners and leaders who are willing to participate in the solution and give honest feedback about what's actually happening in the business.
          </p>
          
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            You'll probably get the most value if:
          </p>
          
          <ul className="space-y-3 mb-8">
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                You're willing to participate, test changes, and help determine what actually works in your business
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                You care about building an environment where employees can succeed
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                You're more interested in converting what you already have than just chasing more volume
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                You prefer sustainable processes over quick fixes
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-gray-400 mt-1">•</span>
              <span className="text-lg text-gray-700">
                You operate ethically and want to build a business you're proud of
              </span>
            </li>
          </ul>
          
          <p className="text-lg text-gray-700 leading-relaxed">
            If that sounds like you, we'll probably have a productive conversation. If you're looking for something different — no problem. I can point you toward other resources or approaches that might be a better fit.
          </p>
        </div>
      </section>

      {/* THE TWO MISSIONS BEHIND THIS WORK */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Why This Work Matters to Me
          </h2>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I don't want nearly two decades of lessons — including the hard ones — to disappear. I want to share practical systems, tools, and experience with other flooring owners, managers, and people coming up in the industry, especially those who feel like the business has taken over their lives.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            My hope is to help them build businesses that are more profitable, less stressful, and less dependent on constant heroics — so they have more freedom for their families, their health, and the life they want outside work.
          </p>

          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            I also have a longer-term mission close to my heart: taking children in foster care, children with disabilities or serious illnesses, and kids whose families face financial barriers out on the water to fish, explore, and experience the joy of being outdoors together.
          </p>

          <p className="text-lg text-gray-700 mb-8 leading-relaxed font-medium">
            I want to build my teaching, resources, and business work in a way that can eventually help pay for those outings — so the children and families can enjoy them at no charge. I'm working toward that vision, not claiming it's an established program today.
          </p>

          {/* AL BOULOGNE TESTIMONIAL */}
          <div className="bg-white border border-gray-200 rounded-lg p-8 mt-8">
            <p className="text-base text-gray-700 mb-4 leading-relaxed italic">
              "Matt lives his faith passionately. We met at a secular business dinner and he was eager to share his journey as a Christian with my wife and I. The Holy Spirit is moving in Matt and his calling to help disciple fellow Christians in their walk inside and outside of the workplace is something that the world needs right now. He is on fire for God and sees the places where he can apply those spiritual gifts."
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Al Boulogne</span> — Mannington
            </p>
          </div>
        </div>
      </section>

            {/* CLOSING */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            If you're looking for motivation, there are better places to find it.
          </p>
          
          <p className="text-lg text-gray-700 leading-relaxed font-medium">
            If you're looking for clarity, systems thinking, and practical help — you're in the right place.
          </p>
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
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">
              About
            </a>
            <a href="/results-feedback" className="text-gray-600 hover:text-gray-900">
              Results & Feedback
            </a>
            <a href="/insights-resources" className="text-gray-600 hover:text-gray-900">
              Insights & Resources
            </a>
            <a href="/speaking" className="text-gray-600 hover:text-gray-900">
              Speaking
            </a>
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
