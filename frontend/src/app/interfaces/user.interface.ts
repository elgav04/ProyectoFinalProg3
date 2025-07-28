export interface User{
    ctipou?: number;
    descripcion?: string;
    estado?: string;
  }

export interface tipousuarios {
  ctipousuario?: number | null;
  tipousuario?: string | null;
  estado?: string;
}

export interface tipoempleado {
  ctipoemp?: number | null;
  tipoemp?: string | null;
  estado?: string;
}

export interface tipovehiculos {
  ctipov?: number | null;
  tipo?: string | null;
  estado?: string;
}

export interface paises {
  cpais?: number | null;
  pais?: string | null;
  estado?: string;
}

export interface brokers {
  cbroker?: number | null;
  broker?: string | null;
  calificacion?: string | null;
  contacto?: string | null;
  telefono?: string | null;
  correo?: string | null;
  mc?: string | null;
  dot?: string | null;
  fecha?: Date | null;
  estado?: string;
}

export interface empresas {
    cempresa?: number | null;
    empresa?: string | null;
    identificacion?: string | null;
    direccion?: string | null;
    telefono?: string | null;
    extension?: string | null;
    correo?: string | null;
    fecha?: Date | null;
    estado?: string;
}

export interface warehouses {
  cwarehouse?: number | null;
  warehouse?: string | null;
  direccion?: string | null;
  telefono?: string | null;
  contacto?: string | null;
  horaapertura?: string | null;
  horacierre?: string | null;
  observaciones?: string | null;
  estado?: string;
}

export interface transportistas {
  ctransportista?: number | null;
  descripcion?: string | null;
  identificacion?: string | null;
  direccion?: string | null;
  telefono?: string | null;
  correo?: string | null;
  observaciones?: string | null;
  fecha?: Date | null;
  cantidadv?: number | null;
  porcentaje?: number | null;
  estado?: string;
}

export interface empleados {
  cempleado?: number | null;
  ctipoemp?: number | null;
  identificacion?: string | null;
  nombres?: string | null;
  apellidos?: string | null;
  direccion?: string | null;
  telefono?: string | null;
  correo?: string | null;
  fecha?: Date | null;
  porcentaje?: number | null;
  estado?: string;
}

export interface usuarios {
  cusuario?: number | null;
  ctipousuario?: number | null;
  cempleado?: number | null;
  usuario?: string | null;
  clave?: string | null;
  fecha?: Date | null;
  estado?: string;
}

export interface choferes {
  cchofer?: number | null;
  ctransportista?: number | null;
  identificacion?: string | null;
  nombres?: string | null;
  apellidos?: string | null;
  telefono?: string | null;
  permiso?: string | null;
  fecha?: Date | null;
  estado?: string;
}

export interface cargas {
  ccarga?: number | null;
  cpais?: number | null;
  cbroker?: number | null;
  ctransportista?: number | null;
  ctipov?: number | null;
  cchofer?: number | null;
  cempleado?: number | null;
  cempresa?: number | null;
  warorigen?: number | null;
  wardestino?: number | null;
  origen?: string | null;
  destino?: string | null;
  distancia?: number | null;
  peso?: string | null;
  preciocarga?: number | null;
  precioprom?: number | null;
  fecha?: Date | null;
  pickup?: Date | null;
  dropoff?: Date | null;
  cestcarga?: string | null;
  loadnumber?: string | null;
  contactobrok?: string | null;
  telefonobrok?: string | null;
  estado?: string;
}






