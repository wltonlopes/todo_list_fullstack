const connection = require('./connection');

// C
const create = async ( nome, senha, cargo) => {
  console.log(nome, senha, cargo);
  const [ rows ] = await connection.query(
    'INSERT INTO usuarios ( nome, senha, cargo ) VALUES (?,?,?)',
    [nome, senha, cargo]
  );
  return{
    id: rows.insertId,
  };
};
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
const updade = async (nome, senha, cargo, id) => {
  await connection.execute(
    'UPDATE usuario SET nome=?, senha=?, cargo=? WHERE id = ? ',
    [nome, senha, cargo, id]
  );
  return {
    id,
    nome
  };
};

// D
const remove = async (id) => {
  await connection.execute('DELETE FROM usuarios WHERE id = ?', [id]);
};

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  remove,
  updade
};
