import Image from 'next/image';
import React from 'react';

const DietaEquilibrada = () => {
  return (
    <div className="bg-orange-50 py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto bg-white p-8 shadow-lg rounded-lg">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <Image 
            width={640} 
            height={360} 
            src="/dieta-equilibrada.jpg" 
            alt="dieta-equilibrada" 
            className="mb-6 rounded-lg shadow-md mx-auto"
          />
          <h1 className="text-primary text-5xl font-bold mb-6">Beneficios de una Dieta Equilibrada</h1>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Una dieta equilibrada es esencial para mantener un peso saludable y promover el bienestar general. Incorporar una variedad de alimentos nutritivos como frutas frescas, verduras de hojas verdes, granos enteros y proteínas magras proporciona al cuerpo los nutrientes esenciales que necesita para funcionar óptimamente.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed mb-8">
            Este enfoque no solo mejora la digestión y fortalece el sistema inmunológico, sino que también reduce el riesgo de enfermedades crónicas como la diabetes tipo 2 y las enfermedades cardiovasculares. Además, una dieta equilibrada puede mejorar la salud mental y aumentar los niveles de energía, lo que contribuye a una mejor calidad de vida a largo plazo. Al mantener un equilibrio adecuado de macronutrientes y micronutrientes, se promueve la función celular óptima y se apoya el mantenimiento de un peso corporal saludable.
          </p>
          <a href="/blog" className="text-primary text-xl font-bold underline hover:text-primary-dark">
            Más artículos
          </a>
        </div>
      </div>
    </div>
  );
};

export default DietaEquilibrada;
