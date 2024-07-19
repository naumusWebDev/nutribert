import { object, string } from "zod"
 
export const LoginSchema = object({
  email: string({ required_error: "El Email es requerido" })
    .min(1, "El Email es requerido")
    .email("Email Inválido"),
  password: string({ required_error: "La contraseña es requerida" })
    .min(1, "La contraseña es requerida")
    .min(6, "La contraseña debe contener al menos 6 caracteres")
    .max(32, "La contraseña debe contener menos de 32 caracteres"),
});

export const registerSchema = object({
    email: string({ required_error: "El Email es requerido" })
      .min(1, "El Email es requerido")
      .email("Email Inválido"),
    password: string({ required_error: "La contraseña es requerida" })
      .min(1, "La contraseña es requerida")
      .min(6, "La contraseña debe contener al menos 6 caracteres")
      .max(32, "La contraseña debe contener menos de 32 caracteres"),
    name: string({ required_error: "El nombre es requerido" })
      .min(1, "El nombre es requerido")
      .max(32, "El nombre debe contener menos de 32 caracteres"),
  });