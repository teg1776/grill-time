import React from "react";

function Footer() {
  return (
    <div className="footer">
      <p>
        All information was taken from{" "}
        <a
          href="https://www.weber.com/US/en/help/assets/pdf/GrillingGuide.pdf"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={require("../images/weber.png")} alt="weber" />
        </a>
      </p>
    </div>
  );
}

export default Footer;
