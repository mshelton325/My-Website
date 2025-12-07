export default function ResultsMetrics() {
  const metrics = [
    {
      category: "Marketing Transformation",
      stats: [
        { label: "Revenue Growth", value: "60%", detail: "$4.57M → $7.3M total" },
        { label: "Marketing Spend Reduction", value: "64%", detail: "$110k → $40k annually" },
        { label: "Organic Lead Generation", value: "70%", detail: "From Google reviews" },
        { label: "Sales Growth During Reduction", value: "+70%", detail: "While cutting ad spend" },
        { label: "Google Rating", value: "4.9★", detail: "450+ reviews" },
      ]
    },
    {
      category: "Sales Performance",
      stats: [
        { label: "Close Rate", value: "52.5%", detail: "vs. 35-40% industry avg" },
        { label: "Non-Traditional Hire Performance", value: "+87%", detail: "Higher monthly volume" },
        { label: "Lead Value Enhancement", value: "+33%", detail: "Average per lead" },
        { label: "Days to Convert", value: "13.5", detail: "vs. 20.5 industry avg" },
      ]
    },
    {
      category: "Team Development",
      stats: [
        { label: "Time to Productivity", value: "2-3 mo", detail: "vs. 6-9 mo typical" },
        { label: "Non-Experience Hire Success", value: "+20%", detail: "Better than experienced" },
        { label: "Multiple Project Ratio", value: "+50%", detail: "5.0% → 7.5%" },
        { label: "Annual Revenue Impact", value: "+$1.5M", detail: "From role specialization" },
      ]
    },
    {
      category: "Operational Efficiency",
      stats: [
        { label: "Proposal Creation Time", value: "-50%", detail: "Through digital systems" },
        { label: "New Hire Productivity", value: "-67%", detail: "Faster onboarding" },
        { label: "Customer Satisfaction", value: "↑", detail: "Fewer callbacks & issues" },
        { label: "Owner Time Freedom", value: "↑", detail: "Systems run the business" },
      ]
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Results, Not Theory
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These aren't projections or promises—these are actual results from Matt's own flooring business and the systems he's built over the years.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {metrics.map((category, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg p-8 border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-primary-700 pb-3">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.stats.map((stat, statIdx) => (
                  <div
                    key={statIdx}
                    className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex-1">
                      <div className="text-sm text-gray-600 mb-1">{stat.label}</div>
                      <div className="text-xs text-gray-500">{stat.detail}</div>
                    </div>
                    <div className="text-3xl font-bold text-primary-700 ml-4">
                      {stat.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-primary-50 rounded-lg p-6 max-w-3xl">
            <p className="text-gray-700 mb-4">
              <strong>Every metric above is documented and verifiable.</strong> These results come from real-world implementation in a competitive market—not textbook theory.
            </p>
            <p className="text-gray-600">
              If you're ready to see similar results in your business, let's talk.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
