const controller = {}

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empleados', (err, rows) => {
            if (err) return res.json(err);
            res.json(rows);
        });
    });
};

controller.edit = (req, res) => {
    const { cempleados } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empleados WHERE cempleados = ?', [cempleados], (err, row) => {
            if (err) return res.json(err);
            res.json(row[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO empleados SET ?', [data], (err, result) => {
            if (err) return res.json(err);
            res.json({ message: "Empleados guardado", id: result.insertId });
        });
    });
};

controller.update = (req, res) => {
    const { cempleados } = req.params;
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE empleados SET ? WHERE cempleados = ?', [data, cempleados], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Empleados actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { cempleados } = req.params;
    req.getConnection((err, conn) => {
        conn.query('DELETE FROM empleados WHERE cempleados = ?', [cempleados], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Empleados eliminado" });
        });
    });
};

module.exports = controller;
