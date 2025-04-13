"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowDown, FaSearch, FaShoppingBasket, FaTractor, FaTruck } from "react-icons/fa";
import { FaArrowUp, FaTruckFast } from "react-icons/fa6";

export default function Header() {
  const [showBox, setShowBox] = useState(false);
  return (
    <header>
      <section className=" bg-[url('https://t-theme.com/foodking/wp-content/uploads/2024/02/hero-bg-3.jpg')]  bg-cover bg-center ">
        <div className="border-b-[1px] border-[#f4f1ea42] ">
          <div className="  text-[#fcfbfe] mx-auto max-w-[82rem] py-[.8rem] items-center flex justify-between px-[1.5rem] ">
            <div className=" flex items-center gap-[5rem] ">
              <button className=" outline-none transition ease-in-out delay-200 cursor-pointer hover:bg-[#00813D] bg-[#D12525] flex items-center justify-center gap-[.5rem] border-[1px] border-[#ffff] text-center px-[1rem] w-[15rem] py-[1rem] pb-[1.3rem] font-bold ">
                اکنون سفارش دهید
                <span>
                  <FaTruckFast size={22} />{" "}
                </span>{" "}
              </button>
              <div className=" flex items-center gap-[1.5rem] relative  ">
                <div className=" bg-[#200707cc] top-[-.4rem] left-[-.5rem] absolute  w-[1rem] text-[.6rem] pb-[.1rem] pr-[.1rem] rounded-[.5rem] h-[1rem] flex justify-center items-center text-[#fcfbfe] ">0</div>
                <FaShoppingBasket className=" cursor-pointer " size={20} />
                <FaSearch className=" cursor-pointer " size={18} />
              </div>
            </div>
            <div className=" flex gap-[2rem] relative ">
              <Link className="hover:text-[#00813D] transition ease-in delay-150 font-semibold" href={""}>
                تماس باما{" "}
              </Link>
              <Link onClick={() => setShowBox((res) => !res)} className="  gap-[.2rem]  font-semibold flex  items-center flex-row-reverse " href={""}>
                <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> صفحات</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={` ${showBox ? " rotate-0 " : " rotate-180"} transition-transform duration-500 hover:rotate-180  mt-[.4rem]  size-[12.5px]  `}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>{" "}
                <ul className={` absolute top-[1rem] ${showBox ? " opacity-0" : " opacity-15 "}`}>ssssssss</ul>
              </Link>
              <Link className="  gap-[.2rem]  font-semibold flex  items-center flex-row-reverse " href={""}>
                <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> وبلاگ</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className=" mt-[.4rem]  size-[12.5px] ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>{" "}
              </Link>
              <Link className="  gap-[.2rem] font-semibold flex  items-center flex-row-reverse " href={""}>
                <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> فروشگاه</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className=" mt-[.4rem]  size-[12.5px] ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>{" "}
              </Link>
              <Link className="hover:text-[#00813D] transition ease-in delay-150 font-semibold" href={""}>
                درباره ما{" "}
              </Link>
              <Link className=" gap-[.2rem] font-semibold  flex  items-center flex-row-reverse " href={""}>
                <span className=" hover:text-[#00813D] transition ease-in delay-150 font-semibold"> صفحه اصلی</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className=" mt-[.4rem]  size-[12.5px] ">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>{" "}
              </Link>
            </div>
            <img src="https://t-theme.com/foodking/wp-content/uploads/2024/08/U_U_O¯U©U_U_U¯_18-transformed.png" alt="" />
          </div>
        </div>

        <div className=" pt-[4rem] mx-auto max-w-[82rem] text-end  py-[.8rem] items-center flex justify-between px-[1.5rem]  ">
          <h1 className=" text-[#ffff] font-semibold leading-[9.3rem]  text-[8.5rem] ml-auto w-[34%] ">پیتزای فوق العاده خوشمزه </h1>
        </div>
      </section>
    </header>
  );
}
