// src/components/FattyLiver.jsx
import React from 'react';
import './FattyLiver.css';
import LiverModel from '../LiverModel';

const FattyLiver = () => {
  return (
    <section className="fattyliver-section">
      <h1>¿Qué es el Hígado Graso?</h1>
      <p className="intro">
        El hígado graso, también llamado esteatosis hepática, es una condición en la que
        se acumula exceso de lípidos (grasas) dentro de las células del hígado. Estas acumulaciones
        pueden alterar la función normal del órgano, que incluye la desintoxicación, la producción
        de proteínas y la regulación del metabolismo de grasas y azúcares. Existen dos formas principales:
        <strong> esteatosis hepática no alcohólica (NAFLD)</strong> y
        <strong> esteatosis hepática alcohólica (AFLD)</strong>, dependiendo de la ingesta de alcohol.
      </p>

      <div className="fattyliver-content">
        <div className="fattyliver-main-model">
          <h2>Modelo Interactivo:</h2>
          <LiverModel
            modelPath="/modelos/fatty-liver-disease.glb"
            scale={1.5}
          />
        </div>
        <div className="fattyliver-text">
          <h3>Causas Principales</h3>
          <ul>
            <li>Obesidad y sobrepeso: exceso de tejido adiposo sistémico.</li>
            <li>Resistencia a la insulina y diabetes tipo 2.</li>
            <li>Consumo excesivo de alcohol (AFLD).</li>
            <li>Dieta rica en grasas saturadas y azúcares simples.</li>
            <li>Algunos medicamentos: esteroides, tamoxifeno, metotrexato.</li>
            <li>Factores genéticos y predisposición familiar.</li>
          </ul>
          <h3>Consecuencias y Progresión</h3>
          <ul>
            <li>Inflamación del hígado (esteatohepatitis).</li>
            <li>Fibrosis y cicatrización del tejido hepático.</li>
            <li>Cirrosis en fases avanzadas.</li>
            <li>Aumento del riesgo de hepatocarcinoma (cáncer de hígado).</li>
            <li>Alteraciones en perfiles lipídicos y glucosa en sangre.</li>
          </ul>
        </div>
      </div>

      <h2>Prevención, Síntomas y Tratamiento</h2>
      <div className="fattyliver-submodels">
        <div className="submodel-card">
          <h3>Prevención</h3>
          <LiverModel
            modelPath="/modelos/drinking-prevention.glb"
            scale={1.2}
          />
          <ul>
            <li>Reducir o eliminar el consumo de alcohol.</li>
            <li>Adoptar dieta equilibrada: verduras, frutas, granos integrales.</li>
            <li>Realizar ejercicio físico regular.</li>
            <li>Control de peso y circunferencia abdominal.</li>
            <li>Monitoreo de niveles de glucosa y lípidos en sangre.</li>
          </ul>
        </div>

        <div className="submodel-card">
          <h3>Síntomas</h3>
          <LiverModel
            modelPath="/modelos/jaundice-symtomp.glb"
            scale={1.5}
          />
          <ul>
            <li>Fatiga crónica y malestar general.</li>
            <li>Dolor o molestia en el cuadrante superior derecho del abdomen.</li>
            <li>Ictericia: coloración amarillenta de piel y ojos.</li>
            <li>Hinchazón abdominal (ascitis) en etapas avanzadas.</li>
            <li>Elevación de enzimas hepáticas en análisis de sangre.</li>
          </ul>
        </div>

        <div className="submodel-card">
          <h3>Tratamiento</h3>
          <LiverModel
            modelPath="/modelos/liver-transplant-treatment.glb"
            scale={1.5}
          />
          <ul>
            <li>Modificación de estilo de vida: dieta y ejercicio.</li>
            <li>Terapia farmacológica para resistencia a la insulina.</li>
            <li>Suplementos antioxidantes (vitamina E) en algunos casos.</li>
            <li>Monitoreo y manejo de comorbilidades: diabetes, hipertensión.</li>
            <li>Trasplante de hígado en casos de cirrosis irreversibles.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FattyLiver;
