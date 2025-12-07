import { Link } from 'react-router-dom';
import { ChartIcon, TargetIcon, CogIcon, ShieldIcon } from '../components/Icons';

export default function Services() {
  return (
    <div className="">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Services
          </h1>
          <p className="text-xl text-primary-100">
            Proven, plug-and-play systems for independent flooring dealers who want less chaos, more consistency, and sustainable growth.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-8 md:py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Built for Real-World Implementation
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            No theory. No fluff. Just practical systems you can implement immediately to grow sales, protect margins, and get your life back.
          </p>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-8 md:py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto space-y-20">
          
          {/* Service 1: Review-First Marketing */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-primary-700 p-8 text-white flex flex-col justify-center">
                <div className="mb-4">
                  <ChartIcon className="w-20 h-20" />
                </div>
                <h3 className="text-3xl font-bold">Review-First Marketing Systems</h3>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Reduce Ad Spend by 50%+ While Bringing in Warmer, More Qualified Leads
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Stop throwing money at paid ads that bring in tire-kickers and price-shoppers. Build a sustainable lead generation engine powered by authentic customer reviews and organic search.
                  </p>
                  
                  <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-700">
                    <h5 className="font-bold text-gray-900 mb-3">What You Get:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Step-by-step system for capturing reviews from every customer</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Scripts and templates that make asking for reviews natural and consistent</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Google Business Profile optimization strategy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Accountability systems to ensure your team follows through</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Framework for handling negative reviews professionally</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-900">
                      Real Result: Matt reduced his marketing spend from $110,000 to $40,000 while growing sales by 70%. Today, 70% of his leads come from organic search, not paid ads.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Sales Training */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/3 bg-primary-700 p-8 text-white flex flex-col justify-center">
                <div className="mb-4">
                  <TargetIcon className="w-20 h-20" />
                </div>
                <h3 className="text-3xl font-bold">Sales Training Systems</h3>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Turn New Hires Into Reliable Producers—No Flooring Background Required
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Stop relying on "just be confident" advice and vague coaching. Give your sales team the scripts, frameworks, and systems they need to close consistently—ethically.
                  </p>
                  
                  <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-700">
                    <h5 className="font-bold text-gray-900 mb-3">What You Get:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Multi-phase training path (onboarding → intermediate → advanced)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Pre-written scripts for discovery, product presentation, and closing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Objection-handling frameworks for common customer concerns</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Lead qualification system to protect your team's time</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Performance tracking and accountability tools</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Ethical selling principles that build long-term trust</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-900">
                      Matt has trained multiple salespeople with zero flooring experience who now consistently beat industry close rates—using these exact systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: Operational Systems */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/3 bg-primary-700 p-8 text-white flex flex-col justify-center">
                <div className="mb-4">
                  <CogIcon className="w-20 h-20" />
                </div>
                <h3 className="text-3xl font-bold">Operational Systems</h3>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Reduce Mistakes, Callbacks, and Wasted Time
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Stop firefighting daily chaos. Build predictable, repeatable processes that reduce errors and free up your time for strategic growth.
                  </p>
                  
                  <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-700">
                    <h5 className="font-bold text-gray-900 mb-3">What You Get:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Lead qualification checklists to filter out time-wasters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Quoting tools and templates that protect margins</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Job folder accountability systems (measure → install → follow-up)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Post-installation callback process to catch issues early</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Customer communication templates for every stage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Documentation systems for warranty claims and disputes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-900">
                      These systems are the reason Matt's store runs smoothly without requiring 70-hour weeks or constant crisis management.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: Manufacturer Accountability */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/3 bg-primary-700 p-8 text-white flex flex-col justify-center">
                <div className="mb-4">
                  <ShieldIcon className="w-20 h-20" />
                </div>
                <h3 className="text-3xl font-bold">Manufacturer Accountability</h3>
              </div>
              <div className="md:w-2/3 p-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-4">
                  Hold Manufacturers Accountable When Products Fail
                </h4>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Stop eating the cost of manufacturer defects. Learn how to document, escalate, and leverage your position to protect your customers and your business.
                  </p>
                  
                  <div className="bg-primary-50 p-6 rounded-lg border-l-4 border-primary-700">
                    <h5 className="font-bold text-gray-900 mb-3">What You Get:</h5>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Documentation templates for warranty claims</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Escalation strategies when manufacturers push back</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Data collection systems to build leverage</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Scripts for handling difficult manufacturer reps</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary-700 mr-2">✓</span>
                        <span>Framework for deciding when to replace product yourself vs. fight</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="font-semibold text-green-900">
                      Matt has successfully held manufacturers accountable on multiple product failures—protecting both his customers and his margins.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How We Work Together
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-bold mb-3">Discovery Call</h3>
              <p className="text-gray-600">
                We talk about where you are, where you want to be, and what's standing in your way.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-bold mb-3">Custom Strategy</h3>
              <p className="text-gray-600">
                I build a tailored implementation plan based on your specific challenges and goals.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary-700 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-bold mb-3">Implementation & Support</h3>
              <p className="text-gray-600">
                You get plug-and-play systems, training materials, and ongoing support to ensure success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            This Is For You If...
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-2xl mb-3">✓</div>
              <p className="text-gray-700">
                You're an independent flooring dealer (especially CCA/Carpet One)
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-2xl mb-3">✓</div>
              <p className="text-gray-700">
                You want to reduce marketing spend without sacrificing lead quality
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-2xl mb-3">✓</div>
              <p className="text-gray-700">
                Your sales team needs structure, training, and clear systems
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-2xl mb-3">✓</div>
              <p className="text-gray-700">
                You're tired of callbacks, mistakes, and daily chaos
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-2xl mb-3">✓</div>
              <p className="text-gray-700">
                You refuse to use bait-and-switch tactics or high-pressure sales
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-green-500 text-2xl mb-3">✓</div>
              <p className="text-gray-700">
                You want a business that protects your time, energy, and values
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Systems That Actually Work?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Let's talk about your business and create a plan that fits your specific needs.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-primary-700 px-10 py-5 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-lg"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
