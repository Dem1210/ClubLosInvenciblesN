const PreRegistration = require('../models/PreRegistration');
const path = require('path');

// Crear una nueva preinscripción
const createPreRegistration = async (req, res) => {
  try {
    const { 
      FullNameS, EmailS, PhoneS, BornDateS, Studies, 
      GenderS, CDS, GradeS, Alergies,
      FullNameP, EmailP, PhoneP, Age, CDP 
    } = req.body;

    // Obtener las URLs de las imágenes cargadas
    const PhotoURLS = req.files.PhotoURLS[0].path;  // Path del archivo subido
    const PhotoURLP = req.files.PhotoURLP[0].path;  // Path del archivo subido
    const CDSImage = req.files.CDS[0].path;          // Path del archivo subido
    const CDPImage = req.files.CDP[0].path;          // Path del archivo subido

    const newPreRegistration = new PreRegistration({
      FullNameS, EmailS, PhoneS, BornDateS, Studies,
      GenderS, PhotoURLS, CDS: CDSImage, GradeS, Alergies,
      FullNameP, EmailP, PhoneP, Age, PhotoURLP, CDP: CDPImage
    });

    await newPreRegistration.save();
    res.status(201).json(newPreRegistration);
  } catch (error) {
    res.status(500).json({ message: 'Error al crear la preinscripción', error });
  }
};

// Obtener todas las preinscripciones
const getPreRegistrations = async (req, res) => {
  try {
    const preRegistrations = await PreRegistration.find();
    res.json(preRegistrations);
  } catch (error) {
    res.status(500).json({ message: 'Error al obtener las preinscripciones', error });
  }
};

// Eliminar una preinscripción
const deletePreRegistration = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPreRegistration = await PreRegistration.findByIdAndDelete(id);

    if (!deletedPreRegistration) {
      return res.status(404).json({ message: 'Preinscripción no encontrada' });
    }

    res.status(204).send(); // Respuesta vacía
  } catch (error) {
    res.status(500).json({ message: 'Error al eliminar la preinscripción', error });
  }
};

module.exports = { createPreRegistration, getPreRegistrations, deletePreRegistration };
