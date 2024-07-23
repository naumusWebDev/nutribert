"use client";

import { Button } from "@/components/ui/button";
import { signOut } from "next-auth/react";

const LogoutButton = () => {
  const handleClick = async () => {
    await signOut({
      callbackUrl: "/login",
    });
  };

  return <Button onClick={handleClick} className="bg-primary hover:bg-primary-dark text-white text-sm font-bold py-2 px-4 rounded-full inline-block mb-2 sm:inline-block sm:mb-0">Desconectar</Button>;
};
export default LogoutButton;