const userServices = require ('../Services/userServices');

const create = async (req, res, next) => {
  try {
    const { nome, senha, cargo } = req.body;
    const a = req.body.nome;
    console.log( a );
    const novoUsuario = await userServices.create( nome, senha, cargo );
    res.status(201).json(novoUsuario);
  } catch (error) {
    return next(error);
  }
}; 

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
    const { id } = req.params;
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
    const { id } = req.params;
    const usuario = await userServices.getByName(id);
    res.status(200).json(usuario);
  } catch (error) {
    return next(error);
  }
};

const update = async ( req, res, next) => {
  try {
    const { nome, senha, cargo, id } = req.body;
    const usuarioUp = await userServices.update(nome, senha, cargo, id);
    res.status(200).json(usuarioUp);
  } catch (error) {
    return next(error);
  }
};

const remove = async ( req, res, next ) => {
  try {
    const { id }= req.body;
    await userServices.remove(id);
    res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  getByName,
  update,
  remove,
};
