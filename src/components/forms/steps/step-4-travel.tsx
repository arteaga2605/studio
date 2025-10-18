"use client";

import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { DatePicker } from "@/components/ui/date-picker";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function TravelStep() {
  const { control, watch } = useFormContext();

  const hasPreviousVisa = watch("ha_tenido_visa_china");
  const hasOtherNationality = watch("tiene_otra_nacionalidad");
  const hasOtherValidVisas = watch("tiene_otras_visas_validas");

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-semibold text-center">Información del Viaje y Antecedentes</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormField
          control={control}
          name="fecha_entrada_china"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Entrada a China</FormLabel>
              <DatePicker value={field.value} onChange={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="fecha_salida_china"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Fecha de Salida de China</FormLabel>
              <DatePicker value={field.value} onChange={field.onChange} />
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="quien_cubre_gastos"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>¿Quién cubre los gastos del viaje?</FormLabel>
              <FormControl>
                <Input placeholder="LA EMPRESA QUE INVITA / EL SOLICITANTE" {...field} className="uppercase"/>
              </FormControl>
              <FormDescription>Debe coincidir con la carta de invitación.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="direccion_hotel"
          render={({ field }) => (
            <FormItem className="md:col-span-2">
              <FormLabel>Dirección de Hotel en China</FormLabel>
              <FormControl>
                <Input placeholder="NOMBRE DEL HOTEL Y DIRECCIÓN COMPLETA" {...field} className="uppercase"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <Card>
        <CardContent className="pt-6 space-y-6">
          <FormField
            control={control}
            name="ha_tenido_visa_china"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>¿Ha tenido visa a China antes?</FormLabel>
                <FormControl>
                  <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4">
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl><RadioGroupItem value="Sí" /></FormControl>
                      <FormLabel className="font-normal">Sí</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-2 space-y-0">
                      <FormControl><RadioGroupItem value="No" /></FormControl>
                      <FormLabel className="font-normal">No</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {hasPreviousVisa === "Sí" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-md">
              <FormField control={control} name="visa_anterior_fecha" render={({ field }) => (<FormItem><FormLabel>Fecha Emisión</FormLabel><FormControl><Input placeholder="MM/AAAA" {...field} className="uppercase"/></FormControl><FormMessage /></FormItem>)} />
              <FormField control={control} name="visa_anterior_lugar" render={({ field }) => (<FormItem><FormLabel>Lugar Emisión</FormLabel><FormControl><Input placeholder="CARACAS" {...field} className="uppercase"/></FormControl><FormMessage /></FormItem>)} />
              <FormField control={control} name="visa_anterior_numero" render={({ field }) => (<FormItem><FormLabel>Número de Visa</FormLabel><FormControl><Input placeholder="M1234567" {...field} className="uppercase"/></FormControl><FormMessage /></FormItem>)} />
            </div>
          )}

          <FormField control={control} name="ha_estado_en_china" render={({ field }) => (<FormItem className="space-y-3"><FormLabel>¿Ha estado alguna vez en China?</FormLabel><FormControl><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4"><FormItem className="flex items-center space-x-2 space-y-0"><FormControl><RadioGroupItem value="Sí" /></FormControl><FormLabel className="font-normal">Sí</FormLabel></FormItem><FormItem className="flex items-center space-x-2 space-y-0"><FormControl><RadioGroupItem value="No" /></FormControl><FormLabel className="font-normal">No</FormLabel></FormItem></RadioGroup></FormControl><FormMessage /></FormItem>)}/>
          
          <FormField control={control} name="paises_visitados_ultimos_12_meses" render={({ field }) => (<FormItem><FormLabel>Países visitados en los últimos 12 meses</FormLabel><FormControl><Input placeholder="EEUU, ESPAÑA, COLOMBIA (O DEJAR EN BLANCO)" {...field} className="uppercase"/></FormControl><FormMessage /></FormItem>)}/>

          <FormField
            control={control}
            name="tiene_otra_nacionalidad"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>¿Tiene otra nacionalidad?</FormLabel>
                <FormControl><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4"><FormItem className="flex items-center space-x-2 space-y-0"><FormControl><RadioGroupItem value="Sí" /></FormControl><FormLabel className="font-normal">Sí</FormLabel></FormItem><FormItem className="flex items-center space-x-2 space-y-0"><FormControl><RadioGroupItem value="No" /></FormControl><FormLabel className="font-normal">No</FormLabel></FormItem></RadioGroup></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {hasOtherNationality === "Sí" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 border rounded-md">
              <FormField control={control} name="otra_nacionalidad_nombre" render={({ field }) => (<FormItem><FormLabel>Nacionalidad</FormLabel><FormControl><Input placeholder="ITALIANA" {...field} className="uppercase"/></FormControl><FormMessage /></FormItem>)} />
              <FormField control={control} name="otra_nacionalidad_id" render={({ field }) => (<FormItem><FormLabel>ID Nacional</FormLabel><FormControl><Input placeholder="NRO DE ID" {...field} className="uppercase"/></FormControl><FormMessage /></FormItem>)} />
              <FormField control={control} name="otra_nacionalidad_pasaporte" render={({ field }) => (<FormItem><FormLabel>Nro Pasaporte</FormLabel><FormControl><Input placeholder="NRO PASAPORTE" {...field} className="uppercase"/></FormControl><FormMessage /></FormItem>)} />
            </div>
          )}

          <FormField
            control={control}
            name="tiene_otras_visas_validas"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>¿Tiene actualmente alguna visa válida emitida para otros países?</FormLabel>
                <FormControl><RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex space-x-4"><FormItem className="flex items-center space-x-2 space-y-0"><FormControl><RadioGroupItem value="Sí" /></FormControl><FormLabel className="font-normal">Sí</FormLabel></FormItem><FormItem className="flex items-center space-x-2 space-y-0"><FormControl><RadioGroupItem value="No" /></FormControl><FormLabel className="font-normal">No</FormLabel></FormItem></RadioGroup></FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {hasOtherValidVisas === "Sí" && (
             <FormField control={control} name="otras_visas_validas_paises" render={({ field }) => (<FormItem><FormLabel>País(es) de visa(s) vigente(s)</FormLabel><FormControl><Input placeholder="EEUU, CANADÁ" {...field} className="uppercase"/></FormControl><FormMessage /></FormItem>)}/>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
