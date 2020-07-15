import React, { useEffect, useState } from "react";
import "../css/pork.css";

function Pork() {
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
      case "bratwurst":
        document.getElementById("three-oz").disabled = false;
        document.getElementById("pork-one-inch").disabled = true;
        document.getElementById("three-four-lbs").disabled = true;
        document.getElementById("pork-one-lb").disabled = true;

        document.getElementById("pork-gas").disabled = false;
        document.getElementById("pork-charcoal").disabled = false;
        document.getElementById("pork-electric").disabled = false;

        document
          .getElementById("three-oz")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("pork-one-inch")
          .parentElement.classList.add("hidden");
        document
          .getElementById("three-four-lbs")
          .parentElement.classList.add("hidden");
        document
          .getElementById("pork-one-lb")
          .parentElement.classList.add("hidden");

        document
          .getElementById("pork-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("pork-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("pork-electric")
          .parentElement.classList.remove("hidden");

        switch (size) {
          case "three-oz":
            switch (grill) {
              case "pork-charcoal":
                setGrillTime("20 to 25 min low heat");
                break;
              case "pork-gas":
                setGrillTime("20 to 25 min low heat");
                break;
              case "pork-electric":
                setGrillTime("28 to 32 min medium heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "chop":
        document.getElementById("three-oz").disabled = true;
        document.getElementById("pork-one-inch").disabled = false;
        document.getElementById("three-four-lbs").disabled = true;
        document.getElementById("pork-one-lb").disabled = true;

        document.getElementById("pork-gas").disabled = false;
        document.getElementById("pork-charcoal").disabled = false;
        document.getElementById("pork-electric").disabled = false;

        document
          .getElementById("three-oz")
          .parentElement.classList.add("hidden");
        document
          .getElementById("pork-one-inch")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("three-four-lbs")
          .parentElement.classList.add("hidden");
        document
          .getElementById("pork-one-lb")
          .parentElement.classList.add("hidden");

        document
          .getElementById("pork-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("pork-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("pork-electric")
          .parentElement.classList.remove("hidden");

        switch (size) {
          case "pork-one-inch":
            switch (grill) {
              case "pork-charcoal":
                setGrillTime("8 to 10 min med-high heat");
                break;
              case "pork-gas":
                setGrillTime("8 to 10 min med-high heat");
                break;
              case "pork-electric":
                setGrillTime("20 to 30 min medium heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "ribs":
        document.getElementById("three-oz").disabled = true;
        document.getElementById("pork-one-inch").disabled = true;
        document.getElementById("three-four-lbs").disabled = false;
        document.getElementById("pork-one-lb").disabled = true;

        document.getElementById("pork-gas").disabled = false;
        document.getElementById("pork-charcoal").disabled = false;
        document.getElementById("pork-electric").disabled = true;

        document
          .getElementById("three-oz")
          .parentElement.classList.add("hidden");
        document
          .getElementById("pork-one-inch")
          .parentElement.classList.add("hidden");
        document
          .getElementById("three-four-lbs")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("pork-one-lb")
          .parentElement.classList.add("hidden");

        document
          .getElementById("pork-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("pork-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("pork-electric")
          .parentElement.classList.add("hidden");

        switch (size) {
          case "three-four-lbs":
            switch (grill) {
              case "pork-charcoal":
                setGrillTime("1.5 to 2 hrs medium heat");
                break;
              case "pork-gas":
                setGrillTime("1.5 to 2 hrs medium heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "tenderloin":
        document.getElementById("three-oz").disabled = true;
        document.getElementById("pork-one-inch").disabled = true;
        document.getElementById("three-four-lbs").disabled = true;
        document.getElementById("pork-one-lb").disabled = false;

        document.getElementById("pork-gas").disabled = false;
        document.getElementById("pork-charcoal").disabled = false;
        document.getElementById("pork-electric").disabled = true;

        document
          .getElementById("three-oz")
          .parentElement.classList.add("hidden");
        document
          .getElementById("pork-one-inch")
          .parentElement.classList.add("hidden");
        document
          .getElementById("three-four-lbs")
          .parentElement.classList.add("hidden");
        document
          .getElementById("pork-one-lb")
          .parentElement.classList.remove("hidden");

        document
          .getElementById("pork-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("pork-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("pork-electric")
          .parentElement.classList.add("hidden");

        switch (size) {
          case "pork-one-lb":
            switch (grill) {
              case "pork-charcoal":
                setGrillTime("30 min medium heat");
                break;
              case "pork-gas":
                setGrillTime("30 min medium heat");
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
    <div className="Pork">
      <h1>Pork</h1>
      <div className="porkType">
        <label for="bratwurst" className="btn-radio">
          <input
            type="radio"
            id="bratwurst"
            name="pork-grp"
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
          <span>Bratwurst</span>
        </label>
        <label for="chop" className="btn-radio">
          <input
            type="radio"
            id="chop"
            name="pork-grp"
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
          <span>Chop</span>
        </label>
        <label for="ribs" className="btn-radio">
          <input
            type="radio"
            id="ribs"
            name="pork-grp"
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
          <span>Ribs</span>
        </label>
        <label for="tenderloin" className="btn-radio">
          <input
            type="radio"
            id="tenderloin"
            name="pork-grp"
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
          <span>Tenderloin</span>
        </label>
      </div>
      {/* Pork Sizes */}
      <div className="porkSize">
        <label for="three-oz" className="btn-radio hidden">
          <input
            type="radio"
            id="three-oz"
            name="pork-size-grp"
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
          <span>3 oz</span>
        </label>
        <label for="pork-one-inch" className="btn-radio hidden">
          <input
            type="radio"
            id="pork-one-inch"
            name="pork-size-grp"
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
          <span>1 inch</span>
        </label>
        <label for="three-four-lbs" className="btn-radio hidden">
          <input
            type="radio"
            id="three-four-lbs"
            name="pork-size-grp"
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
          <span>3 - 4 lbs</span>
        </label>
        <label for="pork-one-lb" className="btn-radio hidden">
          <input
            type="radio"
            id="pork-one-lb"
            name="pork-size-grp"
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
        <label for="pork-gas" className="btn-radio hidden">
          <input
            type="radio"
            id="pork-gas"
            name="pork-grill-grp"
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
        <label for="pork-electric" className="btn-radio hidden">
          <input
            type="radio"
            id="pork-electric"
            name="pork-grill-grp"
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
        <label for="pork-charcoal" className="btn-radio hidden">
          <input
            type="radio"
            id="pork-charcoal"
            name="pork-grill-grp"
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

export default Pork;
