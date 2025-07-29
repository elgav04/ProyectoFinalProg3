const controller = {}


controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM transportistas', (err, rows) => {
            if (err) return res.json(err);
            res.json(rows);
        });
    });
};


controller.edit = (req, res) => {
    const { ctransportistas } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM transportistas WHERE ctransportistas = ?', [ctransportistas], (err, row) => {
            if (err) return res.json(err);
            res.json(row[0]);
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO transportistas SET ?', [data], (err, result) => {
            if (err) return res.json(err);
            res.json({ message: "Transportistas guardado", id: result.insertId });
        });
    });
};


controller.update = (req, res) => {
    const { ctransportistas } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE transportistas SET ? WHERE ctransportistas = ?', [data, ctransportistas], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Transportistas actualizado" });
        });
    });
};


controller.delete = (req, res) => {
    const { ctransportistas } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM transportistas WHERE ctransportistas = ?', [ctransportistas], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Transportistas eliminado" });
        });
    });
};

module.exports = controller;
