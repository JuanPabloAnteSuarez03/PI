import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import './App.css';

// Import placeholder pages - replace with actual pages when available
const HomePage = () => (
  <div className="page-content">
    <h1>Página de Inicio</h1>
    <p>Bienvenido a 3D Medical Models</p>
  </div>
);

const HigadoGrasoPage = () => (
  <div className="page-content">
    <h1>Hígado Graso</h1>
    <p>Información sobre el hígado graso</p>
  </div>
);

const CirrosisHepaticaPage = () => (
  <div className="page-content">
    <h1>Cirrosis Hepática</h1>
    <p>Información sobre la cirrosis hepática</p>
  </div>
);

const QuizPage = () => (
  <div className="page-content">
    <h1>Quiz</h1>
    <p>Prueba tus conocimientos</p>
  </div>
);

const ContactoPage = () => (
  <div className="page-content">
    <h1>Contacto</h1>
    <p>Ponte en contacto con nosotros</p>
  </div>
);

const AboutPage = () => (
  <div className="page-content">
    <h1>Sobre Nosotros</h1>
    <p>Información sobre nuestro equipo</p>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/organo/higado-graso" element={<HigadoGrasoPage />} />
          <Route path="/organo/cirrosis-hepatica" element={<CirrosisHepaticaPage />} />
          <Route path="/quiz" element={<QuizPage />} />
          <Route path="/contacto" element={<ContactoPage />} />
          <Route path="/sobre-nosotros" element={<AboutPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
