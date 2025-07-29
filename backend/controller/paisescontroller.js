const controller = {}


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM paises', (err, paises) => {
            if (err) return res.json(err);
            res.json(paises);
        });
    });
};


controller.edit = (req, res) => {
    const { cpais } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM paises WHERE cpais = ?', [cpais], (err, pais) => {
            if (err) return res.json(err);
            res.json(pais[0]);
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO paises SET ?', [data], (err, pais) => {
            if (err) return res.json(err);
            res.json(pais);
        });
    });
};


controller.update = (req, res) => {
    const { cpais } = req.params;
    const nuevo_pais = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE paises SET ? WHERE cpais = ?', [nuevo_pais, cpais], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro actualizado" });
        });
    });
};


controller.delete = (req, res) => {
    const { cpais } = req.params;
    req.getConnection((err, conn) => {
        conn.query('UPDATE paises SET estado = "INACTIVO" WHERE cpais = ?', [cpais], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = controller;
