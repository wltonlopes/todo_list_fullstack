const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const usuariosControllers = require('./Controllers/userControllers');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/usuario/id', usuariosControllers.getById);
app.get('/usuario/name', usuariosControllers.getByName);
app.get('/usuarios', usuariosControllers.getAll);

app.post('/usuario', usuariosControllers.create);

app.put('/usuario', usuariosControllers.update);

app.delete('/usuario', usuariosControllers.remove);

app.listen(PORT, () => {
  console.log('O app está rodando na porta: ', PORT);
} );
