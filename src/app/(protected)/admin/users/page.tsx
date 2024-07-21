// src/app/admin/listado-de-usuarios/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { ListadoUsuarios } from '@/components/ui/ListadoUsuarios';
import { Input } from '@/components/ui/input';

const ListadoUsuariosPage = () => {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch(`/api/users?nombre=${encodeURIComponent(searchTerm)}`);
        if (!response.ok) {
          throw new Error('Error fetching users');
        }
        const data = await response.json();
        setUsuarios(data);
      } catch (error) {
        setError('Failed to load users');
      }
    };
    fetchUsuarios();
  }, [searchTerm]);

  // Handle delete user
  const handleDelete = async (id: string) => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');

    if (!isConfirmed) {
      return;
    }

    try {
      const response = await fetch('/api/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      setUsuarios(usuarios.filter(user => user.id !== id));
    } catch (error) {
      setError('Failed to delete user');
    }
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-secondary">
            <h2 className="text-2xl font-bold mb-4">Listado de Usuarios</h2>
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
            <ListadoUsuarios usuarios={usuarios} onDelete={handleDelete} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListadoUsuariosPage;

