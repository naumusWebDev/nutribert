import Image from 'next/image';
import React from 'react';



const  mejorarDigestion = ()=>{

    return(

        <div className="bg-white py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 flex flex-col items-center justify-center ">
        <Image width={480} height={270} src="/alimentacion-saludable.jpg" alt="alimentacion-saludable"  className="mb-6"/>
          <h1 className="text-primary text-4xl font-bold mb-4">Alimentos que Mejoran la Digestión</h1>
          <p className="text-gray-700 text-lg mb-8">La salud digestiva juega un papel crucial en el bienestar general, y la elección de alimentos adecuados puede tener un impacto significativo en la función intestinal. Incorporar alimentos ricos en fibra, como frutas frescas, verduras crudas y cereales integrales, puede promover la regularidad intestinal y aliviar el estreñimiento.

Además, los alimentos probióticos como el yogur y el kéfir pueden ayudar a mantener un equilibrio saludable de bacterias intestinales, mejorando así la digestión y fortaleciendo el sistema inmunológico. Incluir estos alimentos en tu dieta diaria puede aliviar problemas digestivos comunes y mejorar la absorción de nutrientes, apoyando así la salud digestiva a largo plazo. Al priorizar la hidratación adecuada y evitar el consumo excesivo de alimentos procesados, se apoya aún más la función gastrointestinal óptima y se promueve la salud general del cuerpo.</p>

            <a href='/blog' className="text-primary text-xl font-bold mb-4">Más artículos</a>
        </div>
        </div>
        </div>
    )
};
export default mejorarDigestion