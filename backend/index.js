const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv'); // Importa dotenv
const userRoutes = require('./routes/UserRoutes');
const highlightRoutes = require('./routes/HighlightRoutes');
const eventRoutes = require('./routes/EventRoutes');
const preRegistrationRoutes = require('./routes/PreRegistrationRoutes');
const photoRoutes = require('./routes/PhotoRoutes');

// Configura dotenv
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

mongoose.connect(process.env.MONGO_URI)
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

// Ruta de pruba
app.get('/', (req, res) => {
  res.send('Hello World!');
});



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`Port ${PORT} is in use, trying another...`);
    app.listen(0); // Use a random available port
  }
});
