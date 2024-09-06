"use client";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const Payment = () => {
  const [selectedOption, setSelectedOption] = useState("credit-card");

  // Animation controls for each grid
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  // Refs for each grid
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls1.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.1 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls2.start({ opacity: 1, scale: 1 });
        }
      },
      { threshold: 0.1 }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls3.start({ opacity: 1, rotate: 0 });
        }
      },
      { threshold: 0.1 }
    );

    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);
    if (ref3.current) observer3.observe(ref3.current);

    return () => {
      if (ref1.current) observer1.unobserve(ref1.current);
      if (ref2.current) observer2.unobserve(ref2.current);
      if (ref3.current) observer3.unobserve(ref3.current);
    };
  }, [controls1, controls2, controls3]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="mt-8 sm:mt-16 w-full pb-12 sm:pb-20 text-black"
    >
      <div className="px-4 sm:px-6 font-raleway lg:px-12">
        <div className="flex md:flex-row flex-col items-start gap-4 mt-8 lg:mt-10">
          {/* Shipping Address Form */}
          <div className="md:w-[65%] w-full flex flex-col items-start gap-4">
            <motion.div
              ref={ref1}
              initial={{ opacity: 0, y: 50 }}
              animate={controls1}
              transition={{ duration: 0.5 }}
              className="w-full rounded-lg py-4 px-4 sm:px-6 shadow-md"
            >
              <div className="flex gap-3 sm:gap-5 pb-4 sm:pb-5">
                <p className="text-lg sm:text-2xl font-semibold">Shipping Address</p>
              </div>
              <form>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div>
                    <label
                      className="block text-gray-500 text-sm sm:text-base mb-1"
                      htmlFor="firstName"
                    >
                      First Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      id="firstName"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-500 text-sm sm:text-base mb-1"
                      htmlFor="lastName"
                    >
                      Last Name
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      id="lastName"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block text-gray-500 text-sm sm:text-base mb-1"
                    htmlFor="streetAddress"
                  >
                    Street Address
                  </label>
                  <input
                    className="w-full px-3 py-2 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    id="streetAddress"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-4">
                  <div>
                    <label
                      className="block text-gray-500 text-sm sm:text-base mb-1"
                      htmlFor="state"
                    >
                      State
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      id="state"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-500 text-sm sm:text-base mb-1"
                      htmlFor="region"
                    >
                      Region
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      id="region"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-gray-500 text-sm sm:text-base mb-1"
                      htmlFor="zipCode"
                    >
                      Zip Code
                    </label>
                    <input
                      className="w-full px-3 py-2 border rounded-md text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-500"
                      type="text"
                      id="zipCode"
                    />
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                  <button
                    type="button"
                    className="bg-[#D2D4DA] text-white px-6 py-2 rounded-md text-sm sm:text-base hover:bg-gray-400 focus:outline-none"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="bg-[#372DA7] bg-gradient-to-r to-[#807ac8] from-[#372DA7] text-white px-6 py-2 rounded-md text-sm sm:text-base hover:bg-[#433c8f] focus:outline-none"
                  >
                    Use This Address
                  </button>
                </div>
              </form>
            </motion.div>

            {/* Payment Method */}
            <motion.div
              ref={ref3}
              initial={{ opacity: 0, rotate: -15 }}
              animate={controls3}
              transition={{ duration: 0.5 }}
              className="w-full rounded-lg py-4 px-4 sm:px-6 shadow-md"
            >
              <div className="flex gap-3 sm:gap-5 pb-4 sm:pb-5">
                <p className="text-lg sm:text-2xl font-semibold">All Payment Options</p>
              </div>

              <div className="mb-4">
                <div
                  className={`p-4 border rounded-lg mb-4 ${selectedOption === "credit-card"
                    ? "border-blue-400 bg-[rgba(138,115,232,0.1)]"
                    : "border-gray-300"
                    }`}
                >
                  <label className="flex items-center cursor-pointer text-sm sm:text-base">
                    <input
                      type="radio"
                      name="payment"
                      value="credit-card"
                      checked={selectedOption === "credit-card"}
                      onChange={() => setSelectedOption("credit-card")}
                      className="form-radio h-4 sm:h-5 w-4 sm:w-5 text-blue-600"
                    />
                    <span className="ml-2 sm:ml-3">Credit Card</span>
                  </label>
                  {selectedOption === "credit-card" && (
                    <div className="mt-2 sm:mt-4">
                      <p className="text-xs sm:text-sm mb-4 text-gray-600">
                        Pay securely using your Visa, Maestro, Discover, or American
                        Express card.
                      </p>
                      <div>
                        <p>Card Number</p>
                        <input
                          type="text"
                          placeholder="Card Number"
                          className="w-full p-2 mb-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                      <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-3">
                        <div>
                          <p>Name of card</p>
                          <input
                            type="text"
                            placeholder="Name on card"
                            className="w-full p-2 mb-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                        <div>
                          <p>Expiry Date</p>
                          <input
                            type="text"
                            placeholder="Expiry Date"
                            className="w-full p-2 mb-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                        <div>
                          <p>CVC Number</p>
                          <input
                            type="text"
                            placeholder="CVC Number"
                            className="w-full p-2 mb-2 border border-gray-300 rounded-lg text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {["Visa", "Master Card", "Cash on Delivery"].map((option) => (
                  <div
                    key={option}
                    className={`p-4 border rounded-lg mb-4 ${selectedOption === option.toLowerCase().replace(" ", "-")
                      ? "border-blue-400 bg-[rgba(138,115,232,0.1)]"
                      : "border-gray-300"
                      }`}
                  >
                    <label className="flex items-center cursor-pointer text-sm sm:text-base">
                      <input
                        type="radio"
                        name="payment"
                        value={option.toLowerCase().replace(" ", "-")}
                        checked={
                          selectedOption === option.toLowerCase().replace(" ", "-")
                        }
                        onChange={() =>
                          setSelectedOption(option.toLowerCase().replace(" ", "-"))
                        }
                        className="form-radio h-4 sm:h-5 w-4 sm:w-5 text-blue-600"
                      />
                      <span className="ml-2 sm:ml-3">{option}</span>
                    </label>
                  </div>
                ))}
              </div>

              {/* Pay Button */}
              <button className="w-full py-2 sm:py-3 mb-4 text-white bg-[#372DA7] bg-gradient-to-r to-[#807ac8] from-[#372DA7] rounded-lg text-sm sm:text-base hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-opacity-75">
                Pay $567.00
              </button>

              {/* Terms & Conditions */}
              <div className="flex items-center justify-start text-sm sm:text-base">
                <input className="scale-125" type="checkbox" />
                <span className="mr-1 ml-2 sm:ml-3">
                  By Clicking this, I agree to all Terms & Conditions Privacy &
                  Policy
                </span>
              </div>
            </motion.div>
          </div>

          {/* Cart Summary */}
          <motion.div
            ref={ref2}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={controls2}
            transition={{ duration: 0.5 }}
            className="shadow-md py-4 px-2  rounded-lg md:w-[35%] w-full"
          >
            <h1 className="px-3 py-3 text-lg sm:text-xl md:text-2xl">
              Your Cart
            </h1>
            <div className="flex items-center gap-3  px-2">
              <div className="w-16 sm:w-24 h-16 sm:h-24 flex justify-center items-center shadow-md rounded-md">
                <Image
                  className="rotate-45"
                  src="/images/card.png"
                  alt="centered logo"
                  width={50}
                  height={50}
                />
              </div>
              <div className="flex flex-col">
                <p className="text-lg lg:text-xl xl:text-2xl">
                  Apple Airpods Pro
                </p>
                <div className="flex gap-2 sm:gap-4">
                  <p className="text-gray-400 text-sm sm:text-base">White</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-[#F2F0FC] p-1 mt-4 px-2 mb-4">
              <div className="rounded-full p-2 flex mt-2 bg-white sm:mt-3 border ">
                <input
                  className="outline-none rounded-full bg-white w-full px-2 border-none text-sm sm:text-base"
                  type="text"
                  placeholder="Enter your promo code"
                  required
                />
                <button className="rounded-full bg-[#8A73E8] px-3 sm:px-4 py-1 sm:py-2 text-white text-sm sm:text-base">
                  Enter
                </button>
              </div>
              <h1 className="px-2 py-3 text-lg sm:text-xl md:text-2xl">
                Cart total
              </h1>

              <div className="flex flex-col px-2 pb-4 sm:pb-6 gap-2 sm:gap-4">
                <div className="flex justify-between">
                  <p className="text-gray-400 text-sm sm:text-base">Cart Subtotal</p>
                  <p className="text-gray-400 text-sm sm:text-base">$199.99</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-400 text-sm sm:text-base">
                    Shipping
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">Free</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-gray-400 text-sm sm:text-base">
                    Discount
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">$210.98</p>
                </div>
                <div className="flex mt-3 justify-between">
                  <p className="text-gray-400 text-sm font-medium sm:text-base">
                    Cart Total
                  </p>
                  <p className="text-gray-400 text-sm sm:text-base">$66.00</p>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <button
                className="rounded-md bg-[#6750c5] px-3 w-full py-3 text-white text-sm md:text-base"
              >
                Continue
              </button>
            </div>
          </motion.div>


        </div>
      </div>
    </motion.div>
  );
};

export default Payment;
