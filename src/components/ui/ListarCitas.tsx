
import React from 'react';

type Cita = {
  id: number;
  dia: string;
  hora: string;
  nombre: string;
  telefono: string;
  notas?: string;
};

type ListarCitasProps = {
  citas: Cita[];
};

export const ListarCitas: React.FC<ListarCitasProps> = ({ citas }) => {
  return (
    <div className="space-y-4">
      {citas.length === 0 ? (
        <p>No hay citas disponibles</p>
      ) : (
        citas.map(cita => (
          <div key={cita.id} className="p-4 border rounded-lg shadow-sm bg-white">
            <h3 className="text-lg font-semibold mb-2">Cita #{cita.id}</h3>
            <p><strong>Día:</strong> {new Date(cita.dia).toLocaleDateString()}</p>
            <p><strong>Hora:</strong> {new Date(cita.hora).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
            <p><strong>Nombre:</strong> {cita.nombre}</p>
            <p><strong>Teléfono:</strong> {cita.telefono}</p>
            {cita.notas && <p><strong>Notas:</strong> {cita.notas}</p>}
          </div>
        ))
      )}
    </div>
  );
};
