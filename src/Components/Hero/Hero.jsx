import React from "react";
import CountUp from "react-countup";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <>
      <div className="hero-wrapper pt-5  ">
        <div className="white-blur"></div>
        <div className="container  ">
          <div className="row">
            <div className="col-md-6">
              <div className="hero-left">
                <div className="hero-title">
                  <div className="orangeCircle"></div>
                  <motion.h1
                    initial={{ y: "2rem", opacity: 0 }}
                    animate={{ y: 0, opacity: 2 }}
                    transition={{
                      duration: 2,
                      type: "tween",
                    }}
                  >
                    Discover <br /> Most Suitable <br /> Property
                  </motion.h1>
                </div>

                <p>
                  Find a variety of properties that suit you very easilty <br />{" "}
                  Forget all difficulties in finding a residence for you
                </p>
                <div className="search-bar d-flex">
                  <i className="fa-solid fa-location-dot"></i>
                  <input type="text" className="form-control  py-3 m-auto" />
                  <button className="anyBtn">Search</button>
                </div>
                <div className="stats d-flex py-5 w-75 m-auto ">
                  <div className="first">
                    <span>
                      <CountUp start={8000} end={9000} duration={4} />
                      <span className="goldy">+</span>
                    </span>
                    <p>Premium Product</p>
                  </div>
                  <div className="scnd">
                    <span>
                      <CountUp start={1950} end={2000} duration={4} />
                      <span className="goldy">+</span>
                    </span>
                    <p>Happy Customer</p>
                  </div>
                  <div className="third">
                    <span>
                      <CountUp end={28} />
                      <span className="goldy">+</span>
                    </span>
                    <p>Awards Winning</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ---------IMAGE------- */}
            <div className="col-md-6 ">
              <motion.div
                initial={{ x: "7rem", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 2,
                  type: "tween",
                }}
                className="hero-right hero-img"
              >
                <img
                  src="./hero-image.png"
                  alt="hero-image"
                  className="w-100"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
