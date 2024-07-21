import React from 'react';

type Cita = {
  id: number;
  dia: string;
  nombre: string;
  telefono: string;
  notas?: string;
};

type ListarCitasProps = {
  citas: Cita[];
  onDelete: (id: number) => void; // Función para manejar la eliminación
};

export const ListarCitas: React.FC<ListarCitasProps> = ({ citas, onDelete }) => {
  return (
    <div className="p-4">
      {citas.length === 0 ? (
        <p className="text-center text-gray-600">No hay citas disponibles</p>
      ) : (
        <table className="min-w-full divide-y divide-gray-200 bg-white shadow-md rounded-lg">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Día</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Nombre</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Teléfono</th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">Notas</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {citas.map(cita => (
              <tr key={cita.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{cita.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(cita.dia).toLocaleDateString()}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cita.nombre}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cita.telefono}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{cita.notas}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <button
                    onClick={() => onDelete(cita.id)}
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
