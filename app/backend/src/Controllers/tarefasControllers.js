const tarefasServices = require ('../Services/tarefasServices');

const create = async (req, res, next) => {
  try {
    const { titulo, tarefa, usuario } = req.body;
    const novaTarefa = await tarefasServices.create( titulo, tarefa, usuario );
    res.status(201).json(novaTarefa);
  } catch (error) {
    return next(error);
  }
}; 

const getAll = async ( _req, res, next) => {
  try {
    const tarefas = await tarefasServices.getAll();
    res.status(200).json(tarefas);
  } catch (error) {
    return next(error);
  }
};

const getById = async ( req, res, next) => {
  try {
    const { id } = req.body;
    const tarefa = await tarefasServices.getById(id);
    if (tarefa === null){
      return res.status(400).json({message: 'Invalid Id'});
    }
    res.status(200).json(tarefa);
  } catch (error) {
    return next(error);
  }
};

const getByUsuario = async ( req, res, next) => {
  try {
    const { usuario } = req.body;
    const tarefas = await tarefasServices.getByUsuario(usuario);
    res.status(200).json(tarefas);
  } catch (error) {
    return next(error);
  }
};

const update = async ( req, res, next) => {
  try {
    const { titulo, tarefa, usuario, id } = req.body;
    const usuarioUp = await tarefasServices.update(titulo, tarefa, usuario, id);
    res.status(200).json(usuarioUp);
  } catch (error) {
    return next(error);
  }
};

const remove = async ( req, res, next ) => {
  try {
    const { id }= req.body;
    await tarefasServices.remove(id);
    res.status(204).end();
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  create,
  getAll,
  getById,
  getByUsuario,
  update,
  remove,
};
