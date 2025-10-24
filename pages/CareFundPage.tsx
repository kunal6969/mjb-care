import React from 'react';

const donations = [
  { donor: 'Anonymous', amount: '€50', date: '2 days ago' },
  { donor: 'John D.', amount: '€200', date: '3 days ago' },
  { donor: 'Maria S.', amount: '€100', date: '5 days ago' },
];


const CareFundPage: React.FC = () => {
    return (
        <div className="pt-24 bg-pure-white">
            <header className="text-center py-16 px-6 bg-light-grey">
                <h1 className="text-5xl font-serif-elegant text-dark-text mb-4">The MJB Care Fund</h1>
                <p className="text-xl text-dark-text/80 max-w-3xl mx-auto">A commitment to community. Your donations directly fund treatment for those who cannot afford it.</p>
            </header>

            {/* Fund Details */}
            <section className="py-20 container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-serif-elegant text-dark-text mb-6">How It Works</h2>
                        <p className="text-lg text-dark-text/80 leading-relaxed mb-4">
                            The Care Fund is at the heart of our mission to make healthcare accessible. 100% of all donations go directly towards covering the cost of essential medical and dental treatments for patients in need.
                        </p>
                        <p className="text-lg text-dark-text/80 leading-relaxed">
                            We believe in complete transparency. Every donation is publicly listed within 1-2 business days, so you can see the immediate impact of your generosity. Together, we can change lives and ensure that quality care is never out of reach.
                        </p>
                        <div className="mt-8">
                            <a href="#" className="bg-dark-text text-pure-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-opacity-80 hover:shadow-2xl hover:shadow-dark-grey/40 text-lg inline-block">
                                Donate Now
                            </a>
                        </div>
                    </div>
                    <div>
                        <div className="bg-pure-white/50 border border-medium-grey/30 rounded-2xl p-8 shadow-lg backdrop-blur-sm">
                            <h3 className="text-2xl font-serif-elegant text-dark-text mb-4 text-center">Recent Donations</h3>
                            <ul className="space-y-3">
                                {donations.map((donation, index) => (
                                    <li key={index} className="flex justify-between items-center p-3 bg-medium-grey/20 rounded-lg">
                                        <span className="font-semibold text-dark-text">{donation.donor}</span>
                                        <span className="text-dark-text font-bold">{donation.amount}</span>
                                        <span className="text-sm text-dark-text/60">{donation.date}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CareFundPage;