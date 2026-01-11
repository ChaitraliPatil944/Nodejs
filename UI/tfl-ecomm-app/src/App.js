import logo from './logo.svg';
import './App.css';


//JSX code
//means JSX Javascript XML
//jsx allows us to write HTML elements in JavaScript and
// place them in the DOM without any createElement ()
// and/or appendChild() methods.
//VDOM:
//React creates a virtual DOM. When state changes in a component it
// runs a "diffing"algorithm, which identifies what has changed in the
// virtual DoM. The virtual DOM will then update the real DOM only in
// the places where changes have occurred.


var App=() => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
            TFL E-commerce App        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lets get flowers
        </a>
      </header>
    </div>
  );
}

export default App;
