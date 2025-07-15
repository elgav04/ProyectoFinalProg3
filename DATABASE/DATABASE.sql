CREATE DATABASE logistica;
USE logistica;

CREATE TABLE tipousuarios (
    ctipousuario INT PRIMARY KEY,
    tipousuario VARCHAR(50),
    estado VARCHAR(20)
);
select * from tipousuarios;

CREATE TABLE tipoempleado (
    ctipoemp INT PRIMARY KEY,
    tipoemp VARCHAR(50),
    estado VARCHAR(20)
);

CREATE TABLE tipovehiculos (
    ctipov INT PRIMARY KEY,
    tipo VARCHAR(100),
    estado VARCHAR(20)
);

CREATE TABLE paises (
    cpais INT PRIMARY KEY,
    pais VARCHAR(50),
    estado VARCHAR(20)
);
CREATE TABLE brokers (
    cbroker INT PRIMARY KEY,
    broker VARCHAR(50),
    calificacion VARCHAR(100),
    contacto VARCHAR(100),
    telefono VARCHAR(20),
    correo VARCHAR(50),
    mc VARCHAR(10),
    dot VARCHAR(10),
    fecha DATETIME,
    estado VARCHAR(20)
);
CREATE TABLE empresas (
    cempresa INT PRIMARY KEY,
    empresa VARCHAR(50),
    identificacion VARCHAR(50),
    direccion VARCHAR(500),
    telefono VARCHAR(20),
    extension VARCHAR(10),
    correo VARCHAR(50),
    fecha DATETIME,
    estado VARCHAR(20)
);
CREATE TABLE warehouses (
    cwarehouse INT PRIMARY KEY,
    warehouse VARCHAR(100),
    direccion VARCHAR(500),
    telefono VARCHAR(20),
    contacto VARCHAR(100),
    horaapertura VARCHAR(50),
    horacierre VARCHAR(50),
    observaciones VARCHAR(100),
    estado VARCHAR(20)
);
CREATE TABLE transportistas (
    ctransportista INT PRIMARY KEY,
    descripcion VARCHAR(100),
    identificacion VARCHAR(50),
    direccion VARCHAR(500),
    telefono VARCHAR(20),
    correo VARCHAR(50),
    observaciones VARCHAR(100),
    fecha DATETIME,
    cantidadv INT,
    porcentaje DECIMAL(6,4),
    estado VARCHAR(20)
);
CREATE TABLE empleados (
    cempleado INT PRIMARY KEY,
    ctipoemp INT,
    identificacion VARCHAR(20),
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    direccion VARCHAR(200),
    telefono VARCHAR(20),
    correo VARCHAR(50),
    fecha DATETIME,
    porcentaje DECIMAL(6,4),
    estado VARCHAR(20),
    FOREIGN KEY (ctipoemp) REFERENCES tipoempleado(ctipoemp)
);
CREATE TABLE usuarios (
    cusuario INT PRIMARY KEY,
    ctipousuario INT,
    cempleado INT,
    usuario VARCHAR(50),
    clave VARCHAR(50),
    fecha DATE,
    estado VARCHAR(20),
    FOREIGN KEY (ctipousuario) REFERENCES tipousuarios(ctipousuario),
    FOREIGN KEY (cempleado) REFERENCES empleados(cempleado)
);
CREATE TABLE choferes (
    cchofer INT PRIMARY KEY,
    ctransportista INT,
    identificacion VARCHAR(50),
    nombres VARCHAR(50),
    apellidos VARCHAR(50),
    telefono VARCHAR(20),
    permiso VARCHAR(50),
    fecha DATETIME,
    estado VARCHAR(20),
    FOREIGN KEY (ctransportista) REFERENCES transportistas(ctransportista)
);
CREATE TABLE cargas (
    ccarga INT PRIMARY KEY,
    cpais INT,
    cbroker INT,
    ctransportista INT,
    ctipov INT,
    cchofer INT,
    cempleado INT,
    cempresa INT,
    warorigen INT,
    wardestino INT,
    origen VARCHAR(100),
    destino VARCHAR(100),
    distancia INT,
    peso VARCHAR(10),
    preciocarga DECIMAL(10,0),
    precioprom DECIMAL(10,4),
    fecha DATETIME,
    pickup DATETIME,
    dropoff DATETIME,
    cestcarga VARCHAR(50),
    loadnumber VARCHAR(20),
    contactobrok VARCHAR(50),
    telefonobrok VARCHAR(50),
    estado VARCHAR(20),
    FOREIGN KEY (cpais) REFERENCES paises(cpais),
    FOREIGN KEY (cbroker) REFERENCES brokers(cbroker),
    FOREIGN KEY (ctransportista) REFERENCES transportistas(ctransportista),
    FOREIGN KEY (ctipov) REFERENCES tipovehiculos(ctipov),
    FOREIGN KEY (cchofer) REFERENCES choferes(cchofer),
    FOREIGN KEY (cempleado) REFERENCES empleados(cempleado),
    FOREIGN KEY (cempresa) REFERENCES empresas(cempresa),
    FOREIGN KEY (warorigen) REFERENCES warehouses(cwarehouse),
    FOREIGN KEY (wardestino) REFERENCES warehouses(cwarehouse)
);
