const express = require('express');
const pool = require('../db/postgres')

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT NOW()');

        res.json({
            status: 'ok',
            database_time: result.rows[0].now
        });
    } catch (error) {
        res.status(500).json({
            status: 'database_error'
        });
    }

});

module.exports = router;