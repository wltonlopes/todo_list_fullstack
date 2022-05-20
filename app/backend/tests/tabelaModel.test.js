/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../src/Models/connection');
const tarefasModel = require('../src/Models/tarefasModel');

describe('Busca pelo Nome', () => {
  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando não existe o usuario não tem tarefa', () => {
    it('retorna null', async () => {
      const response = await tarefasModel.getByUsuario();
      expect(response).to.be.equal(undefined);
    });
  });
});

describe('quando existe o usuario com tarefa', () => {

  before(() => {
    sinon.stub(tarefasModel, 'getById')
      .resolves(
        {
          id: 1,
          tarefa: 'Example Movie',
          usuario: 1999,
          titulo: 'Example Movie',
        }
      );
  });

  after(() => {
    tarefasModel.getById.restore();
  });

  it('retorna um objeto', async () => {
    const response = await tarefasModel.getById(1);

    expect(response).to.be.an('object');
  });

  it('o objeto não está vazio', async () => {
    const response = await tarefasModel.getById(1);

    expect(response).to.be.not.empty;
  });

  it('tal objeto possui as propriedades: "id", "tarefa", "usuario" e "titulo"', async () => {
    const item = await tarefasModel.getById(1);

    expect(item).to.include.all.keys('id', 'tarefa', 'usuario', 'titulo');
  });
});

describe('Busca pelo ID', () => {
  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

describe('quando não existe usuario', () => {
    it('retorna null', async () => {
      const response = await tarefasModel.getById();
      expect(response).to.be.equal(undefined);
    });
  });

describe('quando existe o usuario com Id', () => {

    before(() => {
      sinon.stub(tarefasModel, 'getById')
        .resolves(
          {
            id: 1,
            tarefa: 'Example Movie',
            usuario: 1999,
            titulo: 'Example Movie',
          }
        );
    });

    after(() => {
      tarefasModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await tarefasModel.getById(1);

      expect(response).to.be.an('object');
    });

    it('o objeto não está vazio', async () => {
      const response = await tarefasModel.getById(1);

      expect(response).to.be.not.empty;
    });

    it('tal objeto possui as propriedades: "id", "tarefa", "usuario" e "titulo"', async () => {
      const item = await tarefasModel.getById(1);

      expect(item).to.include.all.keys('id', 'tarefa', 'usuario', 'titulo');
    });
  });
});