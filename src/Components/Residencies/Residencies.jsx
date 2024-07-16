import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utils/Slider.json";
import { sliderSettings } from "../../utils/Common";
export default function Residencies() {
  return (
    <>
      <section className="r-wrapper" id="residencies">
        <div className="container py-5 position-relative">
          <div className="resTitle">
            <p>Best Choices</p>
            <h3>Popular Residencies</h3>
          </div>
          <Swiper className="resSwiper py-5" {...sliderSettings}>
            <SliderButtons />
            {data.map((card, index) => {
              return (
                <>
                  <SwiperSlide key={index}>
                    <div className="coly">
                      <img src={card.image} alt={card.name} className="w-100" />
                      <p>
                        <span className="orangeClr">$</span> {card.price}
                      </p>
                      <h4>{card.name}</h4>
                      <p>{card.detail}</p>
                    </div>
                  </SwiperSlide>
                </>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export function SliderButtons() {
  const swiper = useSwiper();
  return (
    <>
      <div className="r-button">
        <button onClick={() => swiper.slidePrev()}>
        <i className="fa-solid fa-chevron-left"></i>
        </button>
        <button onClick={() => swiper.slideNext()}>
        <i className="fa-solid fa-chevron-right"></i>
        </button>
      </div>
    </>
  );
}
