import Image from "next/image";
import card from '@/assets/CARD.png'
import MaxContainer from "../MaxContainer";


const HeroAfter = () => {
  return (
    <div className="w-full h-full flex justify-center md:py-32 py-12">
      <MaxContainer>
        <div className="flex items-center sm:w-[88%] w-full px-4 h-full md:flex-row flex-col  justify-between md:gap-8 gap-12">
          <div className="lg:w-[55%] md:w-1/2 font-raleway w-full h-full flex flex-col items-start gap-3" >
            <h1 className=" mb-5 font-semibold font-rational px-4 sm:text-3xl text-2xl lg:text-[48px]">
              What is Denka &#174;?
            </h1>
            <div className="flex flex-col items-start gap-3 xl:max-h-96 lg:max-h-80 max-h-64 px-4 pb-4 overflow-auto custom-scrollbar z-40 " style={{ direction: "rtl" }} >
            <p className=" text-sm md:text-base" style={{ direction: "ltr" }}>
                  So, what exactly is Denka? Let&apos;s break it down for you. Denka® is our state-of-the-art solution
                  designed to enhance power quality, making your energy use more efficient and sustainable. But how
                  does it work?
                </p>
                <p className=" text-sm md:text-base" style={{ direction: "ltr" }}>
                  Denka &#174; operates by adhering to the IEC standard CISPR 11, which is a global benchmark for
                  controlling conducted emissions. Conducted emissions are the unwanted electrical noises that
                  interfere with the smooth flow of electricity, often within the sine wave patterns. These disruptive
                  noises can significantly affect the power quality, causing inefficiencies and potential damage to
                  electrical loads.
                </p>
                <p className=" text-sm md:text-base" style={{ direction: "ltr" }}>
                  By following the IEC standard CISPR 11, Denka&#174; effectively reduces these conducted emissions.
                  This means that any noise within your power supply is minimized, leading to a cleaner and more
                  stable electrical flow.
                </p>
                <p className=" text-sm md:text-base" style={{ direction: "ltr" }}>
                  How does this benefit you? Reduced conducted emissions directly enhance the power quality of your
                  electrical systems. When you use Denka&#174;, you&apos;re not just lowering energy consumption—up to 20%,
                  in fact—but also extending the lifespan of your electrical loads by up to 30%. Imagine your home
                  appliances, industrial machines, and other electrical systems running smoothly, consuming less
                  power, and lasting longer.
                </p>
                <p className=" text-sm md:text-base" style={{ direction: "ltr" }}>
                  In short, Denka&#174; is your answer to efficient, sustainable, and high-quality power usage. Ready to
                  save energy, lower costs, and protect your appliances? Denka&#174; awaits! Join us in making smarter,
                  greener choices today.
                </p>
                <div className="flex mt-3 w-full justify-start" style={{ direction: "ltr" }}>
                  <button className="flex hover:shadow-xl hover:scale-105 sm:text-base text-sm items-center rounded-full px-10 py-3 justify-center gap-3  text-white gradient-button  shadow-md  transition duration-300 ease-in-out">
                    More about us
                  </button>
                </div>
            </div>
          </div>
          <div className=" items-center sm:flex hidden justify-center lg:w-[45%] md:w-1/2 md:py-0 py-14 w-full relative">
            <div className="circle-shadow sm:w-96 w-56 sm:h-96 h-56  main-linear-gradient rounded-full overflow-hidden relative">
              <div className="absolute inset-0 opacity-30 rounded-full"></div>
            </div>
            <Image
              height={400}
              width={400}
              alt="card"
              className="denkaCardImageRounded max-md:mx-auto"
              src="/images/card.png"
            />
          </div>
        </div>
      </MaxContainer>
    </div>
  );
};

export default HeroAfter;
