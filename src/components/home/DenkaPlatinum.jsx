"use client";
import Link from "next/link";
import { FaCheck } from "react-icons/fa";
import shade from '@/assets/shade-c.svg'
import Image from "next/image";

const DenkaPlatinum = () => {
    const platinumItems = [
        { id: 1, name: 'Dimensions & Weight:', text: "50 x 25 x 3.5 mm, 21 grams.", icon: <FaCheck /> },
        // { id: 2, name: ':', text: " ", icon: <FaCheck /> },
        { id: 2, name: 'Max Voltage Tolerance:', text: "No Limitations", icon: <FaCheck /> },
        { id: 3, name: 'Max Amperage Tolerance:', text: "No Limitations.", icon: <FaCheck /> },
        { id: 4, name: 'Max Heat Tolerance:', text: "~300°", icon: <FaCheck /> },
        { id: 5, name: 'Power Supply:', text: "Do not require a direct connection to a power supply", icon: <FaCheck /> },
        { id: 6, name: 'Standards:', text: " CE, RoHS, IEC: CISPR11.", icon: <FaCheck /> },
        { id: 7, name: 'Operational Frequency Range:', text: "150kHz ~ 30MHz.", icon: <FaCheck /> },
        { id: 8, name: 'Safety: ', text: "Asbestos & Radiation Free.", icon: <FaCheck /> },
        { id: 9, name: 'Contents:', text: "27 ceramic materials composition built with Nano-Crystalline Technology", icon: <FaCheck /> },
        { id: 10, name: 'Save up to 15% with Denka®:', text: "Make it up to 20% please", icon: <FaCheck /> }
    ];

    return (
        <div className="py-6 flex justify-center">
            <div className="sm:w-[90%] w-full font-raleway flex flex-col items-center">
                <div className="flex justify-center flex-col gap-12 mb-20 items-center">
                    <h1 className=" font-semibold font-rational text-center lg:text-6xl text-4xl ">
                        Denka®<br /> Platinum
                    </h1>
                    <Link href={'/products/cart'} className="px-10 py-3 rounded-full text-white gradient-button shadow-md hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out">
                        Buy Now
                    </Link>
                </div>
                <div className="flex px-4 w-full flex-wrap justify-center ">
                    <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4 relative">
                        {platinumItems.map((item) => (
                            <div key={item.id} className="flex items-start border-2 border-blueMain hover:bg-blueMain group  py-3 px-4 rounded-full">
                                <span className="bg-blueMain group-hover:bg-white group-hover:text-blueMain text-white sm:p-2 p-1.5 rounded-full">
                                    {item.icon}
                                </span>
                                <div className="ml-2 flex items-start flex-wrap gap-2">
                                    <h1 className="text-black group-hover:text-white font-semibold sm:text-base text-sm">{item.name}</h1>
                                    <p className="text-gray-700 group-hover:text-white sm:text-base text-sm">
                                        {item.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DenkaPlatinum;
