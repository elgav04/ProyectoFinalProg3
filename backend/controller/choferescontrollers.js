const controller = {}


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM choferes', (err, rows) => {
            if (err) return res.json(err);
            res.json(rows);
        });
    });
};


controller.edit = (req, res) => {
    const { cchofere } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM choferes WHERE cchofere = ?', [cchofere], (err, row) => {
            if (err) return res.json(err);
            res.json(row[0]);
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO choferes SET ?', [data], (err, result) => {
            if (err) return res.json(err);
            res.json({ message: "Chofere guardado", id: result.insertId });
        });
    });
};


controller.update = (req, res) => {
    const { cchofere } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE choferes SET ? WHERE cchofere = ?', [data, cchofere], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Chofere actualizado" });
        });
    });
};


controller.delete = (req, res) => {
    const { cchofere } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM choferes WHERE cchofere = ?', [cchofere], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Chofere eliminado" });
        });
    });
};

module.exports = controller;
