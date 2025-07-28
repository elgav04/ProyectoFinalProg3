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
//const areas_trabajoRoutes = require('./rutas/areas_trabajo');



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
//app.use('/api/empresa', empresaRoutes);


// archivos estaticos frontend
app.use(express.static(path.join(__dirname,'public')));


//inicializando el server
app.listen(app.get('port'), () =>{
    console.log("PUERTO 3000");
});
