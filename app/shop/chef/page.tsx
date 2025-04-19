"use client";

import MoreAbout_chef from "@/components/related_chefPage/moreAbout_chef";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import SwiperForUsers from "@/components/related_chefPage/swiperForUsers";
import FeatureOfUs from "@/components/related_chefPage/FeatureOfUs";
import { useRef } from "react";
import { FaChevronLeft } from "react-icons/fa";
import Link from "next/link";
import TitelPages from "@/components/titelCompo/TitelPges";

export default function Chef() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const strokeDashoffset = useTransform(scaleX, (v) => 164 - 164 * v);

  const scope = useRef<HTMLDivElement>(null);
  const pitzza = useRef<HTMLDivElement>(null);
  const hamburger = useRef<HTMLDivElement>(null);

  const forVerticalDir = useScroll({
    target: scope,
    offset: ["start end", "end start"]
  });
  const forRotaionPitza = useScroll({
    target: pitzza,
    offset: ["start end", "end start"]
  });
  const rotPitzza = useTransform(forRotaionPitza.scrollYProgress, [0, 0.2, 0.5], [60, 180, 270]);
  const y = useTransform(forVerticalDir.scrollYProgress, [0, 0.2, 0.5], [-150, -50, 0]);

  const forhumbarger = useScroll({
    target: hamburger,
    offset: ["start end", "end start"]
  });
  const rotateHamburgur = useTransform(forhumbarger.scrollYProgress, [0, 0.2, 0.4], [60, 180, 270]);

  return (
    <div ref={ref} className="w-full bg-amber-50">
      <motion.svg className="fixed bottom-4 left-4" width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="26" stroke="#fff" strokeWidth="4" fill="none" />
        <motion.circle cx="30" cy="30" r="26" stroke="#cd0808" strokeWidth="4" fill="none" strokeDasharray="164" strokeDashoffset="164" style={{ strokeDashoffset }} />
      </motion.svg>
      <TitelPages>
        <div className=" space-y-5">
          <h1
            className="w-full font-semibold  text-center text-2xl text-white
              sm:text-3xl 
              md:text-4xl 
              lg:text-6xl lg:text-white 
  
             "
          >
            {" "}
            سایر اعضا
          </h1>
          <div className="flex space-x-1 items-center h-8 flex-row-reverse">
            <Link href={"/"}>
              {" "}
              <h1 className="font-semibold  text-xl text-green-500"> صفحه اصلی</h1>
            </Link>
            <FaChevronLeft className=" mt-2 text-base text-green-500" />
            <Link href={"/shop"}>
              <h1 className="font-semibold  text-xl text-green-500"> فروشگاه</h1>
            </Link>
            <FaChevronLeft className="mt-2 font-semibold  text-base text-green-500" />

            <h1 className="font-semibold  text-xl text-slate-100"> آشپز</h1>
          </div>
        </div>
      </TitelPages>
      {/* //! دیدار با کارشناس ها و سرآشپزها */}
      <div className="w-full flex-wrap space-y-4 flex mt-[7rem] justify-center items-end">
        <h1
          className="font-semibold w-full text-center 
        text-xl text-green-700
        
        "
        >
          درباره ما مواد غذایی
        </h1>
        <h1
          className="font-semibold text-2xl w-full text-center 
         text-slate-800
         md:text-4xl
        lg:text-5xl
        "
        >
          دیدار با کارشناس و سرآشپزها
        </h1>
        <div
          className=" flex flex-wrap justify-center gap-12  w-2/3
         min-h-96 mt-12"
        >
          <MoreAbout_chef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/01-2.jpg" chefName="اوون آشر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAbout_chef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/06-2.jpg" chefName="لزلی مایکل" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAbout_chef role="سرآشپز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/05-2.jpg" chefName="لزلی الکساندر" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAbout_chef role="مدیر جدول" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/04-2.jpg" chefName="هنری لوکاس" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAbout_chef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/03-2.jpg" chefName="متئو لوی" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
          <MoreAbout_chef role="اجاق گاز ارشد" chefLink="#" imageUrl="https://t-theme.com/foodking/wp-content/uploads/2024/03/02-2.jpg" chefName="دنیل جک" faceBookLink="#" linkedinLink="#" twitterLink="#" youtubeLink="#" />
        </div>
      </div>
      {/* //! دیدار با کارشناس ها و سرآشپزها */}
      <div
        className="
        bg-[url(https://modinatheme.com/foodking/wp-content/uploads/2024/03/bg-shape.png)]
       bg-cover bg-center bg-green-700 
       space-x-6 flex justify-center items-center flex-wrap w-full 
       h-[1200px]
        md:h-[700px]
        lg:h-[700px]

       xl:h-[700px]
       2xl:h-[400px]


       "
      >
        <FeatureOfUs title="غذای 100% طبیعی" content="تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/04.svg" />
        <FeatureOfUs title="ضمانت بازگشت وجه" content="تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر به فرد را ایجاد می کنند" imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/03.svg" />
        <FeatureOfUs
          title="  تحویل فست فود"
          content="            تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر
            به فرد را ایجاد می کنند"
          imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/02.svg"
        />
        <FeatureOfUs
          title=" بهترین کیفیت غذا"
          content="  تیمی متشکل از رویاپردازان و انجام دهندگان موسیقی و هنر تعاملی منحصر
            به فرد را ایجاد می کنند"
          imageUrl="https://modinatheme.com/foodking/wp-content/uploads/2024/03/01.svg"
        />
      </div>
      <div className="bg-slate-150 flex w-full h-[600px]">
        <section
          className=" w-1/5 h-full -space-y-60  flex-wrap 
         flex justify-end items-center"
        >
          <div className="w-full mr-12 relative h-1/4">
            <motion.div style={{ y }} ref={scope} className="w-auto  transition-all duration-500  absolute right-0">
              <Image alt="#" width={80} height={80} src={"https://t-theme.com/foodking/wp-content/uploads/2024/02/fry-shape-2-3.png"} />
            </motion.div>
          </div>
          <div className="w-full mr-12 relative h-1/4">
            <motion.div style={{ rotate: rotPitzza }} ref={pitzza} className="w-auto absolute transition-all duration-500  rotate-180 right-0">
              <Image alt="#" width={100} height={100} src={"https://t-theme.com/foodking/wp-content/uploads/2024/02/pizzashape-1.png"} />
            </motion.div>
          </div>
        </section>
        <section className="w-3/5 h-full flex-wrap flex justify-center items-center">
          <SwiperForUsers />
        </section>
        <section className=" w-1/5 h-full flex justify-center items-center">
          <div className="flex items-center h-full w-full">
            <motion.div className="w-30 ml-12 rotate-180 transition-all duration-500 " ref={hamburger} style={{ rotate: rotateHamburgur }}>
              <Image alt="#" width={120} height={120} src={"https://t-theme.com/foodking/wp-content/uploads/2024/02/burger-shape-3-3.png"} />
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}
