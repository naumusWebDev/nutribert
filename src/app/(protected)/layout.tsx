
import { Inter } from "next/font/google";
import "@/app/globals.css";
import AdminHeader from "./admin/AdminHeader";

const inter = Inter({ subsets: ["latin"] });



export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <>
            <AdminHeader />
            {children}
        </>
      
  );
}