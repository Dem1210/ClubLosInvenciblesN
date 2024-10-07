const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // Importa dotenv
const userRoutes = require('./routes/UsersRoutes');
const highlightRoutes = require('./routes/HighlightRoutes');
const eventRoutes = require('./routes/EventRoutes');
const preRegistrationRoutes = require('./routes/PreRegistrationRoutes');
const photoRoutes = require('./routes/PhotoRoutes');

// Configura dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Base de datos conectada'))
  .catch(err => console.error('Error al conectar a la base de datos', err));

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/ClubLosInvensibles/Users', userRoutes);
app.use('/ClubLosInvensibles/Highlight', highlightRoutes);
app.use('/ClubLosInvensibles/Event', eventRoutes);
app.use('/ClubLosInvensibles/PreRegistration', preRegistrationRoutes);
app.use('/ClubLosInvensibles/Photo', photoRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
});
