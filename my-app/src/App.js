import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Navbar from './Navbar';
import User from './User';
import Counter from './Counter';
import ChangeName from './ChangeName';
import Form from './Form';



let name = "Alparslan";
let surname = "Akbaş"
const customer ={
  name : "Alparslan",
  surname : "Akbaş",
  age : 24,
  city : "Kütahya"
}

function App() {
  return (
    <div className="App">
      <Header
      
      />

      <Navbar
      
      />
      <User
        data = {customer}
      />
     <Counter
     
     />
     <ChangeName
      
     />
     <Form
      
     />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>{name} {surname}</p>
      </header>
    </div>
  );
}

export default App;
