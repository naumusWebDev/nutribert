'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useRouter } from 'next/navigation';

interface FormData {
  dia: string;
  hora: string;
  nombre: string;
  telefono: string;
  notas: string;
}

const ConcertarCitaForm = () => {
  const [formData, setFormData] = useState<FormData>({
    dia: '',
    hora: '',
    nombre: '',
    telefono: '',
    notas: '',
  });

  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
  
    try {
      const response = await fetch('/api/crear-cita', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Error al almacenar la cita');
      }
  
      const result = await response.json();
      console.log('Cita almacenada correctamente:', result);
  
      setSuccess('Cita creada exitosamente');
      router.push('/'); // Redirigir a la página principal o a una página de confirmación
  
      setFormData({
        dia: '',
        hora: '',
        nombre: '',
        telefono: '',
        notas: '',
      });
    } catch (error: any) {
      setError(error.message);
      console.error('Error al almacenar la cita:', error);
    }
  };

  // Función para generar opciones de hora en intervalos de media hora
  const generateTimeOptions = () => {
    const times: string[] = [];
    const addTime = (hour: number, minute: number) => {
      const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
      times.push(time);
    };

    // Horario de 9:00 a 14:00
    for (let hour = 9; hour < 14; hour++) {
      addTime(hour, 0);
      addTime(hour, 30);
    }

    // Horario de 17:00 a 20:00
    for (let hour = 17; hour < 20; hour++) {
      addTime(hour, 0);
      addTime(hour, 30);
    }

    return times;
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
          <div className="p-6 bg-white border-b border-secondary">
            <h2 className="text-2xl font-bold mb-4">Pide tu cita en Nutribert</h2>
            <p className="text-gray-700 mb-4">Completa los siguientes campos para concertar tu cita.</p>
            <p className="text-gray-700 mb-4">Recuerda que debes elegir la hora en punto o a y media.</p>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            {success && <p className="text-green-500 mb-4">{success}</p>}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="dia" className="block text-sm font-medium text-gray-700">Día</label>
                  <Input
                    type="date"
                    id="dia"
                    name="dia"
                    value={formData.dia}
                    onChange={handleChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="hora" className="block text-sm font-medium text-gray-700">Hora</label>
                  <select
                    id="hora"
                    name="hora"
                    value={formData.hora}
                    onChange={handleChange}
                    className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-primary focus:ring-primary"
                    required
                  >
                    <option value="">Selecciona una hora</option>
                    {generateTimeOptions().map((time) => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre</label>
                <Input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
                <Input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  className="mt-1"
                  required
                />
              </div>

              <div>
                <label htmlFor="notas" className="block text-sm font-medium text-gray-700">Notas</label>
                <Textarea
                  id="notas"
                  name="notas"
                  rows={3}
                  value={formData.notas}
                  onChange={handleChange}
                  className="mt-1"
                />
              </div>

              <div className="flex justify-end">
                <Button
                  type="submit"
                  className="bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Confirmar Cita
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConcertarCitaForm;
