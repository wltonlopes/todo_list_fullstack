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

const getByName = async (nome) =>{
  try {
    const usuario = await userModel.getByName(nome);
    return usuario;
  } catch (error) {
    console.log(error);
  }
};

const remove = async (id) => {
  await userModel.remove(id);
};

module.exports = {
  create,
  getAll,
  getById,
  getByName,
  remove,
};
