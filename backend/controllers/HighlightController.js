const Highlight = require('../models/Highlight');

// Crear un nuevo destacado
const createHighlight = async (req, res) => {
  try {
    const { Title, Description, ImageURL } = req.body;
    const newHighlight = new Highlight({ Title, Description, ImageURL });
    await newHighlight.save();
    res.status(201).json(newHighlight);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el destacado', error });
  }
};

// Obtener todos los destacados
const getHighlights = async (req, res) => {
  try {
    const highlights = await Highlight.find();
    res.json(highlights);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los destacados', error });
  }
};

// Eliminar un destacado
const deleteHighlight = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedHighlight = await Highlight.findByIdAndDelete(id);
    if (!deletedHighlight) {
      return res.status(404).json({ message: 'Destacado no encontrado' });
    }
    res.status(204).send(); // Respuesta vacía
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el destacado', error });
  }
};

module.exports = { createHighlight, getHighlights, deleteHighlight };
