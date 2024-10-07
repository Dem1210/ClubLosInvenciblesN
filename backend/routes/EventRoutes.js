const express = require('express');
const router = express.Router();
const { createEvent, getEvents, deleteEvent } = require('../controllers/EventController');

// Crear un nuevo evento
router.post('/', createEvent);

// Obtener todos los eventos
router.get('/', getEvents);

// Eliminar un evento
router.delete('/:id', deleteEvent);

module.exports = router;
