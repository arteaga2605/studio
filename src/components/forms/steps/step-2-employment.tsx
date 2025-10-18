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

export default function EmploymentStep() {
  const { control } = useFormContext();

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-semibold text-center mb-4">Educación</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={control}
            name="universidad_escuela"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la Universidad o Escuela</FormLabel>
                <FormControl>
                  <Input placeholder="UNIVERSIDAD CENTRAL" {...field} className="uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="diploma_titulo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Diploma o Título</FormLabel>
                <FormControl>
                  <Input placeholder="INGENIERO DE SISTEMAS" {...field} className="uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
      <div>
        <h2 className="text-xl font-semibold text-center mb-4">Empleo</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={control}
            name="empresa_nombre"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre de la Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="EMPRESA EJEMPLO C.A." {...field} className="uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="empresa_telefono"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Teléfono de la Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="0212-9876543" {...field} className="uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={control}
            name="empresa_direccion"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Dirección de la Empresa</FormLabel>
                <FormControl>
                  <Input placeholder="AV. PRINCIPAL, EDIFICIO XYZ, PISO 5" {...field} className="uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="supervisor_nombre"
            render={({ field }) => (
              <FormItem className="md:col-span-2">
                <FormLabel>Nombre de Supervisor o Persona Contacto</FormLabel>
                <FormControl>
                  <Input placeholder="JANE DOE, 0412-1112233, SUPERVISOR@EJEMPLO.COM" {...field} className="uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="empleo_fecha_desde"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de Empleo (Desde)</FormLabel>
                <DatePicker value={field.value} onChange={field.onChange} />
                <FormMessage />
              </FormItem>
            )}
          />
           <FormField
            control={control}
            name="empleo_fecha_hasta"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Fecha de Empleo (Hasta)</FormLabel>
                <FormControl>
                  <Input placeholder="PRESENTE" {...field} className="uppercase"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>
    </div>
  );
}
