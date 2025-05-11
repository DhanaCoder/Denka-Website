"use client";

import React from 'react'
import text from '@/assets/FAQ.svg'
import Image from 'next/image'
import FAQ from '@/components/faq/FAQ'
import { FAQs } from '@/data'
import shade from '@/assets/faqShade.svg'
import FooterNavigation from '@/components/footer'



const Page = () => {
    return (
        <div>
            {/* hero */}
            <div className="relative">
                <div className="absolute inset-0 bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A73E8] to-[#FFFFFF] opacity-30"></div>
                <div className="sm:pt-[150px] pt-20 pb-12 text-center  flex flex-col items-center text-black">
                    <h1 className="font-semibold font-rational xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-black">FAQ</h1>
                    <p className="text-[#777777] font-rational font-normal text-xl my-2">Home {`>>`} FAQ</p>
                    <Image alt='' src={text} className='lg:w-[25%] sm:w-[35%] w-[45%] h-full' />
                </div>
            </div>

            {/* main section */}
            <div className='sm:py-32 py-20 relative font-raleway flex justify-center px-4' >
                <div className='flex justify-center flex-col items-center lg:w-[70%] sm:w-[90%] w-full'>
                    <div className='flex flex-col z-50 items-center gap-6 '>
                        <h1 className='xl:text-5xl text-center font-semibold lg:text-4xl font-rational md:text-3xl text-2xl'>Frequently Asked Question</h1>
                        <p className='text-center sm:text-base text-sm'>Welcome to the Inca Platinum FAQ page! Find answers to common questions about our innovative energy-saving solutions, including product features, installation, support, and warranty. Use the search functionality for quick access to specific information, or browse our categorized Q&A below.</p>
                        <div className='bg-white p-2 shadow-md mt-2 rounded-lg lg:w-[60%] sm:w-[75%] w-[95%] flex items-center gap-3' >
                            <input type="text" placeholder='Type your question here' className='px-3 w-full py-2 sm:text-base text-xs' name="" id="" />
                            <button className='bg-gradient-to-r text-white from-[#372DA7] to-[#8A73E8] sm:px-6 px-3 sm:py-3 py-2 sm:text-base text-sm rounded-md'>Search</button>
                        </div>
                    </div>

                    <div className='absolute left-0 inset-0 top-0 w-full h-full z-30'>
                        <Image alt='' src={shade} className='w-full h-full' />
                    </div>

                    <div className='z-50 sm:mt-20 mt-12'>
                        <FAQ faqs={FAQs} />
                    </div>
                </div>
            </div>

            {/* footer */}
            <FooterNavigation/>
        </div>
    )
}

export default Page
