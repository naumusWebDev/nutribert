'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation'; // Para Next.js 13 con App Router

const AdminHeader = () => {
  const pathname = usePathname();

  return (
    <header className="bg-white shadow border-b border-primary py-4">
      <nav className="flex justify-center space-x-4">
        <Link
          href="/admin/contacto"
          className={`py-2 px-4 rounded ${
            pathname === "/admin/contacto"
              ? "bg-primary text-white"
              : "hover:bg-gray-100"
          }`}
        >
          Listado de Contactos
        </Link>
        <Link
          href="/admin/users"
          className={`py-2 px-4 rounded ${
            pathname === "/admin/users" ? "bg-primary text-white" : "hover:bg-gray-100"
          }`}
        >
          Listado de Usuarios
        </Link>
        <Link
          href="/admin/listado-citas"
          className={`py-2 px-4 rounded ${
            pathname === "/admin/listado-citas"
              ? "bg-primary text-white"
              : "hover:bg-gray-100"
          }`}
        >
          Listado de Citas
        </Link>
        <Link
          href="/admin/pedir-cita"
          className={`py-2 px-4 rounded ${
            pathname === "/admin/pedir-cita" ? "bg-primary text-white" : "hover:bg-gray-100"
          }`}
        >
          Pedir Cita
        </Link>
      </nav>
    </header>
  );
};

export default AdminHeader;
