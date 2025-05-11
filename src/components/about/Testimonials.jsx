'use client';
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import img1 from '/public/images/feed1.png'
import img2 from '/public/images/feed2.png'
import img3 from '/public/images/feed3.png'
import img4 from '/public/images/feed4.png'
import img5 from '/public/images/feed5.png'
import img6 from '/public/images/feed6.png'
import text from '/public/images/Testomonial.svg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

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
    <div className="flex justify-center absolute -bottom-[25%]  left-1/2 -translate-x-1/2 mt-4">
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
    responsive: [
      {
        breakpoint: 580,
        settings: {
          arrows: false,
          dots: false,
        }
      }
    ]
  };

  const data = [
    {
      name: "Yazid H.",
      role: "Chief Engineer Cementos Grupo",
      description:
        "Huntproperty® has been installed in our facilities on 9NOV21 and helped us to save 7.4% of the total consumption. Wonderful!",
      img: img1,
      rating: 4,
    },
    {
      name: "Shanvas PK",
      role: "GM of ARMCON",
      description:
        "I certify and guarantee the proper functioning of the Enersol plates, produced by Techsol® Group, Implemented in our facilities since June 2020 and our electricity consumption has reduced by 17%",
      img: img2,
      rating: 5,
    },
    {
      name: "Andres Zaidan ",
      role: "GM of FUPEL LTDA",
      description:
        "At first I couldn’t believe but since Enersol installation in our facilities last December 2022 we’ve been able to save 14.2% of our electricity bill, Yes, We do recommend Enersol.",
      img: img3,
      rating: 4,
    },
    {
      name: "Juan Camilo",
      role: "PM Canis Group",
      description:
        "The customers’ experience highlighted: the efficiency, reliability, and quality of Huntproperty® technology. And we recommend working with Enersol it is a satisfaction!",
      img: img4,
      rating: 5,
    },
    {
      name: "Issam Al-Kasih",
      role: "GM of Alkasih Food Industrial",
      description:
        "Enersol has been installed in our facilities since Feb, 2019 & we have got an incredible 15% savings.",
      img: img5,
      rating: 4,
    },
    {
      name: "Juan Carlos",
      role: "CEO of RTL S.A.S",
      description:
        "our focus has been no the industrial sector, the most demanding of energy consumption, where significant reductions have been found due to savings in electrical energy. Thank you Enersol!",
      img: img6,
      rating: 5,
    },
  ];

  return (
    <>
      <div className="text-black font-raleway md:pb-40 sm:pb-32 pb-8 md:pt-20 pt-10 px-4 bg-gradient-to-b from-[#8A73E8] to-[#FFFF]">
        <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-3xl font-bold text-center">
          Testomonial
        </h1>
        <motion.div
          className="md:mt-14 sm:mt-6"
          ref={ref1}
          initial={{ opacity: 0, y: 30 }}
          animate={controls1}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Slider ref={sliderRef} {...sliderSettings} className="relative z-10">
            {data.map((e, i) => (
              <div
                key={i}
                className=" w-[80%] flex justify-center  flex-col items-center"
              >
                <div className="relative flex justify-center py-8 px-2">
                  <Image alt="" src={text} className="sm:w-[80%] w-full " />
                  <div className="absolute sm:bottom-4 bottom-6 left-1/2 -translate-x-1/2 border-2 rounded-full border-gray">
                    <Image
                      alt=""
                      src={e.img}
                      className="xl:w-28 lg:w-20 md:w-16 sm:w-12 w-8 rounded-full"
                    />
                  </div>
                </div>

                <h1 className="sm:text-2xl text-xl font-extrabold sm:mb-8 mb-3  text-center">
                  {e.role}
                </h1>
                <div className="w-full flex justify-center">
                  <div className="md:w-[70%] w-[90%]">
                    <p className="font-medium text-center sm:text-base text-sm">
                      {e.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </motion.div>
      </div>

      {/* Launch project section */}
      <div className="bg-[#232323] pb-10 h-auto text-white w-full flex justify-center  relative">
        <div className="hidden lg:block absolute top-6 left-0 z-20">
          <Image
            src="/images/Rectangle_left.png"
            width={100}
            height={100}
            alt=""
            className="xl:w-[300px] w-[250px] h-full"
          />
        </div>
        <div className="hidden lg:block absolute top-6 right-0 z-20">
          <Image
            src="/images/Rectangle_right.png"
            width={100}
            height={100}
            alt=""
            className="xl:w-[300px] w-[250px] h-full"
          />
        </div>

        {/* <motion.div
          ref={ref2}
          initial={{ opacity: 0, x: 100 }}
          animate={controls2}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-white py-10 flex font-raleway w-full bg-red-400 justify-center"
        > */}
        <div className="lg:w-[70%] w-full py-12 flex flex-col items-center lg:gap-12 sm:gap-10 gap-6">
          <p className="text-xl sm:text-3xl text-white text-center font-bold pt-8 ">
            Ready to get started?
          </p>
          <h1 className="text-2xl lg:text-5xl leading-snug sm:text-3xl xl:text-[64px]  text-center font-semibold px-4 sm:px-0">
            Launch Your Project <br className="lg:block hidden" />
            With Us
          </h1>

          <div className="w-full  flex justify-center items-center">
            <button className="rounded-full text-sm sm:text-xl  text-white gradient-button px-4 sm:px-6 py-2 sm:py-3 shadow-md hover:shadow-lg transition duration-25 ease-in-out">
              Inquire with us now
            </button>
          </div>
          <div className="w-full  flex justify-center gap-4 sm:gap-7 items-center">
            <Link
              href={"https://www.facebook.com/Huntproperty.jp"}
              className="cursor-pointer bg-gradient-to-r from-[#372DA7] to-[#8A73E8] rounded-full w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex justify-center items-center"
            >
              <Image
                height={10}
                width={15}
                alt="facebook"
                src="/images/fb.png"
              />
            </Link>
            <Link
              href={"https://www.linkedin.com/company/Huntpropertyjp"}
              className="cursor-pointer bg-transparent rounded-full border border-white w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex justify-center items-center"
            >
              <Image
                height={25}
                width={25}
                alt="linkedin"
                src="/images/link.png"
              />
            </Link>
            <Link
              href={""}
              className="cursor-pointer bg-transparent rounded-full border border-white w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex justify-center items-center"
            >
              <Image
                height={25}
                width={25}
                alt="twitter"
                src="/images/twitter.png"
              />
            </Link>
            <Link
              href={""}
              className="cursor-pointer bg-transparent rounded-full border border-white w-[50px] h-[50px] sm:w-[60px] sm:h-[60px] flex justify-center items-center"
            >
              <Image
                height={25}
                width={25}
                alt="instagram"
                src="/images/insta.png"
              />
            </Link>
          </div>
        </div>
        {/* </motion.div> */}
      </div>
    </>
  );
};

export default TeamMember;