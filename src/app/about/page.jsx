import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <>
    <div className="bg-white py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-primary text-4xl font-bold mb-4">Sobre mí</h1>
          <p className="text-gray-700 text-lg">Conoce más sobre la profesional detrás de Nutribert</p>
        </div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/3 mb-8 md:mb-0">
            
            <Image width={1920} height={1080} src="/carolina.jpg" alt="Carolina Bernabeu Tosso"  />
          </div>
          <div className="md:w-2/3 md:pl-12">
            <h2 className="text-secondary text-2xl font-bold mb-4">Carolina Bernabeu Tosso</h2>
            <p className="text-gray-700 mb-4">
              Soy Carolina Bernabeu Tosso, farmacéutica con un máster en nutrición y más de 10 años de experiencia en el campo de la nutrición y la salud. A lo largo de mi carrera, he ayudado a innumerables personas a alcanzar sus objetivos de salud y bienestar a través de un enfoque personalizado y basado en la ciencia.
            </p>
            <p className="text-gray-700 mb-4">
              En Nutribert, mi misión es proporcionar asesoramiento nutricional de alta calidad para ayudar a mis clientes a llevar una vida más saludable. Creo en un enfoque holístico que considera todos los aspectos de la vida de una persona para crear planes de nutrición que sean sostenibles y efectivos.
            </p>
            <p className="text-gray-700 mb-4">
              Además de mis consultas privadas, también participo en programas de educación comunitaria, talleres y seminarios para promover la importancia de la nutrición y un estilo de vida saludable.
            </p>
            <p className="text-gray-700">
              Estoy comprometida a seguir aprendiendo y actualizándome en los últimos avances en nutrición para ofrecer a mis clientes el mejor asesoramiento posible. Te invito a unirte a mí en este viaje hacia una vida más saludable y equilibrada.
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default About;
