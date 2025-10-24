import React from 'react';

const values = [
  { title: 'Patient Safety', description: 'Your well-being is our paramount concern. We adhere to the strictest international standards.' },
  { title: 'Compassionate Care', description: 'We treat every patient with the empathy, respect, and personalized attention they deserve.' },
  { title: 'Ethical Practices', description: 'Honesty and integrity guide every decision we make, from treatment plans to pricing.' },
  { title: 'Full Transparency', description: 'We believe in clear communication, providing all information upfront with no hidden costs.' },
];

const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 bg-pure-white">
      <header className="text-center py-16 px-6 bg-light-grey">
        <h1 className="text-5xl font-serif-elegant text-dark-text mb-4">About MJB Care</h1>
        <p className="text-xl text-dark-text/80 max-w-3xl mx-auto">Our mission is to provide accessible, affordable, and transparent healthcare for all, with a commitment to lifetime support.</p>
      </header>

      {/* Founder Section */}
      <section className="py-20 container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/3">
            <img src="https://picsum.photos/400/500?grayscale" alt="Founder Mahmoud J. Baydoun" className="rounded-2xl shadow-xl w-full h-auto" />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-4xl font-serif-elegant text-dark-text mb-4">Meet Our Founder</h2>
            <h3 className="text-2xl font-serif-elegant text-dark-text mb-6">Mahmoud J. Baydoun</h3>
            <p className="text-lg text-dark-text/80 leading-relaxed mb-4">
              MJB Care was founded in 2019 with a clear vision: to challenge the greed and poor quality often found in the healthcare industry. We witnessed patients being overcharged and underserved, and we knew there had to be a better way.
            </p>
            <p className="text-lg text-dark-text/80 leading-relaxed">
              Our foundation is built on the belief that everyone deserves access to high-quality medical care without financial strain. We operate with complete transparency from our base in Turkey, ensuring our patients feel safe, informed, and genuinely cared for throughout their journey and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-light-grey">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-serif-elegant text-dark-text mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map(value => (
              <div key={value.title} className="bg-pure-white rounded-2xl p-8 shadow-lg border border-medium-grey/50">
                <h3 className="text-2xl font-serif-elegant text-dark-text mb-4">{value.title}</h3>
                <p className="text-dark-text/70">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lifetime Support */}
       <section className="py-20 container mx-auto px-6 text-center">
           <h2 className="text-4xl font-serif-elegant text-dark-text mb-4">Lifetime Support & The Care Fund</h2>
           <p className="text-lg text-dark-text/80 max-w-3xl mx-auto">
               Our commitment to you doesn't end when your treatment does. We offer lifetime support and, through our <a href="#/care-fund" className="text-dark-text underline">Care Fund</a>, provide financial aid to those in need, ensuring that essential healthcare is a right, not a privilege.
           </p>
       </section>
    </div>
  );
};

export default AboutPage;