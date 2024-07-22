import Link from 'next/link';
import React from 'react';


const Hero = () => {
  return (
    <>
    <div className="bg-white text-black py-32 px-8 sm:px-6 lg:px-8 border-b border-primary  bg-[url('/nutribert.jpg')] bg-cover">
      <div className="max-w-7xl mx-auto">
      <p className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-primary mb-4">
        Nutribert
      </p>
      <h1 className="text-lg sm:text-2xl md:text-3xl mb-2 text-gray-800">
        Nutricionista en El Campello
      </h1>
      <p className="text-base sm:text-lg md:text-xl mb-8 text-gray-600">
        Tu salud empieza con una buena alimentación. ¡Regístrate y pide una cita!
      </p>
      <Link
       href="/register"
        className="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full shadow-lg uppercase transition-transform transform hover:scale-105"
      >
        Registrarse
      </Link>
      </div>
    </div>
    </>
  );
};

export default Hero;


