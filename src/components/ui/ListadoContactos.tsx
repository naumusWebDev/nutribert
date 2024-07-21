
// src/components/ui/ListadoContactos.tsx
import React from 'react';

type Contacto = {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  mensaje: string;
};

type ListadoContactosProps = {
  contactos: Contacto[];
  onDelete: (id: number) => void;
};

export const ListadoContactos: React.FC<ListadoContactosProps> = ({ contactos, onDelete }) => {
  return (
    <div className="p-4">
      {contactos.length === 0 ? (
        <p className="text-center text-gray-600">No hay contactos disponibles</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Teléfono</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Mensaje</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {contactos.map(contacto => (
              <tr key={contacto.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{contacto.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contacto.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contacto.telefono}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{contacto.mensaje}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => onDelete(contacto.id)}
                    className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
