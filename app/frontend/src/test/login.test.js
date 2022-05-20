import {screen} from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App from '../App';

describe('Testando o componente Login', ()=>{
  it('Testando h1', async () => {
    renderWithRouter(<App/>)

    const titleName = screen.getByRole('heading',
    { name: 'Login' });
    expect(titleName).toBeInTheDocument();
  });
  it('Testando password', async () => {
    renderWithRouter(<App/>)
  
    const labelPassword = screen.getByTestId('pass');
    expect(labelPassword).toBeInTheDocument();
  });
  it('Testando name', async () => {
    renderWithRouter(<App/>)
  
    const labelPassword = screen.getByTestId('name');
    expect(labelPassword).toBeInTheDocument();
  });
  it('Testando Button', async () => {
    renderWithRouter(<App/>)
  
    const buttonHome = screen.getByRole ('button',
    { name:'Acessar' }
    );
    expect(buttonHome).toBeInTheDocument();

  });
})
