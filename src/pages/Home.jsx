import { Link } from 'react-router-dom';
import { ChartIcon, TargetIcon, CogIcon, ShieldIcon } from '../components/Icons';
import Testimonials from '../components/Testimonials';
import SuccessStory from '../components/SuccessStory';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12 md:py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Operator-Built Playbooks to Grow Sales, Protect Margin, and Get Your Life Back
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Systems-driven consulting for independent flooring dealers who refuse to choose between ethics and profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors text-center"
              >
                Schedule a Consultation
              </Link>
              <Link
                to="/services"
                className="bg-primary-800 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-600 transition-colors text-center border-2 border-white"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats Section */}
      <section className="py-8 md:py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-700 mb-2">70%</div>
              <div className="text-gray-600">Marketing Spend Reduction</div>
              <div className="text-sm text-gray-500 mt-2">From $110k to $40k annually</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-700 mb-2">70%</div>
              <div className="text-gray-600">Organic Lead Generation</div>
              <div className="text-sm text-gray-500 mt-2">From Google reviews, not paid ads</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary-700 mb-2">4.9★</div>
              <div className="text-gray-600">Google Rating</div>
              <div className="text-sm text-gray-500 mt-2">450+ authentic reviews</div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="py-12 md:py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Built for Independent Flooring Dealers Who Are Done with the Chaos
          </h2>
          <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
            Especially owners who want time back, systems that actually work, and a sales team that doesn't need constant hand-holding.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-red-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">You're Tired Of:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span>Chasing low-quality leads from expensive, ineffective advertising</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span>Watching your sales team struggle without clear systems or training</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span>Dealing with callbacks, complaints, and chaos that could have been prevented</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 text-xl">✗</span>
                  <span>Running a business that runs you into the ground</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-l-4 border-green-500">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">You Want:</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Warmer, more qualified leads without breaking the bank on ads</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>A sales team that follows proven systems and closes consistently</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>Predictable operations that reduce mistakes and wasted time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 text-xl">✓</span>
                  <span>A business that protects your time, energy, and freedom</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Core Offerings Preview */}
      <section className="py-12 md:py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            How I Can Help
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-primary-700 mb-4 flex justify-center">
                <ChartIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-3">Review-First Marketing</h3>
              <p className="text-gray-600 mb-4">
                Build a sustainable lead generation engine that reduces ad spend by 50%+ while bringing in warmer prospects.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-primary-700 mb-4 flex justify-center">
                <TargetIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-3">Sales Training Systems</h3>
              <p className="text-gray-600 mb-4">
                Multi-phase training paths, scripts, and frameworks that turn new hires into reliable producers—no flooring background required.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-primary-700 mb-4 flex justify-center">
                <CogIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-3">Operational Systems</h3>
              <p className="text-gray-600 mb-4">
                Reduce mistakes, callbacks, and chaos with plug-and-play tools for quoting, lead qualification, and job tracking.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-primary-700 mb-4 flex justify-center">
                <ShieldIcon className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold mb-3">Manufacturer Accountability</h3>
              <p className="text-gray-600 mb-4">
                Hold manufacturers accountable when products fail using data, documentation, and leverage to protect you and your customers.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              to="/services"
              className="inline-block bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary-800 transition-colors"
            >
              Learn More About My Services
            </Link>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-12 md:py-16 px-4 bg-primary-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ethics and Profitability Aren't Mutually Exclusive
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            I'm out to prove that you can build a wildly successful flooring business without gimmicks, high-pressure tactics, or taking advantage of people.
          </p>
          <blockquote className="text-2xl italic border-l-4 border-white pl-6 mb-8">
            "Would I be proud to have full transparency in front of God and have Him be proud of what I've done and what I continue to stand for?"
          </blockquote>
          <p className="text-lg text-primary-100">
            That question drives every system I build, every manual I write, and every training session I run.
          </p>
          <div className="mt-8">
            <Link
              to="/about"
              className="inline-block bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Read My Story
            </Link>
          </div>
        </div>
      </section>

      {/* Success Story */}
      <SuccessStory />

      {/* Testimonials */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build Systems That Actually Work?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's talk about where you are, where you want to be, and how we can get you there—without burning you out.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-primary-700 text-white px-10 py-5 rounded-lg font-semibold hover:bg-primary-800 transition-colors text-lg"
          >
            Schedule Your Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
