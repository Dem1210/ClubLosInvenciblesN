const express = require('express');
const router = express.Router();
const { createPreRegistration, getPreRegistrations, deletePreRegistration } = require('../controllers/preRegistrationController');
const upload = require('../middleware/multer');

// Crear una nueva preinscripción (cargando múltiples imágenes)
router.post('/', upload.fields([
  { name: 'PhotoURLS', maxCount: 1 },
  { name: 'PhotoURLP', maxCount: 1 },
  { name: 'CDS', maxCount: 1 },
  { name: 'CDP', maxCount: 1 },
]), createPreRegistration);

// Obtener todas las preinscripciones
router.get('/', getPreRegistrations);

// Eliminar una preinscripción
router.delete('/:id', deletePreRegistration);

module.exports = router;
