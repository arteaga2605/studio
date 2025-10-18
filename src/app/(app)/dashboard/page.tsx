
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, FileText, CheckCircle, Loader2 } from "lucide-react";

const requirements = [
  "Pasaporte válido",
  "Fotocopias (pasaporte, cédula, visas previas)",
  "Carta de invitación de empresa china",
  "Registro Mercantil (empresa china y venezolana)",
  "Foto digital y física tipo estudio",
  "Itinerario de vuelo y hotel",
];

const submittedApplications = [
    { name: "Carlos Rodriguez", date: "2024-07-15", status: "En Revisión" },
    { name: "Ana Martinez", date: "2024-07-12", status: "Aprobada" },
    { name: "Luis Hernandez", date: "2024-07-10", status: "Rechazada" },
];

export default function DashboardPage() {
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    const role = localStorage.getItem("userRole");
    setUserRole(role);
  }, []);

  if (userRole === null) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="container mx-auto space-y-8">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
            <h1 className="text-3xl font-bold font-headline tracking-tight">
                Dashboard
            </h1>
            <p className="text-muted-foreground">
                {userRole === 'admin' 
                    ? "Bienvenido al portal de administrador." 
                    : "Bienvenido al portal de solicitud de visa para China."}
            </p>
        </div>
        <Button asChild>
          <Link href="/application">
            Iniciar Nueva Solicitud
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {userRole === 'user' && (
             <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    <span>Requisitos Clave</span>
                    </CardTitle>
                    <CardDescription>
                    Documentos básicos para la visa Tipo M.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-3">
                    {requirements.map((req, index) => (
                        <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
                        <span className="text-sm">{req}</span>
                        </li>
                    ))}
                    </ul>
                </CardContent>
                <CardFooter>
                    <p className="text-xs text-muted-foreground">
                    Asegúrese de tener todo antes de iniciar.
                    </p>
                </CardFooter>
            </Card>
        )}
       
        {userRole === 'admin' && (
             <Card className="lg:col-span-3">
                <CardHeader>
                    <CardTitle>Revisión de Solicitudes</CardTitle>
                    <CardDescription>
                        Vista de administrador para gestionar las solicitudes enviadas.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Solicitante</TableHead>
                                <TableHead>Fecha de Envío</TableHead>
                                <TableHead className="text-right">Estado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {submittedApplications.map(app => (
                                <TableRow key={app.name}>
                                    <TableCell className="font-medium">{app.name}</TableCell>
                                    <TableCell>{app.date}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant={
                                            app.status === 'Aprobada' ? 'default' : app.status === 'Rechazada' ? 'destructive' : 'secondary'
                                        } className={`${app.status === 'Aprobada' && 'bg-green-600'}`}>
                                            {app.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        )}
      </div>
    </div>
  );
}
