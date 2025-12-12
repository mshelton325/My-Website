import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useState, useEffect } from 'react';

// Blog posts data (will be expanded as more posts are added)
const blogPosts = {
  'why-reviews-are-your-number-one-marketing-asset': {
    title: 'Why Reviews Are Your #1 Marketing Asset (And What Happens If You Ignore Them)',
    category: 'Marketing',
    secondaryCategory: 'Reviews & Reputation',
    date: '2024-12-12',
    author: 'Matt Shelton',
    metaTitle: 'Why Reviews Are Your #1 Marketing Asset | Flooring Dealer Insights',
    metaDescription: 'Most flooring dealers know reviews matter—but they don\'t have a system to get them. Here\'s why reviews are your most valuable marketing asset, the real cost of ignoring them, and what a systematic approach actually looks like.',
    keywords: 'flooring store reviews, Google reviews for flooring dealers, online reviews flooring business, flooring marketing strategy, customer reviews flooring, reputation management flooring stores',
    featuredImage: '/images/blog/reviews-marketing-asset.jpg',
    featuredImageAlt: 'Split-screen showing sparse reviews vs hundreds of 5-star reviews',
    
    // Table of Contents (must match H2 heading IDs exactly)
    tableOfContents: [
      { id: 'the-trust-gap-why-half-a-star-costs-you-30-of-your-leads', title: 'The Trust Gap: Why Half a Star Costs You 30% of Your Leads' },
      { id: 'what-happens-if-you-ignore-this-the-or-else-part', title: 'What Happens If You Ignore This' },
      { id: 'how-we-went-from-110k-in-ad-spend-to-40k-and-70-organic-leads', title: 'How We Went From $110K in Ad Spend to $40K' },
      { id: 'what-a-real-review-system-looks-like-the-30-000-foot-view', title: 'What a Real Review System Looks Like' },
      { id: 'the-bottom-line-you-can-t-afford-to-ignore-this-anymore', title: 'The Bottom Line' },
      { id: 'what-s-next-start-here', title: 'What\'s Next: Start Here' }
    ],
    
    // Key stats for callout boxes
    keyStats: [
      {
        stat: '70%',
        description: 'of homeowners check online reviews before contacting a flooring dealer',
        icon: '👥'
      },
      {
        stat: '3x',
        description: 'more leads with a 4.8★ rating vs. 4.2★ rating (even with identical quality)',
        icon: '⭐'
      },
      {
        stat: '64%',
        description: 'reduction in marketing spend ($110K → $40K) while growing sales 70%',
        icon: '💰'
      }
    ],
    
    content: `
Most flooring dealers know reviews matter.

They know customers check Google before they call. They know a 4.8-star rating looks better than a 4.2. They know more reviews = more trust.

But here's the thing: **knowing reviews matter and having a system to get them are two completely different things.**

And the gap between those two things is costing you leads, wasting your ad spend, and handing business to competitors who aren't necessarily better than you—they just look better online.

I'm Matt Shelton. I run a second-generation retail flooring operation, and I also consult with independent dealers who want to stop spinning their wheels and start building real systems. A few years ago, my store was spending over **$110,000 a year on advertising** and still struggling to keep the pipeline full. We had maybe 125 reviews. Our rating was decent—nothing embarrassing—but nothing that made us stand out, either.

Today, we spend around **$40,000 a year on advertising**. We have **over 450 reviews** and a **4.9-star average**. And here's the kicker: **70% of our leads now come from organic search and reputation**, not paid ads.

That shift didn't happen by accident. It happened because we built a system—a repeatable, step-by-step process that turns 40 to 60 percent of our customers into reviewers without awkward scripts, pushy tactics, or hoping someone remembers to ask.

This post is about why that system matters, what happens if you don't have one, and what the path forward actually looks like.

## The Trust Gap: Why Half a Star Costs You 30% of Your Leads

Let's start with the numbers, because this isn't about feelings—it's about dollars.

**70% of homeowners check online reviews before contacting a flooring dealer.** That's not "some" customers. That's seven out of ten. And here's what they're looking for:

**Volume:** How many reviews do you have? If you've got 80 reviews and your competitor has 350, you're already losing credibility before anyone picks up the phone.

**Recency:** When was your last review? If it's from four months ago, customers assume you're either not that busy or not that good. Fresh reviews signal momentum and reliability.

**Rating:** This is the big one. A 4.8-star average gets you roughly **3x more leads** than a 4.2-star average, even if the actual quality of your work is identical. That half-star difference creates a massive trust gap in the customer's mind.

**Content:** What do your reviews actually say? Are they generic one-liners, or do they tell a story? Do they mention your team by name? Do they talk about the process, the follow-up, the way you handled a problem? Detailed, authentic reviews convert better than a pile of "Great service, thanks!"

Here's the brutal truth: **If your online reputation isn't strong, you're paying more for every lead and closing fewer of them.**

You're spending money on ads to drive traffic to a Google Business Profile that doesn't inspire confidence. You're competing on price because you don't have the social proof to justify your value. And you're losing bids to competitors who might not be better installers, better designers, or better communicators—they just have better reviews.

## What Happens If You Ignore This (The "Or Else" Part)

Let's say you decide reviews aren't a priority right now. You've got other fires to put out. You'll get to it eventually.

Here's what "eventually" costs you:

### 1. You lose leads before they ever call.

Google's algorithm rewards businesses with more reviews, higher ratings, and fresh activity. If your competitor has 400 reviews and you have 150, they're showing up higher in local search—even if your website is better, your ads are bigger, and your work is superior. **You're invisible.**

### 2. You waste ad spend converting lower-intent leads.

When your reputation is weak, the only people who call you are price shoppers or people who couldn't get their first choice on the phone. Everyone else moved on. You're paying the same cost per click, but you're getting lower-quality leads who are harder to close and more likely to grind you on price.

### 3. Your close rate suffers (and you blame the wrong things).

You think the problem is your pricing, or your samples, or your sales process. But the real problem is that customers showed up to your showroom already half-convinced you're not the right choice—because your online reputation didn't give them confidence. You're trying to close a sale that was half-lost before they walked in the door.

### 4. You can't raise prices (because you don't have the proof to justify them).

Premium pricing requires premium positioning. And premium positioning requires social proof. If you don't have a reputation that screams "these people are the best in town," you're stuck competing on price with every other dealer who has mediocre reviews and a decent website.

### 5. You fall further behind every month.

Here's the compounding problem: while you're "getting to it eventually," your competitors are collecting 15, 20, 30 reviews a month. The gap gets wider. And the wider it gets, the harder it is to catch up—and the more it costs you in lost leads, wasted ad spend, and lower close rates.

**This isn't a "nice to have." This is a cost center disguised as a marketing problem.**

[MID_POST_CTA]

## How We Went From $110K in Ad Spend to $40K (And 70% Organic Leads)

A few years ago, I realized we were running our store like a hamster wheel. We were spending six figures a year on advertising just to keep the phones ringing. We had a decent reputation—nothing embarrassing—but nothing that made us the obvious choice, either.

So I built a system.

Not a "hey, can you leave us a review?" strategy. Not a "we'll give you a $25 gift card if you review us" bribe. A real, repeatable system that made review requests a natural part of the customer experience—and made it easy, convenient, and actually compelling for customers to say yes.

Here's what changed:

- We went from around **125 reviews to over 450** (and growing every month).
- Our average rating jumped to **4.9 stars**.
- Our organic leads (search, Maps, reputation-driven traffic) went from around **30% of our pipeline to 70%**.
- We cut our ad spend from **$110K to around $40K**—and we're closing more jobs, not fewer.

The math is simple: we stopped paying Google and Facebook to convince people we're credible, and we started letting our customers do it for us.

And here's the thing—this didn't require some massive operational overhaul. It required a system. A process. A handful of tools, scripts, and checkpoints that made review requests automatic, not optional.

That's what most dealers are missing. They know reviews matter. They just don't have a system that actually gets them.

## What a Real Review System Looks Like (The 30,000-Foot View)

I'm not going to give you the full playbook here—that's what I help dealers build when we work together. But I'll give you the framework so you can see what "systematic" actually means.

A real review system has four core components:

### 1. Timing & Triggers: Asking at the exact right moment.

Most dealers ask too late (weeks after the job is done) or not at all (they just hope customers will remember). The best time to ask is when the customer is happiest and the experience is freshest. That's usually within **24 to 72 hours of project completion**—or even earlier for certain touchpoints (post-measure, post-selection, post-delivery). You need to map your customer journey and build review requests into the process, not tack them on as an afterthought.

### 2. Framing & Messaging: Making the ask feel natural and important.

The reason most review requests fail is because they sound like begging or feel transactional. "Hey, if you have time, would you mind…?" is weak. Customers need to understand why it matters (to you, to your team, to future customers) and how it helps. The best requests are framed as "help us help others" or "your feedback helps our team grow"—not "please do us a favor."

### 3. Ease & Accessibility: Removing every barrier.

If your review request requires customers to search for your business, log into Google, and figure out how to leave a review, you've already lost 70% of them. You need direct review links, QR codes, text-based requests—whatever makes it brain-dead simple to say yes in the moment. **One-click access is the difference between a 15% response rate and a 50% response rate.**

### 4. Follow-Up & Consistency: Making it automatic, not optional.

This can't live in your sales team's heads. It can't be something they remember to do when they're not busy. It has to be systematized—tracked, measured, and baked into your process. That means dashboards, checklists, accountability, and a culture where review requests are as automatic as writing up a contract or scheduling a measure.

**That's the system.** It's not complicated. But it is systematic. And that's the difference between getting 10 reviews a year and getting 20 reviews a month.

## The Bottom Line: You Can't Afford to Ignore This Anymore

Here's what I tell every dealer I work with:

**Your reputation is either working for you or working against you. There's no neutral.**

If you have strong reviews, fresh activity, and a 4.8+ rating, your reputation is a 24/7 sales machine. It's pre-selling customers before they ever call. It's justifying your pricing. It's giving your sales team a head start on every appointment.

If you don't—if your reviews are stale, sparse, or mediocre—you're paying for that gap every single day in wasted ad spend, lost leads, and lower close rates.

The good news? You don't need to reinvent your entire business to fix this. **You need a system.** A repeatable process that turns review requests into a natural, expected part of your customer experience.

And once that system is in place, it compounds. Every new review makes the next lead easier to close. Every fresh rating pushes you higher in search. Every detailed testimonial gives your sales team another story to tell.

**This isn't a marketing tactic. It's a business multiplier.**

## What's Next: Start Here

If you're reading this and thinking, "Okay, I get it—but where do I actually start?"—I built something for you.

I created a **free Quick-Start Kit** that breaks down the business case for reviews, walks you through the four-step system at a high level, and gives you the basic scripts and tracking tools to start capturing reviews this week—not six months from now.

It's five pages. No fluff. No theory. Just the essentials to get you moving.
    `
  }
};

export default function BlogPostEnhanced() {
  const { slug } = useParams();
  const post = blogPosts[slug];
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [emailSubscribe, setEmailSubscribe] = useState('');

  // Handle scroll for "Back to Top" button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Handle email subscription
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    window.location.href = `mailto:matt@mattshelton.co?subject=Subscribe to Blog Updates&body=Please add me to the blog email list: ${emailSubscribe}`;
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/insights" className="text-primary-600 hover:text-primary-700 font-semibold">
            ← Back to Insights
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  // Social sharing URLs
  const currentUrl = encodeURIComponent(window.location.href);
  const shareTitle = encodeURIComponent(post.title);
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${currentUrl}&text=${shareTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`
  };

  return (
    <>
      <Helmet>
        <title>{post.metaTitle}</title>
        <meta name="description" content={post.metaDescription} />
        <meta name="keywords" content={post.keywords} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="article:author" content={post.author} />
        <meta property="article:published_time" content={post.date} />
      </Helmet>

      <article className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-gradient-to-br from-primary-700 to-primary-900 text-white py-12 px-4">
          <div className="max-w-4xl mx-auto">
            <Link to="/insights" className="text-primary-200 hover:text-white mb-4 inline-block">
              ← Back to Insights
            </Link>
            
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              {post.secondaryCategory && (
                <span className="bg-primary-600 px-3 py-1 rounded-full text-sm font-medium">
                  {post.secondaryCategory}
                </span>
              )}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center gap-4 text-primary-200 mb-6">
              <span>By {post.author}</span>
              <span>•</span>
              <span>{formatDate(post.date)}</span>
            </div>

            {/* FEATURE 3: Social Sharing Buttons */}
            <div className="flex items-center gap-3">
              <span className="text-sm text-primary-200">Share:</span>
              <a
                href={shareUrls.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                LinkedIn
              </a>
              <a
                href={shareUrls.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Facebook
              </a>
              <a
                href={shareUrls.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 hover:bg-primary-500 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Featured Image - Subtle Banner */}
        <div className="max-w-4xl mx-auto px-4 -mt-8">
          <div className="bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-lg shadow-md border border-gray-200 h-48 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2">⭐</div>
              <p className="text-gray-500 text-sm">Reviews & Reputation</p>
            </div>
          </div>
        </div>

        {/* FEATURE 2: Key Stats Callout Boxes */}
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-3 gap-4">
            {post.keyStats.map((stat, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-lg p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-4xl font-bold text-primary-700 mb-2">{stat.stat}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content with Sidebar */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            
            {/* FEATURE 4: Table of Contents (Sidebar) */}
            <aside className="lg:w-64 flex-shrink-0">
              <div className="lg:sticky lg:top-4">
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="font-bold text-gray-900 mb-4">Table of Contents</h3>
                  <nav className="space-y-2">
                    {post.tableOfContents.map((item, index) => (
                      <a
                        key={index}
                        href={`#${item.id}`}
                        className="block text-sm text-gray-600 hover:text-primary-600 transition-colors"
                      >
                        {item.title}
                      </a>
                    ))}
                  </nav>
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              <div className="bg-white rounded-lg shadow-md p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  {post.content.split('\n\n').map((paragraph, index) => {
                    // Handle mid-post CTA placeholder
                    if (paragraph.includes('[MID_POST_CTA]')) {
                      return (
                        <div key={index} className="my-12 bg-gradient-to-r from-yellow-50 to-orange-50 border-l-4 border-yellow-500 rounded-lg p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-3">
                            Ready to Stop Losing Leads to Competitors?
                          </h3>
                          <p className="text-gray-700 mb-4">
                            Download my free Quick-Start Kit and see what a real review system looks like. Get the 4-step framework, essential scripts, and tracking tools—no fluff, just what works.
                          </p>
                          <a
                            href="mailto:matt@mattshelton.co?subject=Send Me the FREE Quick-Start Kit"
                            className="inline-block bg-yellow-500 text-gray-900 px-6 py-3 rounded-lg font-bold hover:bg-yellow-600 transition-colors"
                          >
                            📥 Get the Free Kit
                          </a>
                        </div>
                      );
                    }

                    // Handle headings
                    if (paragraph.startsWith('## ')) {
                      const headingText = paragraph.replace('## ', '');
                      const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
                      return (
                        <h2 key={index} id={headingId} className="text-3xl font-bold text-gray-900 mt-12 mb-6 scroll-mt-20">
                          {headingText}
                        </h2>
                      );
                    }
                    if (paragraph.startsWith('### ')) {
                      return (
                        <h3 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                          {paragraph.replace('### ', '')}
                        </h3>
                      );
                    }

                    // Handle bullet lists
                    if (paragraph.includes('\n- ')) {
                      const items = paragraph.split('\n- ').filter(item => item.trim());
                      return (
                        <ul key={index} className="list-disc pl-6 space-y-2 my-6">
                          {items.map((item, i) => (
                            <li key={i} className="text-gray-700 leading-relaxed">
                              <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
                            </li>
                          ))}
                        </ul>
                      );
                    }

                    // Handle regular paragraphs with bold text
                    const formattedParagraph = paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
                    
                    return (
                      <p key={index} className="text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: formattedParagraph }} />
                    );
                  })}
                </div>

                {/* CTA Boxes */}
                <div className="mt-12 space-y-6">
                  {/* Free Quick-Start Kit CTA */}
                  <div className="bg-white border-2 border-blue-300 rounded-lg p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      📥 Download the Free Quick-Start Kit
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Get the 4-step system, essential scripts, and tracking tools to start capturing reviews this week. No fluff. Just what works.
                    </p>
                    <a
                      href="mailto:matt@mattshelton.co?subject=Send Me the FREE Quick-Start Kit"
                      className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-blue-700 transition-colors"
                    >
                      Get the Free Kit
                    </a>
                  </div>

                  {/* Work With Me CTA */}
                  <div className="bg-white border-2 border-primary-300 rounded-lg p-8 shadow-sm">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Ready for the Full System?
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Want the complete playbook, exact scripts, implementation plan, and tools that helped us go from 125 reviews to 450+? Let's talk.
                    </p>
                    <Link
                      to="/preview-e"
                      className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors mr-4"
                    >
                      Learn More About the Complete System
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-block bg-white text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-lg font-bold hover:bg-primary-50 transition-colors"
                    >
                      Book a Call
                    </Link>
                  </div>
                </div>

                {/* FEATURE 5: Email Subscription Form */}
                <div className="mt-12 pt-8 border-t-2 border-gray-200">
                  <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      📧 Get New Posts Delivered to Your Inbox
                    </h3>
                    <p className="text-gray-700 mb-6">
                      Join flooring dealers who get weekly insights on sales, operations, and marketing systems that actually work.
                    </p>
                    <form onSubmit={handleEmailSubmit} className="flex flex-col sm:flex-row gap-3">
                      <input
                        type="email"
                        placeholder="your@email.com"
                        value={emailSubscribe}
                        onChange={(e) => setEmailSubscribe(e.target.value)}
                        required
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500"
                      />
                      <button
                        type="submit"
                        className="bg-primary-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-primary-700 transition-colors whitespace-nowrap"
                      >
                        Subscribe
                      </button>
                    </form>
                    <p className="text-xs text-gray-500 mt-3">
                      No spam. Unsubscribe anytime. Typically 1-2 emails per week.
                    </p>
                  </div>
                </div>

                {/* Author Bio */}
                <div className="mt-12 pt-8 border-t-2 border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">About the Author</h3>
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 leading-relaxed">
                      <strong>Matt Shelton</strong> is a second-generation flooring retailer and performance consultant. He runs a high-performing retail flooring operation and helps independent dealers install real-world sales, quoting, and operations systems that increase profitability without burning out their teams. Everything he teaches comes from the trenches—not a textbook.
                    </p>
                    <div className="mt-4">
                      <Link to="/contact" className="text-primary-600 hover:text-primary-700 font-semibold">
                        Want to work with Matt? Learn more here →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts Section */}
        <div className="bg-white py-12 px-4 border-t">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Continue Reading</h3>
            <div className="text-center py-8">
              <Link 
                to="/insights"
                className="inline-block bg-primary-600 text-white px-8 py-4 rounded-lg font-bold hover:bg-primary-700 transition-colors"
              >
                ← Back to All Insights
              </Link>
            </div>
          </div>
        </div>

        {/* FEATURE 5: Back to Top Button */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-primary-600 text-white p-4 rounded-full shadow-lg hover:bg-primary-700 transition-all z-50"
            aria-label="Back to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        )}
      </article>
    </>
  );
}
