"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
//import { IoCartOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { usePathname } from "next/navigation";
import MaxContainer from "../MaxContainer";
import { motion } from "framer-motion"; // Import Framer Motion

const mainNavigationLinks = [
  { name: "Home", slug: "/" },
  { name: "About us", slug: "/about" },
  { name: "Products", slug: "/products" },
  { name: "Support and Services", slug: "/support" },
  { name: "Scheduling", slug: "/scheduling" },
  { name: "Contact us", slug: "/contact" },
  { name: "Blogs", slug: "/blogs" },
  { name: "FAQ", slug: "/faq" },
];

const MainNavbar = ({ className }) => {
  const [navShow, setNavShow] = useState(false);
  const pathname = usePathname();

  const handleNav = () => {
    setNavShow((prev) => !prev);
  };

  // Hide navbar on route change
  useEffect(() => {
    setNavShow(false);
  }, [pathname]);

  // Hide navbar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navShow && !event.target.closest(".navbar")) {
        setNavShow(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [navShow]);

  return (
    <div className="absolute bg-transparent flex justify-center px-4 py-1 z-50 w-full">
      <MaxContainer>
        <div className="flex relative items-center sm:w-[91%] w-full justify-between navbar">
          <Link href="/">
            <h2 className="text-white font-bold">HUNTPROPERTY</h2>
          </Link>
          {/* Desktop navigation */}
          <div className="lg:flex hidden justify-between  xl:w-[70%] w-[80%] items-start font-raleway">
            {mainNavigationLinks.map((navLink) => {
              const isActive =
                pathname === navLink.slug || pathname.startsWith(navLink.slug);
              return (
                <div
                  key={navLink.slug}
                  className={`after:absolute after:bottom-1 ${
                    isActive ? "after:w-full" : "after:w-0"
                  } relative lg:py-3.5 py-2 after:left-0 after:z-50 after:h-[3px] hover:xl:px-6 transition-all duration-500 ease-in-out after:rounded after:bg-white after:duration-200 hover:after:w-full`}
                >
                  <Link
                    className="relative px-2 py-1.5 text-black"
                    href={navLink.slug}
                  >
                    {navLink.name}
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Cart and Mobile Menu Button */}
          <div className="flex items-center gap-3">
            <Link
              href={"/products/cart"}
              className="bg-white p-0.5 rounded-full"
            >
              {/* <IoCartOutline className="text-[#777777] text-xl sm:text-2xl" /> */}
            </Link>
            <button
              onClick={handleNav}
              className="bg-white p-1.5 lg:hidden block rounded-full"
            >
              {navShow ? (
                <RxCross1 className="text-[#777777] text-xl sm:text-2xl" />
              ) : (
                <CgMenuRight className="text-[#777777] text-xl sm:text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {navShow && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 bg-black bg-opacity-45 lg:hidden flex z-40 justify-start"
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full pb-8 bg-white flex flex-col gap-8"
              >
                <div className="flex flex-col items-start gap-8 w-full">
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex items-center bg-gradient-to-b from-[#9089b5] to-[#cfd1d1] p-2 justify-between w-full"
                  >
                    {/* <Link href="/">
                      <Image
                        src="https://imgur.com/aW2K5LH.png"
                        unoptimized
                        alt="logo"
                        width={100}
                        height={100}
                      />
                    </Link> */}
                    <RxCross2
                      className="text-3xl cursor-pointer text-white"
                      onClick={handleNav}
                    />
                  </motion.div>
                  <div className="flex flex-col px-4 gap-4">
                    {mainNavigationLinks.map((navLink, index) => {
                      const isActive =
                        pathname === navLink.slug ||
                        pathname.startsWith(navLink.slug);
                      return (
                        <motion.div
                          key={navLink.slug}
                          initial={{ opacity: 0, x: -30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 * index }}
                          className={`after:absolute after:bottom-1 ${
                            isActive ? "after:w-full" : "after:w-0"
                          } relative py-1 pb-3 w-fit after:left-0 after:z-50 after:h-[3px] after:rounded after:bg-blueMain after:duration-200 hover:after:w-fit`}
                        >
                          <Link
                            className="relative px-2 py-1 text-black text-xl"
                            href={navLink.slug}
                          >
                            {navLink.name}
                          </Link>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </MaxContainer>
    </div>
  );
};

export default MainNavbar;
