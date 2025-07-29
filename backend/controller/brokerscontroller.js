const controller = {}


controller.list= (req, res) => {
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM brokers', (err, broker) => {
            if (err) return res.json(err);
            res.json(broker);
        });
    });
};


controller.edit = (req, res) => {
    const { cbroker } = req.params;
    req.getConnection((err, conn) => {
        conn.query('SELECT * FROM brokers WHERE cbroker = ?', [cbroker], (err, broker) => {
            if (err) return res.json(err);
            res.json(broker[0]);
        });
    });
};


controller.save = (req, res) => {
    const data = req.body;
    req.getConnection((err, conn) => {
        conn.query('INSERT INTO brokers SET ?', [data], (err, broker) => {
            if (err) return res.json(err);
            res.json(broker);
        });
    });
};

controller.update = (req, res) => {
    const { cbroker } = req.params;
    const nuevo_broker = req.body;
    req.getConnection((err, conn) => {
        conn.query('UPDATE brokers SET ? WHERE cbroker = ?', [nuevo_broker, cbroker], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro actualizado" });
        });
    });
};


controller.delete = (req, res) => {
    const { cbroker } = req.params;
    req.getConnection((err, conn) => {
        conn.query('UPDATE brokers SET estado = "INACTIVO" WHERE cbroker = ?', [cbroker], (err) => {
            if (err) return res.json(err);
            res.json({ message: "Registro eliminado" });
        });
    });
};

module.exports = controller;
