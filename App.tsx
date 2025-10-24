import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PatientStoriesPage from './pages/PatientStoriesPage';
import CareFundPage from './pages/CareFundPage';
import HairPage from './pages/HairPage';
import OrthopedicsPage from './pages/OrthopedicsPage';
import BookConsultationPage from './pages/BookConsultationPage';
import DentalCarePage from './pages/DentalCarePage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-pure-white">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/patient-stories" element={<PatientStoriesPage />} />
            <Route path="/care-fund" element={<CareFundPage />} />
            <Route path="/hair" element={<HairPage />} />
            <Route path="/dental" element={<DentalCarePage />} />
            <Route path="/orthopedics" element={<OrthopedicsPage />} />
            <Route path="/book-consultation" element={<BookConsultationPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;