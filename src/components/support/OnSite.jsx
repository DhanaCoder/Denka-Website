import Image from "next/image";
import banner from '@/assets/suport-banner.png'
import shade from '@/assets/shade-c.svg'


const OnSite = () => {
  return (
    <div className="w-full font-rational sm:pt-[107px] overflow-hidden pt-12 relative md:px-[100px] sm:px-12 px-4 bg-[#232323]">
      <h1 className="text-center lg:text-5xl sm:text-3xl text-2xl text-white font-semibold">
        Scheduling for On-site <br />
        Support
      </h1>

      <Image alt="" src={shade} className="absolute -top-[15%] w-[35%] -left-[10%]" />
      <Image alt="" src={shade} className="absolute -top-[0] w-[35%] -right-[10%]" />
      <Image alt="" src={shade} className="absolute -bottom-[15%] w-[35%] right-[35%]" />

      {/* desktop view */}
      <div className="py-40 relative sm:block hidden">
        <div className="flex flex-col absolute lg:left-[26%] left-[18%] top-[15%] items-center gap-2 xl:w-[20%] lg:w-[25%] w-[30%] text-white">
          <h1 className="lg:text-lg sm:text-base text-sm font-semibold text-center">Confirmation</h1>
          <p className="lg:text-sm sm:text-xs text-[10px] text-center"> Our team will review your request and contact you to confirm the schedule.</p>
        </div>
        <div className="flex flex-col absolute lg:right-0 -right-[5%] top-[15%] items-center gap-2 xl:w-[20%] lg:w-[25%] w-[30%] text-white">
          <h1 className="lg:text-lg sm:text-base text-sm font-semibold text-center">Service Delivery</h1>
          <p className="lg:text-sm sm:text-xs text-[10px] text-center"> Our technicians will arrive on the scheduled date to provide the necessary support.</p>
        </div>
        <Image alt="" src={banner} className="w-full h-full" />
        <div className="flex flex-col absolute lg:left-0 -left-[5%] bottom-[15%] items-center gap-2 xl:w-[20%] lg:w-[25%] w-[30%] text-white">
          <h1 className="lg:text-lg sm:text-base text-sm font-semibold text-center">Submit a Request:</h1>
          <p className="lg:text-sm sm:text-xs text-[10px] text-center">Fill out our <span className="underline">On-site Support Request Form</span> with your details and preferred dates.</p>
        </div>
        <div className="flex flex-col absolute lg:right-[26%] right-[20%] bottom-[15%] items-center gap-2 xl:w-[20%] lg:w-[25%] w-[30%] text-white">
          <h1 className="lg:text-lg sm:text-base text-sm font-semibold text-center">Arrangement:</h1>
          <p className="lg:text-sm sm:text-xs text-[10px] text-center"> Once confirmed, we will coordinate the travel and accommodation arrangements.</p>
        </div>
      </div>

      {/* mboile view  */}
      <div className="py-12 sm:hidden grid grid-cols-2 gap-8">
        <div className="flex flex-col   gap-2 text-white">
          <h1 className="text-base font-semibold ">Confirmation</h1>
          <p className="text-sm "> Our team will review your request and contact you to confirm the schedule.</p>
        </div>
        <div className="flex flex-col   gap-2 text-white">
          <h1 className="text-base font-semibold ">Service Delivery</h1>
          <p className="text-sm "> Our technicians will arrive on the scheduled date to provide the necessary support.</p>
        </div>
        <div className="flex flex-col  gap-2  text-white">
          <h1 className="text-base font-semibold ">Submit a Request:</h1>
          <p className="text-sm ">Fill out our <span className="underline">On-site Support Request Form</span> with your details and preferred dates.</p>
        </div>
        <div className="flex flex-col  gap-2  text-white">
          <h1 className="text-base font-semibold ">Arrangement:</h1>
          <p className="text-sm "> Once confirmed, we will coordinate the travel and accommodation arrangements.</p>
        </div>
      </div>
    </div>
  );
};

export default OnSite;
