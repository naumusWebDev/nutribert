import React from 'react';

const Cta = () => {
  return (
    <>
    <div className="bg-secondary text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">¿Listo para mejorar tu salud?</h2>
        <p className="text-lg mb-8">
          Puedes consultar nuestros últimos artículos de blog para estar informado de las últimas novedades en alimentación saludable.
        </p>
        <a href="/blog" className="bg-white text-primary hover:bg-primary-dark hover:text-white font-bold py-3 px-8 rounded-full shadow-lg uppercase">
          Saber más
        </a>
      </div>
    </div>
    </>
  );
};

export default Cta;
