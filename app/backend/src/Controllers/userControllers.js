const userServices = require ('../Services/userServices');

const getAll = async ( _req, res) => {
  try {
    const usuarios = await userServices.getAll();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
};
