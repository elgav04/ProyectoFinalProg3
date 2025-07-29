const controller = {}


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM paises', (err, rows) => {
            if (err) return res.json(err);
            res.json(rows);
        });
    });
};


controller.edit = (req, res) => {
    const { cpaise } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM paises WHERE cpaise = ?', [cpaise], (err, row) => {
            if (err) return res.json(err);
            res.json(row[0]);
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO paises SET ?', [data], (err, result) => {
            if (err) return res.json(err);
            res.json({ message: "Paise guardado", id: result.insertId });
        });
    });
};


controller.update = (req, res) => {
    const { cpaise } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE paises SET ? WHERE cpaise = ?', [data, cpaise], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Paise actualizado" });
        });
    });
};


controller.delete = (req, res) => {
    const { cpaise } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM paises WHERE cpaise = ?', [cpaise], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Paise eliminado" });
        });
    });
};

module.exports = controller;
