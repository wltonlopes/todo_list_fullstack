const userModel = require('../Models/userModel');

const create = async ( nome, senha, cargo ) => {
  try {
    console.log( nome, senha, cargo );
    const novoUsuario = await userModel.create( nome, senha, cargo );
    return novoUsuario;
  } catch (error) {
    console.log(error);
  }
};


const getAll = async () =>{
  try {
    const usuarios = await userModel.getAll();
    return usuarios;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) =>{
  try {
    const usuario = await userModel.getById(id);
    return usuario;
  } catch (error) {
    console.log(error);
  }
};

const getByName = async (id) =>{
  try {
    const s = id.substr(-5);
    const n = id.substring(0, id.length - 5);
    const usuario = await userModel.getByName(n, s);
    return usuario;
  } catch (error) {
    console.log(error);
  }
};

const update = async (nome, senha, cargo, id) => {
  const usuarioUp = await userModel.update(nome, senha, cargo, id);
  return usuarioUp;
};

const remove = async (id) => {
  await userModel.remove(id);
};

module.exports = {
  create,
  getAll,
  getById,
  getByName,
  update,
  remove,
};
