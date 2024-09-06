import React from 'react'
import text from '@/assets/Scheduling.svg'
import Image from 'next/image'
import icon1 from '@/assets/schedul1.svg'
import icon2 from '@/assets/schedul2.svg'
import icon3 from '@/assets/schedul3.svg'
import icon4 from '@/assets/schedul4.svg'
import shade from '@/assets/meat-shade.svg'
import shade2 from '@/assets/shade-c.svg'
import meatBanner from '@/assets/meat2.png'
import Link from 'next/link'
import FooterNavigation from '@/components/footer'


const Page = () => {

    const data = [
        { icon: icon1, name: 'Simple Scheduling', des: 'Quickly schedule meetings by selecting available time slots.' },
        { icon: icon2, name: 'Auto-Generated Meeting Links:', des: 'Each scheduled meeting comes with a unique, auto-generated meeting link for easy access.' },
        { icon: icon3, name: 'Calendar Integration', des: 'Sync your meetings with your preferred calendar (Google Calendar, Outlook, etc.) for seamless organization.' },
        { icon: icon4, name: 'Reminders and Notifications', des: 'Receive automatic reminders and notifications to ensure you never miss a meeting.' },
    ]

    return (
        <div className=''>

            {/* hero */}
            <div className="relative">
                <div className="absolute inset-0 bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A73E8] to-[#FFFFFF] opacity-30"></div>
                <div className="sm:pt-[150px] pt-20 pb-12 text-center  flex flex-col items-center text-black">
                    <h1 className="font-semibold font-rational xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-black">Scheduling</h1>
                    <p className="text-[#777777] font-rational font-normal text-xl my-2">Home {`>>`} Scheduling</p>
                    <Image alt='' src={text} className='w-[70%] h-full' />
                </div>
            </div>

            {/* cards */}
            <div className='flex justify-center sm:my-20 my-10 px-4 font-raleway'>
                <div className='xl:w-[80%] md:w-[90%] w-full flex flex-col items-center'>
                    <div className='sm:w-[70%] w-full  flex flex-col items-center'>
                        <h1 className='xl:text-5xl lg:text-4xl sm:text-3xl text-2xl text-center font-rational font-semibold'>Meeting Scheduling System</h1>
                        <p className='sm:text-base text-sm text-center mt-4'>Our meeting scheduling system makes it easy to arrange and manage your appointments with just a few clicks. This system includes:</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-6 grid-cols-1 mt-10">
                        {
                            data.map((e, i) => (
                                <div key={i} className='bg-white p-2 px-4 gap-4 rounded-lg pr-6 shadow-lg flex items-center' >
                                    <div className='bg-[#8A73E8] p-3 rounded-md' >
                                        <Image alt='' src={e.icon} className={`${(i == 2 || i == 1) ? 'w-20' : i == 3 ? 'w-[70px]' : 'w-auto'}  `} />
                                    </div>
                                    <div>
                                        <h1 className='xl:text-2xl lg:text-xl text-lg font-semibold font-rational'>{e.name}</h1>
                                        <p className='sm:text-base text-xs leading-tight mt-1'>{e.des}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

            {/* schedule meating  */}
            <div className='bg-[#232323] font-raleway overflow-hidden  relative sm:py-16 py-8 md:px-16 sm:px-8 px-4 text-white flex flex-col w-full items-center'>
                <h1 className='xl:text-5xl md:text-4xl text-2xl font-rational text-center font-semibold'>How to Schedule a Meeting</h1>

                <Image alt='' src={shade2} className='absolute w-[50%] -top-[10%] -left-[10%]' />

                {/* schedule meating desktop */}
                <div className="py-40 relative w-full sm:block hidden">
                    <div className="flex flex-col absolute lg:left-[30%] left-[25%] top-[10%] items-start gap-2 xl:w-[30%] lg:w-[25%] w-[30%] text-white">
                        <h1 className="lg:text-lg sm:text-base text-sm font-rational font-semibold text-start">Enter Your Details</h1>
                        <p className="lg:text-sm sm:text-xs text-[10px] text-start"> Provide your name, email, and any relevant information.</p>
                    </div>
                    <div className="flex flex-col absolute lg:right-[10%] right-[2%] top-[10%] items-start gap-2 xl:w-[22%] lg:w-[25%] w-[30%] text-white">
                        <h1 className="lg:text-lg sm:text-base text-sm font-rational font-semibold text-start">Receive Confirmation</h1>
                        <p className="lg:text-sm sm:text-xs text-[10px] text-start"> You will receive a confirmation email with the auto-generated meeting link and details.</p>
                    </div>
                    <Image alt='' src={meatBanner} className='w-full h-full' />
                    <div className="flex flex-col absolute lg:left-[12%] left-[5%] bottom-[9%] items-start gap-2 xl:w-[20%] lg:w-[25%] w-[30%] text-white">
                        <h1 className="lg:text-lg sm:text-base text-sm font-rational font-semibold text-start">Choose a Date and Time</h1>
                        <p className="lg:text-sm sm:text-xs text-[10px] text-start">Select your preferred date and time from the available slots.</p>
                    </div>
                    <div className="flex flex-col absolute lg:right-[24%] right-[18%] bottom-[9%] items-start gap-2 xl:w-[20%] lg:w-[25%] w-[30%] text-white">
                        <h1 className="lg:text-lg sm:text-base text-sm font-rational font-semibold text-start">Confirm</h1>
                        <p className="lg:text-sm sm:text-xs text-[10px] text-start">  Confirm the details and submit your request.</p>
                    </div>
                </div>

                {/* schedule meating mobile view */}
                <div className="py-12 font-raleway sm:hidden grid grid-cols-2 text-white gap-8">
                    <div className="flex flex-col   gap-2">
                        <h1 className='font-bold text-xl font-rational' >01</h1>
                        <h1 className="lg:text-lg sm:text-base text-sm font-rational font-semibold text-start">Enter Your Details</h1>
                        <p className="lg:text-sm sm:text-xs text-[10px] text-start"> Provide your name, email, and any relevant information.</p>
                    </div>
                    <div className="flex flex-col   gap-2">
                        <h1 className='font-bold font-rational text-xl' >02</h1>
                        <h1 className="lg:text-lg sm:text-base text-sm font-rational font-semibold text-start">Receive Confirmation</h1>
                        <p className="lg:text-sm sm:text-xs text-[10px] text-start"> You will receive a confirmation email with the auto-generated meeting link and details.</p>
                    </div>
                    <div className="flex flex-col  gap-2 ">
                        <h1 className='font-bold font-rational text-xl' >03</h1>
                        <h1 className="lg:text-lg sm:text-base text-sm font-rational font-semibold text-start">Choose a Date and Time</h1>
                        <p className="lg:text-sm sm:text-xs text-[10px] text-start">Select your preferred date and time from the available slots.</p>
                    </div>
                    <div className="flex flex-col  gap-2 ">
                        <h1 className='font-bold font-rational text-xl' >04</h1>
                        <h1 className="lg:text-lg sm:text-base text-sm font-rational font-semibold text-start">Confirm</h1>
                        <p className="lg:text-sm sm:text-xs text-[10px] text-start">  Confirm the details and submit your request.</p>
                    </div>
                </div>

                {/* schedule */}
                <div className='flex flex-col font-raleway items-center gap-4 pb-10 mt-10 w-full '>
                    <h1 className='xl:text-5xl z-50 md:text-4xl font-rational text-2xl text-center font-semibold'>Schedule a Meeting Now</h1>
                    <button className="rounded-full z-50 mt-6 bg-gradient-to-l from-[#8A73E8]  to-[#372DA7]  underline px-4 py-2 md:py-3 sm:w-80 w-60  text-white text-sm md:text-base">
                        Schedule Meating
                    </button>
                    <p className='z-50 text-center'>For any questions or assistance with scheduling, please visit our <Link href={'/faq'} className='underline' >FAQ</Link> section or <Link href={'/contact'} className='underline'>contact us</Link> directly.</p>
                    <div className='absolute w-full h-full top-[58%] z-20 left-0'>
                        <Image alt='' src={shade} className='h-[50%]' />
                    </div>
                </div>
            </div>

            {/* footer */}
            <FooterNavigation/>

        </div>
    )
}

export default Page
