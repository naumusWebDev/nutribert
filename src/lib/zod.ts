import { object, string } from "zod"
import { z } from 'zod';
 
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
  confirmPassword: string({ required_error: "La confirmación de la contraseña es requerida" })
    .min(1, "La confirmación de la contraseña es requerida")
    .min(6, "La confirmación de la contraseña debe contener al menos 6 caracteres")
    .max(32, "La confirmación de la contraseña debe contener menos de 32 caracteres"),
  name: string({ required_error: "El nombre es requerido" })
    .min(1, "El nombre es requerido")
    .max(32, "El nombre debe contener menos de 32 caracteres"),
}).refine(data => data.password === data.confirmPassword, {
  message: "Las contraseñas no coinciden",
  path: ["confirmPassword"],
});

  export const ContactoSchema = object({
   
    nombre: string({ required_error: "El nombre es requerido" })
      .min(1, "El nombre es requerido")
      .max(100, "El nombre debe contener menos de 100 caracteres"),  // Puedes ajustar el número máximo de caracteres según tu necesidad
    email: string({ required_error: "El Email es requerido" })
      .min(1, "El Email es requerido")
      .email("Email Inválido"),
    telefono: string({ required_error: "El teléfono es requerido" })
      .min(1, "El teléfono es requerido")
      .max(20, "El teléfono debe contener menos de 20 caracteres"),  // Puedes ajustar el número máximo de caracteres según tu necesidad
    mensaje: string({ required_error: "El mensaje es requerido" })
      .min(1, "El mensaje es requerido"),
   
  });


 

  export const CitaSchema = z.object({
    dia: z.string().min(1, "El día es requerido"),
    hora: z.string()
      .regex(/^\d{2}:\d{2}$/, "La hora debe estar en formato HH:MM") // Valida el formato de la hora
      .min(1, "La hora es requerida"),
    nombre: z.string().min(1, "El nombre es requerido"),
    telefono: z.string().min(1, "El teléfono es requerido"),
    notas: z.string().optional(), // Opcional si las notas no son obligatorias
  });
  

  