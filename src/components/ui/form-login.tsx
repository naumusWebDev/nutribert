'use client';

import { LoginSchema } from "@/lib/zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Image from 'next/image';
import { loginAction } from "../../../actions/auth-action";
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


const FormLogin = () => {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof LoginSchema>) {
    setError(null);
    startTransition(async () => {
      const response = await loginAction(values);
      if (response.error) {
        setError(response.error);
      } else {
        router.push("/admin");
      }
    });
  }

  return (
    <div className="bg-white py-12 px-6 sm:px-8 shadow-lg rounded-lg">
      <div className="max-w-md mx-auto">
      <div className="flex justify-center mb-6">
  <Image width={120} height={50} src="/logo.png" alt="Logo" />
</div>
        <h1 className="mb-5 text-center text-2xl font-bold">Iniciar sesión</h1>
        {error && <p className="text-center text-red-500 mb-5 text-sm">{error}</p>}
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="email">Correo electrónico</FormLabel>
                  <FormControl>
                    <Input
                      id="email"
                      type="email"
                      {...field}
                      placeholder="correo electrónico"
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
                      type="password"
                      {...field}
                      placeholder="contraseña"
                      className="block mt-1 w-full focus:outline-none focus:border-primary focus:ring focus:ring-primary-dark focus:ring-opacity-50"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex flex-col items-center mt-4">
              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-primary hover:bg-primary-dark text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Iniciar sesión
              </Button>
              {/* <a
                href="/forgot-password"
                className=" mt-6 underline text-sm text-gray-600 hover:text-gray-900"
              >
                ¿Olvidaste tu contraseña?
              </a> */}
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default FormLogin;



