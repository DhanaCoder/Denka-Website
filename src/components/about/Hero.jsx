'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const AboutHero = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observedElement = ref.current; // Copy ref.current to a variable

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.5 }
    );

    if (observedElement) {
      observer.observe(observedElement);
    }

    return () => {
      if (observedElement) {
        observer.unobserve(observedElement);
      }
    };
  }, [controls]);

  return (
    <div className="relative" ref={ref}>
      <div className="absolute inset-0 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#8A73E8] to-[#FFFFFF] opacity-30"></div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
        className="sm:pt-[119px] pt-20 pb-12 text-center text-black"
      >
        <h1 className="font-semibold font-rational xl:text-6xl md:text-5xl sm:text-4xl text-3xl">About Us</h1>
        <p className="text-[#777777] font-rational font-normal text-xl my-2">Home {`>>`} About</p>
        <div className="w-full px-3 md:px-0 flex justify-center">
          <Image
            className="mt-3 sm:w-[50%] w-[65%] "
            src="/images/AboutUs.svg"
            alt="centered logo"
            width={916}
            height={182}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default AboutHero;
