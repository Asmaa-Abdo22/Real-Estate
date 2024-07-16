import React from "react";

export default function Header() {
  return (
    <>
    <div className="header-wrapper">
    <nav className="navbar navbar-expand-lg ">
        <div className="container">
          <a className="navbar-brand" href="#">
          <img src="./logo.png" alt="logo" className="navLogo " />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="#residencies">
                  Residencies
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#value">
                  Our Value
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Us
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#started">
                  Get Started
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link anyBtn" href="mailto: name@email.com">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
   
    </>
  );
}
