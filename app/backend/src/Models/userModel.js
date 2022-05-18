const connection = require('./connection');

const getAll = async () => {
  try {
    const [ rows ] = await connection.execute('SELECT * FROM usuarios');
    return rows;
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAll,
};
