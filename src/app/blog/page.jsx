import Image from 'next/image';
import React from 'react';

// Datos simulados para los blogs (podrían venir de una API o base de datos)
const blogs = [
  {
    id: 1,
    title: 'Beneficios de una Dieta Equilibrada',
    summary: 'Una dieta equilibrada es esencial para mantener un peso saludable y promover el...',
    link: '/blog/dieta-equilibrada',
    imagenlink: '/dieta-equilibrada.jpg',
    alt:"dieta-equilibrada",
  },
  {
    id: 2,
    title: 'Impacto de los Antioxidantes en la Salud',
    summary: 'Los antioxidantes desempeñan un papel vital en la protección de las células contra el daño oxidativo...',
    link: '/blog/antioxidantes',
    imagenlink: '/antioxidantes.jpg',
    alt:"patologias",
  },
  {
    id: 3,
    title: 'Guía para una Alimentación Saludable',
    summary: 'Una alimentación saludable es fundamental para mantener un cuerpo fuerte y resistente...',
    link: '/blog/alimentacion-saludable',
    imagenlink: '/alimentacion-saludable.jpg',
    alt:"alimentacion-saludable",
  },
  {
    id: 4,
    title: 'Alimentos que Mejoran la Digestión',
    summary: 'La salud digestiva juega un papel crucial en el bienestar general, y la elección de...',
    link: '/blog/mejorar-la-digestion',
    imagenlink: '/mejora-digestion.jpg',
    alt:"mejora-digestion",
  },
  {
    id: 5,
    title: 'Importancia de una Hidratación Adecuada',
    summary: 'La hidratación adecuada es fundamental para mantener la salud y el bienestar en general...',
    link: '/blog/hidratacion-adecuada',
    imagenlink: '/hidratacion.jpg',
    alt:"hidratacion",
  },
  {
    id: 6,
    title: 'Nutrientes Esenciales para la Salud Ósea',
    summary: 'La salud ósea es crucial para mantener la movilidad y la calidad de vida a lo largo de...',
    link: '/blog/salud-osea',
    imagenlink: '/salud-osea.jpg',
    alt:"salud-osea",
  },
];

const Blog = () => {
  return (
    <div className="bg-white py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-primary text-4xl font-bold mb-4">Blog</h1>
          <p className="text-gray-700 text-lg">Explora nuestras últimas publicaciones y consejos de nutrición</p>
        </div>

        {/* Blog Entries */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mapeo de blogs */}
          {blogs.map(blog => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg p-6">
              <Image  width={480} height={270} src={blog.imagenlink} alt={blog.alt}  className="mb-6"/>
              
              <h2 className="text-secondary text-xl font-bold mb-4">{blog.title}</h2>
              <p className="text-gray-700 mb-4">{blog.summary}</p>
              <a href={blog.link} className="text-primary hover:underline">Leer más...</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;

