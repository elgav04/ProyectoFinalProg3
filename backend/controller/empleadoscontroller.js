const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empleados', (err, empleados) => {
            if (err) return res.status(500).json(err);
            res.json(empleados);
        });
    });
};

controller.edit = (req, res) => {
    const { cempleado } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM empleados WHERE cempleado = ?', [cempleado], (err, empleado) => {
            if (err) return res.json(err);
            res.json(empleado[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO empleados SET ?', [data], (err, empleado) => {
            res.json(empleado);
        });
    });
};

controller.update = (req, res) => {
    const { cempleado } = req.params;
    const nuevo_empleado = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE empleados SET ? WHERE cempleado = ?', [nuevo_empleado, cempleado], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { cempleado } = req.params;
    req.getConnection((err, conn) => {
        conn.query('UPDATE empleados SET estado = "INACTIVO" WHERE cempleado = ?', [cempleado], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = controller;
