import Image from 'next/image';
import React from 'react';

const MejorarDigestion = () => {
  return (
    <div className="bg-orange-50 py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Image 
            width={640} 
            height={360} 
            src="/alimentacion-saludable.jpg" 
            alt="Alimentos que Mejoran la Digestión" 
            className="mb-6 rounded-lg shadow-md mx-auto"
          />
          <h1 className="text-primary text-5xl font-bold mb-6">Alimentos que Mejoran la Digestión</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            La salud digestiva juega un papel crucial en el bienestar general, y la elección de alimentos adecuados puede tener un impacto significativo en la función intestinal. Incorporar alimentos ricos en fibra, como frutas frescas, verduras crudas y cereales integrales, puede promover la regularidad intestinal y aliviar el estreñimiento.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Además, los alimentos probióticos como el yogur y el kéfir pueden ayudar a mantener un equilibrio saludable de bacterias intestinales, mejorando así la digestión y fortaleciendo el sistema inmunológico. Incluir estos alimentos en tu dieta diaria puede aliviar problemas digestivos comunes y mejorar la absorción de nutrientes, apoyando así la salud digestiva a largo plazo. Al priorizar la hidratación adecuada y evitar el consumo excesivo de alimentos procesados, se apoya aún más la función gastrointestinal óptima y se promueve la salud general del cuerpo.
          </p>
          <a href="/blog" className="text-primary text-xl font-bold underline hover:text-primary-dark">
            Más artículos
          </a>
        </div>
      </div>
    </div>
  );
};

export default MejorarDigestion;
