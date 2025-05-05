"use client";

import Image from "next/image";
import data from "./data";
import contentData from './content';
import { useState } from "react";
import { getRandomNumbersInRange } from '@/utils/common'; 

const IMAGE_SHOW_COUNT = 10;

/**
 *  功能参考：https://www.randomlists.com/random-animals?show_images=true&dup=false&qty=6 
 *  图片来源：https://www.bestrandoms.com/random-animal-generator
 *  UI参考：https://tailspark.co/components/breeze/landing
 */
export default function Home() {
  const genIndexes = () => getRandomNumbersInRange(0, data.length - 1, IMAGE_SHOW_COUNT);

  const [indexes, setIndexes] = useState(genIndexes());

  const handleRerun = () => {
    setIndexes(genIndexes());
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      /> */}
      <section>
        <div className="mx-auto w-full max-w-7xl px-5 py-4 md:px-10 md:py-12 lg:py-20">
          <div className="flex justify-between items-end mb-8">
            <h1 className="text-2xl">Random Animal Generated:</h1>
             {/* BEGIN: 重新生成按钮 */}
             <a onClick={handleRerun} href="#" className="flex flex-row items-center bg-[#276ef1] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(171,_196,245)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px]">
                <p className="mr-6 font-bold">RERUN</p>
                <svg fill="currentColor" className="h-4 w-4 flex-none" viewBox="0 0 20 21" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
                </svg>
              </a>
              {/* END: 重新生成按钮 */}
          </div>

          <div className="flex flex-col items-center">
            {/* BEGIN: 图片画廊 */}
            <div className="mb-12 grid gap-5 sm:grid-cols-2 md:grid-cols-5">
              {/* 单张图片 */}
              {
                indexes.map(index => (
                  <a key={index} href="#" className="flex w-full flex-col gap-4 rounded-md border border-solid border-[#dfdfdf] px-4 py-8 text-black md:max-w-xs md:px-0 md:py-0">
                    <img
                      src={'/images/' + data[index].image}
                      alt={'Random generated animal: ' + data[index].name}
                      className="inline-block h-60 w-full object-cover"
                    />
                    <div className="px-6 py-1">
                      <p className="mb-4 text-xl font-semibold">{data[index].name}</p>
                    </div>
                  </a>
                ))
              }
            </div>
             {/* END: 图片画廊 */}
          </div>

          {/* BEGIN：文本内容 */}
          <section className="mx-auto w-full max-w-5xl px-5 md:px-10">
            {contentData.map(item => (
                <div key={item.question} className="">
                  <div className="mb-6 rounded-2xl bg-[#eceae2] p-8">
                    <div className="flex cursor-pointer items-start justify-between">
                      <h2 className="text-xl font-bold">{item.question}</h2>
                      {/* <div className="relative ml-10 mt-1 flex h-5 w-5 items-center justify-center">
                        <div className="absolute h-5 w-0.5 bg-[#0b0b1f]"></div>
                        <div className="h-0.5 w-5 bg-[#0b0b1f]"></div>
                      </div> */}
                    </div>
                    <div className="mb-4">
                      <p className="text-[#636262]">{item.answer}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </section>
          {/* END：文本内容 */}
        </div>
      </section>

      <div>
        <FriendLinks />
      </div>

    </main>
  );
}
