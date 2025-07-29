const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios', (err, rows) => {
            if (err) return res.json(err);
            res.json(rows);
        });
    });
};

controller.edit = (req, res) => {
    const { cusuarios } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM usuarios WHERE cusuarios = ?', [cusuarios], (err, row) => {
            if (err) return res.json(err);
            res.json(row[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO usuarios SET ?', [data], (err, result) => {
            if (err) return res.json(err);
            res.json({ message: "Usuarios guardado", id: result.insertId });
        });
    });
};


controller.update = (req, res) => {
    const { cusuarios } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE usuarios SET ? WHERE cusuarios = ?', [data, cusuarios], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Usuarios actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { cusuarios } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM usuarios WHERE cusuarios = ?', [cusuarios], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Usuarios eliminado" });
        });
    });
};

module.exports = controller;
