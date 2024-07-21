import React from 'react';

const Testimonial = ({ text, author }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-16 mb-4 border-b border-secondary ">
      <p className="text-gray-800 mb-4">"{text}"</p>
      <p className="text-gray-700 font-bold">{author}</p>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      text: 'Gracias a su ayuda, he logrado perder peso de manera efectiva sin perder energía.',
      author: 'María Gómez',
    },
    {
      text: 'Excelente servicio y seguimiento personalizado. Recomendado al 100%.',
      author: 'Juan Pérez',
    },
    {
      text: 'No sólo pierdes peso, aprendes a comer variado y saludable para mantenerte en el tiempo.',
      author: 'Pedro Marín',
    },
    {
      text: 'Me habían hablado muy bien de Carolina, pero ha superado cualquier expectativa. Gran Profesional.',
      author: 'Carmen Arnau',
    },
  ];

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 x">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-primary">¿Qué opinan de nosotros?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} text={testimonial.text} author={testimonial.author} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;
