import { Link } from 'react-router-dom';
import LiverModel from '../organ/LiverModel';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Explora la Anatomía Humana en 3D
                    </h1>
                    <p className="hero-subtitle">
                        Una plataforma interactiva para visualizar y aprender sobre el hígado,
                        sus enfermedades y su funcionamiento de una manera nunca antes vista.
                    </p>
                    <Link to="/organo" className="hero-cta-button">
                        Comenzar a Explorar
                    </Link>
                </div>
                <div className="hero-model-container">
                    <LiverModel modelPath="/modelos/healthy-liver.glb" scale={2.8} />
                </div>
            </header>

            {/* Features Section */}
            <section className="features-section">
                <div className="features-header">
                    <h2>¿Qué puedes hacer?</h2>
                    <p>Nuestra plataforma te ofrece herramientas visuales para un aprendizaje profundo.</p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon">🔬</div>
                        <h3>Visualiza en 3D</h3>
                        <p>Interactúa con modelos 3D detallados del hígado sano, con cirrosis y con hígado graso.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">📚</div>
                        <h3>Aprende y Compara</h3>
                        <p>Comprende las causas, síntomas y tratamientos de las enfermedades hepáticas más comunes.</p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon">💡</div>
                        <h3>Pon a Prueba tu Conocimiento</h3>
                        <p>Realiza nuestro quiz interactivo para evaluar cuánto has aprendido sobre el hígado.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;