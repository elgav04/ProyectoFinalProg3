const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM choferes', (err, choferes) => {
            if (err) return res.json(err);
            res.json(choferes);
        });
    });
};

controller.edit = (req, res) => {
    const { cchofer } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM choferes WHERE cchofer = ?', [cchofer], (err, choferes) => {
            if (err) return res.json(err);
            res.json(choferes[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO choferes SET ?', [data], (err, choferes) => {
            if (err) return res.json(err);
            res.json(choferes);
        });
    });
};

controller.update = (req, res) => {
    const { cchofer } = req.params;
    const nuevo_chofer = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE choferes SET ? WHERE cchofer = ?', [nuevo_chofer, cchofer], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { cchofer } = req.params;
    req.getConnection((err, conn) => {
        conn.query('UPDATE choferes SET estado = "INACTIVO" WHERE cchofer = ?', [cchofer], (err, rows) => {
            if (err) return res.json(err);
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = controller;
