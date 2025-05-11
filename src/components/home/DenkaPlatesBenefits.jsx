import React from "react";
import Image from "next/image";
import circle from '@/assets/group-circle.png'
import shadeRight from '@/assets/shade-r.svg'
import shadeLeft from '@/assets/shade-l.svg'


const DenkaCard = () => {
  
  return (
    <div
      className="pt-10 bg-[#232323] sm:px-0 px-4 relative sm:min-h-screen min-h-[60vh] "
      id="hi"
    >
      <Image alt="" src={shadeRight} className="absolute -top-[30%] right-0" />
      <Image alt="" src={shadeLeft} className="absolute -bottom-[30%] left-0" />

      <div className="xl:container mx-auto">
        <h1 className="text-center font-rational lg:text-6xl sm:text-4xl text-2xl font-semibold text-white ">
          Key Benefits of <br />
          Huntproperty®
        </h1>

        <div className="sm:py-20 py-0">
          <div className="h-full w-full flex relative py-40 justify-center items-center">
            <div className=" w-[40%] relative">
              <Image alt="" src={circle} />
              {/* <Image
                className=" w-[95%] absolute bg-transparent top-[8%]   right-[3%] rounded-3xl animate-spin-slow"
                src="/images/card2.png"
                width={938}
                height={557}
                alt=""
              /> */}
            </div>
            <div className="w-full h-full absolute top-0 font-raleway left-0 ">
              <div
                className="flex items-start  flex-col absolute sm:top-[3%] top-[5%] left-1/2   -translate-x-1/2 xl:w-[28%] sm:w-[32%] w-[50%] bg-[#232323] sm:p-3 p-1 rounded-md"
                style={{ boxShadow: "0px 4px 10.3px 0px #8A73E88C" }}
              >
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Scalable Solutions:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                    Huntproperty.com delivers scalable software that grows with your business. Whether small or large, performance stays strong.
                </p>
              </div>

              {/* 1st text containe end  */}
              <div
                className="flex items-start flex-col absolute sm:right-[3%] -right-0 top-1/3  -translate-y-1/2 sm:w-[25%] w-[40%] bg-[#232323] sm:p-3 p-1 rounded-md"
                style={{ boxShadow: "0px 4px 10.3px 0px #8A73E88C" }}
              >
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Seamless Integration:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                    Huntproperty.com software easily integrates with your existing systems. Boost efficiency without workflow disruptions.

                </p>
              </div>
              {/* 2nd text containe end  */}
              <div
                className="flex items-start flex-col absolute sm:right-[6%] -right-0 bottom-1/3  translate-y-1/2 sm:w-[22%] w-[42%] bg-[#232323] sm:p-3 p-1 rounded-md"
                style={{ boxShadow: "0px 4px 10.3px 0px #8A73E88C" }}
              >
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Enhanced Security:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                    Huntproperty.com ensures enterprise-level security to protect your data. Stay secure and compliant at all times.
                </p>
              </div>
              {/* 3rd text containe end  */}

              <div
                className="flex items-start flex-col absolute sm:bottom-[3%] bottom-[5%] left-1/2  -translate-x-1/2 xl:w-[20%] sm:w-[25%] w-[40%] bg-[#232323] sm:p-3 p-1 rounded-md"
                style={{ boxShadow: "0px 4px 10.3px 0px #8A73E88C" }}
              >
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  24/7 Support:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                    Huntproperty.com provides round-the-clock support. Our experts are always ready to resolve your issues quickly.

                </p>
              </div>
              {/* 4th text containe end  */}
              <div
                className="flex items-start flex-col absolute sm:left-[3%] left-0 top-1/3  -translate-y-1/2 sm:w-[25%] w-[37%] bg-[#232323] sm:p-3 p-1 rounded-md"
                style={{ boxShadow: "0px 4px 10.3px 0px #8A73E88C" }}
              >
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Customizable Features:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                    Huntproperty.com software can be tailored to your unique needs. Flexible features adapt to your business model.
                </p>
              </div>
              {/* 5th text containe end  */}
              <div
                className="flex items-start flex-col absolute sm:left-[3%] left-0 bottom-1/3  translate-y-1/2 sm:w-[25%] w-[37%] bg-[#232323] sm:p-3 p-1 rounded-md"
                style={{ boxShadow: "0px 4px 10.3px 0px #8A73E88C" }}
              >
                <h3 className="text-white text-start font-rational text-[12px] min-[500px]:text-sm md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Cost Efficiency:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                    Huntproperty.com reduces costs through intelligent automation. Achieve more while spending less.
                </p>
              </div>
              {/* 6th text containe end  */}
            </div>
          </div>

          <div className="flex justify-center sm:mt-10 sm:pb-0 pb-10">
            <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-4 sm:w-[90%]">
              <div
                className="flex items-start flex-col bg-[#232323] p-3 rounded-md"
                style={{ boxShadow: "0px 4px 10.3px 0px #8A73E88C" }}
              >
                <h3 className="text-white text-start font-rational text-[12px]  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Regular Updates:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                    Huntproperty.com continuously improves its platform. Get new features and fixes without manual upgrades.
                </p>
              </div>

              <div
                className="flex items-start flex-col  bg-[#232323] p-3 rounded-md"
                style={{ boxShadow: "0px 4px 10.3px 0px #8A73E88C" }}
              >
                <h3 className="text-white text-start font-rational text-[12px]  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  User-Friendly Interface:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
                    Huntproperty.com software is intuitive and simple to use. No steep learning curves—just results.
                </p>
              </div>

              <div
                className="flex items-start flex-col bg-[#232323] p-3 rounded-md"
                style={{ boxShadow: "0px 4px 10.3px 0px #8A73E88C" }}
              >
                <h3 className="text-white text-start font-rational text-[12px]  md:text-base lg:text-lg xl:text-xl 2xl:text-2xl font-bold ">
                  Data-Driven Insights:{" "}
                </h3>
                <p className="text-white text-start md:text-sm sm:text-[10px] text-[8px] ">
  Huntproperty.com empowers you with actionable analytics. Make smarter business decisions faster.
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
