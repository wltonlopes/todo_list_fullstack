const connection = require('./connection');

// C
// R
const getAll = async () => {
  try {
    const [ rows ] = await connection.execute('SELECT * FROM usuarios');
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) => {
  try {
    const rows = await connection.query(
      'SELECT * FROM usuarios WHERE id=?',
      [id]
    );
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const getByName = async (name) => {
  try {
    const rows = await connection.query(
      'SELECT * FROM usuarios WHERE nome=?',
      [name]
    );
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

// U
// D


module.exports = {
  getAll,
  getById,
  getByName,
};
