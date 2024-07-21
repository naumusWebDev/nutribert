import Image from 'next/image';
import React from 'react';



const  dietaEquilibrada = ()=>{

    return(

        <div className="bg-white py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 flex flex-col items-center justify-center ">
        <Image width={480} height={270} src="/dieta-equilibrada.jpg" alt="dieta-equilibrada"  className="mb-6"/>
          <h1 className="text-primary text-4xl font-bold mb-4">Beneficios de una Dieta Equilibrada</h1>
          <p className="text-gray-700 text-lg mb-8">Una dieta equilibrada es esencial para mantener un peso saludable y promover el bienestar general. Incorporar una variedad de alimentos nutritivos como frutas frescas, verduras de hojas verdes, granos enteros y proteínas magras proporciona al cuerpo los nutrientes esenciales que necesita para funcionar óptimamente.

Este enfoque no solo mejora la digestión y fortalece el sistema inmunológico, sino que también reduce el riesgo de enfermedades crónicas como la diabetes tipo 2 y las enfermedades cardiovasculares. Además, una dieta equilibrada puede mejorar la salud mental y aumentar los niveles de energía, lo que contribuye a una mejor calidad de vida a largo plazo. Al mantener un equilibrio adecuado de macronutrientes y micronutrientes, se promueve la función celular óptima y se apoya el mantenimiento de un peso corporal saludable.</p>

            <a href='/blog' className="text-primary text-xl font-bold mb-4">Más artículos</a>
        </div>
        </div>
        </div>
    )
};
export default dietaEquilibrada