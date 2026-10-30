/**
 * ABOUT / MISSION PAGE
 *
 * Operator-led personal story, experience, approach, and two missions.
 * Keep claims grounded; preserve the long-term water mission as an aspiration.
 */

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. MEET MATT */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-10">
            <img
              src="/matt-shelton-headshot.jpg"
              alt="Matt Shelton"
              className="w-44 sm:w-52 flex-shrink-0 rounded-lg shadow-md"
            />
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                Meet Matt
              </h1>
              <p className="text-xl font-semibold text-gray-900 mb-5">
                Stop being the system. Start building one.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I'm Matt Shelton. I spent nearly two decades in a family flooring business, from sales through leadership and operations. The biggest lesson I took away is that a successful business shouldn't depend on a few people carrying everything on their shoulders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. HOW I GOT HERE */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How I Got Here</h2>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            Early in my leadership career, a longtime manager left and our retail sales team went from roughly six people to essentially two, including me. We had capable people, but much of the knowledge needed to keep things moving wasn't yet written down in a clear playbook.
          </p>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            I described it as stepping onto a treadmill set to 12 miles an hour when I'd only been conditioned for four. Customers, quotes, installations, hiring, and training didn't stop. When something needed attention, I often became the workaround.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I couldn't solve that by simply working harder. I had to find wasted steps, protect opportunities we already had, develop people, and turn experience into repeatable processes. That's where my belief in better systems came from: not theory, but necessity.
          </p>
        </div>
      </section>

      {/* 3. WHAT I LEARNED AND BUILT */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What I Learned and Built</h2>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            Over the years, my work stretched across hiring, sales coaching, training, pricing, reporting, customer issues, and operations. I helped turn information that lived in people's heads into clearer processes, tools, and expectations teams could use.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Some people I hired with no flooring or sales experience became among our strongest sales producers. That taught me how much potential can be unlocked through thoughtful hiring, practical training, and consistent coaching rather than assuming experienced talent is the only answer.
          </p>
        </div>
      </section>

      {/* 4. EXPERIENCE AND CREDIBILITY */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Experience &amp; Credibility</h2>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            In January 2026, I spoke at CCA Education Day about uncovering hidden revenue, improving sales execution, and reducing operational chaos without automatically adding more leads or complexity.
          </p>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            Attendees rated that session <span className="font-semibold">4.89 out of 5</span>. Their written feedback highlighted the practical systems and tools they could take back to their own businesses.
          </p>
          <a
            href="/education-day"
            className="text-gray-900 font-medium underline underline-offset-4 hover:text-gray-600"
          >
            Explore the eight resources from that session
          </a>
        </div>
      </section>

      {/* 5. HOW I APPROACH HELPING OTHERS */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How I Approach Helping Others</h2>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            I know the practical and personal sides of a family business: the relationships, the responsibility, and the pressure to keep everyone moving. I try to meet people where they are, ask better questions, and help them see what's actually getting in the way.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            I'm interested in solutions people can understand, test, and eventually run without depending on me. Whether you're an owner, manager, salesperson, or someone learning the industry, I hope what I share helps you work with greater clarity and confidence.
          </p>
        </div>
      </section>

      {/* 6. WHY THIS WORK MATTERS */}
      <section className="py-14 px-4 bg-gray-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why This Work Matters to Me</h2>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            My first mission is to pass along what nearly two decades taught me, including the mistakes and hard lessons. I want flooring owners, managers, and the next generation to have a better chance of building profitable, sustainable businesses with room for their families, health, and lives outside work.
          </p>
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            My second mission is personal. I hope to create free experiences on the water for children in foster care, children with disabilities or serious illnesses, and families who might not otherwise have the opportunity: fishing, boating, exploring nature, and making memories together.
          </p>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            I hope the teaching, resources, and business I build can help fund those outings. This is a future goal, not a program I'm operating today. Both missions reflect the same belief: work should help us create more room for what matters.
          </p>

          {/* Faith testimonial preserved verbatim */}
          <blockquote className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
            <p className="text-base text-gray-700 mb-4 leading-relaxed italic">
              "Matt lives his faith passionately. We met at a secular business dinner and he was eager to share his journey as a Christian with my wife and I. The Holy Spirit is moving in Matt and his calling to help disciple fellow Christians in their walk inside and outside of the workplace is something that the world needs right now. He is on fire for God and sees the places where he can apply those spiritual gifts."
            </p>
            <p className="text-sm text-gray-600">
              <span className="font-semibold">Al Boulogne</span> — Mannington
            </p>
          </blockquote>
        </div>
      </section>

      {/* CLOSING INVITATION */}
      <section className="py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg text-gray-700 mb-5 leading-relaxed">
            If something in my experience resonates with you, I hope you'll explore the resources I've shared. And if there's a challenge you're working through, I'd be glad to hear about it.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            <a href="/insights-resources" className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600">
              Explore free resources
            </a>
            <a href="https://forms.gle/wmRC3FWVHirc35QT9" target="_blank" rel="noopener noreferrer" className="font-medium text-gray-900 underline underline-offset-4 hover:text-gray-600">
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold text-gray-900 mb-2">Matt Shelton</p>
          <p className="text-gray-600 mb-4">
            Flooring-industry systems builder · Coach · Practical problem solver
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center text-sm">
            <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
            <a href="/about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="/results-feedback" className="text-gray-600 hover:text-gray-900">Results &amp; Feedback</a>
            <a href="/insights-resources" className="text-gray-600 hover:text-gray-900">Insights &amp; Resources</a>
            <a href="/speaking" className="text-gray-600 hover:text-gray-900">Speaking</a>
            <a href="https://forms.gle/wmRC3FWVHirc35QT9" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
