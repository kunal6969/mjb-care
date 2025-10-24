import React, { useState, useMemo } from 'react';

// Mock availability data (in a real app, this would come from an API)
const MOCK_AVAILABILITY: { [key: string]: string[] } = {};

const today = new Date();
for (let i = 2; i < 30; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    const dateString = date.toISOString().split('T')[0];
    if (date.getDay() !== 0 && date.getDay() !== 6) { // Not Sunday or Saturday
        MOCK_AVAILABILITY[dateString] = ['09:00', '11:30', '14:00'];
    }
}

const countries = [
    'United States', 'United Kingdom', 'Canada', 'Australia', 'Germany', 'France', 'Ireland', 'Netherlands', 'Other'
];

const BookConsultationPage: React.FC = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [formData, setFormData] = useState({ name: '', email: '', whatsapp: '', country: '' });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    const availableSlots = useMemo(() => {
        if (!selectedDate) return [];
        const dateString = selectedDate.toISOString().split('T')[0];
        return MOCK_AVAILABILITY[dateString] || [];
    }, [selectedDate]);

    const handleDateSelect = (day: number) => {
        const date = new Date(currentYear, currentMonth, day);
        if (date < today) return;
        const dateString = date.toISOString().split('T')[0];
        if (MOCK_AVAILABILITY[dateString]) {
            setSelectedDate(date);
            setSelectedTime(null);
        }
    };
    
    const changeMonth = (offset: number) => {
        const newDate = new Date(currentYear, currentMonth + offset, 1);
        setCurrentMonth(newDate.getMonth());
        setCurrentYear(newDate.getFullYear());
    };

    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};
        if (!formData.name.trim()) newErrors.name = 'Full Name is required.';
        if (!formData.email.trim()) {
            newErrors.email = 'Email Address is required.';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
        }
        if (!formData.whatsapp.trim()) newErrors.whatsapp = 'WhatsApp Number is required.';
        if (!formData.country.trim()) newErrors.country = 'Country is required.';
        if (!selectedDate) newErrors.date = 'Please select a date.';
        if (!selectedTime) newErrors.time = 'Please select a time slot.';
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (validateForm()) {
            console.log('Booking submitted:', { ...formData, date: selectedDate?.toISOString().split('T')[0], time: selectedTime });
            setIsSubmitted(true);
        }
    };
    
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const renderCalendar = () => {
        const days = [];
        const startDay = firstDayOfMonth.getDay();
        for (let i = 0; i < startDay; i++) {
            days.push(<div key={`empty-${i}`} className="p-2 text-center"></div>);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(currentYear, currentMonth, day);
            const dateString = date.toISOString().split('T')[0];
            const isPast = date < new Date(today.toDateString());
            const isAvailable = MOCK_AVAILABILITY[dateString] && !isPast;
            const isSelected = selectedDate?.toDateString() === date.toDateString();
            const dayLabel = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

            days.push(
                <button
                    key={day}
                    type="button"
                    onClick={() => handleDateSelect(day)}
                    disabled={!isAvailable}
                    aria-label={isAvailable ? `Select ${dayLabel}` : `${dayLabel} (unavailable)`}
                    aria-pressed={isSelected}
                    className={`p-2 text-center rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-text
                        ${isPast ? 'text-gray-400' : ''}
                        ${isAvailable ? 'cursor-pointer hover:bg-medium-grey' : 'text-gray-400'}
                        ${isSelected ? 'bg-dark-text text-pure-white font-bold' : ''}
                        ${!isAvailable ? 'cursor-not-allowed text-gray-400' : ''}
                    `}>
                    {day}
                </button>
            );
        }
        return days;
    };

    return (
        <div className="pt-24 bg-pure-white">
            <header className="text-center py-16 px-6">
                 <div className="flex justify-center items-center space-x-4 mb-4 text-dark-grey">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M7 21a2 2 0 01-2-2V9.5a2.5 2.5 0 012.5-2.5h0A2.5 2.5 0 0110 9.5V13a1 1 0 001 1h2a1 1 0 001-1V9.5a2.5 2.5 0 012.5-2.5h0A2.5 2.5 0 0119.5 9.5V19a2 2 0 01-2 2Z M21 12h-2 M5 12H3 M12 3v4 M10 3h4"/></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                </div>
                <h1 className="text-4xl md:text-5xl font-serif-elegant text-dark-text mb-4">Book a Free 30-Minute Virtual Consultation</h1>
                <p className="text-lg md:text-xl text-dark-text/80 max-w-3xl mx-auto">Choose your preferred time and connect with our dental experts from anywhere in the world.</p>
            </header>

            <section className="py-16 container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Left Column - Info Panel */}
                    <div className="bg-light-grey p-8 rounded-2xl shadow-sm border border-medium-grey/30">
                        <h2 className="text-3xl font-serif-elegant text-dark-text mb-6">Your Personalized Session</h2>
                        <p className="text-dark-text/80 mb-6 leading-relaxed">
                             During your 30-minute session, our dentist will discuss your oral concerns, suggest treatment options, and help you plan your next steps.
                        </p>
                         <div className="mb-8">
                            <img src="https://picsum.photos/400/250?grayscale" alt="Virtual Consultation" className="rounded-xl shadow-lg w-full"/>
                        </div>
                        <ul className="space-y-4 text-dark-text">
                            <li className="flex items-center"><svg className="w-6 h-6 text-dark-text mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>Free 30-Minute Virtual Session</li>
                            <li className="flex items-center"><svg className="w-6 h-6 text-dark-text mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>Personalized Smile Consultation</li>
                            <li className="flex items-center"><svg className="w-6 h-6 text-dark-text mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m-9 9a9 9 0 009 9m-9-9h18"></path></svg>Global Access via Google Meet</li>
                        </ul>
                    </div>

                    {/* Right Column - Booking Form */}
                    <div className="bg-pure-white rounded-2xl p-8 shadow-sm border border-medium-grey/30">
                        <h3 className="text-2xl font-serif-elegant text-center mb-4">Select a Date & Time</h3>
                        <div className="bg-light-grey/50 p-4 rounded-lg">
                           <div className="flex justify-between items-center mb-2">
                               <button aria-label="Previous month" onClick={() => changeMonth(-1)} className="p-2 rounded-full hover:bg-medium-grey/50 focus:outline-none focus:ring-2 focus:ring-dark-text">&lt;</button>
                               <span className="font-semibold text-lg font-serif-elegant">{new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                               <button aria-label="Next month" onClick={() => changeMonth(1)} className="p-2 rounded-full hover:bg-medium-grey/50 focus:outline-none focus:ring-2 focus:ring-dark-text">&gt;</button>
                           </div>
                           <div className="grid grid-cols-7 gap-1 text-center font-semibold text-sm text-dark-text/70 mb-2" aria-hidden="true">
                               <div>Su</div><div>Mo</div><div>Tu</div><div>We</div><div>Th</div><div>Fr</div><div>Sa</div>
                           </div>
                           <div className="grid grid-cols-7 gap-1 text-sm">{renderCalendar()}</div>
                        </div>

                        {selectedDate && (
                            <div className="mt-4 animate-fadeIn">
                                <h4 className="text-lg font-serif-elegant text-center mb-2">Available Slots for {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</h4>
                                {errors.date && <p className="text-red-500 text-sm text-center">{errors.date}</p>}
                                <div className="grid grid-cols-3 gap-2">
                                    {availableSlots.length > 0 ? availableSlots.map(time => (
                                        <button
                                            key={time}
                                            type="button"
                                            onClick={() => setSelectedTime(time)}
                                            aria-pressed={selectedTime === time}
                                            className={`p-2 rounded-lg border transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-text ${selectedTime === time ? 'bg-dark-text text-pure-white border-dark-text' : 'border-medium-grey hover:bg-medium-grey/50'}`}>
                                            {time}
                                        </button>
                                    )) : <p className="col-span-3 text-center text-dark-text/70">No slots available for this day.</p>}
                                </div>
                                {errors.time && <p className="text-red-500 text-sm text-center mt-2">{errors.time}</p>}
                            </div>
                        )}

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                             <div>
                                <input id="name" type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} className="w-full p-3 bg-light-grey/50 rounded-lg border border-medium-grey/50 focus:ring-2 focus:ring-dark-text focus:outline-none transition shadow-inner" />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                            </div>
                             <div>
                                <input id="email" type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} className="w-full p-3 bg-light-grey/50 rounded-lg border border-medium-grey/50 focus:ring-2 focus:ring-dark-text focus:outline-none transition shadow-inner" />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>
                             <div>
                                <input id="whatsapp" type="tel" name="whatsapp" placeholder="WhatsApp Number (e.g., +1 555 123 4567)" value={formData.whatsapp} onChange={handleInputChange} className="w-full p-3 bg-light-grey/50 rounded-lg border border-medium-grey/50 focus:ring-2 focus:ring-dark-text focus:outline-none transition shadow-inner" />
                                {errors.whatsapp && <p className="text-red-500 text-sm mt-1">{errors.whatsapp}</p>}
                            </div>
                            <div>
                                <select id="country" name="country" value={formData.country} onChange={handleInputChange} className="w-full p-3 bg-light-grey/50 rounded-lg border border-medium-grey/50 focus:ring-2 focus:ring-dark-text focus:outline-none transition shadow-inner appearance-none">
                                    <option value="">Select Country</option>
                                    {countries.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                                {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country}</p>}
                            </div>
                            <button type="submit" className="w-full bg-dark-text text-pure-white font-bold py-3 px-8 rounded-full transition-all duration-300 hover:bg-dark-text/80 hover:shadow-lg">
                                Book Free Consultation
                            </button>
                        </form>
                    </div>
                </div>
            </section>

            {/* Confirmation Modal */}
            {isSubmitted && (
                <div className="fixed inset-0 bg-dark-text/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fadeIn">
                    <div className="bg-pure-white p-8 rounded-2xl shadow-2xl max-w-md w-full text-center border border-dark-grey">
                         <svg className="w-16 h-16 mx-auto text-soft-mint mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        <h2 className="text-3xl font-serif-elegant text-dark-text mb-4">Thank You!</h2>
                        <p className="text-dark-text/80 mb-6">
                            Thank you for booking your consultation! You’ll receive confirmation via WhatsApp and email shortly.
                        </p>
                        <button onClick={() => {
                            setIsSubmitted(false);
                            setSelectedDate(null);
                            setSelectedTime(null);
                            setFormData({ name: '', email: '', whatsapp: '', country: '' });
                            setErrors({});
                        }} className="bg-dark-text text-pure-white font-bold py-2 px-6 rounded-full transition-all duration-300 hover:bg-opacity-80">
                            Book Another Slot
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
};

export default BookConsultationPage;