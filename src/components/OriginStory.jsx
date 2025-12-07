export default function OriginStory() {
  return (
    <section className="py-12 md:py-16 px-4 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            From Middle School Warehouse Assistant to Industry Leader
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Matt's journey didn't start in an MBA program or executive boardroom—it started with a homemade tool belt and a relentless work ethic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* The Beginning */}
          <div className="bg-gray-800 p-8 rounded-lg border-t-4 border-primary-500">
            <div className="text-4xl mb-4">🔧</div>
            <h3 className="text-2xl font-bold mb-4">The Beginning</h3>
            <p className="text-gray-300 mb-4">
              <strong>Middle school.</strong> Matt worked as a warehouse assistant, creating his own homemade tool belt to carry everything he needed.
            </p>
            <p className="text-gray-300">
              Through high school, he worked two jobs—the flooring business during the day and a country club at night—developing an unmatched work ethic and practical business understanding from the ground up.
            </p>
          </div>

          {/* The Crisis */}
          <div className="bg-gray-800 p-8 rounded-lg border-t-4 border-red-500">
            <div className="text-4xl mb-4">🔥</div>
            <h3 className="text-2xl font-bold mb-4">The Crisis</h3>
            <p className="text-gray-300 mb-4">
              Matt inherited a struggling business with <strong>no systems, no playbook, and no support</strong>. The company cycled through 4-5 failed managers in just 4 years.
            </p>
            <p className="text-gray-300">
              Eventually, the situation became so dire that Matt was left with just himself and one inexperienced employee—a 21-year-old with only a two-year associate's degree—to manage the entire retail operation.
            </p>
          </div>

          {/* The Transformation */}
          <div className="bg-gray-800 p-8 rounded-lg border-t-4 border-green-500">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">The Transformation</h3>
            <p className="text-gray-300 mb-4">
              Through sheer determination and innovative thinking, Matt single-handedly rebuilt the business from <strong>$4.57M to $7.3M in revenue</strong> (60% growth).
            </p>
            <p className="text-gray-300">
              His self-taught, systematic approach transformed a near-collapsed operation into an industry-leading powerhouse—all while working just <strong>20-30 hours/week</strong> instead of the industry standard 80+.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary-700 rounded-lg p-8 max-w-3xl">
            <p className="text-xl font-semibold mb-4">
              "The Impossible Made Possible"
            </p>
            <p className="text-lg text-primary-100">
              Today, Matt is recognized as an industry thought leader, selected for exclusive committees, invited to speak at national conventions, and sought out by peers for his expertise. His transformation story has become legendary in the flooring industry.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
