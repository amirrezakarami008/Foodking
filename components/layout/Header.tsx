"use client";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowLeft, FaBars, FaSearch, FaShoppingBasket } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import HeaderSecond from "./HeaderSecond";

export default function Header() {
  const [showBox, setShowBox] = useState(false);
  const [showBox2, setShowBox2] = useState(false);
  const [showBox3, setShowBox3] = useState(false);
  const [showBox10, setShowBox10] = useState(false);
  const [showBox20, setShowBox20] = useState(false);

  const curentUrl = usePathname();
  const heroRef = useRef<HTMLDivElement>(null);
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowSticky(!entry.isIntersecting);
      },
      {
        threshold: 0.1
      }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  return (
    <header>
      {curentUrl === "/" ? (
        <section className=" bg-[url('https://t-theme.com/foodking/wp-content/uploads/2024/02/hero-bg-3.jpg')]  bg-cover bg-center ">
          <div ref={heroRef} className={` ${curentUrl == "/" ? "border-b-[1px] border-[#f4f1ea42] " : " border-none "} `}>
            <div className={`  text-[#fcfbfe] mx-auto max-w-[82rem] py-[1rem] items-center flex justify-between px-[1.5rem] `}>
              <div className=" flex items-center gap-[2rem] xl:gap-[5rem] ">
                <button className=" outline-none rounded-md  transition-all ease delay-200 cursor-pointer hover:bg-[#00813D] bg-[#D12525] xl:flex hidden  items-center justify-center gap-[.5rem] border-[1px] border-[#ffff] text-center px-[1rem] w-[15rem] py-[1rem] pb-[1.3rem] font-bold ">
                  اکنون سفارش دهید
                  <span>
                    <FaTruckFast size={22} />{" "}
                  </span>{" "}
                </button>
                <FaBars className=" block xl:hidden cursor-pointer " size={30} color="#ffff" />
                <div className=" flex items-center gap-[1.5rem] relative  ">
                  <div className=" bg-[#200707cc] top-[-.4rem] left-[-.5rem] absolute  w-[1rem] text-[.6rem] pb-[.1rem] pr-[.1rem] rounded-[.5rem] h-[1rem] xl:flex hidden  justify-center items-center text-[#fcfbfe] ">0</div>
                  <FaShoppingBasket className=" xl:flex hidden  cursor-pointer " size={20} />
                  <FaSearch className=" cursor-pointer " size={18} />
                </div>
              </div>
              <div className="  xl:flex hidden  gap-[2rem] relative ">
                <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-semibold" href="/contact">
                  تماس باما{" "}
                </Link>

                <div
                  className="relative z-[100000]"
                  onMouseEnter={() => {
                    setShowBox10(true);
                    setShowBox2(false);
                    setShowBox20(false);
                  }}
                  onMouseLeave={() => setShowBox10(false)}
                >
                  <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox10 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    فروشگاه
                  </span>

                  <AnimatePresence>
                    {showBox10 && (
                      <motion.div className="absolute right-[-2.5rem] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                        <ul className="flex flex-col text-right text-[#212121]">
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                            <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                          </Link>
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                            <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                          </Link>
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                            <span className="  font-semibold    px-[1rem]  ">گالری</span>
                          </Link>
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                            <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                          </Link>
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                            <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                          </Link>
                          <Link onClick={() => setShowBox10(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
                            <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
                          </Link>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  className="relative z-[100000]"
                  onMouseEnter={() => {
                    setShowBox2(true);
                    setShowBox20(false);
                    setShowBox10(false);
                  }}
                  onMouseLeave={() => setShowBox2(false)}
                >
                  <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox2 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    بلاگ
                  </span>

                  <AnimatePresence>
                    {showBox2 && (
                      <motion.div className="absolute right-[-2.5rem] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                        <ul className="flex flex-col text-right text-[#212121]">
                          <Link onClick={() => setShowBox2(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
                            <span className="  font-semibold    px-[1rem]  "> وبلاگ </span>
                          </Link>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  className="relative z-[100000]"
                  onMouseEnter={() => {
                    setShowBox20(true);
                    setShowBox2(false);
                    setShowBox10(false);
                  }}
                  onMouseLeave={() => setShowBox20(false)}
                >
                  <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-semibold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox20 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                    فروشگاه
                  </span>

                  <AnimatePresence>
                    {showBox20 && (
                      <motion.div className="absolute right-[-2.5rem] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                        <ul className="flex flex-col text-right text-[#212121]">
                          <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                            <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                          </Link>
                          <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                            <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                          </Link>
                          <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                            <span className="  font-semibold    px-[1rem]  ">گالری</span>
                          </Link>
                          <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                            <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                          </Link>
                          <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                            <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                          </Link>
                          <Link onClick={() => setShowBox20(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
                            <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
                          </Link>
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-semibold" href={"/about-us"}>
                  درباره ما{" "}
                </Link>

                <Link className="   cursor-pointer   gap-[.2rem] font-semibold  flex  items-center flex-row-reverse " href={"/"}>
                  <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> صفحه اصلی</span>
                </Link>
              </div>
              <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_18-transformed.png" alt="" />
            </div>
          </div>
          <AnimatePresence>
            {showSticky && (
              <motion.div initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -80, opacity: 0 }} transition={{ duration: 0.3 }} className="fixed top-0 left-0 w-full bg-white shadow-xl z-50 px-4 py-3">
                <div className=" bg-[#ffff]  ">
                  <div className={` z-[100000]  ${curentUrl == "/" ? "border-b-[1px] border-[#f4f1ea42] " : " border-none "} `}>
                    <div className={`  text-[#fcfbfe] mx-auto max-w-[82rem] py-[.4rem] items-center flex justify-between   `}>
                      <div className=" flex items-center gap-[5rem] md:gap-[1.5rem] ">
                        <FaBars className=" block xl:hidden cursor-pointer " size={30} color="#212121" />
                        <button className=" rounded-md outline-none  transition-all ease delay-200 cursor-pointer hover:bg-[#00813D] bg-[#D12525] hidden  md:flex items-center justify-center gap-[.5rem] border-[1px] border-[#ffff] text-center px-[1rem] w-[15rem] py-[1rem] pb-[1.3rem] font-bold ">
                          اکنون سفارش دهید
                          <span>
                            <FaTruckFast size={22} />{" "}
                          </span>{" "}
                        </button>
                        <div className=" hidden xl:flex items-center gap-[1.5rem] relative  ">
                          <div className=" bg-[#212121] cursor-pointer top-[-.4rem] left-[-.5rem] absolute  w-[1rem] text-[.6rem] pb-[.1rem] pr-[0rem] rounded-[.5rem] h-[1rem] flex justify-center items-center text-[#fcfbfe] ">0</div>
                          <FaShoppingBasket className="  text-[#D12525] cursor-pointer " size={20} />
                          <FaSearch className="  text-[#D12525] cursor-pointer " size={18} />
                        </div>
                      </div>
                      <div className=" hidden xl:flex text-[#212121] gap-[2rem] relative ">
                        <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-semibold" href="/contact">
                          تماس باما{" "}
                        </Link>

                        <div
                          className="relative z-[100000]"
                          onMouseEnter={() => {
                            setShowBox(true);
                            setShowBox2(false);
                            setShowBox20(false);
                          }}
                          onMouseLeave={() => setShowBox(false)}
                        >
                          <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            فروشگاه
                          </span>

                          <AnimatePresence>
                            {showBox && (
                              <motion.div className="absolute right-[-2.5rem] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                <ul className="flex flex-col text-right text-[#212121]">
                                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                                    <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                                  </Link>
                                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                                    <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                                  </Link>
                                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                                    <span className="  font-semibold    px-[1rem]  ">گالری</span>
                                  </Link>
                                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                                    <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                                  </Link>
                                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                                    <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                                  </Link>
                                  <Link onClick={() => setShowBox(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
                                    <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
                                  </Link>
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div
                          className="relative z-[100000]"
                          onMouseEnter={() => {
                            setShowBox2(true);
                            setShowBox20(false);
                            setShowBox10(false);
                          }}
                          onMouseLeave={() => setShowBox2(false)}
                        >
                          <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox2 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            بلاگ
                          </span>

                          <AnimatePresence>
                            {showBox2 && (
                              <motion.div className="absolute right-[-2.5rem] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                <ul className="flex flex-col text-right text-[#212121]">
                                  <Link onClick={() => setShowBox2(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
                                    <span className="  font-semibold    px-[1rem]  "> وبلاگ </span>
                                  </Link>
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <div
                          className="relative z-[100000]"
                          onMouseEnter={() => {
                            setShowBox3(true);
                            setShowBox2(false);
                            setShowBox10(false);
                          }}
                          onMouseLeave={() => setShowBox3(false)}
                        >
                          <span className="flex items-center cursor-pointer gap-[.2rem] hover:text-[#00813D] transition ease-in-out duration-200 font-semibold">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`${showBox3 ? "rotate-180" : ""} transition-transform duration-500 mt-[.4rem] size-[12.5px]`}>
                              <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                            فروشگاه
                          </span>

                          <AnimatePresence>
                            {showBox3 && (
                              <motion.div className="absolute right-[-2.5rem] top-[2.5rem] bg-white shadow-lg rounded-md w-[14rem] overflow-hidden" initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                                <ul className="flex flex-col text-right text-[#212121]">
                                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={"/shop/chef"}>
                                    <span className="  font-semibold    px-[1rem]  ">آشپز</span>
                                  </Link>
                                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                                    <span className="  font-semibold    px-[1rem]  "> منوی غذا</span>
                                  </Link>
                                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                                    <span className="  font-semibold    px-[1rem]  ">گالری</span>
                                  </Link>
                                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                                    <span className="  font-semibold    px-[1rem]  ">گواهینامه</span>
                                  </Link>
                                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]  border-b-[1px] border-b-[#eaeaea]    " href={""}>
                                    <span className="  font-semibold    px-[1rem]  ">رزرواسیون</span>
                                  </Link>
                                  <Link onClick={() => setShowBox3(false)} className="  text-[#515151] hover:text-[#ffff] transition ease-in delay-150 hover:bg-[#D12525] py-[1rem]     " href={""}>
                                    <span className="  font-semibold    px-[1rem]  ">سوالات متداول</span>
                                  </Link>
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        <Link className="hover:text-[#00813D]  cursor-pointer    transition ease-in delay-150 font-semibold" href={"/about-us"}>
                          درباره ما{" "}
                        </Link>

                        <Link className="   cursor-pointer   gap-[.2rem] font-semibold  flex  items-center flex-row-reverse " href={"/"}>
                          <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> صفحه اصلی</span>
                        </Link>
                      </div>
                      <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O%C2%AFU%C2%A9U_U_U%C2%AF_14-transformed.png" alt="" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          {curentUrl === "/" && (
            <div className=" flex-col-reverse lg:flex-row  relative pt-[4rem] text-end mx-auto max-w-[82rem]  py-[3rem] items-center flex justify-between lg:px-[4rem] px-[1.5rem] xl:px-[1.5rem]  ">
              <div>
                <motion.img
                  src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/pizza-4.png" // یا هر آدرس تصویر دیگه
                  alt="Pizza"
                  className=" mt-[2rem] mx-auto lg:ml-auto xl:mt-[9rem] w-[80%] lg:w-[120%]  xl:w-[90%] " // اندازه دلخواه
                  animate={{ rotate: 360 }}
                  transition={{
                    repeat: Infinity,
                    duration: 20, // مدت زمان برای هر دور چرخش
                    ease: "linear"
                  }}
                />
                <img className=" absolute top-[8rem]  left-[-2.8rem]  " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-5.png" alt="" />
                <img className={` absolute top-[7.2rem] right-[-2rem] ${showSticky ? "z-0" : "z-[100] "} `} src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-2.png" alt="" />
                <img className=" absolute top-[4rem] right-[40rem] " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-3.png" alt="" />
                <img className=" absolute top-[45rem]  left-[79.1rem] " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-2-1.png" alt="" />
                <img className=" absolute top-[52rem] left-[46em]  " src="https://modinatheme.com/foodking/wp-content/uploads/2024/02/frame-4.png" alt="" />
                <img className=" absolute top-[47rem]  left-[-4.4rem] " src="https://t-theme.com/foodking/wp-content/uploads/2024/02/frame-6.png" alt="" />
              </div>
              <div className={` xl:w-[40%]  w-[100%] ${showSticky ? "z-0" : "z-[1000000]"}   mt-[4.2rem] `}>
                <h1 className=" text-[#ffff] text-center lg:text-right  font-semibold leading-[4rem] sm:leading-[5rem] lg:leading-[8.5rem] xl:leading-[9.8rem] mt-[-6rem] xl:mt-[-10rem] text-[3rem] sm:text-[4rem] lg:text-[7rem] xl:text-[9rem] xl:ml-auto ">پیتزای فوق العاده خوشمزه </h1>
                <h4 className=" text-[#ffff] text-center text-[1.4rem] font-semibold mt-[1.5rem] sm:mt-[3rem] mb-[2rem] mx-auto xl:ml-auto  ">فقط با 25 هزارتومان سفارش خود را ستاره دار کنید</h4>
                <button className=" rounded-sm mx-auto xl:ml-auto  outline-none transition-all ease delay-200 cursor-pointer hover:bg-[#ffff] bg-[#FFB936] flex items-center justify-center gap-[.5rem] text-center px-[1rem] w-[14rem] sm:w-[17rem]  py-[.7rem] sm:py-[1rem] pb-[1rem] sm:pb-[1.3rem] font-bold ">
                  <span>
                    <FaArrowLeft className=" mb-[-.5rem] " size={24} />
                  </span>{" "}
                  اکنون سفارش دهید
                </button>
              </div>
            </div>
          )}
        </section>
      ) : (
        <HeaderSecond />
      )}
    </header>
  );
}
