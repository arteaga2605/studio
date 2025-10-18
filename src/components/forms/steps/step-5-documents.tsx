"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { FileUpload } from "../file-upload";

const requiredDocuments = [
  "Pasaporte (página de datos)",
  "Fotocopia de cédula de identidad o visa de residencia",
  "Visas chinas anteriores (si aplica)",
  "Carta de invitación de empresa china",
  "Registro Mercantil de empresa china",
  "ID del representante legal de empresa china",
  "Registro Mercantil de empresa venezolana y constancia laboral",
  "Foto digital tipo estudio",
  "Itinerario de vuelo",
];

export default function DocumentsStep() {
  const { control } = useFormContext();

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-center">Adjuntar Documentos</h2>
      <p className="text-sm text-center text-muted-foreground">
        Por favor, suba todos los documentos requeridos en un solo envío. Puede
        seleccionar múltiples archivos.
      </p>

      <FormField
        control={control}
        name="documentos"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Archivos Requeridos</FormLabel>
            <FormControl>
              <FileUpload
                onFileChange={(files) => field.onChange(files)}
                requiredDocuments={requiredDocuments}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
