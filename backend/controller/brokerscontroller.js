const controller = {}


controller.list= (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM brokers', (err, rows) => {
            if (err) return res.json(err);
            res.json(rows);
        });
    });
};


controller.edit = (req, res) => {
    const { cbrokers } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM brokers WHERE cbrokers = ?', [cbrokers], (err, row) => {
            if (err) return res.json(err);
            res.json(row[0]);
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO brokers SET ?', [data], (err, result) => {
            if (err) return res.json(err);
            res.json({ message: "Brokers guardado", id: result.insertId });
        });
    });
};

controller.update = (req, res) => {
    const { cbrokers } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE brokers SET ? WHERE cbrokers = ?', [data, cbrokers], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Brokers actualizado" });
        });
    });
};


controller.delete = (req, res) => {
    const { cbrokers } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM brokers WHERE cbrokers = ?', [cbrokers], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Brokers eliminado" });
        });
    });
};

module.exports = controller;
