const express = require('express');
const router = express.Router();
const { createHighlight, getHighlights, deleteHighlight } = require('../controllers/HighlightController');

// Crear un nuevo destacado
router.post('/', createHighlight);

// Obtener todos los destacados
router.get('/', getHighlights);

// Eliminar un destacado
router.delete('/:id', deleteHighlight);

module.exports = router;
