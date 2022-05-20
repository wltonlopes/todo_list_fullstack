import {screen} from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import MainTodo from '../pages/MainTodo';

describe('Testando o componentes da MainTodo', ()=>{
  it('CardGroup', async () => {
    renderWithRouter(<MainTodo/>)

    const cardGroup = screen.getByTestId("cardGroup");
    expect(cardGroup).toBeInTheDocument();
  });
})
