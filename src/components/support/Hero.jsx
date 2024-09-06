import text from '@/assets/support.svg'
import Image from 'next/image';


const SupportHero = () => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-[#8A73E8] to-[#FFFFFF] opacity-30"></div>
        <div className="sm:pt-[150px] pt-20 pb-12 text-center  flex flex-col items-center text-black">
          <h1 className="font-semibold font-rational xl:text-6xl md:text-5xl sm:text-4xl text-3xl text-black">Support and Services</h1>
          <p className="text-[#777777] font-rational font-normal text-xl my-2">Home {`>>`} Support & Services</p>
          <Image alt='' src={text} className='sm:w-[80%] w-[90%] h-full' />
        </div>
      </div>
      <div className='flex justify-center px-4 font-raleway'>
        <div className="bg-white md:w-[85%] w-full sm:my-20 my-12 relative grid md:grid-cols-2 grid-cols-1 lg:gap-x-20 gap-y-10 gap-x-12 ">
          <div className=" text-black relative">
            <div className="w-40 h-40 bg-[#8A73E8] absolute right-0 top-[30%] rounded-full filter blur-[90px]"></div>
            <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl font-rational txt-2xl font-semibold">Online Support</h1>
            <p className="mt-4 sm:text-base text-sm">
              We offer comprehensive online support at no additional cost. Our
              dedicated team is available to assist you with any issues or
              questions you may have. To access our online support:
            </p>
            <div className="flex flex-col sm:text-base text-sm gap-3">
              <p className="mt-6">
                Visit our{" "}
                <span className="text-purple-500 underline">FAQ Page</span>.
              </p>
              <p className="">
                Visit our{" "}
                <span className="text-purple-500 underline">Documentation Page</span>.
              </p>
              <p>
                Chat with us now!
              </p>
              <p>
                Or, Schedule online session with our team
              </p>
            </div>
          </div>
          <div className=" text-black">
            <div className="w-40 h-40 bg-[#8A73E8] absolute  md:right-0 right-[50%] md:top-[10%] sm:top-[60%] top-[80%] rounded-full filter blur-[90px]"></div>
            <h1 className="xl:text-5xl lg:text-4xl sm:text-3xl txt-2xl font-rational font-semibold">On-site Support Details</h1>
            <p className="mt-4 sm:text-base text-sm">
              For more personalized assistance, we provide on-site support
              services. This premium service includes:
            </p>
            <div className="flex flex-col mt-4 gap-3 sm:text-base text-sm">
              <p>On-Site installation Services</p>
              <p> Site Surveys </p>
              <p>Meeting Handling (For business Partners)</p>
              <p>Training Service</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportHero;
