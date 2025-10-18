"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { Textarea } from "@/components/ui/textarea";

export default function PersonalDetailsStep() {
  const { control } = useFormContext();

  return (
    <div className="space-y-6">
       <h2 className="text-xl font-semibold text-center">Datos Personales</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="nombre_completo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre Completo</FormLabel>
              <FormControl>
                <Input placeholder="JOHN" {...field} className="uppercase"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="apellidos_completo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apellidos Completos</FormLabel>
              <FormControl>
                <Input placeholder="DOE SMITH" {...field} className="uppercase"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="numero_cedula"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de Cédula</FormLabel>
              <FormControl>
                <Input placeholder="V-12345678" {...field} className="uppercase"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="fecha_nacimiento"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Nacimiento</FormLabel>
              <DatePicker value={field.value} onChange={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="solicitante_direccion"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Dirección Completa de Residencia</FormLabel>
              <FormControl>
                <Textarea placeholder="CALLE, AVENIDA, CASA/APTO, CIUDAD, ESTADO" {...field} className="uppercase"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="solicitante_celular"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de Celular</FormLabel>
              <FormControl>
                <Input placeholder="0414-1234567" {...field} className="uppercase"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="solicitante_email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo Electrónico</FormLabel>
              <FormControl>
                <Input placeholder="CORREO@EJEMPLO.COM" {...field} className="uppercase"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
