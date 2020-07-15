import React from "react";
import Landing from "./components/Landing.jsx";
import Beef from "./components/Beef.jsx";
import Chicken from "./components/Chicken.jsx";
import Seafood from "./components/Seafood.jsx";
import Pork from "./components/Pork.jsx";
import Veggies from "./components/Veggies.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="content">
        <Landing />
        <div className="notLanding">
          <span id="beef"></span>
          <br />
          <Beef />
          <br />
          <span id="poultry"></span>
          <Chicken />
          <span id="seafood"></span>
          <br />
          <Seafood />
          <span id="pork"></span>
          <br />
          <Pork />
          <span id="veg"></span>
          <br />
          <Veggies />
          <br />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
