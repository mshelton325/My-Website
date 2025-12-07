export default function SuccessStory() {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          <div className="md:flex">
            <div className="md:w-2/5 bg-primary-700 p-8 md:p-12 text-white flex flex-col justify-center">
              <div className="text-6xl font-bold mb-4">27</div>
              <h3 className="text-3xl font-bold mb-4">Years Old</h3>
              <p className="text-xl text-primary-100 mb-6">
                No flooring experience. No sales training. Now outperforming industry veterans.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Zero prior sales experience</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Zero flooring knowledge</span>
                </div>
                <div className="flex items-center">
                  <svg className="w-6 h-6 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>100% systems-trained</span>
                </div>
              </div>
            </div>
            
            <div className="md:w-3/5 p-8 md:p-12">
              <div className="mb-6">
                <div className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  SUCCESS STORY
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  From Zero Experience to Top Performer
                </h3>
              </div>
              
              <blockquote className="border-l-4 border-primary-700 pl-6 mb-6">
                <p className="text-lg text-gray-700 italic mb-4">
                  "Working at L&M Carpet One has proved that even a young person who is willing to learn and apply basic principals can make a great living in an exciting and creative industry. I feel confident that my work is genuinely helping enrich the local community and leading my customers to make the best investment for their future."
                </p>
                <p className="text-lg text-gray-700 italic">
                  "Not only would I say working at L&M has helped me become an effective consultant, but also formed me to be a bigger thinker and more caring person."
                </p>
              </blockquote>
              
              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-gray-900 mb-3">This Is What's Possible With the Right Systems:</h4>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary-700 mb-1">+87%</div>
                    <div className="text-sm text-gray-600">Higher volume than traditional hires</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-700 mb-1">52.5%</div>
                    <div className="text-sm text-gray-600">Close rate (vs. 35-40% industry avg)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-700 mb-1">2-3 mo</div>
                    <div className="text-sm text-gray-600">To full productivity (vs. 6-9 mo)</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary-700 mb-1">+20%</div>
                    <div className="text-sm text-gray-600">Better than experienced hires</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
