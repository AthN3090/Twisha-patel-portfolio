import Image from "next/image";
import project1 from "../../../public/images/project1.png"
import { useEffect, useRef, useState } from "react";
function Work() {
  const sticky = useRef(null)
  const stickyContainer = useRef(null)
  const stickyBackground = useRef(null)
  const card = useRef([])
  const horizontalScrollableContent = useRef(null)

  const refPush = (el) => {card.current.push(el)}

  
  useEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: 0.3,
    };

    const observer = new IntersectionObserver((entries, callback) => {
      entries.forEach((entry, index) => {
        if(entry.isIntersecting){
          console.log(entry.target.id)
          // if (entry.target.id == 1) {
          //   stickyBackground.current.style.background =
          //     "linear-gradient(180deg, rgba(245, 243, 255, 0.00) 0%, rgba(239, 255, 234, 0.00) 0.01%, rgba(239, 255, 234, 0.50) 14.36%, #EFFFEA 50%, rgba(239, 255, 234, 0.50) 83.82%, rgba(243, 255, 249, 0.00) 100%, rgba(239, 255, 234, 0.00) 100%)";
          // }
          // if (entry.target.id == 2) {
          //   stickyBackground.current.style.background =
          //     "linear-gradient(180deg, rgba(245, 243, 255, 0.00) 0%, rgba(255, 234, 235, 0.00) 0.01%, rgba(255, 234, 235, 0.50) 14.36%, #FFEAEB 50%, rgba(255, 234, 235, 0.50) 83.82%, rgba(243, 255, 249, 0.00) 100%, rgba(255, 234, 235, 0.00) 100%)";
          // }
          // if (entry.target.id == 3) {
          //   stickyBackground.current.style.background =
          //     "linear-gradient(180deg, rgba(245, 243, 255, 0.00) 0%, rgba(234, 240, 255, 0.00) 0.01%, rgba(234, 240, 255, 0.50) 14.36%, #EAF0FF 50%, rgba(234, 240, 255, 0.50) 83.82%, rgba(243, 255, 249, 0.00) 100%, rgba(234, 240, 255, 0.00) 100%)";
          // }
          if (entry.target.id == 1) {
            stickyBackground.current.style.background =
            "#EFFFEA"
          }
          if (entry.target.id == 2) {
            stickyBackground.current.style.background =
            "#FFEAEB"
          }
          if (entry.target.id == 3) {
            stickyBackground.current.style.background =
              "#EAF0FF"
          }
        }
      })
    },options)
    card.current.forEach((item) => {
      observer.observe(item);
    });







    function getScrollHeight(){
      const height = window.innerHeight
      const width = window.innerWidth
      return horizontalScrollableContent.current.scrollWidth + height - width + 15  
    }

    stickyContainer.current.style.height = `${getScrollHeight()}px`

    function resizeHandler(){
      stickyContainer.current.style.height = `${getScrollHeight()}px`
    }
    function scrollHandler() {
      if (sticky.current.offsetTop > 0) {
        horizontalScrollableContent.current.style.transform = `translateX(-${
          sticky.current.offsetTop * 1
        }px)`;
      }
    }

    window.addEventListener('resize', resizeHandler)
    window.addEventListener('scroll', scrollHandler)

    return ()=>{
      window.removeEventListener('scroll', scrollHandler)
      window.removeEventListener('resize', resizeHandler)
    }
  },[])
    return (
      <section>
        <div className="border-b py-10 text-center font-semibold text-4xl">
          My Work
        </div>
        <div className="min-h-screen relative" ref={stickyContainer}>
          <div className="sticky top-0" ref={sticky}>
            <div ref={stickyBackground} className="h-screen bg-[length:100%_100%]  bg-no-repeat flex items-center overflow-x-hidden transition-all duration-500">
              <div className="flex min-w-full"  ref={horizontalScrollableContent}>
                <div className="w-full shrink-0">
                  <div ref={refPush} id={1} className="w-[1280px] shrink-0 mx-auto flex gap-[150px] justify-between items-center h-full top-1/2">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/images/project1.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                    </div>
                    <div className="max-w-[557px]">
                      <p className="font-medium text-4xl mb-8">You Matter</p>
                      <p className="font-semibold text-5xl mb-6">
                        Build and design your routine with ease{" "}
                      </p>
                      <p className="font-medium text-xl mb-20">
                        Crafting delightful, human centred and inclusive
                        experiences. Crafting delightful, human centred and
                        inclusive experiences. Crafting delightful, human
                        centred and inclusive experiences. Crafting delightful,
                        human centred and inclusive experiences.{" "}
                      </p>

                      <button className="py-3 px-5 border border-[#828282] flex gap-5">
                        Read case study -{">"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full shrink-0">
                  <div ref={refPush}  id={2} className="w-[1280px] shrink-0 mx-auto flex gap-[150px] justify-between items-center h-full top-1/2">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/images/project1.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                    </div>
                    <div className="max-w-[557px]">
                      <p className="font-medium text-4xl mb-8">You Matter</p>
                      <p className="font-semibold text-5xl mb-6">
                        Build and design your routine with ease{" "}
                      </p>
                      <p className="font-medium text-xl mb-20">
                        Crafting delightful, human centred and inclusive
                        experiences. Crafting delightful, human centred and
                        inclusive experiences. Crafting delightful, human
                        centred and inclusive experiences. Crafting delightful,
                        human centred and inclusive experiences.{" "}
                      </p>

                      <button className="py-3 px-5 border border-[#828282] flex gap-5">
                        Read case study -{">"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full shrink-0">
                  <div ref={refPush} id={3} className="w-[1280px] shrink-0 mx-auto flex gap-[150px] justify-between items-center h-full top-1/2">
                    <div className="flex justify-center items-center">
                      <Image
                        src="/images/project1.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                    </div>
                    <div className="max-w-[557px]">
                      <p className="font-medium text-4xl mb-8">You Matter</p>
                      <p className="font-semibold text-5xl mb-6">
                        Build and design your routine with ease{" "}
                      </p>
                      <p className="font-medium text-xl mb-20">
                        Crafting delightful, human centred and inclusive
                        experiences. Crafting delightful, human centred and
                        inclusive experiences. Crafting delightful, human
                        centred and inclusive experiences. Crafting delightful,
                        human centred and inclusive experiences.{" "}
                      </p>

                      <button className="py-3 px-5 border border-[#828282] flex gap-5">
                        Read case study -{">"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className=" bg-gradient-red h-screen bg-[length:100%_100%] bg-no-repeat ">
          <div className="max-w-[1280px] mx-auto flex gap-[150px] justify-between items-center h-full top-1/2">
            <div className="flex justify-center items-center">
              <Image
                src="/images/project1.png"
                height={766}
                width={864}
                alt="project1"
              />
            </div>
            <div className="max-w-[557px]">
              <p className="font-medium text-4xl mb-8">You Matter</p>
              <p className="font-semibold text-5xl mb-6">
                Build and design your routine with ease{" "}
              </p>
              <p className="font-medium text-xl mb-20">
                Crafting delightful, human centred and inclusive experiences.
                Crafting delightful, human centred and inclusive experiences.
                Crafting delightful, human centred and inclusive experiences.
                Crafting delightful, human centred and inclusive experiences.{" "}
              </p>

              <button className="py-3 px-5 border border-[#828282] flex gap-5">
                Read case study -{">"}
              </button>
            </div>
          </div>
        </div> */}
      </section>
    );
}

export default Work;