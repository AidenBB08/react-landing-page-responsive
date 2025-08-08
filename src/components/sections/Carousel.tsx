import { Container } from "../shared/Container";
import { useState } from "react";

const images = [
  'https://images.pexels.com/photos/3616980/pexels-photo-3616980.jpeg',
  'https://images.pexels.com/photos/4829069/pexels-photo-4829069.jpeg',
  'https://images.pexels.com/photos/3259593/pexels-photo-3259593.jpeg',
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Container>
      
      <div className="relative w-full overflow-hidden p-2 rounded-[2.25rem] bg-gradient-to-r from-blue-600 to-violet-600">
        {images.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`w-full rounded-[2.25rem] transition-transform duration-500 h-170 object-cover ${
              i === currentIndex ? "opacity-100" : "opacity-0 absolute top-0 left-0"
            }`}
          />
        ))}
      </div>

      <div className="flex justify-between mt-4">
        <button
          onClick={prevSlide}
           className="py-4 px-6 rounded-3xl bg-box-bg text-black  cursor-pointer hover:bg-violet-50"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
           className="py-4 px-6 rounded-3xl bg-box-bg text-heading-1  cursor-pointer"
        >
          ›
        </button>
      </div>
    </Container>
  );
};
