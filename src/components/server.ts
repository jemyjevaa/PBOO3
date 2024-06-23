const express = require('express');
const mongoose = require('mongoose');
const { exec } = require('child_process');

const app = express();

// Conexión a MongoDB
mongoose.connect('mongodb+srv://PBOO:DELunoAL7conDEmayuscula@cluster0.ijzsw6v.mongodb.net/PBOO', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
  console.log('Conectado a la base de datos MongoDB');
});

// Ruta para respaldar la base de datos
app.post('/backup', async (req, res) => {
  // Comando para realizar el respaldo en el directorio especificado
  const command = `mongodump --uri "mongodb+srv://PBOO:DELunoAL7conDEmayuscula@cluster0.ijzsw6v.mongodb.net/PBOO" --out "/Users/jemyjeva/pboo1"`;

  exec(command, (error, stdout, stderr) => {
    if (error) {
      console.error('Error al realizar el respaldo:', error);
      res.status(500).json({ message: 'Error al realizar el respaldo' });
      return;
    }
    console.log('Respaldo exitoso');
    res.status(200).json({ message: 'Respaldo exitoso' });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en el puerto ${PORT}`);
});
