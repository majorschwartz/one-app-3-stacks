const express = require('express');
const Message = require('../models/Message');

const router = express.Router();

router.get('/messages', async (req, res) => {
    try {
        const messages = await Message.findAll();
        res.json(messages);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.post('/messages', async (req, res) => {
    try {
        const { content } = req.body;
        const message = await Message.create(content);
        res.status(201).json(message);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;