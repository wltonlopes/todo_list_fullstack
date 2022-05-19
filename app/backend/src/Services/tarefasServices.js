const tarefasModel = require('../Models/tarefasModel');

const create = async ( titulo, tarefa, usuario ) => {
  try {
    console.log( titulo, tarefa, usuario );
    const novaTarefa = await tarefasModel.create( titulo, tarefa, usuario );
    return novaTarefa;
  } catch (error) {
    console.log(error);
  }
};


const getAll = async () =>{
  try {
    const usuarios = await tarefasModel.getAll();
    return usuarios;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) =>{
  try {
    const tarefa = await tarefasModel.getById(id);
    return tarefa;
  } catch (error) {
    console.log(error);
  }
};

const getByUsuario = async (usuario) =>{
  try {
    const tarefas = await tarefasModel.getByUsuario(usuario);
    return tarefas;
  } catch (error) {
    console.log(error);
  }
};

const update = async (titulo, tarefa, usuario, id) => {
  const usuarioUp = await tarefasModel.update(titulo, tarefa, usuario, id);
  return usuarioUp;
};

const remove = async (id) => {
  await tarefasModel.remove(id);
};

module.exports = {
  create,
  getAll,
  getById,
  getByUsuario,
  update,
  remove,
};
