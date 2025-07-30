const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cargas', (err, cargas) => {
            if (err) return res.json(err);
            res.json(cargas);
        });
    });
};

controller.edit = (req, res) => {
    const { ccarga } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM cargas WHERE ccarga = ?', [ccarga], (err, cargas) => {
            if (err) return res.json(err);
            res.json(cargas[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO cargas SET ?', [data], (err, cargas) => {
            if (err) return res.json(err);
            res.json(cargas);
        });
    });
};

controller.update = (req, res) => {
    const { ccarga } = req.params;
    const nuevo_carga = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE cargas SET ? WHERE ccarga = ?', [nuevo_carga, ccarga], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { ccarga } = req.params;
    req.getConnection((err, conn) => {
        conn.query('UPDATE cargas SET estado = "INACTIVO" WHERE ccarga = ?', [ccarga], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro eliminado)" });
        });
    });
};

module.exports = controller;
