import Image from 'next/image';
import React from 'react';

// Datos simulados para los blogs (podrían venir de una API o base de datos)
const cards = [
  {
    id: 1,
    title: 'Planificación de Dietas',
    description: 'Diseñamos planes de alimentación personalizados para que puedas alcanzar tus objetivos de salud y bienestar.',
    imagenlink: '/dietas.png',
    alt: 'dietas',
  },
  {
    id: 2,
    title: 'Especialista en Patologías',
    description: 'Enfermedades y dolencias pueden dificultar el llevar una alimentación sana. En Nutribert podemos ayudarte.',
    imagenlink: '/patologias.png',
    alt: 'patologias',
  },
  {
    id: 3,
    title: 'Asesoramiento Nutricional',
    description: 'Aprende a comer bien y alcanzar no sólo tu peso ideal si o también el equilibrio en tu organismo.',
    imagenlink: '/asesoramiento.png',
    alt: 'asesoramiento',
  },
  
];

const Card = () => {
  return (
    <>
    <div className="bg-orange-50 py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
       

        {/* card Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapeo de cards */}
          {cards.map(card => (
            <div key={card.id} className="bg-white shadow-lg rounded-lg p-6">
              <Image  width={50} height={50} src={card.imagenlink} alt={card.alt}  className="mb-6"/>
              
              <h2 className="text-secondary text-xl font-bold mb-4">{card.title}</h2>
              <p className="text-gray-700 mb-4">{card.description}</p>
              
            </div>
          ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Card;





