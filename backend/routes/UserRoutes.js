const express = require('express');
const router = express.Router();
const { createUser, getUsers, deleteUser } = require('../controllers/UserController');

// Crear un nuevo usuario
router.post('/', createUser);

// Obtener todos los usuarios
router.get('/', getUsers);

// Eliminar un usuario
router.delete('/:id', deleteUser);

module.exports = router;
