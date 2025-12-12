import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

export default function Insights() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Blog posts data (will be populated with actual posts)
  const blogPosts = [
    {
      id: 1,
      title: 'Why Reviews Are Your #1 Marketing Asset (And What Happens If You Ignore Them)',
      category: 'Marketing',
      excerpt: 'Most flooring dealers know reviews matter—but they don\'t have a system to get them. Here\'s why reviews are your most valuable marketing asset, the real cost of ignoring them, and what a systematic approach actually looks like.',
      date: '2024-12-12',
      slug: 'why-reviews-are-your-number-one-marketing-asset',
      image: '/images/blog/reviews-marketing-asset.jpg'
    },
    {
      id: 2,
      title: 'The "All Leads → Orders" Close Rate: Why Industry Benchmarks Lie to You',
      category: 'Sales',
      excerpt: 'Industry averages claim 40-50% close rates, but they\'re measuring the wrong metric. Here\'s what "All Leads → Orders" really means and why our 52.5% close rate is 2x the real industry average.',
      date: '2024-12-10',
      slug: 'all-leads-to-orders-close-rate',
      image: '/images/blog/close-rate-placeholder.jpg'
    },
    {
      id: 3,
      title: 'How a 4-Person Team Outproduces Stores with 10+ Salespeople',
      category: 'Team Performance',
      excerpt: 'We generate 202% of peer average phone leads and 127% of digital leads with a skeleton crew. The secret? Pre-qualified leads and a compressed sales cycle that eliminates time-wasters.',
      date: '2024-12-05',
      slug: 'four-person-team-outproduces-ten',
      image: '/images/blog/team-performance-placeholder.jpg'
    },
    {
      id: 4,
      title: 'Cut Your Marketing Spend by 64% (Without Losing Leads)',
      category: 'Marketing',
      excerpt: 'We dropped from $110K to $40K in annual marketing spend while growing sales 70%. Here\'s the exact shift from paid ads to organic lead generation that made it possible.',
      date: '2024-11-28',
      slug: 'cut-marketing-spend-without-losing-leads',
      image: '/images/blog/marketing-placeholder.jpg'
    },
    {
      id: 5,
      title: 'The 90-Day Review Acceleration Plan: Week-by-Week Breakdown',
      category: 'Operations',
      excerpt: 'Want to go from 20 reviews to 100+ in 90 days? This is the exact week-by-week rollout plan we use to build momentum, overcome team resistance, and hit aggressive review targets.',
      date: '2024-11-20',
      slug: 'ninety-day-review-acceleration-plan',
      image: '/images/blog/operations-placeholder.jpg'
    },
    {
      id: 6,
      title: 'Why I Work 20-30 Hours/Week on My $7.3M Flooring Store',
      category: 'Operations',
      excerpt: 'I used to work 80+ hour weeks. Now I run a 7-figure flooring store in 20-30 hours while consulting 10-15 hours. Here\'s how systems + leverage made it possible without sacrificing growth.',
      date: '2024-11-12',
      slug: 'twenty-hours-per-week-seven-million-store',
      image: '/images/blog/work-life-placeholder.jpg'
    }
  ];

  const categories = ['All', 'Marketing', 'Sales', 'Operations', 'Team Performance', 'Reviews & Reputation'];

  // Filter posts by category and search query
  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Format date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <>
      <Helmet>
        <title>Insights & Resources for Flooring Dealers | Matt Shelton Consulting</title>
        <meta 
          name="description" 
          content="Real-world systems and straight-shooting advice for independent flooring dealers. Learn how to increase sales, streamline operations, and build a business that doesn't burn you out." 
        />
        <meta 
          name="keywords" 
          content="flooring dealer resources, flooring business advice, flooring sales systems, flooring store operations, independent flooring retailer, flooring consultant" 
        />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-16 px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Real-World Systems for Flooring Dealers Who Want Less Chaos, More Profit
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Straight-shooting advice on sales, operations, marketing, and team performance—from someone who's actually running a store, not just consulting from the sidelines.
            </p>
            
            {/* Bio Block */}
            <div className="bg-primary-800/50 border-l-4 border-primary-400 p-6 rounded-lg">
              <p className="text-lg leading-relaxed">
                I'm <strong>Matt Shelton</strong>—second-generation flooring retailer and performance consultant. I run a high-performing retail flooring operation and help independent dealers install real-world systems that increase close rates, average tickets, and profitability without burning out their teams. Everything I teach comes from the trenches, not a textbook.
              </p>
            </div>
          </div>
        </section>

        {/* Search & Filter Section */}
        <section className="bg-white py-8 px-4 border-b">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search Bar */}
              <div className="w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Blog Posts Grid */}
        <section className="py-12 px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPosts.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-xl text-gray-600">No articles found matching your search.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <article 
                    key={post.id}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                  >
                    {/* Featured Image */}
                    <div className="h-48 bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center">
                      <div className="text-white text-6xl opacity-20">📰</div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      {/* Category Tag */}
                      <div className="mb-3">
                        <span className="inline-block bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                          {post.category}
                        </span>
                      </div>

                      {/* Title */}
                      <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                        <Link to={`/insights/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>

                      {/* Date */}
                      <p className="text-sm text-gray-500 mb-3">
                        {formatDate(post.date)}
                      </p>

                      {/* Excerpt */}
                      <p className="text-gray-700 mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>

                      {/* Read More Link */}
                      <Link
                        to={`/insights/${post.slug}`}
                        className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors"
                      >
                        Read More 
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Sidebar CTAs Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
            {/* Free Resources CTA */}
            <div className="bg-white border-2 border-blue-300 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Start Here: Free Tools for Flooring Dealers
              </h3>
              <p className="text-gray-700 mb-6">
                Grab my free Quick-Start Kit and see how top-performing dealers are capturing 40-60% of customers as reviewers—without awkward scripts or pushy tactics.
              </p>
              <a
                href="mailto:matt@mattshelton.co?subject=Send Me the FREE Quick-Start Kit"
                className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
              >
                📥 Download Free Kit
              </a>
            </div>

            {/* Work With Me CTA */}
            <div className="bg-white border-2 border-primary-300 rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Build Real Systems?
              </h3>
              <p className="text-gray-700 mb-6">
                I help flooring dealers install proven sales, operations, and marketing systems that reduce chaos and protect your time, energy, and profit.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors"
              >
                📞 Book a Call
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
