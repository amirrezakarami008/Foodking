"use client";

import Image from "next/image";

export default function featureOfUs({
  title,
  content,
  imageUrl,
}: {
  title: string;
  content: string;
  imageUrl: string;
}) {
  return (
    <section className="text-right flex h-2/3 flex-wrap justify-end items-center w-1/6">
      <Image className="" alt="#" height={70} width={70} src={imageUrl} />

      <h1 className="font-semibold w-full text-right  text-2xl text-white">
        {title}
      </h1>
      <h1 className="font-semibold w-5/6 text-right text-base text-white">
        {content}
      </h1>
    </section>
  );
}
