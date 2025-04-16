import Image from "next/image";
import { useSwiperSlide } from "swiper/react";
export default function SwipperComponentsImages({ url }: { url: string }) {
  var { isActive } = useSwiperSlide();

  return (
    <div className="flex flex-wrap justify-center items-center cursor-pointer">
      <Image
        className={`rounded-full ${isActive && "border-2 border-amber-400"}`}
        alt="#"
        width={100}
        height={100}
        src={url}
      />
    </div>
  );
}
