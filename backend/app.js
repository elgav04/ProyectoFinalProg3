const express= require('express');
const morgan = require('morgan');
const path= require('path');
const mysql= require('mysql');
const cors = require('cors');
const myConnection= require('express-myconnection');
const app= express();
require('dotenv').config();

const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "localhost:3000", 
                    credentials: true
                }
            ]
        }
}
};

app.use(cors(
    config.application.cors.server
  ));


// rutas backend
const empresasRoutes = require('./rutas/empresas');
const tipousuariosRoutes = require('./rutas/tipousuarios');
const tipoempleadoRoutes = require('./rutas/tipoempleado');
const tipovehiculosRoutes = require('./rutas/tipovehiculos');
const paisesRoutes = require('./rutas/paises');
const brokersRoutes = require('./rutas/brokers');
const warehousesRoutes = require('./rutas/warehouses');
const transportistasRoutes = require('./rutas/transportistas');
const empleadosRoutes = require('./rutas/empleados');
const usuariosRoutes = require('./rutas/usuarios');
const choferesRoutes = require('./rutas/choferes');
//const cargasRoutes = require('./rutas/cargas');



app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME
}, 'single'));
app.use(express.urlencoded({extended: false}));

/*
app.use(morgan('dev'));
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'**********',
    port:3306,
    database:'ventas'
}, 'single'));
app.use(express.urlencoded({extended: false}));
*/

var bodyParser = require('body-parser');
 // create application/json parser
app.use(bodyParser.json());


// rutas frontend
app.use('/api/empresas', empresasRoutes);
app.use('/api/tipousuarios', tipousuariosRoutes);
app.use('/api/tipoempleado', tipoempleadoRoutes);
app.use('/api/tipovehiculos', tipovehiculosRoutes);
app.use('/api/paises', paisesRoutes);
app.use('/api/brokers', brokersRoutes);
app.use('/api/warehouses', warehousesRoutes);
app.use('/api/transportistas', transportistasRoutes);
app.use('/api/empleados', empleadosRoutes);
app.use('/api/usuarios', usuariosRoutes);
app.use('/api/choferes', choferesRoutes);
//app.use('/api/usuarios', usuariosRoutes);


// archivos estaticos frontend
app.use(express.static(path.join(__dirname,'public')));


//inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});
