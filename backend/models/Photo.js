const mongoose = require('mongoose');

// Definir el esquema para las fotos
const photoSchema = new mongoose.Schema({
    title: { type: String, required: true },           // Título de la foto
    description: { type: String },                      // Descripción opcional de la foto
    imageURL: { type: String, required: true },         // URL o ruta de la imagen almacenada
    uploadedBy: { type: String, required: true },       // Nombre del usuario que subió la foto
    uploadedAt: { type: Date, default: Date.now },      // Fecha de subida (por defecto la fecha actual)
    eventAssociated: { type: mongoose.Schema.Types.ObjectId, ref: 'Event' }, // Referencia al evento (opcional)
    isHighlight: { type: Boolean, default: false },     // Para destacar la foto (destacados del mes)
    tags: [{ type: String }]                            // Lista de etiquetas para la foto
});

// Crear el modelo Photo basado en el esquema
const Photo = mongoose.model('Photo', photoSchema);

// Exportar el modelo
module.exports = Photo;
