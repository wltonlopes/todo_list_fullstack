const connection = require('./connection');

// C
const create = async ( titulo, tarefa, usuario ) => {
  console.log(titulo, tarefa, usuario);
  const [ rows ] = await connection.query(
    'INSERT INTO tarefas ( titulo, tarefa, usuario ) VALUES (?,?,?)',
    [titulo, tarefa, usuario]
  );
  return{
    id: rows.insertId,
  };
};
// R
const getAll = async () => {
  try {
    const [ rows ] = await connection.execute('SELECT * FROM tarefas');
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const getById = async (id) => {
  try {
    const rows = await connection.query(
      'SELECT * FROM tarefas WHERE id=?',
      [id]
    );
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

const getByUsuario = async (usuario) => {
  try {
    const rows = await connection.query(
      'SELECT * FROM tarefas WHERE usuario=?',
      [usuario]
    );
    return rows[0];
  } catch (error) {
    console.log(error);
  }
};

// U
const update = async (titulo, tarefa, usuario, id) => {
  await connection.execute(
    'UPDATE tarefas SET titulo=?, tarefa=?, usuario=? WHERE id = ? ',
    [titulo, tarefa, usuario, id]
  );
  return {
    id,
    titulo,
    tarefa, 
  };
};

// D
const remove = async (id) => {
  await connection.execute('DELETE FROM tarefas WHERE id = ?', [id]);
};

module.exports = {
  getAll,
  getById,
  getByUsuario,
  create,
  remove,
  update
};
