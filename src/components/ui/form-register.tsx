"use client";

import { registerSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { registerAction } from "../../../actions/auth-action";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import Image from 'next/image';

const FormRegister = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
    },
  });

  async function onSubmit(values: z.infer<typeof registerSchema>) {
    setError(null);
    startTransition(async () => {
      const response = await registerAction(values);
      if (response.error) {
        setError(response.error);
      } else {
        router.push("/admin");
      }
    });
  }

  return (
    <div className="bg-white py-12 px-6 sm:px-8 shadow-lg rounded-lg max-w-md mx-auto">
      <div className="flex justify-center mb-6">
  <Image width={120} height={50} src="/logo.png" alt="Logo" />
</div>

      <h1 className="text-center text-2xl font-bold mb-6">Regístrate en Nutribert</h1>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="name">Nombre</FormLabel>
                <FormControl>
                  <Input
                    id="name"
                    placeholder="Nombre"
                    type="text"
                    {...field}
                    className="block mt-1 w-full focus:outline-none focus:border-primary focus:ring focus:ring-primary-dark focus:ring-opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                <FormControl>
                  <Input
                    id="email"
                    placeholder="Correo electrónico"
                    type="email"
                    {...field}
                    className="block mt-1 w-full focus:outline-none focus:border-primary focus:ring focus:ring-primary-dark focus:ring-opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">Contraseña</FormLabel>
                <FormControl>
                  <Input
                    id="password"
                    placeholder="Contraseña"
                    type="password"
                    {...field}
                    className="block mt-1 w-full focus:outline-none focus:border-primary focus:ring focus:ring-primary-dark focus:ring-opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirmPassword">Confirmar Contraseña</FormLabel>
                <FormControl>
                  <Input
                    id="confirmPassword"
                    placeholder="Confirmar Contraseña"
                    type="password"
                    {...field}
                    className="block mt-1 w-full focus:outline-none focus:border-primary focus:ring focus:ring-primary-dark focus:ring-opacity-50"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {error && <FormMessage className="text-red-500 text-xs mt-2">{error}</FormMessage>}
          <div className="flex justify-center mt-6">
            <Button
              type="submit"
              disabled={isPending}
              className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              Registrarse
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default FormRegister;
