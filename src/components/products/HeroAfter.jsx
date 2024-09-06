"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import circle from '@/assets/circle-g.png'
import denka from '@/assets/denka.svg'
import img from '@/assets/video-img2.png'


const HeroAfter = () => {
  const router = useRouter();

  const handleAddToCart = () => {
    router.push("/products/cart");
  };

  return (
    <>
      <div className="flex justify-center flex-col lg:px-12 md:px-8 px-4 items-center h-full w-full  relative ">
        <div className="absolute top-0 left-1/2 w-[80%] transform -translate-x-1/2">
          <Image alt="" src={denka} className=" w-full h-full" />
        </div>
        <Image alt="" src={circle} />
        <motion.img
          className="w-[30%] absolute top-[28%] left-[35%] transform -translate-x-1/2 -translate-y-1/2 -rotate-45"
          src="/images/card.png"
          alt="logo"
          width={100}
          height={100}
          animate={{ rotate: 360 }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        />
        <div className="w-full h-full relative">
          <div className="flex items-center sm:w-auto sm:h-auto w-full lg:bottom-20 sm:bottom-10 bottom-0 absolute left-1/2 transform  -translate-x-1/2  flex-col gap-4 ">
            <h1 className="lg:text-4xl md:text-3xl font-rational sm:text-2xl text-lg sm:leading-normal leading-4 font-semibold text-center"> Denka®<br /> Platinum</h1>
            <button
              className="rounded-full hover:shadow-xl hover:scale-105 sm:w-full w-[30%] md:text-lg sm:text-sm text-[10px] bg-gradient-to-r from-[#372DA7] to-[#9b8cd6]  text-white sm:py-3 py-2 lg:px-8 md:px-6 px-3 mt-2"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
        {/* <div className="bg-[#D9D9D91A] p-4 w-[91%]" >
          <div className="flex flex-col items-start gap-6">
            <div className="flex items-start gap-10">
              <h1 className="text-4xl font-bold w-[45%]">Inca Platinum: Your Premier Energy-Saving Solution</h1>
              <h1 className="text-2xl font-semibold "> Technical Specifications</h1>
            </div>
            <p className="text-[#777777] w-[50%]">Inca Platinum is a top-tier product designed to revolutionize your energy consumption.
              Built on solid engineering principles, Inca Platinum offers exceptional quality and provides
              long-term benefits across residential, commercial, and industrial sectors. With its
              advanced technology, Inca Platinum not only reduces energy consumption but also enhances
              the lifespan of your electrical systems.</p>
          </div>

          <Image alt="" className="mt-6" src={img} />
        </div> */}
      </div>
    </>
  );
};

export default HeroAfter;
