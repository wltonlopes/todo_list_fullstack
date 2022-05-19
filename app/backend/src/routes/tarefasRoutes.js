const express = require('express');
const router = express.Router();
const tarefasControllers = require('../Controllers/tarefasControllers');

router.post('/', tarefasControllers.create );
router.get('/usuario', tarefasControllers.getByUsuario);
router.get('/id', tarefasControllers.getById);
router.put('/', tarefasControllers.update);
router.delete('/', tarefasControllers.remove);

module.exports = router;
