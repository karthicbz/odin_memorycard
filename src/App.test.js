import { findByText, render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import App from './App';
import GameBoard from './components/gameBoard';
import userEvent from '@testing-library/user-event';

describe('test gameboard component', ()=>{
  test.skip('loading text must be shown while fetch', async ()=>{
    render(<App />);
    const loading = await screen.findByText('Loading...');
  })

  test.skip('score initial value must be zero', ()=>{
    render(<App />);
    const score = screen.getByText('Score: 0');
    expect(score.textContent).toBe('Score: 0');
  })

  test.skip('clicking on character should call the fundtion', async ()=>{
    const handleClick = jest.fn();
    const user = userEvent.setup();
    render(<GameBoard> <div onClick={handleClick}></div> </GameBoard>);
    const character = screen.getByTestId("gameboard");
    await user.click(character);
    expect(handleClick).toBeCalledTimes(1);
  })
})
