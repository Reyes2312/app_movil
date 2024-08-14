const express = require('express');
const bcrypt = require('bcrypt');
const mysql = require('mysql2');
const router = express.Router();
const connection = require('./db');

router.post('/register', async (req, res) => {
    const { nombre, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    connection.query(
        'INSERT INTO app (nombre, password) VALUES (?, ?)',
        [nombre, hashedPassword],
        (err, results) => {
            if (err) {
                console.error('Error al registrar el usuario:', err);
                return res.status(500).json({ success: false, message: 'No se pudo registrar el usuario' });
            }
            res.json({ success: true });
        }
    );
});

router.post('/login', (req, res) => {
    const { nombre, password } = req.body;

    connection.query(
        'SELECT * FROM app WHERE nombre = ?',
        [nombre],
        async (err, results) => {
            if (err) {
                console.error('Error al buscar el usuario:', err);
                return res.status(500).json({ success: false, message: 'Error del servidor' });
            }

            if (results.length === 0) {
                return res.status(401).json({ success: false, message: 'Usuario no encontrado' });
            }

            const user = results[0];

            const passwordMatch = await bcrypt.compare(password, user.password);

            if (!passwordMatch) {
                return res.status(401).json({ success: false, message: 'Contraseña incorrecta' });
            }

            res.json({ success: true });
        }
    );
});

module.exports = router;

