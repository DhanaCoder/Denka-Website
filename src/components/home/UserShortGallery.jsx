"use client";
import { FaCheck } from "react-icons/fa";
import box1 from '/public/images/galery1.png'
import box2 from '/public/images/galery2.png'
import box3 from '/public/images/galery3.png'
import box4 from '/public/images/galery4.png'
import box5 from '/public/images/galery5.png'
import box6 from '/public/images/galery6.png'
import sqr1 from '@/assets/sqr1.png'
import sqr2 from '@/assets/sqr2.png'
import Image from "next/image";

const UserShortGallery = () => {


    return (
        <div className="flex justify-center relative px-4">

            <Image alt="" src={sqr1} className="lg:w-auto w-20 sm:block hidden absolute top-[48%] -left-[4%] z-20" />

            <div className="sm:w-[91%] w-full relative flex flex-col items-center">

                <Image alt="" src={sqr1} className="lg:w-auto sm:block hidden w-20 absolute top-0 right-[30%]" />
                <Image alt="" src={sqr2} className="lg:w-auto sm:block hidden w-20 absolute top-[8%] left-[20%]" />
                <Image alt="" src={sqr2} className="lg:w-auto sm:block hidden w-20 absolute lg:top-[13%] top-[16%] right-[6%]" />

                <div className="sm:my-12 my-6 mt-10">
                    <h1 className="xl:text-6xl md:text-5xl sm:text-4xl text-3xl font-semibold font-rational text-center">Users Shorts <br />Gallery</h1>
                </div>
                <div className="grid md:grid-cols-3 grid-cols-2 sm:gap-6 gap-3 md:mt-16 sm:mt-8 z-50">
                        <Image alt="" src={box1} className="w-full h-full" unoptimized />
                        <Image alt="" src={box2} className="w-full h-full" unoptimized />
                        <Image alt="" src={box3} className="w-full h-full" unoptimized />
                        <Image alt="" src={box4} className="w-full h-full" unoptimized />
                        <Image alt="" src={box5} className="w-full h-full" unoptimized />
                        <Image alt="" src={box6} className="w-full h-full" unoptimized />
                </div>

                <button className="px-10 py-3 font-raleway sm:my-20 my-8 rounded-full text-white gradient-button shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                    Explore more
                </button>
            </div>
        </div>
    );
};

export default UserShortGallery;
