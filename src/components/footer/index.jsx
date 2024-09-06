import Image from "next/image";
import Link from "next/link";
import logo from '/public/images/mainLogo.png'

const FooterNavigation = () => {
    const navigationLinks = [
        { name: "Home", slug: "/" },
        { name: "About us", slug: "/about" },
        { name: "Products", slug: "/products" },
        { name: "Support and Services", slug: "/support" },
        { name: "Contact us", slug: "/contact" },
        { name: "Blogs", slug: "/blogs" },
        { name: "FAQ", slug: "/faq" },
    ];

    const legalLinks = [
        { name: "Privacy Policy", slug: "/privacy-policy" },
        { name: "Terms and Conditions", slug: "/terms-condition" },
    ];

    const currentYear = new Date().getFullYear();

    return (
        <div className="relative bg-footer-bg bg-cover bg-no-repeat flex justify-center bg-center">
            <div className="pb-8 sm:pt-12 font-raleway pt-8 sm:w-[91%] w-full px-4">

                <div className="grid grid-cols-1 gap-x-4 gap-y-8  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                    <div className=" flex flex-col items-start space-y-4 lg:items-start md:w-full ">
                        <div className="">
                            <Image
                                className=" w-56"
                                src={logo}
                                unoptimized
                                alt="logo"
                                width={100}
                                height={100}
                            />
                        </div>
                        <p className="text-base text-gray-700 text-start lg:text-left">
                            Join the ever-growing community of satisfied customers who chose Denka® to save on
                            consumption, boost their power quality, and take a green step forward. By making the smart decision
                            to use Denka®, they not only enhance the performance of their electrical systems but also extend
                            the lifespan of their machines. Join us today and see the difference Denka® can make!
                        </p>
                    </div>

                    <div className=" flex flex-col sm:items-center  items-start  space-y-3  mt-5">
                        <div className="text-xl font-medium font-rational">QUICK LINKS</div>
                        <div className="flex flex-col items-start gap-3">
                            {
                                navigationLinks.map((link) => (
                                    <Link key={link.slug} href={link.slug} className="text-sm text-gray-500">{link.name}</Link>
                                ))
                            }
                        </div>
                    </div>

                    <div className=" flex flex-col items-start space-y-3 lg:items-start mt-5">
                        <div className="text-xl font-medium font-rational">Legals:</div>
                        {
                            legalLinks.map((link) => (
                                <Link key={link.slug} href={link.slug} className="text-sm text-gray-500">{link.name}</Link>
                            ))
                        }
                    </div>

                    <div className=" flex flex-col items-start space-y-3 lg:items-start mt-5">
                        <div className="text-xl font-medium font-rational">News Letter:</div>
                        <form className="flex w-full items-center justify-between gap-2 bg-white rounded-full py-3 px-3 ">
                            <input type="email" className="px-2 w-full py-1 outline-none" placeholder="Your Email" name="" id="" />
                            <button type="submit" className="gradient-button text-white px-3 py-2 rounded-full">Subcribe</button>
                        </form>
                    </div>
                </div>
                <div className="mx-auto text-black pt-8 text-center text-sm">
                    &copy; {currentYear} Denka Technology
                </div>
            </div>
        </div>

    );
};

export default FooterNavigation;
