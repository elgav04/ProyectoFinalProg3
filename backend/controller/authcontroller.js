const jwt = require('jsonwebtoken');
const db = require('../connection/connection');
const SECRET = 'Logistic';

exports.login = function (req, res) {
  const { usuario, clave } = req.body;

  const query = `
    SELECT u.cusuario, u.usuario, t.tipousuario AS role 
    FROM usuarios u
    JOIN tipousuarios t ON u.ctipousuario = t.ctipousuario
    WHERE u.usuario = ? AND u.clave = ?`;

  db.query(query, [usuario, clave], function (err, usuarios) {
    if (err) return res.status(500).send('Error DB');
    if (usuarios.length === 0) return res.status(401).send('Credenciales inválidas');

    
    const user = usuarios[0];

    if (user.logged_in) {
      return res.status(403).send('Usuario ya tiene una sesión activa');
    }

    db.query('UPDATE usuarios SET logged_in = 1 WHERE cusuario = ?', [user.cusuario], function (err2) {
      if (err2) return res.status(500).send('Error al iniciar sesión');

      const token = jwt.sign(
        { cusuario: user.cusuario, usuario: user.usuario, role: user.role },
        SECRET,
        { expiresIn: '1h' }
      );

      res.json({ token, user });
      console.log(token);
      console.log(user);
    });
  });
};

exports.logout = function (req, res) {
    console.log('contenido req.user:', req.user);
  const cusuario = req.user.cusuario;
  db.query('UPDATE usuarios SET logged_in = 0 WHERE cusuario = ?', [cusuario], function (err) {
    if (err) {
        console.error('Error al cerrar sesion:', err);
        return res.status(500).json({ message: 'Error al cerrar sesion' });
    }
    
    return res.json({ message: 'Sesión cerrada correctamente' });
  });
  //console.log(query);
};
