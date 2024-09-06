import React from 'react'
import Image from 'next/image'
import img from '@/assets/blog1.png'
import { FaRegUser } from "react-icons/fa6";
import { IoCalendarClearOutline } from 'react-icons/io5'
import { FaRegCommentAlt } from 'react-icons/fa'
import Link from 'next/link';
import icon from '@/assets/icon-comnt.svg'
import { MdReply } from "react-icons/md";


const BlogDetails = () => {
    return (
        <div className='flex flex-col gap-8'>

            <div className=' shadow-lg rounded-lg' >
                <div>
                    <Image alt='' src={img} className='w-full h-full rounded-t-lg' />
                </div>
                <div className='sm:p-6 p-4 bg-white flex flex-col gap-4 rounded-b-lg'>
                    <div className='flex items-center flex-wrap gap-y-3 gap-6'>
                        <div className='flex items-center gap-2'>
                            <FaRegUser className='text-blueMain' />
                            <p className='text-sm' >John Doe</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <IoCalendarClearOutline className='text-blueMain' />
                            <p className='text-sm' >01 Jan, 2024</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaRegCommentAlt className='text-blueMain' />
                            <p className='text-sm' >Comments (8)</p>
                        </div>
                    </div>
                    <h1 className='xl:text-3xl md:text-2xl text-xl font-semibold'> Harnessing the Power of Data Analytics</h1>
                    <p className='sm:text-base text-sm mt-4'>
                        The hustle and bustle of modern life, finding moments of serenity has become a rare and cherished pursuit.
                        As we navigate through the demands of work, family, and societal expectations, the need for a sanctuary
                        that nurtures our well-being has never been more crucial. Imagine a space that not only provides shelter
                        but also resonates.
                    </p>
                    <p className='sm:text-base text-sm mt-4'>
                        A Crystal Home is not just a physical structure; it&apos;s a philosophy—a conscious decision to infuse your living
                        space with positive energy, balance, and a touch of magic. The concept draws inspiration from the harmonious
                        coexistence of nature&apos;s elements, bringing together the solidity of earth, the fluidity of water, the
                        movement of air, and the power of fire.
                    </p>
                    <p className='sm:text-base text-sm mt-4 '>
                        The fire element symbolizes passion, energy, and transformation. In the context of a Crystal Home, it represents
                        the dynamic force that ignites your spirit and infuses every corner with warmth and vitality. Here&apos;s how you can
                        unleash the fire element within the crystal.
                    </p>

                    <div className='bg-lightGray py-5 px-8 rounded-lg' >
                        <p className='text-start ' style={{ fontStyle: 'italic' }}>Amidst the chaos of life, let your home be a crystal gentle dance of flames and the
                            energy of creating a haven of pure serenity and magic.</p>
                    </div>

                    <p className='sm:text-base text-sm mt-4'>
                        Create energy grids using crystals that resonate with the fire element. Incorporate stones like citrine,
                        carnelian, and clear quartz to amplify the fiery energy, fostering a sense of motivation, creativity, and empowerment.
                    </p>
                    <ul className='sm:text-base text-sm mt-4'>
                        <li>That extremely painful or again is there anyone.</li>
                        <li>Indignation and dislike men who are so beguiled and demoralized.</li>
                        <li>Desires these cases are perfectly simple easy distinguish.</li>
                        <li>That extremely painful or again that is there anyone.</li>
                    </ul>
                    <p className='sm:text-base text-sm mt-4'>
                        In conclusion, a Crystal Home is not merely a dwelling; it&apos;s a conscious choice to live with intention and create a haven
                        that resonates with your true essence. Unleash the fire within, and let the crystalline magic guide you on a journey of tranquility, and pure serenity.
                    </p>

                </div>
            </div>

            {/* comments */}
            <div className='bg-white shadow-lg p-4 sm:px-6 rounded-lg' >
                <h1 className='lg:text-2xl sm:text-xl text-lg font-semibold'>Comments  (03)</h1>
                <div className='mt-6' >
                    {
                        [1, 2, 3].map((e, i) => (
                            <div key={i} className='flex flex-col items-start gap-2 w-full'>
                                <div className='flex items-start gap-3 w-full'>
                                    <div >
                                        <Image alt='' src={icon} className='h-full sm:w-28 w-40' />
                                    </div>
                                    <div className='flex flex-col items-start gap-2 text-sm '>
                                        <div className='flex items-center gap-3'>
                                            <IoCalendarClearOutline className="text-blueMain text-sm" />
                                            <p className=''>01 Jan, 2024</p>
                                        </div>
                                        <h1 className='font-medium'>Adam Jhon</h1>
                                        <p>A Crystal Home is not merely a dwelling; it&apos;s a conscious choice to live with intentionn conclusion, a Crystal Home is not merely a dwelling; it&apos;s a conscious choice to live with intention</p>
                                        <div className='flex items-center gap-2'>
                                            <MdReply className='text-blueMain text-2xl' />
                                            <p>Reply</p>
                                        </div>
                                    </div>
                                </div>

                                <div className='h-[1px] bg-[#EBEBEB] w-full my-4' ></div>
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* leave comment form */}
            <div className='bg-white shadow-lg p-4 sm:px-6 rounded-lg' >
                <h1 className='lg:text-2xl sm:text-xl text-lg font-semibold'>Leave a Comment</h1>
                <p>Your email address will not be published. Required fields are marked.</p>
                <form action="" className='mt-8 flex flex-col gap-4' >
                    <div className='flex items-center gap-3 w-full'>
                        <input type="text" placeholder='Your Name' className='outline-none bg-[#F9F8FE7A] rounded-md py-3 px-3 w-full' name="" id="" />
                        <input type="email" placeholder='Email' className='outline-none bg-[#F9F8FE7A] rounded-md py-3 px-3 w-full' name="" id="" />
                    </div>
                    <textarea name="" rows={7} placeholder='Write  a Comment' className='outline-none bg-[#F9F8FE7A] rounded-md py-3 px-3 w-full' id=""></textarea>
                    <button className='bg-gradient-to-r w-fit mt-6 from-[#372DA7] to-[#8A73E8] text-white sm:py-3 py-2 sm:px-10 px-6 rounded-md' >
                        Post Comment
                    </button>
                </form>
            </div>
        </div>
    )
}

export default BlogDetails
