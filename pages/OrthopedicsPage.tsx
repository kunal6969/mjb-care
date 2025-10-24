import React from 'react';

const OrthopedicsPage: React.FC = () => {
  return (
    <div className="pt-24 bg-pure-white">
      <header className="text-center py-16 px-6 bg-light-grey">
        <h1 className="text-5xl font-serif-elegant text-dark-text mb-4">Orthopedics & Traumatology</h1>
        <p className="text-xl text-dark-text/80 max-w-3xl mx-auto">Comprehensive orthopedic care in Turkey. Please contact us for more information on our services.</p>
      </header>
       <section className="py-20 container mx-auto px-6 text-center">
        <h2 className="text-3xl font-serif-elegant text-dark-text mb-4">Inquire About Orthopedic Care</h2>
        <p className="text-lg text-dark-text/80 mb-8">Our team is ready to assist you with your orthopedic needs.</p>
        <a href="https://wa.me/905523515894" target="_blank" rel="noopener noreferrer" className="bg-dark-text text-pure-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-opacity-80 hover:shadow-lg">
            Contact on WhatsApp
        </a>
      </section>
    </div>
  );
};

export default OrthopedicsPage;