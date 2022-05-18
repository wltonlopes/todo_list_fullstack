const userModel = require('../Models/userModel');

const getAll = async () =>{
  try {
    const usuarios = await userModel.getAll();
    return usuarios;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
};
