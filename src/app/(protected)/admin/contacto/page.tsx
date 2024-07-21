"use client";

import { useEffect, useState } from "react";

const ContactoPage = () => {
  const [contactos, setContactos] = useState<any[]>([]);

  useEffect(() => {
    const fetchContactos = async () => {
      const response = await fetch('/api/contacto');
      const data = await response.json();
      setContactos(data);
    };

    fetchContactos();
  }, []);

  const deleteContacto = async (id: number) => {
    await fetch(`/api/contacto?id=${id}`, {
      method: 'DELETE',
    });
    setContactos(contactos.filter((contacto) => contacto.id !== id));
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Listado de Contactos</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr>
              <th className="border-b py-2 px-4">Nombre</th>
              <th className="border-b py-2 px-4">Email</th>
              <th className="border-b py-2 px-4">Teléfono</th>
              <th className="border-b py-2 px-4">Mensaje</th>
              <th className="border-b py-2 px-4">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contactos.map((contacto) => (
              <tr key={contacto.id}>
                <td className="border-b py-2 px-4">{contacto.nombre}</td>
                <td className="border-b py-2 px-4">{contacto.email}</td>
                <td className="border-b py-2 px-4">{contacto.telefono}</td>
                <td className="border-b py-2 px-4">{contacto.mensaje}</td>
                <td className="border-b py-2 px-4">
                  <button 
                    onClick={() => deleteContacto(contacto.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactoPage;

