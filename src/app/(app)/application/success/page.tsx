import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2, AlertTriangle } from "lucide-react";

const considerations = [
    "Se recomienda realizar el trámite con suficiente anticipación (óptimo un mes).",
    "El trámite necesita cinco (5) días hábiles como mínimo y el consulado no asume responsabilidad por demoras.",
    "La validez, número de entradas y permanencia serán decididos por los funcionarios consulares.",
    "La solicitud será rechazada si no cumple con todos los requisitos.",
    "El funcionario consular puede rechazar la solicitud a su juicio sin dar explicación.",
    "No se asume responsabilidad por pérdidas económicas en caso de rechazo.",
    "La aceptación de la solicitud no garantiza el otorgamiento del visado.",
    "Aún con visa, la entrada a China puede ser denegada por autoridades de inmigración.",
    "La Embajada de China se reserva todos los derechos de explicación."
];

export default function ApplicationSuccessPage() {
  return (
    <div className="container mx-auto max-w-3xl space-y-8">
      <Card className="overflow-hidden">
        <CardHeader className="bg-green-500/10 text-center p-8">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-600" />
          <CardTitle className="mt-4 text-2xl font-headline">
            ¡Solicitud Enviada Exitosamente!
          </CardTitle>
          <CardDescription className="text-lg">
            Hemos recibido su información y está en proceso de revisión.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6 space-y-6">
          <div>
            <h3 className="font-semibold text-lg">Resumen del Servicio</h3>
            <p className="text-muted-foreground">
              El costo por pasajero es de <strong>220$</strong>. Este monto incluye:
            </p>
            <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
              <li>Asesoría antes y durante el trámite.</li>
              <li>Llenado de planilla oficial.</li>
              <li>Presentación y retiro de la solicitud ante la embajada.</li>
              <li>Entrega del trámite al estar culminado.</li>
            </ul>
          </div>
          
          <div className="bg-destructive/10 border-l-4 border-destructive p-4 rounded-r-md">
            <div className="flex">
                <div className="py-1">
                    <AlertTriangle className="h-6 w-6 text-destructive mr-4"/>
                </div>
                <div>
                    <h3 className="font-semibold text-destructive">Consideraciones Adicionales Importantes</h3>
                    <ul className="mt-2 list-disc list-inside space-y-1 text-sm text-destructive/90">
                        {considerations.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
          </div>
          
          <div className="text-center pt-4">
            <p className="text-muted-foreground">
              Nos pondremos en contacto con usted para los siguientes pasos.
            </p>
            <Button asChild className="mt-4">
              <Link href="/dashboard">Volver al Dashboard</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
