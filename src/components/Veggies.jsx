import React, { useEffect, useState } from "react";
import "../css/veg.css";

function Veggies() {
  const [grillTime, setGrillTime] = useState(0);
  const [meat, setMeat] = useState(null);
  const [size, setSize] = useState(null);
  const [grill, setGrill] = useState(null);

  const handleMeat = (e) => {
    setMeat(e.target.id);
  };

  const handleSize = (e) => {
    console.log("wtf");
    setSize(e.target.id);
  };

  const handleGrill = (e) => {
    setGrill(e.target.id);
  };

  useEffect(() => {
    console.log(meat, size, grill);

    switch (meat) {
      case "asparagus":
        document.getElementById("veg-half-inch").disabled = false;
        document.getElementById("husked").disabled = true;
        document.getElementById("halved").disabled = true;
        document.getElementById("whole").disabled = true;

        document.getElementById("veg-gas").disabled = false;
        document.getElementById("veg-charcoal").disabled = false;
        document.getElementById("veg-electric").disabled = false;

        document
          .getElementById("veg-half-inch")
          .parentElement.classList.remove("hidden");
        document.getElementById("husked").parentElement.classList.add("hidden");
        document.getElementById("halved").parentElement.classList.add("hidden");
        document.getElementById("whole").parentElement.classList.add("hidden");

        document
          .getElementById("veg-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("veg-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("veg-electric")
          .parentElement.classList.remove("hidden");

        switch (size) {
          case "veg-half-inch":
            switch (grill) {
              case "veg-charcoal":
                setGrillTime("6 to 8 min medium heat");
                break;
              case "veg-gas":
                setGrillTime("6 to 8 min medium heat");
                break;
              case "veg-electric":
                setGrillTime("8 to 10 min high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "corn":
        document.getElementById("veg-half-inch").disabled = true;
        document.getElementById("husked").disabled = false;
        document.getElementById("halved").disabled = true;
        document.getElementById("whole").disabled = true;

        document.getElementById("veg-gas").disabled = false;
        document.getElementById("veg-charcoal").disabled = false;
        document.getElementById("veg-electric").disabled = false;

        document
          .getElementById("veg-half-inch")
          .parentElement.classList.add("hidden");
        document
          .getElementById("husked")
          .parentElement.classList.remove("hidden");
        document.getElementById("halved").parentElement.classList.add("hidden");
        document.getElementById("whole").parentElement.classList.add("hidden");

        document
          .getElementById("veg-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("veg-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("veg-electric")
          .parentElement.classList.remove("hidden");

        switch (size) {
          case "husked":
            switch (grill) {
              case "veg-charcoal":
                setGrillTime("10 to 15 min medium heat");
                break;
              case "veg-gas":
                setGrillTime("10 to 15 min medium heat");
                break;
              case "veg-electric":
                setGrillTime("12 to 14 min high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "onion":
        document.getElementById("veg-half-inch").disabled = true;
        document.getElementById("husked").disabled = true;
        document.getElementById("halved").disabled = false;
        document.getElementById("whole").disabled = true;

        document.getElementById("veg-gas").disabled = false;
        document.getElementById("veg-charcoal").disabled = false;
        document.getElementById("veg-electric").disabled = true;

        document
          .getElementById("veg-half-inch")
          .parentElement.classList.add("hidden");
        document.getElementById("husked").parentElement.classList.add("hidden");
        document
          .getElementById("halved")
          .parentElement.classList.remove("hidden");
        document.getElementById("whole").parentElement.classList.add("hidden");

        document
          .getElementById("veg-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("veg-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("veg-electric")
          .parentElement.classList.add("hidden");

        switch (size) {
          case "halved":
            switch (grill) {
              case "veg-charcoal":
                setGrillTime("35 to 40 min indirect high heat");
                break;
              case "veg-gas":
                setGrillTime("35 to 40 min indirect high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "potato":
        document.getElementById("veg-half-inch").disabled = true;
        document.getElementById("husked").disabled = true;
        document.getElementById("halved").disabled = true;
        document.getElementById("whole").disabled = false;

        document.getElementById("veg-gas").disabled = false;
        document.getElementById("veg-charcoal").disabled = false;
        document.getElementById("veg-electric").disabled = true;

        document
          .getElementById("veg-half-inch")
          .parentElement.classList.add("hidden");
        document.getElementById("husked").parentElement.classList.add("hidden");
        document.getElementById("halved").parentElement.classList.add("hidden");
        document
          .getElementById("whole")
          .parentElement.classList.remove("hidden");

        document
          .getElementById("veg-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("veg-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("veg-electric")
          .parentElement.classList.add("hidden");

        switch (size) {
          case "whole":
            switch (grill) {
              case "veg-charcoal":
                setGrillTime("45 to 60 min indirect medium heat");
                break;
              case "veg-gas":
                setGrillTime("45 to 60 min indirect medium heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      default:
        setGrillTime("");
    }
  }, [meat, size, grill]);

  return (
    <div className="Veg">
      <h1>Veggies</h1>
      <div className="vegType">
        <label for="asparagus" className="btn-radio">
          <input
            type="radio"
            id="asparagus"
            name="veg-grp"
            onClick={(e) => handleMeat(e)}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5"></circle>
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            ></path>
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            ></path>
          </svg>
          <span>Asparagus</span>
        </label>
        <label for="corn" className="btn-radio">
          <input
            type="radio"
            id="corn"
            name="veg-grp"
            onClick={(e) => handleMeat(e)}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5"></circle>
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            ></path>
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            ></path>
          </svg>
          <span>Corn</span>
        </label>
        <label for="onion" className="btn-radio">
          <input
            type="radio"
            id="onion"
            name="veg-grp"
            onClick={(e) => handleMeat(e)}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5"></circle>
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            ></path>
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            ></path>
          </svg>
          <span>Onion</span>
        </label>
        <label for="potato" className="btn-radio">
          <input
            type="radio"
            id="potato"
            name="veg-grp"
            onClick={(e) => handleMeat(e)}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5"></circle>
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            ></path>
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            ></path>
          </svg>
          <span>Potato</span>
        </label>
      </div>
      {/* Veggie Sizes */}
      <div className="vegSize">
        <label for="veg-half-inch" className="btn-radio hidden">
          <input
            type="radio"
            id="veg-half-inch"
            name="veg-size-grp"
            // disabled
            onClick={(e) => handleSize(e)}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5"></circle>
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            ></path>
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            ></path>
          </svg>
          <span>1/2 inch</span>
        </label>
        <label for="husked" className="btn-radio hidden">
          <input
            type="radio"
            id="husked"
            name="veg-size-grp"
            // disabled
            onClick={(e) => handleSize(e)}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5"></circle>
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            ></path>
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            ></path>
          </svg>
          <span>Husked</span>
        </label>
        <label for="halved" className="btn-radio hidden">
          <input
            type="radio"
            id="halved"
            name="veg-size-grp"
            // disabled
            onClick={(e) => handleSize(e)}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5"></circle>
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            ></path>
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            ></path>
          </svg>
          <span>Halved</span>
        </label>
        <label for="whole" className="btn-radio hidden">
          <input
            type="radio"
            id="whole"
            name="veg-size-grp"
            // disabled
            onClick={(e) => handleSize(e)}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5"></circle>
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            ></path>
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            ></path>
          </svg>
          <span>Whole</span>
        </label>
      </div>

      {/* Grill Type */}
      <div className="grillType">
        <label for="veg-gas" className="btn-radio hidden">
          <input
            type="radio"
            id="veg-gas"
            name="veg-grill-grp"
            // disabled
            onClick={(e) => handleGrill(e)}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5"></circle>
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            ></path>
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            ></path>
          </svg>
          <span>Gas</span>
        </label>
        <label for="veg-electric" className="btn-radio hidden">
          <input
            type="radio"
            id="veg-electric"
            name="veg-grill-grp"
            // disabled
            onClick={(e) => handleGrill(e)}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5"></circle>
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            ></path>
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            ></path>
          </svg>
          <span>Electric</span>
        </label>
        <label for="veg-charcoal" className="btn-radio hidden">
          <input
            type="radio"
            id="veg-charcoal"
            name="veg-grill-grp"
            // disabled
            onClick={(e) => handleGrill(e)}
          />
          <svg width="20px" height="20px" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="5"></circle>
            <path
              d="M10,7 C8.34314575,7 7,8.34314575 7,10 C7,11.6568542 8.34314575,13 10,13 C11.6568542,13 13,11.6568542 13,10 C13,8.34314575 11.6568542,7 10,7 Z"
              className="inner"
            ></path>
            <path
              d="M10,1 L10,1 L10,1 C14.9705627,1 19,5.02943725 19,10 L19,10 L19,10 C19,14.9705627 14.9705627,19 10,19 L10,19 L10,19 C5.02943725,19 1,14.9705627 1,10 L1,10 L1,10 C1,5.02943725 5.02943725,1 10,1 L10,1 Z"
              className="outer"
            ></path>
          </svg>
          <span>Charcoal</span>
        </label>
      </div>

      {/* Grill Time Calculation */}

      <div className="grillTime">
        <h2>
          Approximate <br /> Grilling <br />
          <span>Time</span>
        </h2>
        <p>{grillTime}</p>
      </div>
    </div>
  );
}

export default Veggies;
