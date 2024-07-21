import Image from 'next/image';
import React from 'react';



const  hidratacionAdecuada = ()=>{

    return(

        <div className="bg-white py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12 flex flex-col items-center justify-center ">
        <Image width={480} height={270} src="/hidratacion.jpg" alt="Importancia de una Hidratación Adecuada"  className="mb-6"/>
          <h1 className="text-primary text-4xl font-bold mb-4">Importancia de una Hidratación Adecuada</h1>
          <p className="text-gray-700 text-lg mb-8">La hidratación adecuada es fundamental para mantener la salud y el bienestar en general. Beber suficiente agua a lo largo del día no solo ayuda a regular la temperatura corporal y mantener la piel hidratada, sino que también facilita la función adecuada de los órganos y sistemas corporales.

Además, la hidratación adecuada apoya la digestión saludable, previene la fatiga y mejora el rendimiento físico y mental. Incorporar bebidas como agua, infusiones de hierbas y agua de coco puede ayudar a mantener un equilibrio óptimo de líquidos en el cuerpo, beneficiando así la salud a largo plazo. Al mantener una hidratación adecuada, se favorece la eliminación de toxinas y se apoya la función renal y hepática óptima, promoviendo así la salud integral del cuerpo.</p>

            <a href='/blog' className="text-primary text-xl font-bold mb-4">Más artículos</a>
        </div>
        </div>
        </div>
    )
};
export default hidratacionAdecuada