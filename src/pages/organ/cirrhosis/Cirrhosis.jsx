import React, {useState, useEffect, useRef} from 'react';
import { Link } from 'react-router-dom';
import './Cirrhosis.css';
import "../Scene.css";
import LiverModel from '../LiverModel';
import SceneModel from '../Scene';

export default function Cirrhosis(){
  const [activeTab, setActiveTab] = useState("prevention");
  const [showInformation, setInformation] = useState(false);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId)
  }

  const handleInformation = () => {
    setInformation(!showInformation)
    setShowInformation(false)
  }

  const tabs = [
    {
      id:"prevention",
      title: "Prevención",
      icon: "🛡️",
      content: (
           <div className="submodel-card">
             <h3>Prevención</h3>
             <LiverModel
               modelPath="/modelos/liquor-bottle.glb"
               scale={4.5}
             />
             <ul>
               <li>Limitar el consumo de alcohol.</li>
               <li>Comer una dieta saludable.</li>
               <li>Ejercitarse regularmente.</li>
               <li>Vacunarse contra la hepatitis A y B.</li>
             </ul>
          </div>
      )
    },
    {
      id:"symptoms",
      title: "Síntomas",
      icon: "🩺",
      content: (
          <div className="submodel-card">
              <h3>Síntomas</h3>
              <LiverModel
                modelPath="/modelos/kidney.glb"
                scale={1.5}
              />
              <ul>
                <li>Perdida de peso.</li>
                <li>Dolor abdominal.</li>
                <li>Perdida de apetito.</li>
                <li>Náusea y vómito.</li>
                <li>Picazón en la piel.</li>
                <li>Problemas en el riñón.</li>
              </ul>
          </div>
      )
    },
    {
      id:"treatment",
      title: "Tratamiento",
      icon: "💊",
      content: (
          <div className="submodel-card">
             <h3>Tratamiento</h3>
             <LiverModel
               modelPath="/modelos/pills-bottle.glb"
               scale={10.5}
             />
             <ul>
               <li>Transplante de hígado.</li>
               <li>Realizar una endoscopia superior.</li>
               <li>Realizar una paracentesis.</li>
               <li>Tomar medicación.</li>
             </ul>
           </div>
      )
    },
  ]

  return (
      <div className="cirrhosis-section">
        <div className="page-header">
          <h1>¿Qué es la Cirrosis Hepática?</h1>
          <Link to="/organo" className="nav-button">
            ✨ Ver Hígado Sano
          </Link>
        </div>
         <p className="intro">
         La cirrosis hepática, también conocida como cirrosis, es la formación severa de cicatrices en el hígado, 
         cada vez que hay uan lesión en el hígado, ya sea por el consumo de alcohol o otras causa como una infección, 
         él trata de regenerarse. Durante este proceso, el hígado forma tejidos cicatricial, a medida de que la cirrosis empeora, 
         se va expandiendo este tejido, dificultando al higado de cumplir su función. En estado avanzado la cirrosis puede ser mortal.
         </p>
   
         <div className="cirrhosis-content">
           <div className="cirrhosis-main-model">
            <SceneModel
               modelPath="/modelos/cirrhosis-liver.glb"
               showInstructions={showInformation}
               scale={[0.1, 0.1, 0.1]}
             />
           </div>
           <div className="cirrhosis-text">
             <h3>Causas Principales</h3>
             <ul>
               <li>Consumo execivo de alcohol.</li>
               <li>Padecer hepatitis viral.</li>
               <li>Padecer hígado graso.</li>
               <li>Infecciones como sífilis.</li>
               <li>Consumo execivo de algunos medicamentos como el metrotexato o la isoniazida.</li>
             </ul>
             <h3>Consecuencias y Progresión</h3>
             <ul>
               <li>Cicatrización del tejido hepático.</li>
               <li>Presión arterial alta en las venas que suministran el hígado.</li>
               <li>Agrandamiento del tamaño del bazo.</li>
               <li>Aumento del riesgo de cáncer de hígado.</li>
             </ul>
           </div>
         </div>

         <section className="cirrhosis-tab-section" id="tabs" >
            <div className="cirrhosis-tabs-header">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`cirrhosis-tab-button ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span>{tab.title}</span>
                </button>
              ))}
            </div>

            <div className="cirrhosis-tab-content">
              {tabs.map(
                (tab) =>
                  activeTab === tab.id && (
                    <div key={tab.id} className="cirrhosis-submodels">
                      {tab.content}
                    </div>
                  )
              )}
            </div>
         </section>
        </div>
    )
}