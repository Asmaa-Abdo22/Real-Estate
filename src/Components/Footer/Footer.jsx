import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container">
        <div className="fotter-wrapper">
          <div className="icons ">
            <img src="./logo2.png" alt="logo2" />
            <p>
              Our vision is to make all people ,<br />
              the best place to live for them.
            </p>
          </div>
          <div className="infor">
            <h5>Information</h5>
            <p>145 New York, FL 5467, USA</p>
            <ul>
              <li>Property</li>
              <li>Services</li>
              <li>Product</li>
              <li>About Us</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
