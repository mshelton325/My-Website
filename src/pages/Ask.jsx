import { Link } from 'react-router-dom';

const FORM_URL = 'https://forms.gle/wmRC3FWVHirc35QT9';

export default function Ask() {
  return (
    <div className="min-h-screen bg-white">
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-gray-500 mb-4">
            Ask Matt
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            What are you dealing with right now?
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
            I want what I share to come from real problems people are actually facing — not just topics I think sound good.
          </p>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 md:p-10 mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-5">
              Tell me what would help.
            </h2>
            <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
              <p>
                Maybe it is a sales problem, a leadership challenge, a management issue, a process that feels harder than it should, or simply the stress of carrying too much.
              </p>
              <p>
                You do not have to be in flooring or even own a business. If there is something you are trying to work through and you think my experience could help, I want to hear it.
              </p>
              <p>
                I use real questions and real problems to decide what to teach, what resources to create, and what conversations are worth having next.
              </p>
            </div>

            <div className="mt-8">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-colors"
              >
                Tell Me What's Going On
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Ask for a topic
              </h3>
              <p className="text-gray-700 leading-relaxed">
                Is there something you would like me to cover in a future video, podcast, article, or practical resource? Send it.
              </p>
            </div>

            <div className="border border-gray-200 rounded-xl p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Share a real challenge
              </h3>
              <p className="text-gray-700 leading-relaxed">
                You do not need a perfectly worded question. Tell me what is happening, what feels stuck, or what is creating stress.
              </p>
            </div>
          </div>

          <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center mb-12">
            <p className="text-xl font-semibold text-gray-900 mb-3">
              If something I share helps even one person, this work matters.
            </p>
            <p className="text-gray-700 leading-relaxed">
              A big reason I am doing this is to make useful lessons easier to find, help people feel less alone in the hard parts, and share what I have learned — including what I learned the hard way.
            </p>
          </div>

          <div className="text-center">
            <p className="text-gray-600 mb-4">
              Prefer email?
            </p>
            <a
              href="mailto:matt@mattshelton.co"
              className="text-gray-900 font-semibold hover:underline"
            >
              matt@mattshelton.co
            </a>
          </div>
        </div>
      </section>

      <footer className="py-10 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-wrap gap-x-5 gap-y-2 justify-center text-sm">
            <Link to="/" className="text-gray-600 hover:text-gray-900">Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/insights-resources" className="text-gray-600 hover:text-gray-900">Insights & Resources</Link>
            <Link to="/work-with-matt" className="text-gray-600 hover:text-gray-900">Work With Matt</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
