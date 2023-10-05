'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
function Navbar() {

    const [showNav, setShowNav] = useState(true)
    const prevScroll = useRef(0)
    const [mobNavVis, setMobNavVis] = useState(false)
    

    useEffect(()=>{
      function scrollListener(){
        const currScroll = window.scrollY
        if(currScroll > prevScroll.current){
          setShowNav(false)
        }else{
          setShowNav(true)
        }
        prevScroll.current = currScroll

    } 
      window.addEventListener('scroll', scrollListener)

      return () =>{
        window.removeEventListener('scroll', scrollListener)
      }
      
    },[showNav])
    return (
      <nav
        className={
          "border-b w-full bg-white top-0 z-[1] fixed" +
          " " +
          `${
            showNav
              ? "translate-y-0 transition-all"
              : "-translate-y-full transition-all"
          }`
        }
      >
        <div className="mx-5">
          <div className="flex items-center">
            <Link className="flex items-center" href="/">
              <div>
                <Image
                  src="/images/diamond.gif"
                  alt="spinning diamond"
                  height={32}
                  width={38}
                />
              </div>
              <div className="font-epilogue italic font-bold">
                <p className="pt-1">TWISHA</p>
              </div>
            </Link>
            <div className="ml-auto block md:hidden py-3" onClick={() => setMobNavVis(true)}>
              <Image
                src="/images/mobnav.png"
                height={24}
                width={24}
                alt="mobilenav"
              />
            </div>
            {/* mobile navbar */}
          <div className={"absolute h-screen w-screen bg-white right-0 top-0 flex items-center justify-center md:hidden transition-all duration-200 " + `${mobNavVis ? "translate-x-0":"translate-x-full"}`}>
              <div className="absolute top-4 right-5" onClick={() => setMobNavVis(false)}>
              <Image
                src="/images/mobilenav-cross.png"
                height={20}
                width={20}
                alt="mobilenav"
              />
              </div>
              <ul className="flex flex-col items-center justify-center font-epilogue  pt-1 gap-[80px]">
                <li className="px-5 py-3" onClick={() => setMobNavVis(false)}>
                  <Link href="#">Work</Link>
                </li>

                <li className="px-5 py-3" onClick={() => setMobNavVis(false)}>
                  <Link href="/about">About</Link>
                </li>

                <li className="px-5 py-3" onClick={() => setMobNavVis(false)}>
                  <Link href="mailto:">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="ml-auto md:block hidden">
              <ul className="flex items-center font-epilogue gap-[80px]">
                <li className="px-5 py-3">
                  <Link href="/#work">Work</Link>
                </li>

                <li className="px-5 py-3">
                  <Link href="/about">About</Link>
                </li>

                <li className="px-5 py-3">
                  <Link href="mailto:"> Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;