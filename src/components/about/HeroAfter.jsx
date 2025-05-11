'use client';
import Image from "next/image";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import img from '@/assets/video-img.png'
import MaxContainer from "../MaxContainer";


export const HeroAfter = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls1.start({ opacity: 1, x: 0 });
        }
      },
      { threshold: 0.2 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls2.start({ opacity: 1, x: 0 });
        }
      },
      { threshold: 0.2 }
    );

    const observer3 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls3.start({ opacity: 1, x: 0 });
        }
      },
      { threshold: 0.2 }
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
    <div className="flex justify-center">
    <MaxContainer>
    <div className="flex mx-auto flex-col font-raleway text-black px-4 sm:gap-20 gap-12  lg:w-[85%] sm:w-[90%] w-full sm:mt-20 mt-12 pb-40">
      {/* 1st */}
      <div className="flex items-center gap-10">
        <div className="flex flex-col md:w-[65%] w-full item-start">
          <h1 className="sm:text-3xl text-2xl lg:text-5xl xl:text-6xl  font-semibold font-rational">
            Welcome to Huntproperty®: Where Innovation Meets Sustainability
          </h1>
          <p className="lg:mt-10 mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            Huntproperty® began with a simple question, leading a dedicated team of Electrical Engineers,
            Metallurgists, PhD holders, and scientists to spend over five years perfecting our technology. By
            2019, we were ready to bring our revolutionary energy-saving solution to the world.
          </p>
          <p className="mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            Our curiosity drove us to develop solutions that enhance power quality, reduce energy consumption,
            and extend the lifespan of electrical systems. Adhering to stringent standards like CISPR 11, we’ve
            minimized electrical noise, ensuring a cleaner, more efficient power flow.
          </p>
          <p className="mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            But Huntproperty® is more than just a product—it’s a promise. We prioritize sustainability in every decision,
            ensuring our solutions are eco-friendly and built to last. Our dedication to integrity means
            transparency and ethical practices guide all we do, so when you choose Huntproperty®, you’re choosing a
            brand you can trust.
          </p>
          <p className="mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            We believe informed choices are powerful, so we simplify complex ideas, empowering you to make
            smart decisions about your energy use. Join our community committed to sustainable living and
            discover the difference Huntproperty® can make in your life.
          </p>
        </div>
        <div className=" hidden w-[35%] md:flex items-center justify-center">
          <div className="w-32 h-32 bg-[#8A73E8] rounded-full filter blur-3xl"></div>
        </div>
      </div>

      {/* 2nd */}
      <div className="flex items-center gap-10">
        <div className="w-[35%] hidden md:flex items-center justify-center">
          <div className="w-32 h-32 bg-[#8A73E8] rounded-full filter blur-3xl"></div>
        </div>
        <div className="flex md:w-[65%] w-full flex-col items-start">
          <h1 className="sm:text-3xl text-2xl lg:text-5xl xl:text-6xl font-semibold font-rational">
            {/* Denka®—Where innovation meets sustainability, and every choice counts. */}
            Our Vision for Huntproperty®
          </h1>
          <p className="lg:mt-10 mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            At Huntproperty®, we envision a future where energy-saving innovations lead the way to a greener, more
            sustainable world. Our commitment to this vision is unwavering, as we strive to develop cutting-edge
            solutions that not only curb energy consumption but also extend the life of electrical systems,
            ensuring they operate more efficiently and with less impact on our planet.
          </p>
          <p className="mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            We believe in the power of technology to drive meaningful change. That’s why every product we
            design is infused with our core principles of sustainability and efficiency. Our goal is to reduce the
            global carbon footprint by offering solutions that make it easier for individuals and industries alike to
            adopt eco-friendly practices without compromising on performance or reliability.
          </p>
          <p className="mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            In this future, Huntproperty® plays a pivotal role in transforming how energy is used and conserved. We aim
            to create products that not only meet today’s demands but also anticipate tomorrow’s challenges,
            pushing the boundaries of what’s possible in energy conservation and sustainability. Through
            innovation, integrity, and a deep respect for our planet, we are committed to fostering a world where
            every watt saved brings us closer to a more sustainable future.
          </p>
          <p className="mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            This vision extends beyond our products—it’s a call to action for everyone to join us in creating a
            more eco-conscious world. Together, we can make every choice count, ensuring that our energy use
            today leads to a brighter, greener tomorrow.
          </p>
        </div>
      </div>

      {/* 3rd */}
      <div className="flex items-center gap-10">
        <div className="flex flex-col md:w-[65%] w-full item-start">
          <h1 className="sm:text-3xl text-2xl lg:text-5xl xl:text-6xl  font-semibold font-rational">
            Our Mission at Huntproperty®
          </h1>
          <p className="lg:mt-10 mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            At Huntproperty®, our mission is to lead the charge in energy-saving innovation, empowering individuals
            and industries to reduce their energy consumption while enhancing the longevity and efficiency of
            their electrical systems. We are dedicated to developing advanced, eco-friendly solutions that not
            only meet the highest standards of performance but also contribute to a more sustainable and
            energy-efficient world.
          </p>
          <p className="mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            We are committed to continuous research and development, driven by curiosity and a passion for
            sustainability. Our team of engineers, scientists, and experts work tirelessly to create products that
            minimize environmental impact and maximize energy savings, making it easier for our customers to
            make responsible choices.
          </p>
          <p className="mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            Integrity, transparency, and ethical practices are at the core of everything we do. We strive to build
            trust with our customers by providing clear, actionable information and ensuring that our solutions
            deliver real, measurable benefits.
          </p>
          <p className="mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            Through innovation and a deep respect for our planet, Huntproperty® is on a mission to make every watt
            count, leading the way toward a future where energy efficiency and sustainability are the norm, not
            the exception.
          </p>
        </div>
        <div className=" hidden w-[35%] md:flex items-center justify-center">
          <div className="w-32 h-32 bg-[#8A73E8] rounded-full filter blur-3xl"></div>
        </div>
      </div>

      {/* 4th */}
      <div className="flex items-center gap-10">
        <div className="w-[35%] hidden md:flex items-center justify-center">
          <div className="w-32 h-32 bg-[#8A73E8] rounded-full filter blur-3xl"></div>
        </div>
        <div className="flex md:w-[65%] w-full flex-col items-start">
          <h1 className="sm:text-3xl text-2xl lg:text-5xl xl:text-6xl font-semibold font-rational">
            Our Values at Huntproperty®
          </h1>
          <div className="sm:mt-10 mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            <p className="font-semibold">Innovation Through Curiosity</p>
            We question the status quo to create cutting-edge energy-saving solutions that push boundaries
          </div>
          <div className=" mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            <p className="font-semibold">Sustainability First</p>
            Every decision we make is guided by our commitment to reducing environmental impact and
            promoting a greener future.
          </div>
          <div className=" mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            <p className="font-semibold">Integrity and Transparency</p>
            We build trust through honesty, ensuring that our products and practices are always clear and
            reliable.
          </div>
          <div className=" mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            <p className="font-semibold">Empowerment Through Knowledge</p>
            We simplify complex concepts, enabling our customers to make informed, impactful decisions about
            their energy use.
          </div>
          <div className=" mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            <p className="font-semibold">Collaborative Community</p>
            We value the power of working together, fostering a community dedicated to sustainability and
            energy efficiency.
          </div>
          <div className=" mt-5 max-w-full md:max-w-[718px]  text-left text-black text-base lg:text-xl">
            <p className="font-semibold">Uncompromising Quality</p>
            We are committed to delivering high-performance, durable solutions that provide lasting value.
          </div>
        </div>
      </div>
    </div>
    </MaxContainer>
    </div>
  );
};

export default HeroAfter;
