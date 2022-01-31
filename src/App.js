import './App.css';
import logo from "./images/ironhack-logo-xs.png";
import hamburguer from "./images/menu-top-xs.png";
import Card from './card.js';
import icon1 from './images/icon1.png';
import icon2 from './images/icon2.png';
import icon3 from './images/icon3.png';
import icon4 from './images/icon4.png'; 

function App() {
  return (
    <div className="App">

      <nav className="Nav">
                <img className="App-logo" src={logo} alt="" />
            
                <img src={hamburguer} alt="" />
            </nav>

        <header className="App-header">
            <h1>Say hello to ReactJS</h1>
            <p>You will learn how to use the most popular frontend library, and become a super Ninja developer</p>
            <button className='Awesome-button'>Awesome!</button>
        </header>

        <section className='Card-row'>
            <Card 
              src={icon1}
              title="Components"
              text="React makes it painless to cerate interactive Uls"
            > </Card>
            <Card
              src={icon2}
              title="Components"
              text="Build encapsulated components that manage their state."
            />
            <Card
              src={icon3}
              title="Single-Way"
              text="A set of immutable values are passed to the components."
            />
            <Card
              src={icon4}
              title="JSX"
              text="Statically-typed, design to run on modern broswers."
            />
        </section>

    </div>


  );
}
export default App;
