import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    return NextResponse.json({ message: 'Error al obtener los usuarios', error}, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const body = await request.json();
    const { id } = body;

    if (!id) {
      return NextResponse.json({ message: 'ID de usuario es requerido' }, { status: 400 });
    }

    const deletedUser = await prisma.user.delete({
      where: { id }
    });

    return NextResponse.json(deletedUser, { status: 200 });
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    return NextResponse.json({ message: 'Error al eliminar el usuario', error }, { status: 500 });
  }
}
