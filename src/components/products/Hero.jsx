'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const ProductsHero = () => {
  const controls = useAnimation();
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.1 } // Trigger when 50% of the component is visible
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [controls]);

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-[#8A73E8] to-[#FFFFFF] opacity-30"></div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: -30 }} // Start position
        animate={controls}
        transition={{ duration: 0.6, ease: "easeOut" }} // Animation timing
        className="sm:pt-[119px] pt-20 pb-12 text-center text-black"
      >
        <h1 className="font-semibold font-rational xl:text-6xl md:text-5xl sm:text-4xl text-3xl">Product</h1>
        <p className="text-[#777777] font-rational font-normal text-xl my-2">Home {`>>`} Product</p>
        <div className="w-full px-3 md:px-0 flex justify-center">
          <Image
            className="mt-3 md:w-[45%] w-[65%]"
            src="/images/Product.svg"
            alt="centered logo"
            width={100}
            height={100}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProductsHero;
