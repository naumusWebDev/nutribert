import Image from 'next/image';
import React from 'react';

const SaludOsea = () => {
  return (
    <div className="bg-orange-50 py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Image 
            width={640} 
            height={360} 
            src="/salud-osea.jpg" 
            alt="Nutrientes Esenciales para la Salud Ósea" 
            className="mb-6 mx-auto rounded-lg shadow-md"
          />
          <h1 className="text-primary text-5xl font-bold mb-6">Nutrientes Esenciales para la Salud Ósea</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            La salud ósea es crucial para mantener la movilidad y la calidad de vida a lo largo de los años. Consumir suficientes nutrientes como calcio, vitamina D, magnesio y vitamina K puede fortalecer los huesos y prevenir enfermedades óseas como la osteoporosis.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Alimentos como productos lácteos bajos en grasa, pescado, vegetales de hojas verdes y frutos secos son ricos en estos nutrientes y pueden apoyar la salud ósea. Además de una dieta equilibrada, mantener un estilo de vida activo y realizar ejercicio regularmente puede mejorar aún más la densidad ósea y fortalecer los músculos de soporte. Al incorporar alimentos ricos en nutrientes esenciales para la salud ósea, se promueve la longevidad y se reduce el riesgo de fracturas y lesiones óseas a lo largo de la vida.
          </p>
          <a href="/blog" className="text-primary text-xl font-bold underline hover:text-primary-dark">
            Más artículos
          </a>
        </div>
      </div>
    </div>
  );
};

export default SaludOsea;
