const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const usersRoutes = require('./routes/userRoutes');

const tarefasControllers = require('./Controllers/tarefasControllers');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/usuario', usersRoutes );

app.post('/tarefas', tarefasControllers.create );
app.get('/tarefas/usuario', tarefasControllers.getByUsuario);
app.get('/tarefas/id', tarefasControllers.getById);
app.put('/tarefas', tarefasControllers.update);
app.delete('/tarefas', tarefasControllers.remove);

app.listen(PORT, () => {
  console.log('O app está rodando na porta: ', PORT);
} );
