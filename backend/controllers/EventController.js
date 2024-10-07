const Event = require('../models/Event');

// Crear un nuevo evento
const createEvent = async (req, res) => {
  try {
    const { Title, Date, Location, Description, ImageURL } = req.body;
    const newEvent = new Event({ Title, Date, Location, Description, ImageURL });
    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear el evento', error });
  }
};

// Obtener todos los eventos
const getEvents = async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener los eventos', error });
  }
};

// Eliminar un evento
const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedEvent = await Event.findByIdAndDelete(id);
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Evento no encontrado' });
    }
    res.status(204).send(); // Respuesta vacía
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar el evento', error });
  }
};

module.exports = { createEvent, getEvents, deleteEvent };
