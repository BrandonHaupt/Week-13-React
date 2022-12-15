// import logo from './logo.svg';
import './App.css';

// JSX is the HTML and the Function is the Component 
function Heading(){
  return(
    <>
      <h1>Hello World!</h1>
    </>
  )
}


function App(){
  // <></> <--- this is called a Fragment | Allows us to write multiple html elements
  return <>
    <Heading />
  </>
}

export default App;
