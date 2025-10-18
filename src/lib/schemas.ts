import { z } from "zod";

const fileSchema = z.custom<File>(val => val instanceof File, "Se requiere un archivo");

export const visaApplicationSchema = z.object({
  nombre_completo: z.string().min(1, "El nombre es requerido."),
  apellidos_completo: z.string().min(1, "El apellido es requerido."),
  numero_cedula: z.string().min(1, "El número de cédula es requerido."),
  fecha_nacimiento: z.date({ required_error: "La fecha de nacimiento es requerida." }),

  universidad_escuela: z.string().min(1, "El nombre de la universidad o escuela es requerido."),
  diploma_titulo: z.string().min(1, "El diploma o título es requerido."),

  empresa_nombre: z.string().min(1, "El nombre de la empresa es requerido."),
  empresa_direccion: z.string().min(1, "La dirección de la empresa es requerida."),
  empresa_telefono: z.string().min(1, "El teléfono de la empresa es requerido."),
  supervisor_nombre: z.string().min(1, "El nombre del supervisor es requerido."),
  empleo_fecha_desde: z.date({ required_error: "La fecha de inicio de empleo es requerida." }),
  empleo_fecha_hasta: z.string().min(1, "La fecha de fin de empleo es requerida (o 'Presente')."),
  solicitante_direccion: z.string().min(1, "La dirección del solicitante es requerida."),
  solicitante_celular: z.string().min(1, "El número de celular del solicitante es requerido."),
  solicitante_email: z.string().email("Correo electrónico inválido."),

  estado_civil: z.string().min(1, "El estado civil es requerido."),
  padre_info: z.string().min(1, "La información del padre es requerida."),
  madre_info: z.string().min(1, "La información de la madre es requerida."),
  conyuge_info: z.string().optional(),
  hijos_info: z.string().optional(),
  emergencia_contacto: z.string().min(1, "El contacto de emergencia es requerido."),

  fecha_entrada_china: z.date({ required_error: "La fecha de entrada es requerida." }),
  fecha_salida_china: z.date({ required_error: "La fecha de salida es requerida." }),
  quien_cubre_gastos: z.string().min(1, "Debe indicar quién cubre los gastos."),
  
  ha_tenido_visa_china: z.enum(["Sí", "No"]),
  visa_anterior_fecha: z.string().optional(),
  visa_anterior_lugar: z.string().optional(),
  visa_anterior_numero: z.string().optional(),
  
  paises_visitados_ultimos_12_meses: z.string().optional(),

  tiene_otra_nacionalidad: z.enum(["Sí", "No"]),
  otra_nacionalidad_nombre: z.string().optional(),
  otra_nacionalidad_id: z.string().optional(),
  otra_nacionalidad_pasaporte: z.string().optional(),

  direccion_hotel: z.string().min(1, "La dirección del hotel es requerida."),
  
  ha_estado_en_china: z.enum(["Sí", "No"]),

  tiene_otras_visas_validas: z.enum(["Sí", "No"]),
  otras_visas_validas_paises: z.string().optional(),

  documentos: z.array(fileSchema).min(1, "Debe adjuntar al menos un documento."),

}).refine(data => {
    if (data.ha_tenido_visa_china === "Sí") {
      return !!data.visa_anterior_fecha && !!data.visa_anterior_lugar && !!data.visa_anterior_numero;
    }
    return true;
}, {
    message: "Debe proveer los detalles de su visa anterior.",
    path: ["visa_anterior_numero"],
}).refine(data => {
    if (data.tiene_otra_nacionalidad === "Sí") {
      return !!data.otra_nacionalidad_nombre && !!data.otra_nacionalidad_id && !!data.otra_nacionalidad_pasaporte;
    }
    return true;
}, {
    message: "Debe proveer los detalles de su otra nacionalidad.",
    path: ["otra_nacionalidad_nombre"],
}).refine(data => {
    if (data.tiene_otras_visas_validas === "Sí") {
      return !!data.otras_visas_validas_paises;
    }
    return true;
}, {
    message: "Debe indicar los países para los que tiene visa vigente.",
    path: ["otras_visas_validas_paises"],
});
