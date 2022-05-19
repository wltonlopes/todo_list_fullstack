const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const usersRoutes = require('./routes/userRoutes');
const tarefasRoutes = require('./routes/tarefasRoutes');
const cors = require('cors');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use('/usuario', usersRoutes );
app.use('/tarefas', tarefasRoutes);

app.listen(PORT, () => {
  console.log('O app está rodando na porta: ', PORT);
} );
