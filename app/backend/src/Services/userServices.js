const userModel = require('../Models/userModel');

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

module.exports = {
  getAll,
  getById,
  getByName,
};
