import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import data from "../../utils/Accordion";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Slide } from "react-awesome-reveal";
export default function Value() {
  return (
    <>
      <div className="value" id="value">
        <div className="container py-5">
          <div className="valueContent d-flex">

            <div className="value-image">
              <Slide duration={1500}>
              <div className="img-Container">
                <img src="./value.png" alt="" className="w-100" />
              </div>
              </Slide>
             

            </div>

            <div className="value-info">
              <Slide direction="right"  duration={1500}>
              <div className="resTitle">
                <p>Our Value</p>
                <h3>Value We Give to You</h3>
              </div>
              <p>
                We always ready to help by providijng the best services for you.
                <br />
                We beleive a good blace to live can make your life better
              </p>
              <Accordion
                className="accordion"
                allowMultipleExpanded={false}
                preExpanded={[0]}
              >
                {data.map((item, index) => {
                  return (
                    <>
                      <AccordionItem
                        className="accordion__item"
                        key={index}
                        uuid={index}
                      >
                        <AccordionItemHeading>
                          <AccordionItemButton className="accordionBtn">
                            <div className="flexColCenter icon">{item.icon}</div>
                            <span className="heading">{item.heading}</span>
                            <MdOutlineArrowDropDown className="icon2"/>
                          </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <p className="detail">{item.detail}</p>
                        </AccordionItemPanel>
                      </AccordionItem>
                    </>
                  );
                })}
              </Accordion>
              </Slide>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
