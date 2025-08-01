const jwt = require('jsonwebtoken');
const SECRET = 'Logistic';

function verificarToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  if (!authHeader) return res.status(401).send('Token no proporcionado');

  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).send('Token no proporcionado');

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).send('Token invalido');

    req.user = decoded;
    next();
  });
}

module.exports = { verificarToken };