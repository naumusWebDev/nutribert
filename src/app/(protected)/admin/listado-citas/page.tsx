'use client'

import { useEffect, useState } from 'react';
import { ListarCitas } from '../../../../components/ui/ListarCitas';
import { Input } from '@/components/ui/input';

const ListadoCitasPage = () => {
  const [citas, setCitas] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCitas = async () => {
      try {
        const response = await fetch(`/api/crear-cita?nombre=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
          throw new Error('Error al obtener las citas');
        }
        const data = await response.json();
        setCitas(data);
      } catch (error: any) {
        setError('Error al cargar las citas');
      }
    };
    fetchCitas();
  }, [searchTerm]);

  const handleDelete = async (id: number) => {
    const confirmDelete = window.confirm('¿Estás seguro de que quieres eliminar esta cita?');
    if (!confirmDelete) {
      return;
    }

    try {
      const response = await fetch(`/api/crear-cita?id=${id}`, { method: 'DELETE' });
      if (response.ok) {
        setCitas(citas.filter(cita => cita.id !== id));
      } else {
        const errorData = await response.json();
        console.error('Error al eliminar la cita:', errorData.message);
      }
    } catch (error) {
      console.error('Error al eliminar la cita', error);
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-secondary">
            <h2 className="text-2xl font-bold mb-4">Listado de Citas</h2>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <div className="mb-4">
              <Input
                type="text"
                placeholder="Buscar por nombre"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mb-4"
              />
            </div>
            <ListarCitas citas={citas} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoCitasPage;
