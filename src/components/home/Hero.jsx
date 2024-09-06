import Image from "next/image";
import card from '/public/images/heroCard.png'
import blueDot from '/public/images/heroBlue.svg'
import img from '@/assets/lines-bg.svg'
import icon from '@/assets/hero-icon.svg'
import { BsArrowDown } from "react-icons/bs";
import Link from "next/link";
import MaxContainer from "../MaxContainer";



const HomeHero = ({ onScrollDownClick }) => {
  return (
    <div className="relative h-full md:py-20 py-12 bg-hero-bg bg-center bg-no-repeat bg-cover">

      {/* <Image alt="" src={img} className="absolute left-0 top-0 w-full h-full object-cover" /> */}
        <div className=" flex items-center 3xl:justify-center xl:justify-start justify-center max-w-[1900px] w-full h-full 3xl:pl-10 md:pl-20 md:px-0 px-5 sm:pt-12 pt-20">
          <div className=" font-raleway xl:w-[60%]  2xl:pr-6 md:pr-16 z-30 sm:w-[90%] w-full text-center  lg:gap-8 sm:gap-6 gap-5 flex flex-col sm:items-start items-center">

            <div className="bg-blueMain px-8 font-rational  py-2 font-semibold xl:text-[40px] lg:text-4xl md:text-3xl sm:text-2xl text-lg rounded-full text-white" >
              Welcome to Denka&#174;
            </div>
            <h1
              className="font-semibold font-rational leading-tight sm:text-start text-center  xl:text-7xl lg:text-6xl md:text-5xl sm:text-4xl text-2xl text-black  ">
              Where Innovation Meets <span className="text-blueMain">Sustainability!</span>
            </h1>

            <p className=" sm:text-start text-center font-raleway font-medium text-black leading-relaxed  lg:text-lg text-sm w-full">
              Ever wondered how curiosity can spark groundbreaking ideas? At Denka®, we don&apos;t just ask
              questions—we drive energy-saving innovations! Dive into a world where eco-friendly practices and
              cutting-edge solutions go hand in hand. Ready to make a greener choice? Join us in revolutionizing
              the future, one energy-efficient step at a time.
            </p>
            <div className="flex sm:justify-start justify-center w-full">
              <Link href={'/products/cart'} className="flex items-center justify-center md:text-base sm:text-sm text-xs rounded-full font-bold gradient-button sm:px-16 px-8 sm:py-3 py-2 text-white shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
                Buy Now
              </Link>
            </div>
            <div onClick={onScrollDownClick} className="flex xl:justify-end justify-center px-10 w-full ">
              <div className="flex cursor-pointer flex-col items-center sm:gap-5 gap-3">
                <Image alt="" src={icon} className="sm:w-7 w-4" />
                <span className="font-semibold font-poppins md:text-xl sm:text-sm text-xs ">Scroll Down</span>
                <div className="flex h-8 w-8 animate-bounce items-center justify-center ">
                  <BsArrowDown className="md:text-4xl sm:text-2xl text-xl" />
                </div>
              </div>
            </div>
          </div>

          <div className="xl:block hidden z-20 absolute right-0 bottom-12">
            <Image alt="" src={card} className="" />
          </div>
        </div>

        <div className="xl:block hidden absolute bottom-0 right-0 z-10">
          <Image alt="" src={blueDot} className="w-full h-full" />
        </div>

    </div>
  );
};

export default HomeHero;
