import { useState } from 'react';

/**
 * PRIVATE NOTE FORM
 * 
 * ⚠️ INTERNAL NOTE:
 * This is a minimal, private intake form for post-Education Day follow-up.
 * Design: Calm, serious, non-promotional. Feels like a notebook margin.
 * 
 * Purpose: Allow attendees to share context/questions without pressure.
 * NO marketing language, urgency, or promises.
 */

export default function PrivateNote() {
  const [formData, setFormData] = useState({
    name: '',
    store: '',
    context: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Replace with actual form submission endpoint
    // For now, just simulate submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center px-4">
        <div className="max-w-xl mx-auto text-center">
          <h1 className="text-2xl font-medium text-gray-900 mb-4">
            Thanks for sharing.
          </h1>
          
          <p className="text-base text-gray-700 mb-2 leading-relaxed">
            This goes directly to me.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            If it makes sense to continue the conversation, I'll follow up.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-4 py-20">
        {/* FORM TITLE */}
        <h1 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
          Private Note (Optional)
        </h1>

        {/* INTRO TEXT */}
        <div className="mb-12">
          <p className="text-base text-gray-700 mb-4 leading-relaxed">
            If the session raised a question — or helped you see something more clearly — you can leave a private note here.
          </p>
          
          <p className="text-base text-gray-700 mb-2 leading-relaxed">
            This isn't a sales form.
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            It's simply a way to share context or ask a question without noise.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* NAME FIELD */}
          <div>
            <label 
              htmlFor="name" 
              className="block text-base font-medium text-gray-900 mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition-colors"
            />
          </div>

          {/* STORE / LOCATION FIELD */}
          <div>
            <label 
              htmlFor="store" 
              className="block text-base font-medium text-gray-900 mb-2"
            >
              Store / City (optional)
            </label>
            <input
              type="text"
              id="store"
              name="store"
              value={formData.store}
              onChange={handleChange}
              className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition-colors"
            />
          </div>

          {/* CONTEXT / QUESTION FIELD */}
          <div>
            <label 
              htmlFor="context" 
              className="block text-base font-medium text-gray-900 mb-2"
            >
              What are you trying to solve right now?
            </label>
            <textarea
              id="context"
              name="context"
              value={formData.context}
              onChange={handleChange}
              required
              rows="8"
              className="w-full px-4 py-3 text-base text-gray-900 bg-white border border-gray-300 rounded focus:outline-none focus:border-gray-900 transition-colors resize-vertical"
            />
            <p className="text-sm text-gray-500 mt-2">
              You don't need to explain everything. Just enough to provide context.
            </p>
          </div>

          {/* SUBMIT BUTTON */}
          <div className="pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-8 py-3 text-base font-medium text-white bg-gray-900 rounded hover:bg-gray-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send note'}
            </button>
          </div>

          {/* FOOTER MICROCOPY */}
          <div className="pt-4">
            <p className="text-sm text-gray-500">
              Your note is private and won't be shared.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
