import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { FaArrowRightLong } from 'react-icons/fa6'
import img from '@/assets/recent.png'
import Image from 'next/image'
import { IoPersonOutline } from 'react-icons/io5'

const Categories = () => {
    return (
        <div className='flex flex-col gap-8 font-raleway'>

            {/* categories */}
            <div className='bg-white shadow-lg rounded-lg py-5 lg:px-6 px-4' >
                <div className='border flex items-center gap-2 border-[#8A73E82B] rounded-md bg-[#F9F8FE36] p-2' >
                    <input type="text" placeholder='Enter Keyword' className='px-3 w-full outline-none' name="" id="" />
                    <button className='bg-gradient-to-r from-[#372DA7] to-[#8A73E8] text-white p1-3 px-2 py-1.5 rounded-md' >
                        Search
                    </button>
                </div>

                <div className='mt-8'>
                    <h1 className='lg:text-3xl sm:text-2xl text-xl font-bold'>Categories</h1>
                    <div className='flex flex-col gap-4 mt-5'>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8, 9].map((e, i) => (
                                <div key={i} className='bg-[#F9F8FE7A] flex text-gray items-center gap-3 justify-between w-full px-3 py-3 rounded-md' >
                                    <p className='text-gray sm:text-base text-sm'>Home Cleaning</p>
                                    <BsArrowRight className='text-2xl' />
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            <div className='bg-white shadow-lg rounded-lg py-5 lg:px-6 px-4'>
                <h1 className='lg:text-3xl sm:text-2xl text-xl font-bold'>Recent Posts</h1>
                <div className='flex flex-col gap-4 mt-5'>
                    {
                        [1, 2, 3, 4].map((e, i) => (
                            <div key={i} className='flex items-center gap-2'>
                                <div>
                                    <Image alt='' src={img} />
                                </div>
                                <div>
                                    <h1 className='xl:text-xl lg:text-lg text-base  font-semibold'>Harnessing the Power of Data Analytics</h1>
                                    <div className='flex items-center gap-2'>
                                        <IoPersonOutline className='text-blueMain' />
                                        <p>John Doe</p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className='bg-white shadow-lg rounded-lg py-5 lg:px-6 px-4'>
                <h1 className='lg:text-3xl sm:text-2xl text-xl font-bold'>Popular Tags</h1>
                <div className='flex items-center flex-wrap gap-3 mt-5'>
                    {
                        ['Popular Tags', 'Businesss Support', 'Digital Marketing', 'Customer Success', 'Industry Trends', 'Technology'].map((e, i) => (
                            <div key={i} className='bg-[#F9F8FE7A] px-6 py-3 rounded-md' >
                                {e}
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Categories
