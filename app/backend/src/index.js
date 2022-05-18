const express = require('express');
require('dotenv').config();
const usuariosControllers = require('./Controllers/userControllers');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());

app.get('/usuarios', usuariosControllers.getAll);

app.listen(PORT, () => {
  console.log('O app está rodando na porta: ', PORT);
} );
