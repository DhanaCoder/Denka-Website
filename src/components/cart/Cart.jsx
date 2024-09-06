"use client";

import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, useAnimation } from "framer-motion";

const Cart = () => {
  const router = useRouter();

  const handleAddToProceed = () => {
    router.push("/products/payment");
  };

  const controlsGrid = useAnimation();
  const controlsCartTotal = useAnimation();

  const refGrid = useRef(null);
  const refCartTotal = useRef(null);

  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const observerGrid = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsGrid.start({ opacity: 1, x: 0 });
        }
      },
      { threshold: 0.1 }
    );

    const observerCartTotal = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsCartTotal.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.1 }
    );

    if (refGrid.current) {
      observerGrid.observe(refGrid.current);
    }

    if (refCartTotal.current) {
      observerCartTotal.observe(refCartTotal.current);
    }

    return () => {
      if (refGrid.current) {
        observerGrid.unobserve(refGrid.current);
      }

      if (refCartTotal.current) {
        observerCartTotal.unobserve(refCartTotal.current);
      }
    };
  }, [controlsGrid, controlsCartTotal]);

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="mt-20 w-full pb-64 text-black">
      <div className="px-4 lg:px-24 font-raleway">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">
          Cart <span className="ml-2 text-sm md:text-base text-gray">(3 Products)</span>
        </h1>
        <motion.div
          ref={refGrid}
          initial={{ opacity: 0, x: -100 }}
          animate={controlsGrid}
          transition={{ duration: 0.8 }}
          className="flex md:flex-row flex-col items-start gap-4 mt-10"
        >
          <div className="col-span-2 md:w-[65%] w-full rounded-lg py-8 sm:px-5 px-4 md:px-6 shadow-md">
            <div className="flex items-center gap-4 pb-4">
              <input className="scale-110" type="checkbox" />
              <p className="text-base md:text-lg font-medium">Denks Platanium card</p>
            </div>
            <hr />
            <div
              style={{ backgroundColor: "rgba(138, 115, 232, 0.2)" }}
              className="px-4 py-2 rounded-lg text-base md:text-lg cursor-pointer w-full text-gray-500 flex justify-between mt-4"
            >
              <h1 className="capitalize">Add more products</h1>
              <div className="flex items-center gap-1 text-[#8A73E8]">
                <span>+</span>
                <p>Add</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mt-5 md:mt-6 justify-between">
              <div className="flex items-center gap-4 md:gap-6">
                <div>
                  <input className="scale-125" type="checkbox" />
                </div>
                <div className="w-20 h-20 flex justify-center items-center shadow-md rounded-md">
                  <Image
                    className="rotate-45"
                    src="/images/card.png"
                    alt="centered logo"
                    width={40}
                    height={40}
                  />
                </div>
                <div className="flex flex-col">
                  <p className="sm:text-base text-sm md:text-lg font-medium">Denks Platanium card</p>
                  <div className="flex gap-2">
                    <p className="w-8 h-4 mt-1 bg-red-200 rounded flex justify-center items-center text-xs text-red-600">
                      10%
                    </p>
                    <p className="text-gray-500 line-through">Rs 345.000</p>
                  </div>
                  <p className="text-black mt-1">Rs 345.000</p>
                </div>
              </div>
              <div className="mt-4 md:mt-0 flex md:flex-col w-full md:w-32 justify-between items-center">
                <div className="flex items-center justify-center w-28 gap-4 border rounded-full p-1">
                  <div
                    onClick={handleDecrement}
                    className="bg-slate-200 rounded-full text-black text-lg flex justify-center items-center p-1 w-8 h-8 cursor-pointer"
                  >
                    -
                  </div>
                  <p className="text-sm">{quantity}</p>
                  <div
                    onClick={handleIncrement}
                    className="bg-slate-200 rounded-full text-black text-lg flex justify-center items-center p-1 w-8 h-8 cursor-pointer"
                  >
                    +
                  </div>
                </div>
                <div className="flex justify-end md:justify-between w-24 gap-2">
                  <div className="bg-green-100 rounded-lg text-black text-lg flex justify-center items-center p-1 w-8 h-8">
                    <Image
                      className="p-1"
                      src="/images/edit.png"
                      alt="edit icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div className="bg-red-100 rounded-lg text-black text-lg flex justify-center items-center p-1 w-8 h-8">
                    <Image
                      className="p-1"
                      src="/images/delete.png"
                      alt="delete icon"
                      width={24}
                      height={24}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <motion.div
            ref={refCartTotal}
            initial={{ opacity: 0, y: 100 }}
            animate={controlsCartTotal}
            transition={{ duration: 0.8 }}
            className="shadow-md px-4 rounded-lg md:w-[35%] w-full"
          >
            <h1 className="py-3 text-xl md:text-2xl lg:text-3xl font-semibold">Cart Total</h1>
            <div className="rounded-full p-1 flex border ">
              <input
                className="outline-none w-full rounded-full px-2 border-none text-sm md:text-base"
                type="text"
                placeholder="Enter your promo code"
                required
              />
              <button className="rounded-full  bg-[#8A73E8] px-3 md:px-4 py-1 md:py-2 text-white text-sm md:text-base">
                Enter
              </button>
            </div>
            <div className="flex flex-col  mt-6 md:mt-8 pb-6 md:pb-8 gap-2 md:gap-4">
              <div className="flex justify-between text-sm md:text-base">
                <p className="text-gray font-medium">Price</p>
                <p className="font-medium">$66.00</p>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <p className="text-gray font-medium">Shipping</p>
                <p className="font-medium">Free</p>
              </div>
              <div className="flex justify-between text-sm md:text-base">
                <p className="text-gray font-medium">Discount</p>
                <p className="font-medium">$66.00</p>
              </div>
              <div className="flex justify-between text-sm md:text-base font-medium">
                <p className="text-black font-semibold">Cart Total</p>
                <p>$66.00</p>
              </div>
            </div>
            <div className="flex justify-center pb-6 md:pb-8">
              <button
                onClick={handleAddToProceed}
                className="rounded-full bg-[#6750c5] hover:shadow-xl hover:scale-105 px-3 md:px-4 py-1 md:py-2 w-full md:w-80 h-12 text-white text-sm md:text-base"
              >
                Proceed
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Cart;
