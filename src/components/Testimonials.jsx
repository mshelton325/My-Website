export default function Testimonials() {
  const testimonials = [
    {
      quote: "I have found matt to carry into every circumstance a clear, focused mind, diligent effort and a heart for those he is dealing with. I trust in him to do what he says when he says he will, and if something goes wrong, as things inevitably may, he will make it right.",
      author: "Industry Executive",
      role: "Flooring Industry Leader",
    },
    {
      quote: "What stands out most about Matt is how he is able to guide, problem-solve, and create changes that stick—bringing clarity, structure, and lasting results to every challenge he takes on.",
      author: "Business Owner",
      role: "Flooring Retail",
    },
    {
      quote: "Matt has a way of guiding people and solving problems that create real, lasting change—bringing both strategy and heart to everything he does.",
      author: "Industry Partner",
      role: "Manufacturer Representative",
    },
    {
      quote: "Matt brings a rare mix of strategic thinking and hands-on problem-solving, inspiring the people around him while creating changes that last well beyond the moment.",
      author: "Business Leader",
      role: "Regional Director",
    },
    {
      quote: "What I value most is how Matt is able to blend insight, problem-solving, and mentorship to create results that truly endure.",
      author: "Industry Colleague",
      role: "Operations Manager",
    },
    {
      quote: "Matt lives his faith passionately. The Holy Spirit is moving in Matt and his calling to help disciple fellow Christians in their walk inside and outside of the workplace is something that the world needs right now. He is on fire for God and sees the places where he can apply those spiritual gifts.",
      author: "Ministry Partner",
      role: "Business & Faith Leader",
    },
    {
      quote: "Matt brings a rare mix of strategic insight and genuine passion to everything he takes on. He's results-driven, but never at the expense of integrity or compassion for others. Well-read and intellectually curious, he consistently brings thoughtful perspective to every conversation.",
      author: "Professional Associate",
      role: "Business Consultant",
    },
  ];

  return (
    <section className="py-12 md:py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Industry Leaders Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Testimonials from business owners, executives, and industry partners who've seen Matt's work firsthand.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="mb-4">
                <svg className="w-8 h-8 text-primary-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.quote}"</p>
              <div className="border-t pt-4">
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
