import React from 'react';
import './Cirrhosis.css';
import LiverModel from '../LiverModel';

const Cirrhosis = () => {
   return (
       <section className="cirrhosis-section">
         <h1>¿Qué es el Cirrosis Hepática?</h1>
         <p className="intro">
         La cirrosis hepática, también conocida como cirrosis, es la formación severa de cicatrices en el hígado, 
         cada vez que hay uan lesión en el hígado, ya sea por el consumo de alcohol o otras causa como una infección, 
         él trata de regenerarse. Durante este proceso, el hígado forma tejidos cicatricial, a medida de que la cirrosis empeora, 
         se va expandiendo este tejido, dificultando al higado de cumplir su función. En estado avanzado la cirrosis puede ser mortal.
         </p>
   
         <div className="cirrhosis-content">
           <div className="cirrhosis-main-model">
             <h2>Modelo Interactivo:</h2>
             <LiverModel
               modelPath="/modelos/cirrhosis-liver.glb"
               scale={2.5}
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
   
         <h2>Prevención, Síntomas y Tratamiento</h2>
         <div className="cirrhosis-submodels">
           <div className="submodel-card">
             <h3>Prevención</h3>
             <LiverModel
               modelPath="/modelos/liquor-bottle.glb"
               scale={3.8}
             />
             <ul>
               <li>Limitar el consumo de alcohol.</li>
               <li>Comer una dieta saludable.</li>
               <li>Ejercitarse regularmente.</li>
               <li>Vacunarse contra la hepatitis A y B.</li>
             </ul>
           </div>
   
           <div className="submodel-card">
             <h3>Síntomas</h3>
             <LiverModel
               modelPath="/modelos/kidney.glb"
               scale={2.8}
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
   
           <div className="submodel-card">
             <h3>Tratamiento</h3>
             <LiverModel
               modelPath="/modelos/pills-bottle.glb"
               scale={6.5}
             />
             <ul>
               <li>Transplante de hígado.</li>
               <li>Realizar una endoscopia superior.</li>
               <li>Realizar una paracentesis.</li>
               <li>Tomar medicación.</li>
             </ul>
           </div>
         </div>
       </section>
     );
}

export default Cirrhosis