import './App.css';
import GameBoard from './components/gameBoard';
import PlayInstructions from './components/playInstructions';

function App() {
  return (
    <div className="App">
      <PlayInstructions />
      <GameBoard/>
    </div>
  );
}

export default App;
