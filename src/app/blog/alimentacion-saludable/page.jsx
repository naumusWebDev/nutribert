import Image from 'next/image';
import React from 'react';

const AlimentacionSaludable = () => {
  return (
    <div className="bg-orange-50 py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Image 
            width={640} 
            height={360} 
            src="/alimentacion-saludable.jpg" 
            alt="alimentacion-saludable" 
            className="mb-6 rounded-lg shadow-md mx-auto"
          />
          <h1 className="text-primary text-5xl font-bold mb-6">Guía para una Alimentación Saludable</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Una alimentación saludable es fundamental para mantener un cuerpo fuerte y resistente. Se trata de equilibrar adecuadamente los macronutrientes y micronutrientes esenciales, como carbohidratos complejos, proteínas magras, grasas saludables, vitaminas y minerales. Optar por alimentos frescos y minimizar el consumo de alimentos procesados ​​y azúcares añadidos puede ayudar a estabilizar los niveles de glucosa en sangre, mejorar la función cognitiva y apoyar la salud cardiovascular.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Planificar comidas variadas y nutritivas no solo promueve un peso saludable, sino que también fortalece el sistema inmunológico y protege contra enfermedades relacionadas con la dieta. Al elegir alimentos ricos en antioxidantes y compuestos antiinflamatorios, se puede reducir la inflamación celular y apoyar la función óptima del sistema digestivo. Este enfoque integral hacia la alimentación saludable no solo mejora el bienestar físico, sino que también favorece el equilibrio emocional y mental.
          </p>
          <a href="/blog" className="text-primary text-xl font-bold underline hover:text-primary-dark">
            Más artículos
          </a>
        </div>
      </div>
    </div>
  );
};

export default AlimentacionSaludable;

