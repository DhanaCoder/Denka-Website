import React from 'react'
import img1 from '@/assets/blog1.png'
import img2 from '@/assets/blog2.png'
import img3 from '@/assets/blog3.png'
import Image from 'next/image'
import { FaRegUser } from "react-icons/fa6";
import { IoCalendarClearOutline } from 'react-icons/io5'
import { FaRegCommentAlt } from 'react-icons/fa'
import Link from 'next/link'


const BlogCard = () => {

    const data = [
        { img: img1, blogName: ' Harnessing the Power of Data Analytics', des: 'Data analytics is revolutionizing the way businesses operate. In this post, we explore how to harness the power of data to drive decision-making and growth.', userName: 'John Doe', date: 'John Doe', comments: 'Cooments (8)' },
        { img: img2, blogName: ' Harnessing the Power of Data Analytics', des: 'Data analytics is revolutionizing the way businesses operate. In this post, we explore how to harness the power of data to drive decision-making and growth.', userName: 'John Doe', date: 'John Doe', comments: 'Cooments (8)' },
        { img: img3, blogName: ' Harnessing the Power of Data Analytics', des: 'Data analytics is revolutionizing the way businesses operate. In this post, we explore how to harness the power of data to drive decision-making and growth.', userName: 'John Doe', date: 'John Doe', comments: 'Cooments (8)' },
    ]

    return (
        <div className='flex flex-col gap-4 font-raleway'>
            {
                data.map((e, i) => (
                    <div key={i} className=' shadow-lg rounded-lg' >
                        <div>
                            <Image alt='' src={e.img} className='w-full h-full rounded-t-lg' />
                        </div>
                        <div className='sm:p-6 p-4 bg-white flex flex-col gap-4 rounded-b-lg'>
                            <div className='flex items-center flex-wrap gap-y-3 gap-6'>
                                <div className='flex items-center gap-2'>
                                    <FaRegUser className='text-blueMain' />
                                    <p className='text-sm' >{e.userName}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <IoCalendarClearOutline className='text-blueMain' />
                                    <p className='text-sm' >{e.date}</p>
                                </div>
                                <div className='flex items-center gap-2'>
                                    <FaRegCommentAlt className='text-blueMain' />
                                    <p className='text-sm' >{e.comments}</p>
                                </div>
                            </div>
                            <h1 className='xl:text-3xl md:text-2xl text-xl font-rational font-semibold'>{e.blogName}</h1>
                            <p className='sm:text-base text-sm'>{e.des}</p>
                            <Link href={'/blog-detail'}>
                                <button className='bg-gradient-to-r from-[#372DA7] to-[#8A73E8] text-white sm:py-3 py-2 sm:px-10 px-6 rounded-md' >
                                    Read More
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogCard
