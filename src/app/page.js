'use client'
import Image from 'next/image'
import twisha from '../../public/images/twisha.png'
import Work from '@/components/Work/Work';
import Hobby from '@/components/Hobby/Hobby';
import Footer from '@/components/Footer/Footer';
import { useState } from 'react';
export default function Home() {
  const [hover, setHover] = useState(false)
  function changeToFaceBackground(e){
    setHover(true)
  }
  function changeToOriginalBackground(e){
    setHover(false)
  }



  return (
    <main className="font-epilogue">
      <div>
        <div
          className={
            "bg-no-repeat bg-[length:100%] w-full max-h-screen aspect-[16/9] relative  " +
            `${
              hover
                ? "bg-landing-hey transition-all duration-500"
                : "bg-landing transition-all duration-500"
            }`
          }
        >
          <div
            className="absolute h-full w-[25%] aspect-[16/9] right-[12.5%]"
            onMouseEnter={changeToFaceBackground}
            onMouseLeave={changeToOriginalBackground}
          ></div>
          <div className="flex max-w-[1280px] mx-auto justify-between h-full">
            <div className="flex flex-col justify-center max-w-[666px] m-28">
              <p className="text-3xl font-semibold">Hi, I am Twisha Patel</p>
              <p className="font-semibold text-7xl mt-7">User Experience Designer</p>
              <p className="text-xl font-medium mt-5">
                Crafting Digital Experiences that Inspire and Transform! I
                believe that a good design has the power to connect with people
                and change their lives for the better.
              </p>
              <a href="#" className="flex items-center transition-all gap-3 hover:gap-5 hover:underline mt-10 border w-fit p-3 border-[#828282]"> <span className="mt-[2px]">View my resume </span><Image src={"/images/right.svg"} alt="right-arrow" height={16} width={16}></Image> </a>
            </div>

            {/* <div>
          <Image
            src={twisha}
            alt="twisha-photo"
            className='w-[400px]'
          />
        </div> */}
          </div>
        </div>
        <div className="h-[350px] bg-ux bg-no-repeat bg-[length:100%] w-full aspect-[16/9]">
          <div className="flex flex-col justify-center gap-4 items-center relative top-1/2 -translate-y-1/2 max-w-[1024px] mx-auto text-center">
            <p className="text-[#FEFEFE] text-2xl">
              Design is really an act of communication, which means having a
              deep understanding of the person with whom the designer is
              communicating.
            </p>
            <p className="text-[#FEFEFE] text-lg">
              ― Donald A. Norman, The Design of Everyday Things
            </p>
          </div>
        </div>
      </div>
      <Work />
      <Hobby />
    </main>
  );
}
