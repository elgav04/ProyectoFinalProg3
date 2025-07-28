const controller = {}


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tipovehiculos', (err, tipovehiculos) => {
            if (err) return res.json(err);
            res.json(tipovehiculos);
        });
    });
};


controller.edit = (req, res) => {
    const { ctipov } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM tipovehiculos WHERE ctipov = ?', [ctipov], (err, ctipov) => {
            if (err) return res.json(err);
            res.json(ctipov[0]);
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO tipovehiculos SET ?', [data], (err, ctipov) => {
            if (err) return res.json(err);
            res.json(ctipov);
        });
    });
};


controller.update = (req, res) => {
    const { ctipov } = req.params;
    const nuevo_tipovehiculos = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tipovehiculos SET ? WHERE ctipov = ?', [nuevo_tipovehiculos, ctipov], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro actualizado" });
        });
    });
};


controller.delete = (req, res) => {
    const { ctipov } = req.params;
    req.getConnection((err, conn) => {
        conn.query('UPDATE tipovehiculos SET estado = "INACTIVO" WHERE ctipov = ?', [ctipov], (err, ctipov) => {
            if (err) return res.json(err);
            res.json({ message: "Registro eliminado" });
        });
    });
}

module.exports = controller;