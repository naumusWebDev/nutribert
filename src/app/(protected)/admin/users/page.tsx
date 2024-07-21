'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const UserList = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Fetch users on component mount
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users'); // Ruta corregida a '/api/users'
        if (!response.ok) {
          throw new Error('Error fetching users');
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError('Failed to load users');
      }
    };
    fetchUsers();
  }, []);

  // Handle delete user
  const handleDelete = async (id: string) => {
    const isConfirmed = window.confirm('¿Estás seguro de que deseas eliminar este usuario?');

    if (!isConfirmed) {
      return;
    }

    try {
      const response = await fetch('/api/users', { // Ruta corregida a '/api/users'
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      setUsers(users.filter(user => user.id !== id));
    } catch (error) {
      setError('Failed to delete user');
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Listado de Usuarios</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="border p-2">Nombre</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 ? (
            <tr>
              <td colSpan={3} className="text-center p-4">No hay usuarios disponibles</td>
            </tr>
          ) : (
            users.map(user => (
              <tr key={user.id}>
                <td className="border p-2">{user.name || 'N/A'}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2">
                  <Button
                    onClick={() => handleDelete(user.id)}
                    className="bg-red-500 hover:bg-red-600 text-white"
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;

