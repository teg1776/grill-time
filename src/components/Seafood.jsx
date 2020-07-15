import React, { useEffect, useState } from "react";
import "../css/seafood.css";

function Seafood() {
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
      case "salmon":
        document.getElementById("one-half-inch").disabled = false;
        document.getElementById("one-inch").disabled = false;
        document.getElementById("one-half-oz").disabled = true;
        document.getElementById("one-lb").disabled = true;

        document.getElementById("sea-gas").disabled = false;
        document.getElementById("sea-charcoal").disabled = false;
        document.getElementById("sea-electric").disabled = false;

        document
          .getElementById("one-half-inch")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("one-inch")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("one-half-oz")
          .parentElement.classList.add("hidden");
        document.getElementById("one-lb").parentElement.classList.add("hidden");

        document
          .getElementById("sea-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("sea-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("sea-electric")
          .parentElement.classList.remove("hidden");

        switch (size) {
          case "one-half-inch":
            switch (grill) {
              case "sea-charcoal":
                setGrillTime("3 to 5 min medium heat");
                break;
              case "sea-gas":
                setGrillTime("3 to 5 min medium heat");
                break;
              case "sea-electric":
                setGrillTime("8 to 10 min high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          case "one-inch":
            switch (grill) {
              case "sea-charcoal":
                setGrillTime("10 to 12 min medium heat");
                break;
              case "sea-gas":
                setGrillTime("10 to 12 min medium heat");
                break;
              case "sea-electric":
                setGrillTime("10 to 12 min high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "mahi mahi":
        document.getElementById("one-half-inch").disabled = false;
        document.getElementById("one-inch").disabled = false;
        document.getElementById("one-half-oz").disabled = true;
        document.getElementById("one-lb").disabled = true;

        document.getElementById("sea-gas").disabled = false;
        document.getElementById("sea-charcoal").disabled = false;
        document.getElementById("sea-electric").disabled = false;

        document
          .getElementById("one-half-inch")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("one-inch")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("one-half-oz")
          .parentElement.classList.add("hidden");
        document.getElementById("one-lb").parentElement.classList.add("hidden");

        document
          .getElementById("sea-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("sea-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("sea-electric")
          .parentElement.classList.remove("hidden");

        switch (size) {
          case "one-half-inch":
            switch (grill) {
              case "sea-charcoal":
                setGrillTime("3 to 5 min medium heat");
                break;
              case "sea-gas":
                setGrillTime("3 to 5 min medium heat");
                break;
              case "sea-electric":
                setGrillTime("8 to 10 min high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          case "one-inch":
            switch (grill) {
              case "sea-charcoal":
                setGrillTime("10 to 12 min medium heat");
                break;
              case "sea-gas":
                setGrillTime("10 to 12 min medium heat");
                break;
              case "sea-electric":
                setGrillTime("10 to 12 min high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "shrimp":
        document.getElementById("one-half-inch").disabled = true;
        document.getElementById("one-inch").disabled = true;
        document.getElementById("one-half-oz").disabled = false;
        document.getElementById("one-lb").disabled = true;

        document.getElementById("sea-gas").disabled = false;
        document.getElementById("sea-charcoal").disabled = false;
        document.getElementById("sea-electric").disabled = false;

        document
          .getElementById("one-half-inch")
          .parentElement.classList.add("hidden");
        document
          .getElementById("one-inch")
          .parentElement.classList.add("hidden");
        document
          .getElementById("one-half-oz")
          .parentElement.classList.remove("hidden");
        document.getElementById("one-lb").parentElement.classList.add("hidden");

        document
          .getElementById("sea-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("sea-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("sea-electric")
          .parentElement.classList.remove("hidden");

        switch (size) {
          case "one-half-oz":
            switch (grill) {
              case "sea-charcoal":
                setGrillTime("2 to 4 min high heat");
                break;
              case "sea-gas":
                setGrillTime("2 to 4 min high heat");
                break;
              case "sea-electric":
                setGrillTime("2 to 5 min high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "fish":
        document.getElementById("one-half-inch").disabled = true;
        document.getElementById("one-inch").disabled = true;
        document.getElementById("one-half-oz").disabled = true;
        document.getElementById("one-lb").disabled = false;

        document.getElementById("sea-gas").disabled = false;
        document.getElementById("sea-charcoal").disabled = false;
        document.getElementById("sea-electric").disabled = false;

        document
          .getElementById("one-half-inch")
          .parentElement.classList.add("hidden");
        document
          .getElementById("one-inch")
          .parentElement.classList.add("hidden");
        document
          .getElementById("one-half-oz")
          .parentElement.classList.add("hidden");
        document
          .getElementById("one-lb")
          .parentElement.classList.remove("hidden");

        document
          .getElementById("sea-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("sea-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("sea-electric")
          .parentElement.classList.remove("hidden");

        switch (size) {
          case "one-lb":
            switch (grill) {
              case "sea-charcoal":
                setGrillTime("15 to 20 min medium heat");
                break;
              case "sea-gas":
                setGrillTime("15 to 20 min medium heat");
                break;
              case "sea-electric":
                setGrillTime("15 to 20 min medium heat");
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
    <div className="Seafood">
      <h1>Seafood</h1>
      <div className="seafoodType">
        <label for="salmon" className="btn-radio">
          <input
            type="radio"
            id="salmon"
            name="seafood-grp"
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
          <span>Salmon</span>
        </label>
        <label for="mahi mahi" className="btn-radio">
          <input
            type="radio"
            id="mahi mahi"
            name="seafood-grp"
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
          <span>Mahi Mahi</span>
        </label>
        <label for="shrimp" className="btn-radio">
          <input
            type="radio"
            id="shrimp"
            name="seafood-grp"
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
          <span>Shrimp</span>
        </label>
        <label for="fish" className="btn-radio">
          <input
            type="radio"
            id="fish"
            name="seafood-grp"
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
          <span>Whole Fish</span>
        </label>
      </div>
      {/* Seafood Sizes */}
      <div className="seafoodSize">
        <label for="one-half-inch" className="btn-radio hidden">
          <input
            type="radio"
            id="one-half-inch"
            name="sea-size-grp"
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
        <label for="one-inch" className="btn-radio hidden">
          <input
            type="radio"
            id="one-inch"
            name="sea-size-grp"
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
          <span>1 - 1.5 inches</span>
        </label>
        <label for="one-half-oz" className="btn-radio hidden">
          <input
            type="radio"
            id="one-half-oz"
            name="sea-size-grp"
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
          <span>1.5 oz</span>
        </label>
        <label for="one-lb" className="btn-radio hidden">
          <input
            type="radio"
            id="one-lb"
            name="sea-size-grp"
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
          <span>1 lb</span>
        </label>
      </div>

      {/* Grill Type */}
      <div className="grillType">
        <label for="sea-gas" className="btn-radio hidden">
          <input
            type="radio"
            id="sea-gas"
            name="sea-grill-grp"
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
        <label for="sea-electric" className="btn-radio hidden">
          <input
            type="radio"
            id="sea-electric"
            name="sea-grill-grp"
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
        <label for="sea-charcoal" className="btn-radio hidden">
          <input
            type="radio"
            id="sea-charcoal"
            name="sea-grill-grp"
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

export default Seafood;
