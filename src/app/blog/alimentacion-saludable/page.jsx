import Image from 'next/image';
import React from 'react';



const  alimentacionSaludable = ()=>{

    return(

        <div className="bg-white py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 flex flex-col items-center justify-center ">
        <Image width={480} height={270} src="/alimentacion-saludable.jpg" alt="alimentacion-saludable"  className="mb-6"/>
          <h1 className="text-primary text-4xl font-bold mb-4">Guía para una Alimentación Saludable</h1>
          <p className="text-gray-700 text-lg mb-8">Una alimentación saludable es fundamental para mantener un cuerpo fuerte y resistente. Se trata de equilibrar adecuadamente los macronutrientes y micronutrientes esenciales, como carbohidratos complejos, proteínas magras, grasas saludables, vitaminas y minerales. Optar por alimentos frescos y minimizar el consumo de alimentos procesados ​​y azúcares añadidos puede ayudar a estabilizar los niveles de glucosa en sangre, mejorar la función cognitiva y apoyar la salud cardiovascular.

Planificar comidas variadas y nutritivas no solo promueve un peso saludable, sino que también fortalece el sistema inmunológico y protege contra enfermedades relacionadas con la dieta. Al elegir alimentos ricos en antioxidantes y compuestos antiinflamatorios, se puede reducir la inflamación celular y apoyar la función óptima del sistema digestivo. Este enfoque integral hacia la alimentación saludable no solo mejora el bienestar físico, sino que también favorece el equilibrio emocional y mental.</p>

            <a href='/blog' className="text-primary text-xl font-bold mb-4">Más artículos</a>
        </div>
        </div>
        </div>
    )
};
export default alimentacionSaludable