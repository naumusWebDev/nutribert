import React from 'react';


const Footer = () => {
  return (
    <>
      <div className="border-t-2 border-primary">
        <footer className="bg-white text-gray-800 py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Nutribert</h3>
                <p className='font-bold'>Servicio de consulta nutricional personalizada.</p>
                <p className="text-sm">C/ Mare de deu dels Desamparats, 5 </p>
                <p className="text-sm">El Campello, Alicante</p>
                <p className="text-sm">Teléfono: 654 87 98 98</p>
                </div>
              <div>
                <h3 className="text-lg font-bold mb-2 text-primary">Enlaces rápidos</h3>
                <ul className="text-sm">
                  <li><a href="/" className="hover:text-primary">Inicio</a></li>
                  <li><a href="/about" className="hover:text-primary">Sobre mí</a></li>
                  <li><a href="/blog" className="hover:text-primary">Blog</a></li>
                  <li><a href="/contact" className="hover:text-primary">Contacto</a></li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div className="text-center mt-8 font-bold text-white bg-primary py-2">
        <p>&copy; 2024 Nutribert. Todos los derechos reservados.</p>
      </div>
    </>
  );
};

export default Footer;

