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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function FamilyStep() {
  const { control } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center">Información Familiar</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="estado_civil"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Estado Civil</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Seleccione su estado civil" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="SOLTERO/A">SOLTERO/A</SelectItem>
                  <SelectItem value="CASADO/A">CASADO/A</SelectItem>
                  <SelectItem value="DIVORCIADO/A">DIVORCIADO/A</SelectItem>
                  <SelectItem value="VIUDO/A">VIUDO/A</SelectItem>
                  <SelectItem value="OTRO">OTRO</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="emergencia_contacto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contacto de Emergencia</FormLabel>
              <FormControl>
                <Input placeholder="NOMBRE, TELÉFONO, CORREO" {...field} className="uppercase" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="padre_info"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Datos del Padre</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="NOMBRE COMPLETO, NACIONALIDAD, FECHA DE NACIMIENTO. (SI ESTÁ FALLECIDO INDICAR IGUAL)"
                  {...field}
                  className="uppercase"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="madre_info"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Datos de la Madre</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="NOMBRE COMPLETO, NACIONALIDAD, FECHA DE NACIMIENTO. (SI ESTÁ FALLECIDA INDICAR IGUAL)"
                  {...field}
                  className="uppercase"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="conyuge_info"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Datos del Cónyuge (si aplica)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="NOMBRE COMPLETO, NACIONALIDAD, FECHA DE NACIMIENTO."
                  {...field}
                  className="uppercase"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="hijos_info"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Datos de los Hijos (si aplica)</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="LISTA DE HIJOS CON NOMBRE COMPLETO, NACIONALIDAD, FECHA DE NACIMIENTO."
                  {...field}
                  className="uppercase"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
