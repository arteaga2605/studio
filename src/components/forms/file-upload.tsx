"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Upload, FileText, X, CheckCircle } from "lucide-react";

interface FileUploadProps {
  onFileChange: (files: File[]) => void;
  requiredDocuments: string[];
}

export function FileUpload({ onFileChange, requiredDocuments }: FileUploadProps) {
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const newFiles = Array.from(event.target.files);
      const updatedFiles = [...files, ...newFiles];
      setFiles(updatedFiles);
      onFileChange(updatedFiles);
    }
  };

  const removeFile = (index: number) => {
    const updatedFiles = files.filter((_, i) => i !== index);
    setFiles(updatedFiles);
    onFileChange(updatedFiles);
    // Reset file input to allow re-selection of the same file
    if(fileInputRef.current) {
        fileInputRef.current.value = "";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="bg-muted/30">
            <CardHeader>
                <CardTitle className="text-base">Lista de Documentos</CardTitle>
                <CardDescription>Asegúrese de incluir todos los siguientes:</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm">
                    {requiredDocuments.map((doc, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500 shrink-0"/>
                            <span>{doc}</span>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
        <Card>
            <CardContent className="p-6 flex flex-col items-center justify-center h-full">
                <div className="text-center mb-4">
                    <Upload className="mx-auto h-12 w-12 text-muted-foreground" />
                    <p className="mt-2 text-sm text-muted-foreground">Arrastre archivos aquí o haga clic para seleccionar.</p>
                </div>
                 <Button type="button" onClick={() => fileInputRef.current?.click()}>
                    <Upload className="mr-2 h-4 w-4" />
                    Seleccionar Archivos
                </Button>
                <Input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    className="hidden"
                    onChange={handleFileChange}
                    accept="image/*,.pdf,.doc,.docx"
                />

                {files.length > 0 && (
                    <div className="mt-4 w-full space-y-2">
                         <h3 className="font-semibold text-sm">Archivos seleccionados:</h3>
                        {files.map((file, index) => (
                        <div
                            key={index}
                            className="flex items-center justify-between text-sm p-2 bg-muted rounded-md"
                        >
                            <div className="flex items-center gap-2 truncate">
                                <FileText className="h-4 w-4 shrink-0" />
                                <span className="truncate">{file.name}</span>
                            </div>
                            <Button
                                type="button"
                                variant="ghost"
                                size="icon"
                                className="h-6 w-6"
                                onClick={() => removeFile(index)}
                            >
                                <X className="h-4 w-4" />
                            </Button>
                        </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    </div>
  );
}
