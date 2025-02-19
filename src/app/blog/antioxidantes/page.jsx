import Image from 'next/image';
import React from 'react';

const Antioxidantes = () => {
  return (
    <div className="bg-orange-50 py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Image 
            width={640} 
            height={360} 
            src="/antioxidantes.jpg" 
            alt="Impacto de los Antioxidantes en la Salud" 
            className="mb-6 rounded-lg shadow-md mx-auto"
          />
          <h1 className="text-primary text-5xl font-bold mb-6">Impacto de los Antioxidantes en la Salud</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Los antioxidantes desempeñan un papel vital en la protección de las células contra el daño oxidativo y el envejecimiento prematuro. Consumir alimentos ricos en antioxidantes, como bayas, nueces, vegetales de colores brillantes y té verde, puede ayudar a neutralizar los radicales libres y reducir el estrés oxidativo en el cuerpo.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Además de su papel en la salud celular, los antioxidantes pueden mejorar la función cardiovascular, apoyar la salud ocular y promover la piel radiante y saludable. Incorporar una variedad de alimentos ricos en antioxidantes en la dieta diaria puede fortalecer el sistema inmunológico y reducir el riesgo de enfermedades crónicas. Al priorizar una ingesta adecuada de antioxidantes, se fomenta la salud a nivel celular y se optimiza el funcionamiento general del cuerpo para un envejecimiento saludable y activo.
          </p>
          <a href="/blog" className="text-primary text-xl font-bold underline hover:text-primary-dark">
            Más artículos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Antioxidantes;
