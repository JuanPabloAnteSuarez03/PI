import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import './App.css';

// Pages
import Home from './pages/home/Home';
import Liver from './pages/organ/Liver';
import FattyLiver from './pages/organ/fatty-liver/FattyLiver';
import Cirrhosis from './pages/organ/cirrhosis/Cirrhosis';
import Quiz from './pages/quiz/Quiz';
import Contact from './pages/contact/Contact';
import AboutUs from './pages/about-us/AboutUs';
import NotFound from './pages/not-found/NotFound';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/organo" element={<Liver />} />
          <Route path="/organo/higado-graso" element={<FattyLiver />} />
          <Route path="/organo/cirrosis-hepatica" element={<Cirrhosis />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/sobre-nosotros" element={<AboutUs />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
