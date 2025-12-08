export default function ReviewSystemBundle() {
  const resources = [
    {
      title: "The Salesperson's Guide to Google Reviews",
      file: "salesperson-guide.html",
      category: "Core Manuals",
      description: "How salespeople turn reviews into higher commissions and warmer leads",
      icon: "💰"
    },
    {
      title: "Reviews: The Ultimate Leverage System",
      file: "review-system-complete.html",
      category: "Core Manuals",
      description: "Complete marketing leverage manual for independent flooring dealers",
      icon: "📚"
    },
    {
      title: "90-Day Review Acceleration Plan",
      file: "90-day-acceleration-plan.html",
      category: "Implementation",
      description: "Step-by-step 90-day rollout strategy with phase-by-phase execution guide",
      icon: "🚀"
    },
    {
      title: "Sales Meeting Plans for Review Leverage",
      file: "sales-meeting-plans.html",
      category: "Implementation",
      description: "Ready-to-run sales meeting agendas focused on review system adoption",
      icon: "📋"
    },
    {
      title: "Review Capture Scripts - Salesperson Edition",
      file: "scripts-salesperson-edition.html",
      category: "Scripts & Templates",
      description: "Word-for-word scripts for salespeople to capture reviews consistently",
      icon: "💬"
    },
    {
      title: "Review Capture Scripts - Manager Edition",
      file: "scripts-manager-edition.html",
      category: "Scripts & Templates",
      description: "Manager-focused scripts for coaching and accountability",
      icon: "👔"
    },
    {
      title: "Review Request Text Templates",
      file: "text-templates.html",
      category: "Scripts & Templates",
      description: "Copy-paste text message templates for every review request scenario",
      icon: "📱"
    },
    {
      title: "Advanced Scripts and Role-Play Scenarios",
      file: "advanced-scripts-roleplay.html",
      category: "Training",
      description: "Practice scenarios and advanced techniques for handling objections",
      icon: "🎭"
    },
    {
      title: "Review Catalog Playbook",
      file: "review-catalog-playbook.html",
      category: "Sales Tools",
      description: "How to organize and leverage your reviews for maximum sales impact",
      icon: "📖"
    },
    {
      title: "Weekly Sales Meeting Dashboard",
      file: "weekly-meeting-dashboard.html",
      category: "Tracking",
      description: "Track team performance and review capture metrics week-by-week",
      icon: "📊"
    },
    {
      title: "Social Media Efficiency Guide",
      file: "social-media-guide.html",
      category: "Marketing",
      description: "Maximize review visibility across social platforms with minimal effort",
      icon: "📢"
    },
    {
      title: "Overcoming Barriers to Implementation",
      file: "barriers-to-implementation.html",
      category: "Troubleshooting",
      description: "Solutions to common implementation challenges and team resistance",
      icon: "🛠️"
    }
  ];

  const categories = [...new Set(resources.map(r => r.category))];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            ✨ Complete System Bundle
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Review Leverage System
          </h1>
          <p className="text-2xl text-primary-100 mb-3">
            The Complete Implementation Package for Flooring Dealers
          </p>
          <p className="text-lg text-primary-200 max-w-3xl mx-auto">
            Everything you need to build a sustainable review system that reduces marketing spend, generates warmer leads, and scales your business—all in one comprehensive bundle.
          </p>
        </div>
      </header>

      {/* Value Prop */}
      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-green-50 to-primary-50 rounded-2xl shadow-xl p-8 mb-12 border-2 border-green-200">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            🎯 What You Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-5xl font-bold text-primary-700 mb-2">12</div>
              <div className="text-gray-700 font-semibold">Complete Resources</div>
              <div className="text-sm text-gray-600 mt-1">Manuals, scripts, templates</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-700 mb-2">64%</div>
              <div className="text-gray-700 font-semibold">Marketing Cost Cut</div>
              <div className="text-sm text-gray-600 mt-1">Proven results</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-700 mb-2">90</div>
              <div className="text-gray-700 font-semibold">Day Implementation</div>
              <div className="text-sm text-gray-600 mt-1">Step-by-step plan</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-primary-700 mb-2">∞</div>
              <div className="text-gray-700 font-semibold">Lifetime Access</div>
              <div className="text-sm text-gray-600 mt-1">Use it forever</div>
            </div>
          </div>
        </div>

        {/* Resources by Category */}
        {categories.map(category => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <span className="bg-primary-700 text-white px-4 py-2 rounded-lg">
                {category}
              </span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {resources.filter(r => r.category === category).map((resource, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl flex-shrink-0">{resource.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {resource.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4">
                          {resource.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={`/resources/${resource.file}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-primary-700 text-white px-4 py-2 rounded-lg font-semibold hover:bg-primary-800 transition-colors text-center text-sm"
                      >
                        View
                      </a>
                      <a
                        href={`/resources/${resource.file}`}
                        download
                        className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors text-center text-sm"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Proven Results */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            📈 Proven Results from This System
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-700 mb-2">$110k → $40k</div>
              <div className="text-sm text-gray-600">Annual marketing spend</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-700 mb-2">70%</div>
              <div className="text-sm text-gray-600">Leads from organic Google</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-700 mb-2">3x</div>
              <div className="text-sm text-gray-600">Digital lead growth</div>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-primary-700 mb-2">4.9★</div>
              <div className="text-sm text-gray-600">450+ reviews</div>
            </div>
          </div>
        </div>

        {/* Support Section */}
        <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white rounded-lg shadow-lg p-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Need Implementation Help?</h2>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Have questions about implementing this system? Want done-for-you setup or team training? I offer consulting packages to help you roll this out successfully.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:matt@mattshelton.consulting"
              className="bg-white text-primary-700 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
            >
              Email Matt
            </a>
            <a
              href="/contact"
              className="bg-primary-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-600 transition-colors border-2 border-white"
            >
              Schedule a Call
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 text-center text-sm text-gray-500">
          <p>© 2024 Matt Shelton Consulting. All rights reserved.</p>
          <p className="mt-2">This bundle is provided for your use. Please do not redistribute without permission.</p>
        </div>
      </main>
    </div>
  );
}
