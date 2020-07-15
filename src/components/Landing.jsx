import React from "react";

function Landing({ handleMeat }) {
  return (
    <div className="landing">
      <div className="landingContent">
        <img
          src={require("../images/grill.png")}
          className="grill"
          alt="grill-logo"
        />
        <h3>Calculate Grill Time</h3>
        <div className="dropdown">
          <button className="dropbtn">Choose Your Meat</button>
          <div className="dropdown-content">
            <div className="meats">
              <a id="one" href="#beef">
                Beef
              </a>
              <a id="two" href="#poultry">
                Poultry
              </a>
              <a id="three" href="#seafood">
                Seafood
              </a>
              <a id="four" href="#pork">
                Pork
              </a>
              <a id="six" href="#veg">
                Veggies
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
