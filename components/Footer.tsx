import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-dark-text/60 hover:text-dark-text transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-light-grey text-dark-text pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h3 className="text-xl font-serif-elegant font-bold mb-4 text-dark-text">MJB Care</h3>
                        <p className="text-dark-text/70 text-sm leading-relaxed">
                            A healthcare services organization based in Istanbul, Turkiye, dedicated to accessible, affordable, and transparent healthcare for all.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-lg font-serif-elegant font-bold mb-4 text-dark-text">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link to="/" className="text-dark-text/70 hover:text-dark-text transition">Home</Link></li>
                            <li><Link to="/dental" className="text-dark-text/70 hover:text-dark-text transition">Dental Care</Link></li>
                            <li><Link to="/about" className="text-dark-text/70 hover:text-dark-text transition">About Us</Link></li>
                            <li><Link to="/care-fund" className="text-dark-text/70 hover:text-dark-text transition">Care Fund</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-serif-elegant font-bold mb-4 text-dark-text">Contact Us</h3>
                        <ul className="space-y-2 text-dark-text/70">
                            <li><a href="https://wa.me/905523515894" className="hover:text-dark-text transition">WhatsApp: +90 552 3 515 894</a></li>
                            <li><a href="mailto:Hi@mjb.care" className="hover:text-dark-text transition">Email: Hi@mjb.care</a></li>
                            <li className="text-sm">Address: Bagcilar 429, Istanbul, Turkiye</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-serif-elegant font-bold mb-4 text-dark-text">Follow Us</h3>
                        <div className="flex space-x-5">
                            <SocialIcon href="https://www.instagram.com/mjb.care"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></SocialIcon>
                            <SocialIcon href="https://www.facebook.com/mjbcare7"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></SocialIcon>
                            <SocialIcon href="https://www.youtube.com/@mjbcare7"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 11.75a29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg></SocialIcon>
                            <SocialIcon href="https://www.reddit.com/r/MJBcare/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.72c-4.41 0-8-3.58-8-8 0-4.42 3.59-8 8-8s8 3.58 8 8c0 4.42-3.59 8-8 8z"></path><path d="M12 20.72c-1.85 0-3.5-.63-4.82-1.68"></path><path d="M12 20.72c1.85 0 3.5-.63-4.82-1.68"></path><path d="M16.82 14.25c.02.43-.32.8-.75.82s-.8-.32-.82-.75c-.02-.43.32-.8.75-.82.43-.03.8.32.82.75zm-9.64 0c-.02-.43.32-.8.75-.82s.8.32.82.75c.02.43-.32.8-.75.82-.43.02-.8-.32-.82-.75z"></path><path d="M12 6.5c-1.8 0-3.3 1.5-3.3 3.3 0 1 .5 1.9 1.2 2.5l-2.7 2.7c-.2.2-.2.5 0 .7s.5.2.7 0l2.7-2.7c.6.7 1.5 1.2 2.5 1.2 1.8 0 3.3-1.5 3.3-3.3s-1.5-3.3-3.3-3.3z"></path></svg></SocialIcon>
                        </div>
                    </div>
                </div>
                <div className="mt-12 border-t border-medium-grey/20 pt-8 text-center text-sm text-dark-text/70">
                    <p>&copy; {new Date().getFullYear()} MJB Care. All Rights Reserved. | <a href="#" className="hover:text-dark-text">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;