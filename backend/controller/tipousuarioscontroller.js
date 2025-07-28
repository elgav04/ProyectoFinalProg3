const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.json(err);
        conn.query('SELECT * FROM tipousuarios', (err, rows) => {
            if (err) return res.json(err);
            res.json(rows);
        });
    });
};

controller.edit = (req, res) => {
    const { ctipousuario } = req.params;
    req.getConnection((err, conn) => {
        if (err) return res.json(err);
        conn.query('SELECT * FROM tipousuarios WHERE ctipousuario = ?', [ctipousuario], (err, tipousuario) => {
            if (err) return res.json(err);
            res.json(tipousuario[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) return res.json(err);
        conn.query('INSERT INTO tipousuarios SET ?', [data], (err, tipousuario) => {
            if (err) return res.json(err);
            res.json(tipousuario);
        });
    });
};

controller.update = (req, res) => {
    const { ctipousuario } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        if (err) return res.json(err);
        conn.query('UPDATE tipousuarios SET ? WHERE ctipousuario = ?', [data, ctipousuario], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { ctipousuario } = req.params;
    req.getConnection((err, conn) => {
        if (err) return res.json(err);
        conn.query('UPDATE tipousuarios SET estado = "INACTIVO" WHERE ctipousuario = ?', [ctipousuario], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = controller;
