import { Link } from 'react-router-dom';
import './Liver.css';
import LiverModel from './LiverModel';

const Liver = () => {
    return (
      <div className="liver-page-container">
        <div className="liver-intro-section">
          <div className="liver-intro-text">
            <h1>Explora el Hígado Sano</h1>
            <p>
              El hígado es uno de los órganos más grandes y esenciales del cuerpo.
              Funciona como una planta de procesamiento central, desintoxicando la sangre,
              metabolizando nutrientes y produciendo bilis para la digestión.
            </p>
            <p>
              Usa el modelo 3D para explorar su anatomía y aprende sobre las
              enfermedades comunes que pueden afectarlo en las siguientes secciones.
            </p>
          </div>
          <div className="liver-main-model-container">
            <LiverModel modelPath="/modelos/healthy-liver.glb" scale={2.5} />
          </div>
        </div>

        <div className="disease-cards-container">
          <Link to="/organo/cirrosis" className="disease-card">
            <div className="card-icon">🩺</div>
            <h2>Cirrosis Hepática</h2>
            <p>Descubre cómo la cicatrización avanzada afecta la función del hígado.</p>
            <span className="card-link">Saber más →</span>
          </Link>
          <Link to="/organo/higado-graso" className="disease-card">
            <div className="card-icon">🍔</div>
            <h2>Hígado Graso</h2>
            <p>Entiende cómo la acumulación de grasa puede dañar este órgano vital.</p>
            <span className="card-link">Saber más →</span>
          </Link>
        </div>
      </div>
    );
  }
  
  export default Liver;