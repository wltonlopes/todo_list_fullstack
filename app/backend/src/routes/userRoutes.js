const express = require('express');
const router = express.Router();
const usuariosControllers = require('../Controllers/userControllers');

router.get('/id', usuariosControllers.getById);
router.get('/name', usuariosControllers.getByName);
router.get('/all', usuariosControllers.getAll);

router.post('/', usuariosControllers.create);

router.put('/', usuariosControllers.update);

router.delete('/', usuariosControllers.remove);

module.exports = router;
