// src/app/admin/contacto/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { ListadoContactos } from '@/components/ui/ListadoContactos';
import { Input } from '@/components/ui/input';

const ContactoPage = () => {
  const [contactos, setContactos] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContactos = async () => {
      try {
        const response = await fetch(`/api/contacto?nombre=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
          throw new Error('Error al obtener los contactos');
        }
        const data = await response.json();
        setContactos(data);
      } catch (error) {
        setError('Error al cargar los contactos');
      }
    };

    fetchContactos();
  }, [searchTerm]);

  const handleDelete = async (id: number) => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este contacto?');

    if (!isConfirmed) {
      return;
    }

    try {
      const response = await fetch(`/api/contacto?id=${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al eliminar el contacto');
      }
      setContactos(contactos.filter(contacto => contacto.id !== id));
    } catch (error) {
      setError('Error al eliminar el contacto');
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-secondary">
            <h2 className="text-2xl font-bold mb-4">Listado de Contactos</h2>
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
            <ListadoContactos contactos={contactos} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactoPage;
