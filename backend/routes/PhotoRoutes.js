const express = require('express');
const router = express.Router();
const photoController = require('../controllers/PhotoController');

// Ruta para crear una nueva foto
router.post('/', photoController.createPhoto);

// Ruta para obtener todas las fotos
router.get('/', photoController.getAllPhotos);

// Ruta para obtener una foto por ID
router.get('/:id', photoController.getPhotoById);

// Ruta para actualizar una foto por ID
router.put('/:id', photoController.updatePhoto);

// Ruta para eliminar una foto por ID
router.delete('/:id', photoController.deletePhoto);

module.exports = router;

