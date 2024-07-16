import React from "react";

export default function Companies() {
  return (
    <>
      <div className="companies" id="companies">
        <div className="container py-4 ">
          <div className="row g-4  align-items-center justify-content-center  ">
            <div className="col-md-3 ">
              <div className="image">
                <img src="./prologis.png" alt="prologis" className="w-100" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="image">
                <img src="./tower.png" alt="tower" className="w-100" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="image">
                <img src="./equinix.png" alt="equinix" className="w-100" />
              </div>
            </div>
            <div className="col-md-3">
              <div className="image">
                <img src="./realty.png" alt="realty" className="w-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
