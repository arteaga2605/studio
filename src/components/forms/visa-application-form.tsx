"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { visaApplicationSchema } from "@/lib/schemas";
import { submitVisaApplication } from "@/lib/actions";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from "lucide-react";
import { Stepper } from "./stepper";

import PersonalDetailsStep from "./steps/step-1-personal";
import EmploymentStep from "./steps/step-2-employment";
import FamilyStep from "./steps/step-3-family";
import TravelStep from "./steps/step-4-travel";
import DocumentsStep from "./steps/step-5-documents";

type FormData = z.infer<typeof visaApplicationSchema>;

const steps = [
  { id: 1, name: "Datos Personales", fields: ["nombre_completo", "apellidos_completo", "numero_cedula", "fecha_nacimiento", "solicitante_direccion", "solicitante_celular", "solicitante_email"] },
  { id: 2, name: "Educación y Empleo", fields: ["universidad_escuela", "diploma_titulo", "empresa_nombre", "empresa_direccion", "empresa_telefono", "supervisor_nombre", "empleo_fecha_desde", "empleo_fecha_hasta"] },
  { id: 3, name: "Información Familiar", fields: ["estado_civil", "padre_info", "madre_info", "emergencia_contacto"] },
  { id: 4, name: "Información del Viaje", fields: ["fecha_entrada_china", "fecha_salida_china", "quien_cubre_gastos", "ha_tenido_visa_china", "paises_visitados_ultimos_12_meses", "tiene_otra_nacionalidad", "direccion_hotel", "ha_estado_en_china", "tiene_otras_visas_validas"] },
  { id: 5, name: "Documentos", fields: ["documentos"] },
];

export function VisaApplicationForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(visaApplicationSchema),
    mode: "onChange",
  });

  const processForm = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await submitVisaApplication(data);
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al procesar su solicitud. Intente de nuevo.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  const next = async () => {
    const fields = steps[currentStep].fields as (keyof FormData)[];
    const output = await form.trigger(fields, { shouldFocus: true });
    
    if (!output) return;

    if (currentStep < steps.length - 1) {
      setCurrentStep((step) => step + 1);
    }
  };

  const prev = () => {
    if (currentStep > 0) {
      setCurrentStep((step) => step - 1);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Stepper currentStep={currentStep + 1} totalSteps={steps.length} />
        <Form {...form}>
          <form onSubmit={form.handleSubmit(processForm)} className="mt-8 space-y-8">
            {currentStep === 0 && <PersonalDetailsStep />}
            {currentStep === 1 && <EmploymentStep />}
            {currentStep === 2 && <FamilyStep />}
            {currentStep === 3 && <TravelStep />}
            {currentStep === 4 && <DocumentsStep />}

            <div className="mt-8 pt-5">
              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={prev}
                  variant="secondary"
                  disabled={currentStep === 0 || isSubmitting}
                >
                  Anterior
                </Button>
                {currentStep < steps.length - 1 ? (
                   <Button type="button" onClick={next}>
                     Siguiente
                   </Button>
                ) : (
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Enviar Solicitud
                  </Button>
                )}
              </div>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
