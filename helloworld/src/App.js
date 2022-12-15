// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Board from './components/Board.js'
import Player from './components/Player.js'
import Square from './components/Square.js'


function App(){
  // <></> <--- this is called a Fragment | Allows us to write multiple html elements
  return (<>
      <Header/>
      <div class="playerContainer">
        <Player whichPlayer='X'/>
        <Player whichPlayer='O'/>
      </div>

      <Board/>
  </>)
}

export default App;
