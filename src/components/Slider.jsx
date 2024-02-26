import React, { useState } from "react";
import {
  BsFillArrowRightCircleFill,
  BsFillArrowLeftCircleFill,
} from "react-icons/bs";

const Slider = ({ images }) => {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(images?.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === images?.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className={`flex transition ease-out duration-40`}
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images?.map((s, index) => (
          <img
            className="rounded-lg min-h-60 md:min-h-72"
            src={s}
            key={index}
          />
        ))}
      </div>

      <div className="absolute top-0 flex items-center justify-between w-full h-full px-4 text-3xl text-blue-200">
        <button onClick={previousSlide}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>
    </div>
  );
};

export default Slider;

/* <Swiper>
{images.map((index, image) => (
  <SwiperSlide key={index}>
    <img src={image} alt="" />
  </SwiperSlide>
))}
</Swiper> */

{
  /* <div className="absolute bottom-0 flex justify-center w-full gap-3 py-4">
        {images?.map((s, i) => {
          return (
            <div
              onClick={() => {
                setCurrent(i);
              }}
              key={"circle" + i}
              className={`rounded-full w-5 h-5 cursor-pointer  ${
                i == current ? "bg-white" : "bg-gray-500"
              }`}
            ></div>
          );
        })}
      </div> */
}
