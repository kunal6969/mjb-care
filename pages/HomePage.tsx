import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';

const services = [
    { name: 'Implants', description: 'The gold standard for replacing missing teeth.' },
    { name: 'Crowns', description: 'Protect and restore damaged teeth with custom caps.' },
    { name: 'Veneers', description: 'Thin porcelain shells to perfect your smile aesthetic.' },
    { name: 'Root Canal', description: 'Save an infected tooth and relieve pain.' },
    { name: 'All-on-4', description: 'Full-arch restoration with just four implants.' },
    { name: 'Composite Bonding', description: 'Repair chips, gaps, and stains in a single visit.' },
];

const generalPlans = [
    {
        title: 'All-on-4 Plan',
        price: '€6000',
        packagePrice: '€8350',
        details: [
            '8 implants (4 up, 4 down) - €2000',
            '3 months later: 2 full sets All-on-4 Zirconia - €4000',
        ],
    },
    {
        title: 'Full Mouth Plan',
        price: '€6240',
        packagePrice: '€8590',
        details: [
            '12 Implants (6 up, 6 down) - €3,600',
            '3 months later: 24 Zirconia crowns - €2,640',
        ],
    },
    {
        title: 'Best Full Mouth Plan',
        price: '€17,640',
        packagePrice: '€24,640',
        details: [
            '16 Medentika implants (8 up, 8 down) - €11,200',
            '3 months later: 28 ULTRA Zirconium crowns - €6,440',
        ],
    },
];

const packages = [
    { star: '5 Star Hotel', days3: '€2000', days7: '€5000', dayPlus: '€400', details: '+breakfast, transfer, medications, tour' },
    { star: '4 Star Hotel', days3: '€1150', days7: '€2500', dayPlus: '€250', details: '+breakfast, transfer, medications, tour' },
    { star: '3 Star Hotel', days3: '€850', days7: '€1500', dayPlus: '€120', details: '+breakfast, transfer, medications' },
];

const videoJourneys = [
    { name: "Danielle's Smile Journey", id: "3j2r3uH6cM4" },
    { name: "Semere's Smile Journey", id: "5yR8sD8f2bA" },
    { name: "Alex: Implants + Crowns", id: "aB1cD2eF3gH" },
    { name: "Sean (Ireland): Full Mouth", id: "xY9zZ8aB7cD" },
    { name: "Lukas (Poland): Full Smile", id: "kL5mN6oP7qR" },
    { name: "Bruno Amino: Crowns", id: "sT3uV4wX5yZ" },
];


const HomePage: React.FC = () => {
    return (
        <div className="animate-fadeIn">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}>
                <div className="absolute inset-0 bg-dark-text opacity-50"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-pure-white via-transparent to-transparent"></div>
                <div className="relative z-10 px-4">
                    <h1 className="text-5xl md:text-7xl font-serif-elegant mb-4 text-shadow-lg animate-slideInUp">Your Smile, Redefined.</h1>
                    <p className="text-xl md:text-2xl font-sans-readable mb-8 text-shadow animate-slideInUp delay-200">Where precision meets comfort in a sanctuary of care.</p>
                    <Link to="/book-consultation" className="bg-dark-text text-pure-white font-bold py-4 px-10 rounded-full transition-all duration-300 hover:bg-opacity-80 hover:shadow-2xl hover:shadow-dark-grey/40 text-lg animate-slideInUp delay-400 inline-block">
                        Book Your Free Consultation
                    </Link>
                </div>
            </section>

            {/* Services Overview */}
            <AnimatedSection className="py-20 bg-light-grey">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-4xl font-serif-elegant mb-4 text-dark-text">Our Premium Dental Services</h2>
                    <p className="text-lg text-dark-text/80 max-w-2xl mx-auto mb-12">We offer a range of services designed to restore and enhance the natural beauty of your smile.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map(service => (
                            <div key={service.name} className="bg-pure-white/50 border border-medium-grey/30 rounded-2xl p-8 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <h3 className="text-2xl font-serif-elegant text-dark-text mb-3">{service.name}</h3>
                                <p className="text-dark-text/70">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
            
            {/* General Plans */}
            <AnimatedSection className="py-20 bg-light-grey">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif-elegant text-center mb-12">General Treatment Plans</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {generalPlans.map(plan => (
                            <div key={plan.title} className="bg-pure-white rounded-2xl p-8 shadow-lg border border-medium-grey/50 flex flex-col">
                                <h3 className="text-2xl font-serif-elegant text-dark-text mb-4">{plan.title}</h3>
                                <ul className="space-y-2 text-dark-text/80 mb-6">
                                    {plan.details.map((item, i) => <li key={i}>{item}</li>)}
                                </ul>
                                <div className="mt-auto pt-6 border-t border-medium-grey">
                                    <p className="text-lg font-semibold">Treatment Total: <span className="text-2xl font-bold">{plan.price}</span></p>
                                    <p className="text-lg font-semibold">Basic Package Total: <span className="text-2xl font-bold">{plan.packagePrice}</span></p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <p className="text-center mt-8 text-dark-text/70 italic">Note: Additional treatments may be proposed after physical exam and X-ray.</p>
                </div>
            </AnimatedSection>

            {/* All-Inclusive Packages */}
            <AnimatedSection className="py-20 container mx-auto px-6">
                <h2 className="text-4xl font-serif-elegant text-center mb-12">All-Inclusive Packages (€EUR)</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 bg-light-grey font-serif-elegant text-lg border-b-2 border-dark-text">Package</th>
                                <th className="p-4 bg-light-grey font-serif-elegant text-lg border-b-2 border-dark-text text-center">3 Days</th>
                                <th className="p-4 bg-light-grey font-serif-elegant text-lg border-b-2 border-dark-text text-center">7 Days</th>
                                <th className="p-4 bg-light-grey font-serif-elegant text-lg border-b-2 border-dark-text text-center">+1 Day</th>
                            </tr>
                        </thead>
                        <tbody>
                            {packages.map(pkg => (
                                <tr key={pkg.star} className="border-b border-medium-grey/30">
                                    <td className="p-4">
                                        <p className="font-bold text-lg">{pkg.star}</p>
                                        <p className="text-sm text-dark-text/70">{pkg.details}</p>
                                    </td>
                                    <td className="p-4 text-center font-semibold text-lg">{pkg.days3}</td>
                                    <td className="p-4 text-center font-semibold text-lg">{pkg.days7}</td>
                                    <td className="p-4 text-center font-semibold text-lg">{pkg.dayPlus}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                 <p className="text-center mt-8 text-dark-text/70">Transfer includes: All airport/hotel/hospital trips for all packages.</p>
            </AnimatedSection>

             {/* Patient Trust Section */}
             <AnimatedSection className="py-20 bg-light-grey">
                <div className="container mx-auto px-6">
                     <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-8">
                            <div className="text-5xl font-serif-elegant text-dark-text mb-2">700+</div>
                            <div className="text-lg text-dark-text font-semibold">Happy Patients</div>
                            <p className="text-dark-text/70 mt-1">and counting, from all over the world.</p>
                        </div>
                         <div className="p-8">
                            <div className="text-5xl font-serif-elegant text-dark-text mb-2">5+</div>
                            <div className="text-lg text-dark-text font-semibold">Years of Excellence</div>
                            <p className="text-dark-text/70 mt-1">Providing top-tier care since 2019.</p>
                        </div>
                         <div className="p-8">
                             <div className="text-5xl font-serif-elegant text-dark-text mb-2">100%</div>
                            <div className="text-lg text-dark-text font-semibold">Transparent Pricing</div>
                            <p className="text-dark-text/70 mt-1">No hidden fees. Clear, honest, and affordable.</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>
            
            {/* Video Journeys */}
            <AnimatedSection className="py-20 bg-pure-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-4xl font-serif-elegant text-center mb-12">Patient Video Journeys</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {videoJourneys.map(video => (
                            <div key={video.name} className="rounded-2xl overflow-hidden shadow-lg bg-light-grey">
                                <iframe 
                                    className="w-full aspect-video"
                                    src={`https://www.youtube.com/embed/${video.id}`}
                                    title={video.name}
                                    frameBorder="0" 
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                    allowFullScreen>
                                </iframe>
                                <div className="p-4">
                                    <h3 className="font-semibold text-dark-text">{video.name}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default HomePage;