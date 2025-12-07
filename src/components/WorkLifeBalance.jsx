export default function WorkLifeBalance() {
  return (
    <section className="py-12 md:py-16 px-4 bg-gradient-to-br from-green-50 to-primary-50">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-1/2 bg-gradient-to-br from-green-600 to-green-700 p-12 text-white">
              <div className="mb-8">
                <div className="text-6xl font-bold mb-2">20-30</div>
                <div className="text-3xl font-semibold">Hours/Week</div>
              </div>
              <div className="text-2xl font-bold mb-4">vs</div>
              <div className="mb-8 opacity-75">
                <div className="text-5xl font-bold mb-2 line-through">80+</div>
                <div className="text-2xl">Industry Standard</div>
              </div>
              <div className="bg-green-800 rounded-lg p-6">
                <p className="text-lg font-medium">
                  Matt achieved 60% revenue growth, 86.8% sales performance improvement, and industry-leading results—all while working less than half the typical hours.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Systems Create Freedom, Not More Work
              </h2>
              
              <p className="text-lg text-gray-700 mb-6">
                Most flooring dealers work 80+ hour weeks, constantly firefighting, and wondering why they can't scale. Matt proves there's a better way.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Systems Run the Business</h4>
                    <p className="text-gray-600">Not heroics, not hustling, not working yourself to death</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Team Empowerment</h4>
                    <p className="text-gray-600">Clear processes mean your team doesn't need you to make every decision</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Predictable Operations</h4>
                    <p className="text-gray-600">No more daily crises, no more being the catch-all for every problem</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Life Outside Work</h4>
                    <p className="text-gray-600">Time for family, hobbies, and the life you're working so hard to build</p>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 border-l-4 border-green-600 p-6 rounded-lg">
                <p className="font-medium text-gray-900 mb-2">Remember Matt's TIA at 30-something?</p>
                <p className="text-gray-700">
                  That health scare was the wake-up call. You don't have to wait for a crisis to reclaim your life. Let Matt show you how to build a business that serves your life—not consumes it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
