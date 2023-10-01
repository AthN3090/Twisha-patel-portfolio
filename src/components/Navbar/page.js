'use client'
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
function Navbar() {

    const [showNav, setShowNav] = useState(true)
    const prevScroll = useRef(0)

    

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
      <nav className={"border-b w-full bg-white top-0 z-[1] fixed" + " " + `${showNav ? "translate-y-0 transition-all":"-translate-y-full transition-all"}`}>
        <div className="mx-10">
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
            <div className="ml-auto block lg:hidden p-3">
              <Image src="/images/mobnav.png" height={24} width={24} alt="mobilenav"/>
            </div>
            <div className="ml-auto lg:block hidden">
                <ul className="flex items-center font-epilogue  pt-1 gap-[80px]">
                    <li className="px-5 py-5">
                        <Link href="#">Work
                          </Link>
                    </li>
                    
                    <li className="px-5 py-5">
                        <Link href="/about">About
                          </Link>
                    </li>
                    
                    <li className="px-5 py-5">
                        <Link href="#"> Contact
                          </Link>
                    </li>
                    
                    <li className="px-5 py-5">
                        <Link href="#">
                          Resume
                        </Link>
                        
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;