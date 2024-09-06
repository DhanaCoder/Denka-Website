'use client';
import React, { useState } from 'react';
import { FiPlus } from "react-icons/fi";
import { HiOutlineMinus } from "react-icons/hi";
import { VscDebugBreakpointFunction } from "react-icons/vsc";


const FAQ = ({ type, faqs }) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="p-4 w-full ">
            {faqs.map((faq, index) => (
                <div key={index} className="mb-6 bg-white rounded-lg  w-full shadow-lg" >
                    <button
                        className="w-full text-left sm:px-8 py-3 px-2 sm:text-xl flex items-center justify-between font-semibold "
                        onClick={() => toggleAccordion(index)}
                    >
                        <span>{faq.question}</span>
                        <VscDebugBreakpointFunction className='text-3xl text-[#A1A1A1]' />
                    </button>
                    <div
                        className={`overflow-hidden transition-max-height duration-300 ease-in-out ${openIndex === index ? 'max-h-screen' : 'max-h-0'}`}
                    >
                        <p className="px-4 py-3 sm:px-8">{faq.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
