import React, { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { BsChevronRight } from "react-icons/bs";
import reviews from "./data";

const Reviews = () => {
  const [index, setIndex] = useState(0);

  //   console.log(review);
  const { id, name, job, image, text } = reviews[index];
  const nextSlide = () => {
    setIndex((prev) => {
      let finalIndex = prev + 1;
      if (finalIndex > reviews.length - 1) {
        return (finalIndex = 0);
      }
      return finalIndex;
    });
  };
  const previousSlide = () => {
    setIndex((prev) => {
      let finalIndex = prev - 1;
      if (finalIndex < 0) {
        return (finalIndex = reviews.length - 1);
      }
      return finalIndex;
    });
  };

  const randomSlide = () => {
    let random = Math.floor(Math.random() * reviews.length);
    setIndex(random);
  };
  return (
    <div className="reviews">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>{job}</p>
      <p>{text}</p>
      <div className="btn-container">
        <button onClick={previousSlide}>
          <BsChevronLeft />
        </button>
        <button>
          <BsChevronRight onClick={nextSlide} />
        </button>
      </div>
      <button className="random-btn" onClick={randomSlide}>
        surprise me
      </button>
    </div>
  );
};

export default Reviews;
