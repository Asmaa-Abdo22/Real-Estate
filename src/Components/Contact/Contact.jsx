import React from "react";
import { Slide } from "react-awesome-reveal";

export default function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <div className="container py-5">
          <div className="parent">
            <div className="leftChild">
              <Slide  duration={1500}>
              <div className="resTitle">
                <p>Our Contact Us</p>
                <h3>Easy to contact us</h3>
              </div>
              <p className="greyy">
                We always ready to help by providijng the best services for you.
                We beleive a good <br /> blace to live can make your life better
              </p>
              <div className="callMethods">
                <div className="callItem">
                  <div className="img">
                    <span>
                      <i className="fa-solid fa-phone fa-fw"></i>
                    </span>
                    <div className="info">
                      <h4>call</h4>
                      <p className="num">021 123 145 14</p>
                    </div>
                  </div>
                  <button>Call Now</button>
                </div>
                <div className="callItem">
                  <div className="img">
                    <span>
                      <i className="fa-solid fa-comment-dots fa-fw"></i>
                    </span>
                    <div className="info">
                      <h4>Chat</h4>
                      <p className="greyy">021 123 145 14</p>
                    </div>
                  </div>
                  <button>Chat Now</button>
                </div>
                <div className="callItem">
                  <div className="img">
                    <span>
                      <i className="fa-solid fa-phone fa-fw"></i>
                    </span>
                    <div className="info">
                      <h4>Video Call</h4>
                      <p className="greyy">021 123 145 14</p>
                    </div>
                  </div>
                  <button>Video Call Now</button>
                </div>
                <div className="callItem">
                  <div className="img">
                    <span>
                      <i className="fa-solid fa-message fa-fw"></i>
                    </span>
                    <div className="info">
                      <h4>Message</h4>
                      <p className="greyy">021 123 145 14</p>
                    </div>
                  </div>
                  <button>Message Now</button>
                </div>
              </div>
              </Slide>
            

            </div>

            <div className="rightChild">
              <Slide direction="right"  duration={1500}>
              <div className="image-Container">
                <img src="./contact.jpg" alt="contact" />
              </div>
              </Slide>
             
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
