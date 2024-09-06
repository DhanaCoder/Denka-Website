'use client';
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import shade1 from '@/assets/blueShade1.svg';
import shade2 from '@/assets/blueShade2.svg';
import shade3 from '@/assets/blueShade3.svg';
import img1 from '/public/images/memberImg1.png'
import img2 from '/public/images/memberImg2.png'
import person from '@/assets/person.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import map from '/public/images/map2.png'

const TeamMember = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const sliderRef = useRef(null); // Reference for the slider

  const ref1 = useRef(null);
  const ref2 = useRef(null);

  useEffect(() => {
    const observer1 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls1.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.2 }
    );

    const observer2 = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls2.start({ opacity: 1, y: 0 });
        }
      },
      { threshold: 0.2 }
    );

    if (ref1.current) observer1.observe(ref1.current);
    if (ref2.current) observer2.observe(ref2.current);

    return () => {
      if (ref1.current) observer1.unobserve(ref1.current);
      if (ref2.current) observer2.unobserve(ref2.current);
    };
  }, [controls1, controls2]);

  // custom dots
  const CustomDots = ({ dots }) => (
    <div className="flex justify-center sm:absolute lg:bottom-[20%] bottom-0 left-[30%] mt-4">
      {dots.map((dot, index) => (
        <div
          key={index}
          className={`h-2 rounded-full mx-1 cursor-pointer ${dot.props.className === "slick-active"
            ? "bg-purple-500 w-11"
            : "bg-gray w-7"
            }`}
          onClick={() => sliderRef.current.slickGoTo(index)} // Use slickGoTo method
        />
      ))}
    </div>
  );

  const sliderSettings = {
    dots: true,
    customPaging: (i) => <div className="dot"></div>,
    dotsClass: "slick-dots",
    appendDots: (dots) => <CustomDots dots={dots} />,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const teamMembers = [
    {
      name: "Aizawa Anasu",
      role: 'Managing Director & Head of Operations, HQ - Tokyo, Japan.',
      description: 'Mr. Aizawa is an investor and a Managing Director of Denka® looking after the operations, sales and the R&D process in Japan to provide the best for our clients internationally.',
      img: img2,
    },
    {
      name: "Alaa Alyaman",
      role: 'Founder & Executive Chairman Denka® Globally',
      description: 'Mr. Alaa Alyaman is the founder and 75% Shareholder of Denka® He loves to get involve directly in the workloads see the needed changes and continuously update the company policy, strategy and draw the vision in order to ensure the satisfactory of Denka®’s users.',
      img: img1,
    },
  ];

  return (
    <>
      <motion.div
        className="bg-[#232323] w-full font-raleway text-white px-4 pt-[80px] lg:pt-[130px] pb-[50px] lg:pb-[99px] relative"
        ref={ref1}
        initial={{ opacity: 0, y: 30 }}
        animate={controls1}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Image alt="" src={shade1} className="absolute -top-[50%] left-0" />
        <Image alt="" src={shade2} className="absolute -top-[20%] left-[10%]" />
        <Image alt="" src={shade3} className="absolute -bottom-[60%] right-[0%]" />

        <h1 className="text-center font-rational text-3xl smpx-0 xl:text-6xl lg:text-5xl font-semibold relative z-10">
          Our Management Team
        </h1>
        <p className="mt-3 sm:mt-5 text-center text-lg lg:text-2xl relative z-10">
          Who’s Behind Denka®
        </p>

        <Slider ref={sliderRef} {...sliderSettings} className="relative z-10 mt-6 sm:mt-9">
          {teamMembers.map((member, index) => (
            <div key={index} className="flex sm:flex-row flex-col-reverse justify-center">
              <div className="grid grid-cols-1 w-full  sm:grid-cols-2 items-center gap-x-4 lg:gap-x-10">
                <div className="flex flex-col lg:pl-20 justify-center items-center">
                  <div className="p-0">
                    <h1 className="text-2xl sm:text-3xl lg:text-[40px] font-bold">{member.name}</h1>
                    <h1 className="font-semibold text-2xl my-2">{member.role}</h1>
                    <p className="mt-4 sm:mt-6  text-lg lg:text-xl">
                      {member.description}
                    </p>
                    {/* <div className="flex flex-col gap-2 mt-4 sm:mt-6 font-medium text-lg lg:text-xl">
                      {member.expertise.map((text, i) => (
                        <div className="flex gap-2" key={i}>
                          <div className="flex justify-center mt-2 md:mt-0 items-start md:items-center">
                            <Image
                              height={12}
                              width={12}
                              alt="bullet point"
                              src="/images/bullet.svg"
                            />
                          </div>
                          <p>{text}</p>
                        </div>
                      ))}
                    </div> */}
                  </div>
                </div>
                <div className="flex justify-center">
                  <Image
                    height={'400'}
                    width={'300'}
                    alt="team member"
                    src={member.img}
                    unoptimized
                    className="h-full w-[80%]"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </motion.div>

      <motion.div
        className="bg-white font-raleway text-black px-4"
        ref={ref2}
        initial={{ opacity: 0, y: 30 }}
        animate={controls2}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="lg:text-6xl font-rational md:text-5xl sm:text-4xl text-3xl text-center mt-10 sm:mt-20 lg:mt-[152px] font-extrabold">
          Denka® Globally
        </h1>
        {/* <p className="text-center font-medium text-sm md:text-2xl mt-2 sm:mt-3">
          We are around you, everywhere with 5 global offices & <br className="hidden sm:block" />{" "}
          over 18+ Business Partners.
        </p> */}
        <div className="flex flex-col items-center sm:my-12 my-5 w-full">
          <Image
            className="h-full w-full"
            alt="countries map"
            src={map}
          />
        </div>
        <div className="flex w-full justify-center sm:my-6 my-3 sm:mb-16 mb-8 px-4">
          <div className="flex flex-wrap   justify-between text-xs sm:text-sm md:text-xl lg:text-2xl font-semibold gap-4  sm:w-[80%] w-[70%]   mt-2">
            {["Japan", "Ecuador", "Colombia", "Saudi Arabia", "Bahrain", "Jordan"].map((country, index) => (
              <p className="" key={index}>{country}</p>
            ))}
          </div>
        </div>
      </motion.div>
      </>
  );
};

export default TeamMember;
