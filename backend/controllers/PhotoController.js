const Photo = require('../models/Photo');

// Controlador para crear una nueva foto
exports.createPhoto = async (req, res) => {
    try {
        const { title, description, imageURL, uploadedBy, eventAssociated, isHighlight, tags } = req.body;
        
        const newPhoto = new Photo({
            title,
            description,
            imageURL,
            uploadedBy,
            eventAssociated,
            isHighlight,
            tags
        });

        await newPhoto.save();
        res.status(201).json({ message: 'Foto subida correctamente', photo: newPhoto });
    } catch (error) {
        res.status(500).json({ message: 'Error al subir la foto', error });
    }
};

// Controlador para obtener todas las fotos
exports.getAllPhotos = async (req, res) => {
    try {
        const photos = await Photo.find();
        res.status(200).json(photos);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las fotos', error });
    }
};

// Controlador para obtener una foto por ID
exports.getPhotoById = async (req, res) => {
    try {
        const photo = await Photo.findById(req.params.id);
        if (!photo) {
            return res.status(404).json({ message: 'Foto no encontrada' });
        }
        res.status(200).json(photo);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener la foto', error });
    }
};

// Controlador para actualizar una foto
exports.updatePhoto = async (req, res) => {
    try {
        const updatedPhoto = await Photo.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPhoto) {
            return res.status(404).json({ message: 'Foto no encontrada' });
        }
        res.status(200).json({ message: 'Foto actualizada correctamente', photo: updatedPhoto });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar la foto', error });
    }
};

// Controlador para eliminar una foto
exports.deletePhoto = async (req, res) => {
    try {
        const deletedPhoto = await Photo.findByIdAndDelete(req.params.id);
        if (!deletedPhoto) {
            return res.status(404).json({ message: 'Foto no encontrada' });
        }
        res.status(200).json({ message: 'Foto eliminada correctamente' });
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar la foto', error });
    }
};
