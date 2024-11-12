const User = require('../models/User');

// Crear un nuevo usuario
const createUser = async (req, res) => {
  try {
    const { FullName, Email, Phone, Role } = req.body;
    const newUser = new User({ FullName, Email, Phone, Role });
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el usuario', error });
  }
};

// Obtener todos los usuarios
const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los usuarios', error });
  }
};

// Eliminar un usuario
const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }
    res.status(204).send(); // Respuesta vacía
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el usuario', error });
  }
};

module.exports = { createUser, getUsers, deleteUser };
