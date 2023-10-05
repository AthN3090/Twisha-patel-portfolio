'use client'
import Image from 'next/image'
import twisha from '../../public/images/twisha.png'
import Work from '@/components/Work/Work';
import Hobby from '@/components/Hobby/Hobby';
import Loading from '@/components/Loading/Loading';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/page';
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from 'react';
export default function Home() {
  const [hover, setHover] = useState(false)
  function changeToFaceBackground(e){
    setHover(true)
  }
  function changeToOriginalBackground(e){
    setHover(false)
  }

  


  return (
        <motion.div
          layout
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.5 }}
        >
          
          <main className="font-epilogue pt-12">
            <div>
              <div
                className={
                  "bg-no-repeat bg-[length:100%] w-full md:max-h-screen md:aspect-[16/9]  relative bg-white " +
                  `${
                    hover
                      ? "md:bg-landing-hey transition-all duration-500"
                      : "md:bg-landing transition-all duration-500"
                  }`
                }
              >
                <div
                  className="hidden md:block absolute h-full w-[25%] aspect-[16/9] right-[12.5%]"
                  onMouseEnter={changeToFaceBackground}
                  onMouseLeave={changeToOriginalBackground}
                ></div>
                <div className="md:hidden p-5 flex justify-center">
                  <Image
                    src="/images/mobile-landing.jpeg"
                    height={420}
                    width={500}
                    alt="mobile-landing"
                  ></Image>
                </div>
                <div className="flex max-w-[1280px] mx-auto items-center h-full p-5">
                  <div className="flex flex-col justify-center max-w-[666px] lg:m-28 md:m-[10vw]">
                    <p className="xl:text-3xl font-semibold md:text-[2vw] sm:text-md text-lg">
                      Hi, I am Twisha Patel
                    </p>
                    <p className="font-semibold xl:text-7xl md:text-[4vw] text-4xl md:mt-7 mt-3 md:max-w-[300px] lg:max-w-[500px] xl:max-w-full">
                      User Experience Designer
                    </p>
                    <p className="xl:text-xl md:text-base font-medium md:mt-5 mt-3 lg:max-w-[500px] md:max-w-[350px] xl:max-w-full">
                      Crafting Digital Experiences that Inspire and Transform! I
                      believe that a good design has the power to connect with
                      people and change their lives for the better.
                    </p>
                    <a
                      href="#"
                      className="flex items-center transition-all gap-3 hover:gap-5 hover:underline md:mt-10 mt-3 border md:w-fit p-3 md:justify-normal justify-between border-[#828282]"
                    >
                      {" "}
                      <span className="mt-[2px]">View my resume </span>
                      <Image
                        src={"/images/right.svg"}
                        alt="right-arrow"
                        height={16}
                        width={16}
                      ></Image>{" "}
                    </a>
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
              <div className="bg-[#242424] sm:h-[22vw] md:bg-ux bg-no-repeat md:bg-[length:100%]  bg-[length:100%_100%] w-full flex items-center p-5">
                <div className="flex flex-col justify-center gap-4 items-center relative max-w-[1024px] mx-auto text-center aspect-video">
                  <p className="text-[#FEFEFE] md:text-xl lg:text-2xl px-4">
                    Design is really an act of communication, which means having
                    a deep understanding of the person with whom the designer is
                    communicating.
                  </p>
                  <p className="text-[#FEFEFE] text-sm md:text-sm lg:text-lg">
                    ― Donald A. Norman, The Design of Everyday Things
                  </p>
                </div>
              </div>
            </div>
            <Work />
            <Hobby />
          </main>
        </motion.div>
  );
}
