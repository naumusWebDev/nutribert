'use client';

import { useState } from 'react';
import Image from 'next/image';

const ContactoForm = () => {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    const contacto = { nombre, email, telefono, mensaje };

    try {
      const response = await fetch('/api/contacto', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contacto),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Error al crear el contacto');
      }

      const data = await response.json();
      setSuccess('Su mensaje ha sido enviado con éxito');
      setNombre('');
      setEmail('');
      setTelefono('');
      setMensaje('');
    } catch (error: any) {
      setError(error.message);
    }
  };

  return (
    <div className="bg-orange-50 py-24 px-6 sm:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-primary text-4xl font-bold mb-4">Contacto</h1>
          <p className="text-gray-700 text-lg">Ponte en contacto con nosotros si tienes cualquier duda acerca de nuestros servicios u horarios</p>
        </div>
        <div className="bg-white shadow-lg rounded-lg p-6 sm:p-10 flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <Image width={120} height={50} src="/logo.png" alt="Logo" />
            <p className="text-gray-700 mb-4">Teléfono: 654 87 98 98</p>
            <p className="text-gray-700 mb-4">C/ Mare de deu dels Desamparats, 5 El Campello, Alicante.</p>
          </div>
          <div className="md:w-1/2 w-full">
            {success && (
              <div className="mb-4 p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                {success}
              </div>
            )}
            {error && (
              <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                  placeholder="Tu nombre"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                  placeholder="Tu email"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={telefono}
                  onChange={(e) => setTelefono(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                  placeholder="Tu teléfono"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={mensaje}
                  onChange={(e) => setMensaje(e.target.value)}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
                  placeholder="Escribe tu mensaje aquí"
                  rows={4}
                  required
                ></textarea>
              </div>
              <button
                className="bg-primary text-white font-bold py-2 px-4 rounded hover:bg-primary-dark focus:outline-none focus:shadow-outline w-full"
                type="submit"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoForm;

