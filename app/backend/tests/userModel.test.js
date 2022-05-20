/* eslint-disable no-undef */
const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../src/Models/connection');
const userModel = require('../src/Models/userModel');

describe('Busca pelo Nome', () => {
  before(async () => {
    const execute = [[]];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando não existe usuario com nome', () => {
    it('retorna null', async () => {
      const response = await userModel.getByName();
      expect(response).to.be.equal(undefined);
    });
  });
});

describe('quando existe o usuario com nome', () => {

  before(() => {
    sinon.stub(userModel, 'getById')
      .resolves(
        {
          id: 1,
          nome: 'Example Movie',
          senha: 1999,
          cargo: 'Example Movie',
        }
      );
  });

  after(() => {
    userModel.getById.restore();
  });

  it('retorna um objeto', async () => {
    const response = await userModel.getById(1);

    expect(response).to.be.an('object');
  });

  it('o objeto não está vazio', async () => {
    const response = await userModel.getById(1);

    expect(response).to.be.not.empty;
  });

  it('tal objeto possui as propriedades: "id", "nome", "senha" e "cargo"', async () => {
    const item = await userModel.getById(1);

    expect(item).to.include.all.keys('id', 'nome', 'senha', 'cargo');
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
      const response = await userModel.getById();
      expect(response).to.be.equal(undefined);
    });
  });

describe('quando existe o usuario com Id', () => {

    before(() => {
      sinon.stub(userModel, 'getById')
        .resolves(
          {
            id: 1,
            nome: 'Example Movie',
            senha: 1999,
            cargo: 'Example Movie',
          }
        );
    });

    after(() => {
      userModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await userModel.getById(1);

      expect(response).to.be.an('object');
    });

    it('o objeto não está vazio', async () => {
      const response = await userModel.getById(1);

      expect(response).to.be.not.empty;
    });

    it('tal objeto possui as propriedades: "id", "nome", "senha" e "cargo"', async () => {
      const item = await userModel.getById(1);

      expect(item).to.include.all.keys('id', 'nome', 'senha', 'cargo');
    });
  });
});