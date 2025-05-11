"use client";

import React from 'react'
import text from '@/assets/Blog.svg'
import Image from 'next/image'
import BlogCard from '@/components/blog/BlogCard'
import Categories from '@/components/blog/Categories'
import FooterNavigation from '@/components/footer'


const Page = () => {
    return (
        <div>
            {/* hero */}
            <div className="relative">
                <div className="absolute inset-0 bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A73E8] to-[#FFFFFF] opacity-30"></div>
                <div className="sm:pt-[150px] pt-20 pb-12 text-center  flex flex-col items-center text-black">
                    <h1 className="font-semibold font-rational xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-black">Blog</h1>
                    <p className="text-[#777777] font-rational font-normal text-xl my-2">Home {`>>`} Blog</p>
                    <Image alt='' src={text} className='lg:w-[18%] sm:w-[30%] w-[35%]' />
                </div>
            </div>

            {/* main section */}
            <div className='flex justify-center py-20 px-4'>
                <div className='flex sm:w-[91%] w-full items-start md:flex-row flex-col lg:gap-10 gap-8 ' >
                    <div className='md:w-[60%] w-full' >
                        <BlogCard />
                    </div>
                    <div className='md:w-[40%] w-full' >
                        <Categories />
                    </div>
                </div>
            </div>

            {/* footer */}
            <FooterNavigation />
        </div>
    )
}

export default Page
