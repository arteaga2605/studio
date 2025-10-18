import { VisaApplicationForm } from "@/components/forms/visa-application-form";

export default function ApplicationPage() {
  return (
    <div className="container mx-auto max-w-4xl">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-bold font-headline tracking-tight">
          Formulario de Solicitud de Visa de Negocios (Tipo M)
        </h1>
        <p className="mt-2 text-muted-foreground">
          Por favor, conteste debajo de cada pregunta en mayúsculas sin borrar
          la misma.
        </p>
      </div>
      <VisaApplicationForm />
    </div>
  );
}
