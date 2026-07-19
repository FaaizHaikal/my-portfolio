import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Header';
import AboutPage from './pages/AboutPage';
import ExperienceDetailPage from './pages/ExperienceDetailPage';
import ExperiencesPage from './pages/ExperiencesPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/ScrollToTop';
import ScrollToSection from './components/ScrollToSection';

function HomePage() {
  return (
    <>
      <AboutPage />
      <ExperiencesPage />
      <ContactPage />
    </>
  );
}

function App() {
  return (
    <Router basename="/my-portfolio">
      <ScrollToTop />
      <ScrollToSection />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/experiences/:id" element={<ExperienceDetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
