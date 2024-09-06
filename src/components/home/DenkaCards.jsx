'use client';
import Image from "next/image";
import card from '@/assets/card-rotate.png';
import { useState } from "react";
import shade from '@/assets/shade-c.svg';

const DenkaCards = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const imgData = [
        { img: 'https://imgur.com/eVnzIa2.png', id: 'img1' },
        { img: 'https://imgur.com/eVnzIa2.png', id: 'img2' },
        { img: 'https://imgur.com/eVnzIa2.png', id: 'img3' },
    ];

    const getRotationClass = (index) => {
        if (index === 1) return '-rotate-45';
        if (index === 2) return 'rotate-90';
        return '';
    };

    const activeRotationClass = getRotationClass(activeIndex);

    return (
        <div className="relative">

            <div className="flex items-center justify-center px-4 sm:py-20 py-8">
                <div className="flex flex-col items-center gap-16 justify-center w-full h-full relative">

                    {/* Active card */}
                    <div className="w-full flex justify-center px-10">
                        <Image
                            alt=""
                            src={imgData[activeIndex].img}
                            className={`transition-transform duration-500 ${activeRotationClass}`}
                            width={500}
                            height={500} 
                        />
                    </div>

                    {/* Shade images */}
                    <Image alt="" src={shade} className="w-full h-full absolute bottom-[10%] left-0" />
                    <Image alt="" src={shade} className="w-full h-full absolute -bottom-[40%] left-0" />

                    {/* Image selection area */}
                    <div className="flex items-center justify-center w-full sm:gap-8 gap-4">
                        {
                            imgData.map((e, i) => (
                                <div
                                    key={i}
                                    className={`relative sm:p-5 p-3 rounded-full cursor-pointer ${activeIndex === i ? 'bg-gradient-to-br from-[#8A73E8] to-[#372DA7]' : 'bg-white'}`}
                                    onClick={() => setActiveIndex(i)}
                                >
                                    {activeIndex !== i && <div className="bg-[#FFFFFFB2] shadow-lg z-50 absolute w-full h-full top-0 left-0 rounded-full" ></div>}
                                    <Image alt="" src={e.img} className={`transition-transform sm:block hidden duration-500 ${getRotationClass(i)}`} width={100} height={100} />
                                    <Image alt="" src={e.img} className={`transition-transform sm:hidden block duration-500 ${getRotationClass(i)}`} width={60} height={60} />
                                </div>
                            ))
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DenkaCards;
