import Image from 'next/image';
import React from 'react';



const  saludOsea = ()=>{

    return(

        <div className="bg-white py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 flex flex-col items-center justify-center ">
        <Image width={480} height={270} src="/salud-osea.jpg" alt="Nutrientes Esenciales para la Salud Ósea"  className="mb-6"/>
          <h1 className="text-primary text-4xl font-bold mb-4">Nutrientes Esenciales para la Salud Ósea</h1>
          <p className="text-gray-700 text-lg mb-8">La salud ósea es crucial para mantener la movilidad y la calidad de vida a lo largo de los años. Consumir suficientes nutrientes como calcio, vitamina D, magnesio y vitamina K puede fortalecer los huesos y prevenir enfermedades óseas como la osteoporosis.

Alimentos como productos lácteos bajos en grasa, pescado, vegetales de hojas verdes y frutos secos son ricos en estos nutrientes y pueden apoyar la salud ósea. Además de una dieta equilibrada, mantener un estilo de vida activo y realizar ejercicio regularmente puede mejorar aún más la densidad ósea y fortalecer los músculos de soporte. Al incorporar alimentos ricos en nutrientes esenciales para la salud ósea, se promueve la longevidad y se reduce el riesgo de fracturas y lesiones óseas a lo largo de la vida.</p>

            <a href='/blog' className="text-primary text-xl font-bold mb-4">Más artículos</a>
        </div>
        </div>
        </div>
    )
};
export default saludOsea