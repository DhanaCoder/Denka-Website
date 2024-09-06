"use client";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import img from '@/assets/video-img2.png'

const Solutions = () => {

  const platinumItems = [
    { id: 1, name: 'No Power Cutoff Installation:', text: "Denka® can be installed without the need for a power cutoff, ensuring zero construction and minimal disruption.", icon: <FaCheck /> },
    { id: 2, name: 'Extended Lifespan:', text: "Thanks to its ceramic material composition, Denka® boasts an impressive lifespan of over 60 years.", icon: <FaCheck /> },
    { id: 2, name: 'Long-term Warranty:', text: " We stand by our product with a robust warranty of over 25 years, giving you peace of mind for decades.", icon: <FaCheck /> },
    { id: 2, name: 'Energy Savings:', text: " Denka® reduces electrical consumption by up to 20%, making your energy use much more efficient.", icon: <FaCheck /> },
    { id: 2, name: 'Load Lifespan Enhancement:', text: " By reducing electrical noise, Denka® saves the lifespan of your electrical loads by up to 30%.", icon: <FaCheck /> },
    { id: 2, name: 'Quick Payback Period:', text: "  Experience a maximum 1.5-year payback period, making Denka® a swift and sound investment.", icon: <FaCheck /> },
    { id: 2, name: 'Money-Back Guarantee:', text: " We offer a 60-day golden money-back guarantee, so you can make your decision with confidence.", icon: <FaCheck /> },
    { id: 2, name: 'Compatible with other Energy Solutions:', text: "Whether you have LEDs, a PV system, or even low-pass and/or EMI filters, Denka® Plate will still operate to give you an extra up to 20% savings!", icon: <FaCheck /> },
    { id: 2, name: 'No Maintenance:', text: "Denka® needs no maintenance nor periodic maintenance.", icon: <FaCheck /> },
  ];


  const controlsGrid = useAnimation();
  const controlsImage = useAnimation();

  const refGrid = useRef(null);
  const refImage = useRef(null);

  useEffect(() => {
    const observerGrid = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsGrid.start({ opacity: 1, x: 0 });
        }
      },
      { threshold: 0.1 }
    );

    const observerImage = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controlsImage.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.1 }
    );

    if (refGrid.current) {
      observerGrid.observe(refGrid.current);
    }

    if (refImage.current) {
      observerImage.observe(refImage.current);
    }

    return () => {
      if (refGrid.current) {
        observerGrid.unobserve(refGrid.current);
      }

      if (refImage.current) {
        observerImage.unobserve(refImage.current);
      }
    };
  }, [controlsGrid, controlsImage]);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        ref={refGrid}
        initial={{ opacity: 0, x: -100 }}
        animate={controlsGrid}
        transition={{ duration: 0.8 }}
        className=" p-6 grid grid-cols-1 md:grid-cols-2 font-raleway gap-8 sm:w-[91%] w-full text-black bg-[#D9D9D91A] "
      >
        <div className="">
          <h1 className="text-2xl sm:text-3xl font-extrabold lg:text-4xl leading-tight">
          Denka® Platinum: Unleashing Efficiency!
          </h1>
          <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#777777]">
            Denka® Platinum is a top-tier product designed to revolutionize your
            energy consumption. Built on solid engineering principles, Denka®
            Platinum offers exceptional quality and provides long-term benefits
            across residential, commercial, and industrial sectors. With its
            advanced technology, Denka® Platinum not only reduces energy
            consumption but also enhances the lifespan of your electrical
            systems.
          </p>
        </div>
        <div className="mt-4 sm:mt-6 md:mt-8 lg:mt-10 pl-2 ">
          <h1 className="text-xl md:text-2xl lg:text-3xl font-extrabold leading-tight">
            Technical Specifications
          </h1>
          <div className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl">
            <p className="font-light">
              <span className="font-bold">Made in Japan</span>
            </p>
            <p className="font-light">
              <span className="font-bold">Weight:</span>  21 grams
            </p>
            <p className="font-light">
              <span className="font-bold">Dimensions:</span>  50 x 25 x 3.5 mm.
            </p>
            <p className="font-light">
              <span className="font-bold"> Max Voltage Tolerance:</span> No Limitations.
            </p>
            <p className="font-light">
              <span className="font-bold">Max Amperage Tolerance:</span> No Limitations.
            </p>
            <p className="font-light">
              <span className="font-bold">Max Heat Tolerance:</span> ~300°.
            </p>
            <p className="font-light">
              <span className="font-bold">Power Supply:</span> Do not require a direct connection to a power supply.
            </p>
            <p className="font-light">
              <span className="font-bold">Standards:</span> CE, RoHS, IEC: CISPR11.
            </p>
            <p className="font-light">
              <span className="font-bold">Operational Frequency Range:</span> 150kHz ~ 30MHz.
            </p>
            <p className="font-light">
              <span className="font-bold">Safety:</span> Asbestos & Radiation Free.
            </p>
            <p className="font-light">
              <span className="font-bold">Contents:</span> 27 ceramic materials composition built with Nano-Crystalline Technology.
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        ref={refImage}
        initial={{ opacity: 0, y: 100 }}
        animate={controlsImage}
        transition={{ duration: 0.8 }}
        className=" grid grid-cols-1 p-6 pb-6 pt-6 md:pt-8 lg:pt-10 sm:w-[91%] w-full gap-8 text-black bg-[#D9D9D91A]  "
      >
        <div className="w-full px-2 flex  items-center justify-center rounded-lg">
          <Image alt="" src={img} />
        </div>
      </motion.div>
      <div className="flex w-full flex-wrap justify-center mb-6 mt-4 sm:mt-6 lg:mt-8">
        <div className="grid w-full mx-4 sm:mx-8 font-raleway md:mx-12 lg:mx-20 mt-10 pb-12 grid-cols-1 sm:grid-cols-2 gap-4">
          {platinumItems.map((item) => (
            <div key={item.id} className="flex items-center border-2 border-blueMain py-3 px-4 rounded-full">
              <span className="bg-blueMain text-white sm:p-2 p-1.5 rounded-full">
                {item.icon}
              </span>
              <div className="ml-2 flex items-start gap-2">
                <h1 className="text-black font-semibold sm:text-base text-sm">
                  {item.name}{' '}
                  <span className="text-gray-700 sm:text-base font-normal text-sm">{item.text}</span>
                  </h1>
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Solutions;
