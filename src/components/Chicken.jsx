import React, { useEffect, useState } from "react";
import "../css/chicken.css";

function Chicken() {
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
      case "breast":
        document.getElementById("threeSixOz").disabled = true;
        document.getElementById("fourOz").disabled = true;
        document.getElementById("sixEightOz").disabled = false;
        document.getElementById("tenTwelveLbs").disabled = true;

        document.getElementById("ch-gas").disabled = false;
        document.getElementById("ch-charcoal").disabled = false;
        document.getElementById("ch-electric").disabled = false;

        document
          .getElementById("threeSixOz")
          .parentElement.classList.add("hidden");
        document.getElementById("fourOz").parentElement.classList.add("hidden");
        document
          .getElementById("sixEightOz")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("tenTwelveLbs")
          .parentElement.classList.add("hidden");

        document
          .getElementById("ch-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("ch-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("ch-electric")
          .parentElement.classList.remove("hidden");

        switch (size) {
          case "sixEightOz":
            switch (grill) {
              case "ch-charcoal":
                setGrillTime("14 to 18 min medium heat");
                break;
              case "ch-gas":
                setGrillTime("8 to 12 min medium heat");
                break;
              case "ch-electric":
                setGrillTime("10 to 14 min high heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "thigh":
        document.getElementById("threeSixOz").disabled = true;
        document.getElementById("fourOz").disabled = false;
        document.getElementById("sixEightOz").disabled = true;
        document.getElementById("tenTwelveLbs").disabled = true;

        document.getElementById("ch-gas").disabled = false;
        document.getElementById("ch-charcoal").disabled = false;
        document.getElementById("ch-electric").disabled = true;

        document
          .getElementById("threeSixOz")
          .parentElement.classList.add("hidden");
        document
          .getElementById("fourOz")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("sixEightOz")
          .parentElement.classList.add("hidden");
        document
          .getElementById("tenTwelveLbs")
          .parentElement.classList.add("hidden");

        document
          .getElementById("ch-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("ch-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("ch-electric")
          .parentElement.classList.add("hidden");

        switch (size) {
          case "fourOz":
            switch (grill) {
              case "ch-charcoal":
                setGrillTime("8 to 10 min medium heat");
                break;
              case "ch-gas":
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
      case "pieces":
        document.getElementById("threeSixOz").disabled = false;
        document.getElementById("fourOz").disabled = true;
        document.getElementById("sixEightOz").disabled = true;
        document.getElementById("tenTwelveLbs").disabled = true;

        document.getElementById("ch-gas").disabled = false;
        document.getElementById("ch-charcoal").disabled = false;
        document.getElementById("ch-electric").disabled = false;

        document
          .getElementById("threeSixOz")
          .parentElement.classList.remove("hidden");
        document.getElementById("fourOz").parentElement.classList.add("hidden");
        document
          .getElementById("sixEightOz")
          .parentElement.classList.add("hidden");
        document
          .getElementById("tenTwelveLbs")
          .parentElement.classList.add("hidden");

        document
          .getElementById("ch-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("ch-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("ch-electric")
          .parentElement.classList.remove("hidden");

        switch (size) {
          case "threeSixOz":
            switch (grill) {
              case "ch-charcoal":
                setGrillTime("36 to 40 min low-med heat");
                break;
              case "ch-gas":
                setGrillTime("36 to 40 min low-med heat");
                break;
              case "ch-electric":
                setGrillTime("40 min medium heat");
                break;
              default:
                setGrillTime("");
            }
            break;
          default:
            setGrillTime("");
        }
        break;
      case "turkey":
        document.getElementById("threeSixOz").disabled = true;
        document.getElementById("fourOz").disabled = true;
        document.getElementById("sixEightOz").disabled = true;
        document.getElementById("tenTwelveLbs").disabled = false;

        document.getElementById("ch-gas").disabled = false;
        document.getElementById("ch-charcoal").disabled = false;
        document.getElementById("ch-electric").disabled = true;

        document
          .getElementById("threeSixOz")
          .parentElement.classList.add("hidden");
        document.getElementById("fourOz").parentElement.classList.add("hidden");
        document
          .getElementById("sixEightOz")
          .parentElement.classList.add("hidden");
        document
          .getElementById("tenTwelveLbs")
          .parentElement.classList.remove("hidden");

        document
          .getElementById("ch-charcoal")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("ch-gas")
          .parentElement.classList.remove("hidden");
        document
          .getElementById("ch-electric")
          .parentElement.classList.add("hidden");

        switch (size) {
          case "tenTwelveLbs":
            switch (grill) {
              case "ch-charcoal":
                setGrillTime("2 to 2.5 hours medium heat");
                break;
              case "ch-gas":
                setGrillTime("2 to 2.5 hours medium heat");
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
    <div className="Chicken">
      <h1>Poultry</h1>
      <div className="chickenType">
        <label for="breast" className="btn-radio">
          <input
            type="radio"
            id="breast"
            name="chicken-grp"
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
          <span>Breast</span>
        </label>
        <label for="thigh" className="btn-radio">
          <input
            type="radio"
            id="thigh"
            name="chicken-grp"
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
          <span>Thigh</span>
        </label>
        <label for="pieces" className="btn-radio">
          <input
            type="radio"
            id="pieces"
            name="chicken-grp"
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
          <span>Pieces</span>
        </label>
        <label for="turkey" className="btn-radio">
          <input
            type="radio"
            id="turkey"
            name="chicken-grp"
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
          <span>Turkey</span>
        </label>
      </div>
      {/* Chicken Sizes */}
      <div className="chickenSize">
        <label for="threeSixOz" className="btn-radio hidden">
          <input
            type="radio"
            id="threeSixOz"
            name="ch-size-grp"
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
          <span>3 - 6 oz</span>
        </label>
        <label for="fourOz" className="btn-radio hidden">
          <input
            type="radio"
            id="fourOz"
            name="ch-size-grp"
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
          <span>4 oz</span>
        </label>
        <label for="sixEightOz" className="btn-radio hidden">
          <input
            type="radio"
            id="sixEightOz"
            name="ch-size-grp"
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
          <span>6 - 8 oz</span>
        </label>
        <label for="tenTwelveLbs" className="btn-radio hidden">
          <input
            type="radio"
            id="tenTwelveLbs"
            name="ch-size-grp"
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
          <span>10 - 12 lbs</span>
        </label>
      </div>

      {/* Grill Type */}
      <div className="grillType">
        <label for="ch-gas" className="btn-radio hidden">
          <input
            type="radio"
            id="ch-gas"
            name="ch-grill-grp"
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
        <label for="ch-electric" className="btn-radio hidden">
          <input
            type="radio"
            id="ch-electric"
            name="ch-grill-grp"
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
        <label for="ch-charcoal" className="btn-radio hidden">
          <input
            type="radio"
            id="ch-charcoal"
            name="ch-grill-grp"
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

export default Chicken;
