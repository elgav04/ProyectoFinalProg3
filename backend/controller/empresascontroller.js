const controller = {}


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empresas', (err, empresa) => {
            if (err) return res.json(err);
            res.json(empresa);
        });
    });
};


controller.edit = (req, res) => {
    const { cempresa } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empresas WHERE cempresa = ?', [cempresa], (err, empresa) => {
            if (err) return res.json(err);
            res.json(empresa[0]);
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO empresas SET ?', [data], (err, empresa) => {
            res.json(empresa);
        });
    });
};


controller.update = (req, res) => {
    const { cempresa } = req.params;
    const nuevo_empresa = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE empresas SET ? WHERE cempresa = ?', [nuevo_empresa, cempresa], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro actualizado" });
        });
    });
};


controller.delete = (req, res) => {
    const { cempresa } = req.params;
    req.getConnection((err, conn) => {
        conn.query('UPDATE empresas SET estado = "INACTIVO" WHERE cempresa = ?', [cempresa], (err,rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = controller;