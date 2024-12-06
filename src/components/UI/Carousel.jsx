import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"; // Using Heroicons

const TOTAL_PAGES = 4;

export const Carousel = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [direction, setDirection] = useState(0); // 1 for next, -1 for prev

  const nextPage = () => {
    setDirection(1);
    setCurrentPage((prev) => (prev + 1) % TOTAL_PAGES);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentPage((prev) => (prev - 1 + TOTAL_PAGES) % TOTAL_PAGES);
  };

  const bounceVariants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
      scale: 0.9,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 120,
        damping: 12,
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
      scale: 0.9,
    }),
  };

  return (
    <div className="relative w-full h-[60vh] overflow-hidden flex items-center justify-center  rounded-lg">
      {/* Carousel Content */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentPage}
          custom={direction}
          variants={bounceVariants}
          initial="enter"
          animate="center"
          exit="exit"
          className="absolute top-0 left-0 w-full h-full"
        >
          <img
            src="Dell.jpeg"
            alt={`Slide ${currentPage + 1}`}
            className="h-full w-full object-contain rounded-lg"
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevPage}
        className="absolute left-4 z-10 p-4 bg-neutral-800 hover:bg-neutral-700 text-white rounded-full shadow-lg transition flex items-center justify-center"
      >
        <HiChevronLeft size={24} />
      </button>
      <button
        onClick={nextPage}
        className="absolute right-4 z-10 p-4 bg-orange hover:bg-neutral-700 text-white rounded-full shadow-lg transition flex items-center justify-center"
      >
        <HiChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 flex gap-2">
        {Array(TOTAL_PAGES)
          .fill()
          .map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > currentPage ? 1 : -1);
                setCurrentPage(idx);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentPage === idx
                  ? "bg-white scale-125"
                  : "bg-neutral-500 hover:bg-neutral-400"
              }`}
            />
          ))}
      </div>
    </div>
  );
};

export default Carousel;
