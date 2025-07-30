CREATE DATABASE logistica;
USE logistica;

CREATE TABLE tipousuarios (
    ctipousuario INT AUTO_INCREMENT PRIMARY KEY,
    tipousuario VARCHAR(50),
    estado VARCHAR(20)
);
select * from tipousuarios;

CREATE TABLE tipoempleado (
    ctipoemp INT AUTO_INCREMENT PRIMARY KEY,
    tipoemp VARCHAR(50),
    estado VARCHAR(20)
);

CREATE TABLE tipovehiculos (
    ctipov INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(100),
    estado VARCHAR(20)
);

CREATE TABLE paises (
    cpais INT AUTO_INCREMENT PRIMARY KEY,
    pais VARCHAR(50),
    estado VARCHAR(20)
);
CREATE TABLE brokers (
    cbroker INT AUTO_INCREMENT PRIMARY KEY,
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
    cempresa INT AUTO_INCREMENT PRIMARY KEY,
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
    cwarehouse INT AUTO_INCREMENT PRIMARY KEY,
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
    ctransportista INT AUTO_INCREMENT PRIMARY KEY,
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
    cempleado INT AUTO_INCREMENT PRIMARY KEY,
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
    cusuario  INT AUTO_INCREMENT PRIMARY KEY,
    ctipousuario INT,
    cempleado INT,
    usuario VARCHAR(50),
    clave VARCHAR(50),
    fecha DATETIME,
    estado VARCHAR(20),
    FOREIGN KEY (ctipousuario) REFERENCES tipousuarios(ctipousuario),
    FOREIGN KEY (cempleado) REFERENCES empleados(cempleado)
);
CREATE TABLE choferes (
    cchofer  INT AUTO_INCREMENT PRIMARY KEY,
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
    ccarga INT AUTO_INCREMENT PRIMARY KEY,
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
