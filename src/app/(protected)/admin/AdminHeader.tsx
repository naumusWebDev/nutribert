import Link from "next/link";

const AdminHeader = () => {
  return (
    <header className="bg-white shadow border-b border-primary">
      <nav className="flex space-x-4">
        <Link href="/admin/contacto" className="hover:underline">Listado de Contactos</Link>
        <Link href="/admin/users" className="hover:underline">Listado de Usuarios</Link>
        <Link href="/admin/listado-citas" className="hover:underline">Listado de Citas</Link>
        <Link href="/admin/pedir-cita" className="hover:underline">Pedir Cita</Link>
      </nav>
    </header>
  );
};

export default AdminHeader;
