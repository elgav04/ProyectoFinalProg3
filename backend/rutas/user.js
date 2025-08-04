const express = require('express');
const router = express.Router();
require('dotenv').config();
const mysqlConnection = require('../connection/connection');

const jwt = require('jsonwebtoken');

router.post('/login', (req, res) => {
  const { userName, pass } = req.body;
  mysqlConnection.query('SELECT * FROM usuarios WHERE usuario = ? and clave=?', [userName,pass], async (err, usuarios) => {
    if (err) return res.status(500).json({ error: err });
    if (usuarios.length === 0) return res.status(401).json({ message: 'Usuario no encontrado' });

    const user = usuarios[0];
  
    const token = jwt.sign(
      { id: user.cusuario, role: user.ctipousuario },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
      
    );

    console.log(token);

    res.json({ token });
  });
});

// Middleware de verificación
const verifyToken = (roles = []) => {
  return (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) return res.status(403).json({ message: 'Token requerido' });

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) return res.status(403).json({ message: 'Token inválido' });

      if (roles.length && !roles.includes(user.role)) {
        return res.status(403).json({ message: 'No autorizado' });
      }

      req.user = user;
      next();
    });
  };
};

// Rutas protegidas
router.get('/usuarios', verifyToken([1]), (req, res) => {
    res.json({ message: 'Acceso permitido para ADMINISTRADOR - Usuarios' });
  });
  
  router.get('/empleados', verifyToken([1, 2]), (req, res) => {
    res.json({ message: 'Acceso permitido para ADMINISTRADOR y SUPERVISOR - Empleados' });
  });
  
  router.get('/tipoempleado', verifyToken([1]), (req, res) => {
    res.json({ message: 'Acceso permitido para ADMINISTRADOR - Tipo de Empleado' });
  });
  
  // Tipo de usuario - solo ADMINISTRADOR
  router.get('/tipousuarios', verifyToken([1]), (req, res) => {
    res.json({ message: 'Acceso permitido para ADMINISTRADOR - Tipo de Usuario' });
  });
  
  router.get('/empresas', verifyToken([1, 2, 4]), (req, res) => {
    res.json({ message: 'Acceso permitido para ADMINISTRADOR, SUPERVISOR y ASISTENTE OPERATIVO - Empresas' });
  });
  
  router.get('/transportistas', verifyToken([1, 2, 4]), (req, res) => {
    res.json({ message: 'Acceso permitido para ADMINISTRADOR, SUPERVISOR y ASISTENTE OPERATIVO - Transportistas' });
  });
  
  router.get('/choferes', verifyToken([1, 2, 4]), (req, res) => {
    res.json({ message: 'Acceso permitido para ADMINISTRADOR, SUPERVISOR y ASISTENTE OPERATIVO - Choferes' });
  });
  
  router.get('/cargas', verifyToken([1, 2, 3, 4]), (req, res) => {
    res.json({ message: 'Acceso permitido para todos los roles - Cargas' });
  });
  
  router.get('/paises', verifyToken([1, 2]), (req, res) => {
    res.json({ message: 'Acceso permitido para ADMINISTRADOR y SUPERVISOR - Países' });
  });
  
  router.get('/warehouses', verifyToken([1, 2, 4]), (req, res) => {
    res.json({ message: 'Acceso permitido para ADMINISTRADOR, SUPERVISOR y ASISTENTE OPERATIVO - Warehouses' });
  });
  
  router.get('/brokers', verifyToken([1, 2, 4]), (req, res) => {
    res.json({ message: 'Acceso permitido para ADMINISTRADOR, SUPERVISOR y ASISTENTE OPERATIVO - Brokers' });
  });
  
  router.get('/tipovehiculos', verifyToken([1, 2]), (req, res) => {
    res.json({ message: 'Acceso permitido para ADMINISTRADOR y SUPERVISOR - Tipo de Vehículo' });
  });

module.exports = router;
