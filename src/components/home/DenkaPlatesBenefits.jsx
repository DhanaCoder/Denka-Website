import React from "react";
import Image from "next/image";
import circle from '@/assets/group-circle.png'
import shadeRight from '@/assets/shade-r.svg'
import shadeLeft from '@/assets/shade-l.svg'


const DenkaCard = () => {
  
  return (
    <div className="pt-10 bg-[#232323] sm:px-0 px-4 relative sm:min-h-screen min-h-[60vh] " id="hi">
      <Image alt="" src={shadeRight} className="absolute -top-[30%] right-0" />
      <Image alt="" src={shadeLeft} className="absolute -bottom-[30%] left-0" />

      <div className="xl:container mx-auto">
        <h1 className="text-center font-rational lg:text-6xl sm:text-4xl text-2xl font-semibold text-white ">
          Key Benefits of <br />Denka®
        </h1>

        <div className="sm:py-20 py-0">
          <div className="h-full w-full flex relative py-40 justify-center items-center">
            <div className=" w-[40%] relative" >
              <Image alt="" src={circle} />
              <Image
                className=" w-[95%] absolute bg-transparent top-[8%]   right-[3%] rounded-3xl animate-spin-slow"
                src="/images/card2.png"
                width={938}
                height={557}
                alt=""
              />
            </div>
            <div className="w-full h-full absolute top-0 font-raleway left-0 ">
              
              <div className="flex items-start  flex-col absolute sm:top-[3%] top-[5%] left-1/2   -translate-x-1/2 xl:w-[28%] sm:w-[32%] w-[50%] bg-[#232323] sm:p-3 p-1 rounded-md" style={{boxShadow: '0px 4px 10.3px 0px #8A73E88C'}}>
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  No Power Cutoff Installation:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                  Denka® can be installed without the need for a power cutoff, ensuring
                  zero construction and minimal disruption.
                </p>
              </div>

              {/* 1st text containe end  */}
              <div className="flex items-start flex-col absolute sm:right-[3%] -right-0 top-1/3  -translate-y-1/2 sm:w-[25%] w-[40%] bg-[#232323] sm:p-3 p-1 rounded-md" style={{boxShadow: '0px 4px 10.3px 0px #8A73E88C'}}>
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Extended Lifespan:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                  Thanks to its ceramic material composition, Denka® boasts an impressive
                  lifespan of over 60 years.
                </p>
              </div>
              {/* 2nd text containe end  */}
              <div className="flex items-start flex-col absolute sm:right-[6%] -right-0 bottom-1/3  translate-y-1/2 sm:w-[22%] w-[42%] bg-[#232323] sm:p-3 p-1 rounded-md" style={{boxShadow: '0px 4px 10.3px 0px #8A73E88C'}}>
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Long-term Warranty:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                  We stand by our product with a robust warranty of over 25 years, giving you
                  peace of mind for decades.
                </p>
              </div>
              {/* 3rd text containe end  */}

              <div className="flex items-start flex-col absolute sm:bottom-[3%] bottom-[5%] left-1/2  -translate-x-1/2 xl:w-[20%] sm:w-[25%] w-[40%] bg-[#232323] sm:p-3 p-1 rounded-md" style={{boxShadow: '0px 4px 10.3px 0px #8A73E88C'}}>
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Energy Savings:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                  Denka® reduces electrical consumption by up to 20%, making your energy use much
                  more efficient.
                </p>
              </div>
              {/* 4th text containe end  */}
              <div className="flex items-start flex-col absolute sm:left-[3%] left-0 top-1/3  -translate-y-1/2 sm:w-[25%] w-[37%] bg-[#232323] sm:p-3 p-1 rounded-md" style={{boxShadow: '0px 4px 10.3px 0px #8A73E88C'}}>
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Load Lifespan Enhancement:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                  By reducing electrical noise, Denka® saves the lifespan of your
                  electrical loads by up to 30%.
                </p>
              </div>
              {/* 5th text containe end  */}
              <div className="flex items-start flex-col absolute sm:left-[3%] left-0 bottom-1/3  translate-y-1/2 sm:w-[25%] w-[37%] bg-[#232323] sm:p-3 p-1 rounded-md" style={{boxShadow: '0px 4px 10.3px 0px #8A73E88C'}}>
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Quick Payback Period:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                  Experience a maximum 1.5-year payback period, making Denka® a swift and
                  sound investment.
                </p>
              </div>
              {/* 6th text containe end  */}
            </div>
          </div>

          <div className="flex justify-center sm:mt-10 sm:pb-0 pb-10">
            
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-4 sm:w-[90%]" >
              
              <div className="flex items-start flex-col bg-[#232323] p-3 rounded-md" style={{boxShadow: '0px 4px 10.3px 0px #8A73E88C'}}>
                <h3 className="text-white text-start font-rational text-[12px]  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Money-Back Guarantee:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                  We offer a 60-day golden money-back guarantee, so you can make your
                  decision with confidence.
                </p>
              </div>

              <div className="flex items-start flex-col  bg-[#232323] p-3 rounded-md" style={{boxShadow: '0px 4px 10.3px 0px #8A73E88C'}}>
                <h3 className="text-white text-start font-rational text-[12px]  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Compatible with other Energy Solutions:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                  Whether you have LEDs, a PV system, or even low-pass
                  and/or EMI filters, Denka® Plate will still operate to give you an extra up to 20% savings!
                </p>
              </div>

              <div className="flex items-start flex-col bg-[#232323] p-3 rounded-md" style={{boxShadow: '0px 4px 10.3px 0px #8A73E88C'}}>
                <h3 className="text-white text-start font-rational text-[12px]  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  No Maintenance:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                  Denka® needs no maintenance nor periodic maintenance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DenkaCard;
