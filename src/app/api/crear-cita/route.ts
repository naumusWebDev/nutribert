// src/app/api/crear-cita/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { CitaSchema } from '../../../lib/zod'; // Ajusta esta ruta si es necesario

const prisma = new PrismaClient();

// Crear una cita
export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validar y formatear los datos
    const parsedData = CitaSchema.parse(body);

    // Convierte el campo 'dia' al formato Date
    const formattedDia = new Date(parsedData.dia);

    // Crear la cita en la base de datos
    const newCita = await prisma.cita.create({
      data: {
        dia: formattedDia,
        hora: parsedData.hora,
        nombre: parsedData.nombre,
        telefono: parsedData.telefono,
        notas: parsedData.notas || '', // Maneja las notas opcionales
      },
    });

    return NextResponse.json(newCita, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Error al crear la cita', error: error.message }, { status: 400 });
  } finally {
    await prisma.$disconnect();
  }
}

// Obtener todas las citas
export async function GET(request: Request) {
  try {
    const url = new URL(request.url);
    const searchParams = url.searchParams;
    const searchTerm = searchParams.get('nombre') || '';

    // Buscar citas con nombre que contenga el término de búsqueda
    const citas = await prisma.cita.findMany({
      where: {
        nombre: {
          contains: searchTerm,
          mode: 'insensitive',
        },
      },
    });

    return NextResponse.json(citas, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Error al obtener las citas', error: error.message }, { status: 500 });
  }
}

// Eliminar una cita
export async function DELETE(request: Request) {
  try {
    const url = new URL(request.url);
    const idParam = url.searchParams.get('id');

    if (!idParam || isNaN(Number(idParam))) {
      return NextResponse.json({ message: 'ID inválido' }, { status: 400 });
    }

    const id = Number(idParam);

    // Eliminar la cita de la base de datos
    await prisma.cita.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Cita eliminada exitosamente' }, { status: 200 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Error al eliminar la cita', error: error.message }, { status: 500 });
  }
}
