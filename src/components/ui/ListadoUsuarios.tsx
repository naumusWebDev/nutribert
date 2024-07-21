
import React from 'react';

type User = {
  id: string;
  name: string;
  email: string;
};

type ListadoUsuariosProps = {
  usuarios: User[];
  onDelete: (id: string) => void; // Función para manejar la eliminación
};

export const ListadoUsuarios: React.FC<ListadoUsuariosProps> = ({ usuarios, onDelete }) => {
  return (
    <div className="p-4">
      {usuarios.length === 0 ? (
        <p className="text-center text-gray-600">No hay usuarios disponibles</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Email</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {usuarios.map(user => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{user.name || 'N/A'}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => onDelete(user.id)}
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
