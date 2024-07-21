import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { ContactoSchema } from '../../../lib/zod';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsedData = ContactoSchema.parse(body);
    const newContacto = await prisma.contacto.create({ data: parsedData });
    return NextResponse.json(newContacto, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: 'Error al crear el contacto', error: error.message }, { status: 400 });
  }
}

export async function GET() {
  try {
    const contactos = await prisma.contacto.findMany();
    return NextResponse.json(contactos, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error al obtener los contactos', error }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: 'ID es requerido' }, { status: 400 });
    }

    await prisma.contacto.delete({
      where: { id: Number(id) },
    });

    return NextResponse.json({}, { status: 204 });
  } catch (error) {
    return NextResponse.json({ message: 'Error al eliminar el contacto', error }, { status: 500 });
  }
}
