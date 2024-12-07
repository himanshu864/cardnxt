import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "./ImageSlider.css";

// Time at which image slides automatically
const TIMER = 3000;

const ImageSlider = ({ images }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(TIMER);

  const N = images.length;

  /*
  -1 for prev slide
  -2 for next slide
   i for custom slide
  */
  const setImageSlider = (index) => {
    if (index === -1) setImageIndex((i) => (i + N - 1) % N);
    else if (index === -2) setImageIndex((i) => (i + 1) % N);
    else setImageIndex(index);
    setTimeLeft(TIMER);
  };

  // Automatic Sliding
  if (timeLeft <= 0) {
    setImageSlider(-2);
    setTimeLeft(TIMER);
  }

  // Timer running out
  useEffect(() => {
    const interval = setInterval(() => setTimeLeft((time) => time - 100), 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="image-slider">
      {/* Image Slider */}
      <div
        className="image-slider-wrapper"
        style={{ transform: `translateX(-${imageIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slider image ${index + 1}`}
            className="slider-image"
          />
        ))}
      </div>

      {/* Prev Button */}
      <button
        onClick={() => setImageSlider(-1)}
        className="slider-button slider-button-left"
      >
        <ChevronLeft />
      </button>

      {/* Next Button */}
      <button
        onClick={() => setImageSlider(-2)}
        className="slider-button slider-button-right"
      >
        <ChevronRight />
      </button>

      {/* Slider Dots */}
      <div className="slider-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setImageSlider(index)}
            className={`slider-dot ${index === imageIndex ? "active" : ""}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default ImageSlider;
