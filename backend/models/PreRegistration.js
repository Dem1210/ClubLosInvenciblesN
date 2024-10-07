const mongoose = require('mongoose');

const preRegistrationSchema = new mongoose.Schema({
    FullNameS: { type: String, required: true },
    EmailS: { type: String, required: true },
    PhoneS: { type: Number, required: true },
    BornDateS: { type: Date, required: true },
    Studies: { type: String, required: true },
    GenderS: { type: String, required: true },
    PhotoURLS: { type: String, required: true },
    CDS: { type: Number, required: true },
    GradeS: { type: String, required: true },
    Alergies: { type: String, required: true },
    FullNameP: { type: String, required: true },
    EmailP: { type: String, required: true },
    PhoneP: { type: Number, required: true },
    Age: { type: Date, required: true },
    PhotoURLP: { type: String, required: true },
    CDP: { type: Number, required: true },
    DatePreRegistered: { type: Date, default: Date.now },
});

const PreRegistration = mongoose.model('PreRegistration', preRegistrationSchema);
module.exports = PreRegistration;