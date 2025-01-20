'use client'
import Image from "next/image"
import Head from 'next/head'
import { useState } from "react";
import Link from "next/link";

export default function Categories() {
  return (
    <div className="grid grid-cols-4 gap-4 px-4">
      <div className="relative  col-span-2 row-span-2">
        <div className="absolute flex  bottom-0 right-0 bg-black/55 w-full w-full h-full  z-10">
        <span className=" text-4xl text-white  text-left z-20  p-20 font-medium">Duis nibh dui </span>
        <span className="absolute  bottom-0 right-0  text-2xl text-white  text-left z-20  p-20">Найдено 4 →</span>
        </div>
        <Image
          src="/images/white-plan.png" alt="img"
          className="object-cover z-0 w-full h-full"
          width={1300}
          height={1300}
        />
      </div>
      <div className="relative ">
        <div className="absolute flex  bottom-0 right-0 bg-black/55 w-full w-full h-full  z-10">
        <span className=" text-2xl text-white  text-left z-20  p-8 font-medium">Duis nibh dui </span>
        <span className="absolute  bottom-0 right-0  text-lg text-white  text-left z-20  p-8">Найдено 13 →</span>
        </div>
        <Image
          src="/images/bench-2.jpg" alt="img"
          className="object-cover z-0 w-full h-full"
          width={1300}
          height={1300}
        />
      </div>
      <div className="relative ">
        <div className="absolute flex  bottom-0 right-0 bg-black/55 w-full w-full h-full  z-10">
        <span className=" text-2xl text-white  text-left z-20  p-8 font-medium">Duis nibh dui </span>
        <span className="absolute  bottom-0 right-0  text-lg text-white  text-left z-20  p-8">Найдено 13 →</span>
        </div>
        <Image
          src="/images/bench-2.jpg" alt="img"
          className="object-cover z-0 w-full h-full"
          width={1300}
          height={1300}
        />
      </div>
      <div className="relative ">
        <div className="absolute flex  bottom-0 right-0 bg-black/55 w-full w-full h-full  z-10">
        <span className=" text-2xl text-white  text-left z-20  p-8 font-medium">Duis nibh dui </span>
        <span className="absolute  bottom-0 right-0  text-lg text-white  text-left z-20  p-8">Найдено 13 →</span>
        </div>
        <Image
          src="/images/bench-2.jpg" alt="img"
          className="object-cover z-0 w-full h-full"
          width={1300}
          height={1300}
        />
      </div>
      <div className="relative ">
        <div className="absolute flex  bottom-0 right-0 bg-black/55 w-full w-full h-full  z-10">
        <span className=" text-2xl text-white  text-left z-20  p-8 font-medium">Duis nibh dui </span>
        <span className="absolute  bottom-0 right-0  text-lg text-white  text-left z-20  p-8">Найдено 13 →</span>
        </div>
        <Image
          src="/images/bench-2.jpg" alt="img"
          className="object-cover z-0 w-full h-full"
          width={1300}
          height={1300}
        />
      </div>
      <div className="relative ">
        <div className="absolute flex  bottom-0 right-0 bg-black/55 w-full w-full h-full  z-10">
        <span className=" text-2xl text-white  text-left z-20  p-8 font-medium">Duis nibh dui </span>
        <span className="absolute  bottom-0 right-0  text-lg text-white  text-left z-20  p-8">Найдено 13 →</span>
        </div>
        <Image
          src="/images/bench-2.jpg" alt="img"
          className="object-cover z-0 w-full h-full"
          width={1300}
          height={1300}
        />
      </div>
      <div className="relative ">
        <div className="absolute flex  bottom-0 right-0 bg-black/55 w-full w-full h-full  z-10">
        <span className=" text-2xl text-white  text-left z-20  p-8 font-medium">Duis nibh dui </span>
        <span className="absolute  bottom-0 right-0  text-lg text-white  text-left z-20  p-8">Найдено 13 →</span>
        </div>
        <Image
          src="/images/bench-2.jpg" alt="img"
          className="object-cover z-0 w-full h-full"
          width={1300}
          height={1300}
        />
      </div>
      <div className="relative ">
        <div className="absolute flex  bottom-0 right-0 bg-black/55 w-full w-full h-full  z-10">
        <span className=" text-2xl text-white  text-left z-20  p-8 font-medium">Duis nibh dui </span>
        <span className="absolute  bottom-0 right-0  text-lg text-white  text-left z-20  p-8">Найдено 13 →</span>
        </div>
        <Image
          src="/images/bench-2.jpg" alt="img"
          className="object-cover z-0 w-full h-full"
          width={1300}
          height={1300}
        />
      </div>
      <div className="relative ">
        <div className="absolute flex  bottom-0 right-0 bg-black/55 w-full w-full h-full  z-10">
        <span className=" text-2xl text-white  text-left z-20  p-8 font-medium">Duis nibh dui </span>
        <span className="absolute  bottom-0 right-0  text-lg text-white  text-left z-20  p-8">Найдено 13 →</span>
        </div>
        <Image
          src="/images/bench-2.jpg" alt="img"
          className="object-cover z-0 w-full h-full"
          width={1300}
          height={1300}
        />
      </div>
      <div className="relative ">
        <div className="absolute flex  bottom-0 right-0 bg-black/55 w-full w-full h-full  z-10">
        <span className=" text-2xl text-white  text-left z-20  p-8 font-medium">Duis nibh dui </span>
        <span className="absolute  bottom-0 right-0  text-lg text-white  text-left z-20  p-8">Найдено 13 →</span>
        </div>
        <Image
          src="/images/bench-2.jpg" alt="img"
          className="object-cover z-0 w-full h-full"
          width={1300}
          height={1300}
        />
      </div>
     
    </div>
  );
}
