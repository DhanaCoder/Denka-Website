import FooterNavigation from '@/components/footer'
import { termsOfServiceData } from '@/data'
import Link from 'next/link'
import React from 'react'

const Page = () => {
    return (
        <div>
            {/* hero */}
            <div className="relative">
                <div className="absolute inset-0 bg-cover bg-center"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-[#8A73E8] to-[#FFFFFF] opacity-30"></div>
                <div className="sm:pt-[150px] pt-20 pb-12 text-center  flex flex-col items-center text-black">
                    <h1 className="font-semibold font-rational xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-black">Terms & Conditions</h1>
                    <p className="text-[#777777] font-rational font-normal text-xl my-2">Home {`>>`} Terms & Conditions</p>
                    {/* <Image alt='' src={text} className='lg:w-[25%] sm:w-[35%] w-[45%] h-full' /> */}
                </div>
            </div>

            <div className='w-full flex justify-center sm:py-12 py-6 px-6' >
                <div className='sm:w-[90%] w-full' >
                    <div className='flex flex-col items-center '>
                        <div className='sm:text-lg text-sm font-bold flex w-full flex-col items-start justify-start'>
                            <h1>Effective Date: 01/10/2024</h1>
                            <h1>Last Updated: 01/10/2024</h1>
                        </div>
                        <div className='md:w-[65%] sm:w-[80%] w-full sm:mt-8 mt-4'>
                            <p className='sm:text-base text-sm text-center'>
                                Welcome to huntproperty®! These Terms of Service (&quot;Terms&quot;) govern your access to and use of our
                                 website located at{/* <Link href={'https://www.y-denka.com/'}>https://www.y-denka.com/</Link>*/} (the &quot;Site&quot;). By accessing or using the Site, you 
                                agree to be bound by these Terms. If you do not agree to these Terms, please do not use the
                                Site.

                            </p>
                        </div>
                    </div>
                    <div className='flex flex-col items-center justify-center' >
                        <div className='mt-10 md:w-[80%] sm:w-[90%] w-full'>
                            {termsOfServiceData.map((section, index) => (
                                <div key={index} className="mb-6">
                                    <h2 className="sm:text-2xl text-xl font-bold mb-2">{section.heading}</h2>
                                    {section.subSections.map((subSection, subIndex) => (
                                        <div key={subIndex} className="mb-4">
                                            {subSection.title && (
                                                <h3 className="font-bold sm:text-xl text-lg">{subSection.title}</h3>
                                            )}
                                            <p className='sm:text-base text-sm'>{subSection.content}</p>
                                        </div>
                                    ))}
                                </div>
                            ))}
                            <div className="sm:mb-6 mb-3 text-justify">
                                <h2 className="sm:text-2xl text-xl font-bold ">13. Contact Us</h2>
                                <p>If you have any questions about these Terms, please contact us at:</p>
                                <div className="flex items-center gap-1 mt-3">
                                    <h3 className="font-semibold text-xl">Email:</h3>
                                    <p className='sm:text-base text-sm'>support@y-huntproperty.com</p>
                                </div>
                                <div className="flex items-center gap-1">
                                    <h3 className="font-semibold text-xl">Website:</h3>
                                    {/* <Link href={'https://www.y-denka.com/'} >https://www.y-denka.com/</Link> */}
                                </div>
                                <div className='text-lg font-semibold my-8'>
                                    <h1>----------------------------</h1>
                                    <h1>----------------------------</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <FooterNavigation/>
        </div>
    )
}

export default Page
