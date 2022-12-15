// import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js'
import Board from './components/Board.js'
import Player from './components/Player.js'


function App(){
  // <></> <--- this is called a Fragment | Allows us to write multiple html elements
  return (<>
      <h1>React Tac Toe</h1>
      <Header/>
      <Board/>
      <Player whichPlayer='x'/>
      <Player whichPlayer='o'/>
    </>
  )
}

export default App;
