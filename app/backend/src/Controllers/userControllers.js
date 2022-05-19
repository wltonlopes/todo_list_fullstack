const userServices = require ('../Services/userServices');

const getAll = async ( _req, res, next) => {
  try {
    const usuarios = await userServices.getAll();
    res.status(200).json(usuarios);
  } catch (error) {
    return next(error);
  }
};

const getById = async ( req, res, next) => {
  try {
    const { id } = req.body;
    const usuario = await userServices.getById(id);
    if (usuario === null){
      return res.status(400).json({message: 'Invalid Id'});
    }
    res.status(200).json(usuario);
  } catch (error) {
    return next(error);
  }
};

const getByName = async ( req, res, next) => {
  try {
    const { name } = req.body;
    const usuario = await userServices.getByName(name);
    res.status(200).json(usuario);
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getAll,
  getById,
  getByName,
};
