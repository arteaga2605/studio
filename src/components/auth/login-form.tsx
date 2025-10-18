
"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Por favor ingrese un correo válido."),
  password: z.string().min(1, "La contraseña es requerida."),
});

const users = {
    "admin@ejemplo.com": { password: "admin", role: "admin" },
    "user@ejemplo.com": { password: "user", role: "user" },
    "daniel@ejemplo.com": { password: "22021655", role: "admin" },
}

export function LoginForm() {
  const router = useRouter();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setTimeout(() => {
      const user = users[values.email as keyof typeof users];

      if (user && user.password === values.password) {
        localStorage.setItem("isLoggedIn", "true");
        localStorage.setItem("userEmail", values.email);
        localStorage.setItem("userRole", user.role);

        toast({
          title: "Inicio de sesión exitoso",
          description: "Bienvenido de nuevo.",
        });
        
        if (user.role === 'admin') {
            router.push("/dashboard");
        } else {
            router.push("/application");
        }
        router.refresh();
      } else {
        toast({
            title: "Credenciales inválidas",
            description: "El correo o la contraseña no son correctos.",
            variant: "destructive",
          });
        setIsLoading(false);
      }
    }, 1000);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="usuario@ejemplo.com" {...field} />
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
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <Input type="password" placeholder="••••••••" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? (
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          ) : (
            "Ingresar"
          )}
        </Button>
      </form>
    </Form>
  );
}
