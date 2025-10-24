import React from 'react';

const videoJourneys = [
    { name: "Danielle's Smile Journey", id: "3j2r3uH6cM4" },
    { name: "Semere's Crowns Journey", id: "5yR8sD8f2bA" },
    { name: "Alex: Implants + Full Smile", id: "aB1cD2eF3gH" },
    { name: "Vasili (Romania): Implants", id: "gH4iJ5kL6mN" },
    { name: "Sean (Ireland): Full Mouth", id: "xY9zZ8aB7cD" },
    { name: "Lukas (Poland): Full Smile", id: "kL5mN6oP7qR" },
    { name: "Bruno Amino (UC Sampdoria): Crowns", id: "sT3uV4wX5yZ" },
    { name: "Mr. Emilio: Zirconium Smile", id: "eF1gH2iJ3kL" },
    { name: "Laura (Romania): Dream Smile", id: "mN7oP8qR9sT" },
    { name: "Mr. David (Ireland): Implants + Crowns", id: "uV1wX2yZ3aB" },
];

const writtenTestimonials = [
    { name: 'A Patient from Practo', review: 'Rated highly by patients for comfort, relief, and personal care. Dr. M Bharat Kumar is exceptional.' },
    { name: 'Facebook Review', review: 'The clinic is immaculate and the staff are incredibly welcoming. I felt at ease from the moment I walked in.' },
    { name: 'JustDial User', review: 'Transparent pricing and excellent communication. They explained every step of the process. No surprises.' },
];

const PatientStoriesPage: React.FC = () => {
    return (
        <div className="pt-24 bg-pure-white">
            <header className="text-center py-16 px-6 bg-light-grey">
                <h1 className="text-5xl font-serif-elegant text-dark-text mb-4">Patient Journeys</h1>
                <p className="text-xl text-dark-text/80 max-w-3xl mx-auto">Real stories from real people. Discover the life-changing impact of our care through their eyes.</p>
            </header>

            {/* Video Gallery */}
            <section className="py-20 container mx-auto px-6">
                <h2 className="text-4xl font-serif-elegant text-center mb-12">Video Testimonials</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videoJourneys.map(video => (
                        <div key={video.name} className="rounded-2xl overflow-hidden shadow-lg bg-pure-white border border-medium-grey/30 transform transition-transform duration-300 hover:scale-105">
                            <iframe
                                className="w-full aspect-video"
                                src={`https://www.youtube.com/embed/${video.id}`}
                                title={video.name}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                            <div className="p-5">
                                <h3 className="font-semibold text-dark-text font-serif-elegant text-lg">{video.name}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://www.youtube.com/@mjbcare7" target="_blank" rel="noopener noreferrer" className="text-dark-text font-bold py-3 px-8 rounded-full transition-all duration-300 border-2 border-dark-text hover:bg-dark-text hover:text-pure-white">
                        More on Our YouTube Channel
                    </a>
                </div>
            </section>

            {/* Written Reviews */}
            <section className="py-20 bg-light-grey">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif-elegant text-center mb-12">What Our Patients Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {writtenTestimonials.map((t, i) => (
                            <div key={i} className="bg-pure-white/70 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-medium-grey/50">
                                <p className="italic text-dark-text/80 mb-4">"{t.review}"</p>
                                <p className="font-bold text-right font-serif-elegant text-dark-text">- {t.name}</p>
                            </div>
                        ))}
                    </div>
                     <p className="text-center mt-8 text-dark-text/70">Find more reviews on <a href="#" className="underline text-dark-text">Reddit</a>, <a href="#" className="underline text-dark-text">Instagram</a>, <a href="#" className="underline text-dark-text">Facebook</a>, and local directories.</p>
                </div>
            </section>
        </div>
    );
};

export default PatientStoriesPage;