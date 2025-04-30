import { Outlet, Link } from 'react-router-dom';
import './Liver.css';
import '../organ/cirrhosis/Cirrhosis';
import '../organ/fatty-liver/FattyLiver';
import '../organ/LiverModel';
import LiverModel from '../organ/LiverModel';

const Liver = () => {
    return (
      <div className="liver-container">
        <h1>Enfermedades del Hígado</h1>
        <p>El hígado es un órgano vital que desempeña un papel crucial en el metabolismo, la desintoxicación y la producción de proteínas. Sin embargo, puede verse afectado por diversas enfermedades, como la cirrosis hepática y el hígado graso.</p>
        <p>Haz click en los botones para ver más sobre la enfermedad</p>
        <div className="liver-model">
            <LiverModel modelPath="../../../public/modelos/healthy-liver.glb" scale={5}/>
        </div> 
        <div className="liver-card-buttons">
          <Link to="/organo/cirrosis-hepatica" className="card-button">
            Cirrosis hepática
          </Link>
          <Link to="/organo/higado-graso" className="card-button">
            Hígado Graso
          </Link>
        </div>
        <Outlet />
      </div>
    );
  }
  
  export default Liver;