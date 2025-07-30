const controller = {};

controller.list = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM warehouses', (err, warehouses) => {
            if (err) return res.json(err);
            res.json(warehouses);
        });
    });
};

controller.edit = (req, res) => {
    const { cwarehouse } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM warehouses WHERE cwarehouse = ?', [cwarehouse], (err, warehouses) => {
            if (err) return res.json(err);
            res.json(warehouses[0]);
        });
    });
};

controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO warehouses SET ?', [data], (err, warehouses) => {
            if (err) return res.json(err);
            res.json( warehouses);
        });
    });
};

controller.update = (req, res) => {
    const { cwarehouse } = req.params;
    const nuevo_warehouse = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE warehouses SET ? WHERE cwarehouse = ?', [nuevo_warehouse, cwarehouse], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro actualizado" });
        });
    });
};

controller.delete = (req, res) => {
    const { cwarehouse } = req.params;
    req.getConnection((err, conn) => {
        conn.query('UPDATE warehouses SET estado = "INACTIVO" WHERE cwarehouse = ?', [cwarehouse], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = controller;
