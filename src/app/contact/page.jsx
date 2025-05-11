"use client";

import React from 'react'
import text from '@/assets/Contact.svg'
import Image from 'next/image'
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { FaYoutube } from "react-icons/fa";
import Link from 'next/link';
import map from '@/assets/map.png'
import FooterNavigation from '@/components/footer';


const Page = () => {
    return (
        <div>
            {/* hero */}
            <div className="relative">
                <div className="absolute inset-0 bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A73E8] to-[#FFFFFF] opacity-30"></div>
                <div className="sm:pt-[150px] pt-20 pb-12 text-center  flex flex-col items-center text-black">
                    <h1 className="font-semibold font-rational xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-black">Contact</h1>
                    <p className="text-[#777777] font-rational font-normal text-xl my-2">Home {`>>`} Contact</p>
                    <Image alt='' src={text} className='w-[70%] h-full' />
                </div>
            </div>


            {/* main section */}
            <div className='flex font-rational justify-center py-16'>
                <div className='w-[90%] flex flex-col items-start gap-10' >

                    {/* form */}
                    <div className='flex md:flex-row flex-col items-start gap-5 w-full' >

                        <div className='bg-white p-4 md:w-[55%] w-full rounded-lg shadow-lg' >
                            <h1 className='text-blueMain font-semibold text-xl'>Get in Touch</h1>
                            <h1 className='lg:text-4xl sm:text-3xl font-semibold my-2'>Let’s Chat, Reach Out to us</h1>
                            <p className='text-gray sm:text-base text-sm'>Have question or feedbcack/ We’re  here to help. Send us a message, and we’ll respond back</p>
                            <div className='h-[1px] w-full bg-[#EBEBEB] my-5' ></div>

                            <form action="" className='flex flex-col gap-5 '>
                                <div className='flex items-center gap-3 w-full'>
                                    <div className='w-full'>
                                        <label htmlFor="" className=''>First Name</label>
                                        <input type="text" className='mt-2 bg-[#8A73E80D] w-full py-2 px-2 outline-none rounded-lg' name="" id="" />
                                    </div>
                                    <div className='w-full'>
                                        <label htmlFor="" className=''>Last Name</label>
                                        <input type="text" className='mt-2 bg-[#8A73E80D] w-full py-2 px-2 outline-none rounded-lg' name="" id="" />
                                    </div>
                                </div>

                                <div className='w-full'>
                                    <label htmlFor="" className=''>Email Adress</label>
                                    <input type="email" className='mt-2 bg-[#8A73E80D] w-full py-2 px-2 outline-none rounded-lg' name="" id="" />
                                </div>

                                <div className='w-full'>
                                    <label htmlFor="" className=''>Phone Number</label>
                                    <input type="text" className='mt-2 bg-[#8A73E80D] w-full py-2 px-2 outline-none rounded-lg' name="" id="" />
                                </div>

                                <div className='w-full'>
                                    <label htmlFor="" className=''>Message</label>
                                    <textarea name="" rows={7} className='mt-2 bg-[#8A73E80D] w-full py-2 px-2 outline-none rounded-lg' id=""></textarea>
                                </div>

                                <button className='bg-gradient-to-r from-[#372DA7] to-[#8A73E8] w-full py-2 text-white rounded-lg' >
                                    Submit
                                </button>
                            </form>
                        </div>

                        {/* socials */}
                        <div className='bg-white p-4 py-10 h-full rounded-lg md:w-[45%] w-full shadow-lg justify-between flex flex-col items-start gap-9'>
                            <div className='bg-lightGray py-4 rounded-lg w-full h-full flex flex-col items-center justify-center' >
                                <div className='flex flex-col items-center gap-3 '>
                                    <div className='bg-white p-2 rounded-md' >
                                        <FaEnvelope className='text-blueMain' />
                                    </div>
                                    <p>support@y-huntproperty.com</p>
                                </div>
                            </div>
                            {/* <div className='bg-lightGray py-4 rounded-lg w-full h-full flex flex-col items-center justify-center' >
                                <div className='flex flex-col items-center gap-3 '>
                                    <div className='bg-white p-2 rounded-md' >
                                        <FaPhone className='text-blueMain' />
                                    </div>
                                    <p>+09776655454</p>
                                </div>
                            </div> */}
                            <div className='bg-lightGray py-4 px-2 rounded-lg w-full h-full flex flex-col items-center justify-center' >
                                <div className='flex flex-col items-center gap-3 '>
                                    <div className='bg-white p-2 rounded-md' >
                                        <FaLocationDot className='text-blueMain' />
                                    </div>
                                    <p className='text-center'>Shinjuku Park Tower, Nishi Shinjuku, Shinjuku-ku, Tokyo, Japan.</p>
                                </div>
                            </div>
                            <div className='bg-lightGray py-4 rounded-lg w-full h-full flex flex-col items-center justify-center' >
                                <div className='flex flex-col items-center gap-3 '>
                                    <p className='text-center'>Social Links</p>
                                    <div className='flex items-center gap-2'>
                                        <Link target='_blank' href={'https://www.facebook.com/huntproperty.jp'} className='bg-white p-2 rounded-md' >
                                            <FaFacebookF className='text-blueMain' />
                                        </Link>
                                        <Link target='_blank' href={'https://www.linkedin.com/company/huntpropertyjp'} className='bg-white p-2 rounded-md' >
                                            <BiLogoLinkedinSquare className='text-blueMain' />
                                        </Link>
                                        <Link href={''} className='bg-white p-2 rounded-md' >
                                            <AiFillInstagram className='text-blueMain' />
                                        </Link>
                                        <Link href={''} className='bg-white p-2 rounded-md' >
                                            <FaXTwitter className='text-blueMain' />
                                        </Link>
                                        <Link href={''} className='bg-white p-2 rounded-md' >
                                            <FaYoutube className='text-blueMain' />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* map */}
                    <div className='bg-white  rounded-lg w-full shadow-lg' >
                        <Image alt='' src={map} className='w-full rounded-lg h-full' />
                    </div>
                </div>
            </div>

            {/* footer */}
            <FooterNavigation/>
        </div>
    )
}

export default Page
