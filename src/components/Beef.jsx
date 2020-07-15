import React, { useEffect, useState } from "react";
import "../css/beef.css";

function Beef() {
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
      case "steak":
        document.getElementById("threeFourths").disabled = false;
        document.getElementById("oneInch").disabled = false;
        document.getElementById("twoInch").disabled = false;
        document.getElementById("34lbs").disabled = true;

        document.getElementById("gas").disabled = false;
        document.getElementById("charcoal").disabled = false;
        document.getElementById("electric").disabled = false;

        document
          .getElementById("charcoal")
          .parentElement.classList.remove("hidden");
        document.getElementById("gas").parentElement.classList.remove("hidden");
        document
          .getElementById("electric")
          .parentElement.classList.remove("hidden");

        document
          .getElementById("threeFourths")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("oneInch")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("twoInch")
          .parentElement.classList.remove("hidden");
        // document
        //   .getElementById("34lbs")
        //   .parentElement.classList.add("hidden");
        document.getElementById("34lbs").parentElement.classList.add("hidden");

        switch (size) {
          case "threeFourths":
            switch (grill) {
              case "charcoal":
                setGrillTime("4 to 6 min high heat");
                break;
              case "gas":
                setGrillTime("4 to 6 min high heat");
                break;
              case "electric":
                setGrillTime("10 to 14 min high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          case "oneInch":
            switch (grill) {
              case "charcoal":
                setGrillTime("6 to 8 min high heat");
                break;
              case "gas":
                setGrillTime("6 to 8 min high heat");
                break;
              case "electric":
                setGrillTime("14 to 16 min high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          case "twoInch":
            switch (grill) {
              case "charcoal":
                setGrillTime("14 to 18 min med-high heat");
                break;
              case "gas":
                setGrillTime("14 to 18 min med-high heat");
                break;
              case "electric":
                setGrillTime("18 to 20 min high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "flank":
        document.getElementById("oneInch").disabled = true;
        document
          .getElementById("oneInch")
          .parentElement.classList.add("hidden");
        document.getElementById("twoInch").disabled = true;

        document
          .getElementById("twoInch")
          .parentElement.classList.add("hidden");

        document.getElementById("34lbs").disabled = true;
        document.getElementById("34lbs").parentElement.classList.add("hidden");
        document.getElementById("electric").disabled = true;
        document
          .getElementById("electric")
          .parentElement.classList.add("hidden");
        document.getElementById("threeFourths").disabled = false;
        document
          .getElementById("threeFourths")
          .parentElement.classList.remove("hidden");
        document.getElementById("gas").disabled = false;
        document.getElementById("charcoal").disabled = false;
        document.getElementById("gas").parentElement.classList.remove("hidden");
        document
          .getElementById("charcoal")
          .parentElement.classList.remove("hidden");
        switch (size) {
          case "threeFourths":
            switch (grill) {
              case "charcoal":
                setGrillTime("8 to 10 min medium heat");
                break;
              case "gas":
                setGrillTime("8 to 10 min medium heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "patty":
        document.getElementById("oneInch").disabled = true;
        document
          .getElementById("oneInch")
          .parentElement.classList.add("hidden");
        document.getElementById("twoInch").disabled = true;

        document
          .getElementById("twoInch")
          .parentElement.classList.add("hidden");

        document.getElementById("34lbs").disabled = true;
        document.getElementById("34lbs").parentElement.classList.add("hidden");
        document.getElementById("electric").disabled = false;
        document
          .getElementById("electric")
          .parentElement.classList.remove("hidden");
        document.getElementById("threeFourths").disabled = false;
        document
          .getElementById("threeFourths")
          .parentElement.classList.remove("hidden");
        document.getElementById("gas").disabled = false;
        document.getElementById("charcoal").disabled = false;
        document.getElementById("gas").parentElement.classList.remove("hidden");
        document
          .getElementById("charcoal")
          .parentElement.classList.remove("hidden");
        switch (size) {
          case "threeFourths":
            switch (grill) {
              case "charcoal":
                setGrillTime("8 to 10 min medium heat");
                break;
              case "gas":
                setGrillTime("8 to 10 min medium heat");
                break;
              case "electric":
                setGrillTime("12 to 16 min high heat");
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
        document.getElementById("threeFourths").disabled = true;
        document.getElementById("oneInch").disabled = true;
        document.getElementById("twoInch").disabled = true;
        document.getElementById("34lbs").disabled = false;

        document.getElementById("gas").disabled = false;
        document.getElementById("charcoal").disabled = false;
        document.getElementById("electric").disabled = true;

        document
          .getElementById("charcoal")
          .parentElement.classList.remove("hidden");
        document.getElementById("gas").parentElement.classList.remove("hidden");
        document
          .getElementById("electric")
          .parentElement.classList.add("hidden");

        document
          .getElementById("threeFourths")
          .parentElement.classList.add("hidden");
        document
          .getElementById("oneInch")
          .parentElement.classList.add("hidden");
        document
          .getElementById("twoInch")
          .parentElement.classList.add("hidden");
        document
          .getElementById("34lbs")
          .parentElement.classList.remove("hidden");
        switch (size) {
          case "34lbs":
            switch (grill) {
              case "charcoal":
                setGrillTime("45 to 60 min medium heat");
                break;
              case "gas":
                setGrillTime("45 to 60 min medium heat");
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
    <div className="Beef">
      <h1>Beef</h1>
      <div className="beefType">
        <label for="steak" className="btn-radio">
          <input
            type="radio"
            id="steak"
            name="radio-grp"
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
          <span>Steak</span>
        </label>
        <label for="flank" className="btn-radio">
          <input
            type="radio"
            id="flank"
            name="radio-grp"
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
          <span>Flank</span>
        </label>
        <label for="patty" className="btn-radio">
          <input
            type="radio"
            id="patty"
            name="radio-grp"
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
          <span>Patty</span>
        </label>
        <label for="tenderloin" className="btn-radio">
          <input
            type="radio"
            id="tenderloin"
            name="radio-grp"
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
      {/* Beef Sizes */}
      <div className="beefSize">
        <label for="threeFourths" className="btn-radio hidden">
          <input
            type="radio"
            id="threeFourths"
            name="size-grp"
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
          <span>3/4 inch</span>
        </label>
        <label for="oneInch" className="btn-radio hidden">
          <input
            type="radio"
            id="oneInch"
            name="size-grp"
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
        <label for="twoInch" className="btn-radio hidden">
          <input
            type="radio"
            id="twoInch"
            name="size-grp"
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
          <span>2 inches</span>
        </label>
        <label for="34lbs" className="btn-radio hidden">
          <input
            type="radio"
            id="34lbs"
            name="size-grp"
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
      </div>

      {/* Grill Type */}
      <div className="grillType">
        <label for="gas" className="btn-radio hidden">
          <input
            type="radio"
            id="gas"
            name="grill-grp"
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
        <label for="electric" className="btn-radio hidden">
          <input
            type="radio"
            id="electric"
            name="grill-grp"
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
        <label for="charcoal" className="btn-radio hidden">
          <input
            type="radio"
            id="charcoal"
            name="grill-grp"
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

export default Beef;
