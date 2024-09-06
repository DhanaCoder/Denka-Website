import Image from "next/image"
import card from '@/assets/sale-card.png'
import Link from "next/link";


const DiscountOffer = () => {
    return (

        <div className="relative  bg-no-repeat bg-cover bg-sale-bg mt-20">
            <div className="flex items-center lg:px-0 px-4 py-8 justify-between">
                <div className="sm:w-[65%] w-full lg:pl-20  lg:pr-8 flex sm:items-start items-center flex-col ">
                    <h1 className="xl:text-8xl lg:text-6xl whitespace-nowrap md:text-4xl sm:text-3xl text-xl leading-normal sm:text-start text-center font-rational font-semibold">
                    Save up to 20%
                    </h1>
                    <h1 className="xl:text-6xl lg:text-5xl md:text-4xl sm:text-3xl text-xl xl:leading-snug sm:text-start text-center font-rational font-semibold">
                        Immediately With Denka®
                    </h1>
                    <Link href={'/products/cart'} className="px-10 mt-12 py-3 font-raleway sm:text-base text-sm rounded-full text-white gradient-button shadow-md hover:shadow-xl transition duration-300 ease-in-out">
                        Buy Now
                    </Link>
                </div>
                <div className="w-[35%] h-full sm:block hidden">
                    <Image alt="" src={card} className="w-full h-full" />
                </div>

            </div>
        </div>
    );
};

export default DiscountOffer;
