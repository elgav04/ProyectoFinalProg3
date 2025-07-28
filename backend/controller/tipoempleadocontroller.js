const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tipoempleado', (err, tipoempleado) => {
            if (err) return res.json(err);
            res.json(tipoempleado);
        });
    });
};

controller.edit = (req, res) => {
    const { ctipoemp } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tipoempleado WHERE ctipoemp = ?', [ctipoemp], (err, tipoempleado) => {
            if (err) return res.json(err);
            res.json(tipoempleado[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tipoempleado SET ?', [data], (err, tipoempleado) => {
            if (err) return res.json(err);
            res.json(tipoempleado);
        });
    });
};

controller.update = (req, res) => {
    const { ctipoemp } = req.params;
    const nuevo_tipoempleado = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tipoempleado SET ? WHERE ctipoemp = ?', [nuevo_tipoempleado, ctipoemp], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { ctipoemp } = req.params;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tipoempleado SET estado = "INACTIVO" WHERE ctipoemp = ?', [ctipoemp], (err, tipoempleado) => {
            if (err) return res.json(err);
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = controller;
