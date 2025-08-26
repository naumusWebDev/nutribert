'use client';

import Image from 'next/image';
import React, { useEffect } from 'react';

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
  useEffect(() => {
    const handleMouseEnter = (e) => {
      const content = e.currentTarget;
      const image = content.querySelector(".mi-imagen-oculta-publicaciones");
      if (image) {
        const rect = content.getBoundingClientRect();
        image.style.left = (rect.right + 10) + "px";
        image.style.top = rect.top + "px";
      }
    };

    const containers = document.querySelectorAll(".rw-journal-content");
    containers.forEach(content => {
      content.addEventListener("mouseenter", handleMouseEnter);
    });

    // Cleanup function
    return () => {
      containers.forEach(content => {
        content.removeEventListener("mouseenter", handleMouseEnter);
      });
    };
  }, []);

  return (
    <>
      {/* CSS Styles for hover functionality */}
      <style jsx>{`
        .contenedor-texto-imagen-publicaciones {
          position: static;
          display: inline-block;
        }
        .rw-journal-content {
          display: inline-block;
          cursor: pointer;
          position: relative;
        }
        /* wrapper para la imagen hover */
        .mi-imagen-oculta-publicaciones {
          display: none;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          position: fixed;
          width: 150px;
          height: 150px;
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          z-index: 9999;
          pointer-events: none;
          border: 2px solid #fff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
          border-radius: 4px;
        }
        /* Mostrar imagen al hover */
        .contenedor-texto-imagen-publicaciones:hover .mi-imagen-oculta-publicaciones {
          display: block;
          opacity: 1;
        }
        /* ocultar en móviles */
        @media (max-width: 834px) {
          .mi-imagen-oculta-publicaciones {
            display: none !important;
            opacity: 0 !important;
          }
        }
      `}</style>

      <div className="bg-orange-50 py-24 px-6 sm:px-8">
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
              <div key={blog.id} className="contenedor-texto-imagen-publicaciones bg-white shadow-lg rounded-lg p-6">
                <div className="rw-journal-content">
                  <Image width={480} height={270} src={blog.imagenlink} alt={blog.alt} className="mb-6"/>
                  
                  <h2 className="text-secondary text-xl font-bold mb-4">{blog.title}</h2>
                  <p className="text-gray-700 mb-4">{blog.summary}</p>
                  <a href={blog.link} className="text-primary hover:underline">Leer más...</a>
                  
                  {/* Hover image */}
                  <div 
                    className="mi-imagen-oculta-publicaciones"
                    style={{ backgroundImage: `url(${blog.imagenlink})` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

