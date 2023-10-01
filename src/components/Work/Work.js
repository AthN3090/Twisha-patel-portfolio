import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState } from "react";
function Work() {
  const sticky = useRef(null)
  const stickyContainer = useRef(null)
  const stickyBackground = useRef(null)
  const card = useRef([])
  const horizontalScrollableContent = useRef(null)

  const refPush = (el) => {card.current.push(el)}

  
  
  useLayoutEffect(() => {
    let options = {
      rootMargin: "0px",
      threshold: 0.5,
    };

    const projectCard = card.current
    
    const observer = new IntersectionObserver((entries, callback) => {
      entries.forEach((entry, index) => {
        if(entry.isIntersecting){
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
    if(projectCard.length > 0){
      projectCard.forEach((item) => {
        if(item) {
          observer.observe(item)
        }
      });
    }
    
    return ()=>{
      
      if(projectCard.length > 0){
        projectCard.forEach((item) => {
          if(item) {
            observer.unobserve(item)
          }
        });
      }
      
    }
  }, [])
    return (
      <section>
        <div className="border-b py-10 text-center font-semibold text-4xl bg-white">
          My Work
        </div>
        <div className="min-h-screen relative" ref={stickyContainer}>
          <div className="sticky top-0" ref={sticky}>
            <div
              ref={stickyBackground}
              className="bg-[length:100%_100%]  bg-no-repeat flex items-center overflow-x-hidden transition-all duration-500"
            >
              <div
                className="min-w-full"
                ref={horizontalScrollableContent}
              >
                <div className="w-full h-screen shrink-0">
                  <div
                    ref={refPush}
                    id={1}
                    className="w-[1280px] shrink-0 mx-auto flex gap-[150px] justify-between items-center h-full top-1/2"
                  >
                    <div className="flex justify-center items-center">
                      <Image
                        src="/images/project/youmatter.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                    </div>
                    <div className="max-w-[557px]">
                      <p className="font-medium text-4xl mb-8">You Matter</p>
                      <p className="font-semibold text-5xl mb-6 leading-[64px]">
                        Re-imagining How We Consume Educational Content on
                        YouTube{" "}
                      </p>
                      <p className="font-medium text-xl mb-20">
                        For hundreds of millions of people around the world,
                        YouTube and dozens of other free video platforms are
                        shaping up to be a new educational model. So basically,
                        the project focuses on the user experience YouTube is
                        providing for educational purposes, and trying to
                        combine the features from other educational platforms
                        with YouTube Learning.{" "}
                      </p>

                      <Link href="/you-matter">
                        <button className="py-3 px-5 border border-[#828282] flex gap-5 transition-all hover:gap-7 hover:underline items-center">
                          <span className="pt-[2px]">
                            Read case study{" "}
                            </span>
                          <Image
                            src="/images/right.svg"
                            height={16}
                            width={16}
                            alt="right arrow"
                          ></Image>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full h-screen shrink-0">
                  <div
                    ref={refPush}
                    id={2}
                    className="w-[1280px] shrink-0 mx-auto flex gap-[150px] justify-between items-center h-full top-1/2"
                  >
                    <div className="flex justify-center items-center">
                      <Image
                        src="/images/project/youtube.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                    </div>
                    <div className="max-w-[557px]">
                      <p className="font-medium text-4xl mb-8">
                        YouTube Redesign
                      </p>
                      <p className="font-semibold text-5xl mb-6 leading-[64px]">
                        Build and design your routine with ease{" "}
                      </p>
                      <p className="font-medium text-xl mb-20">
                        For hundreds of millions of people around the world,
                        YouTube and dozens of other free video platforms are
                        shaping up to be a new educational model. So basically,
                        the project focuses on the user experience YouTube is
                        providing for educational purposes, and trying to
                        combine the features from other educational platforms
                        with YouTube Learning.{" "}
                      </p>

                      <Link href="/youtube-redesigned">
                        <button className="py-3 px-5 border border-[#828282] flex gap-5 transition-all hover:gap-7 hover:underline  items-center">
                        <span className="pt-[2px]">
                            Read case study{" "}
                            </span>
                          <Image
                            src="/images/right.svg"
                            height={16}
                            width={16}
                            alt="right arrow"
                          ></Image>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="w-full h-screen shrink-0">
                  <div
                    ref={refPush}
                    id={3}
                    className="w-[1280px] shrink-0 mx-auto flex gap-[150px] justify-between items-center h-full top-1/2"
                  >
                    <div className="flex justify-center items-center">
                      <Image
                        src="/images/project/azent.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                    </div>
                    <div className="max-w-[557px]">
                      <p className="font-medium text-4xl mb-8">
                        Azent Overseas Education
                      </p>
                      <p className="font-semibold text-5xl mb-6 leading-[64px]">
                        Expense Calculator for Students Planning to Study Abroad{" "}
                      </p>
                      <p className="font-medium text-xl mb-20">
                        Crafting delightful, human centred and inclusive
                        experiences. Crafting delightful, human centred and
                        inclusive experiences. Crafting delightful, human
                        centred and inclusive experiences. Crafting delightful,
                        human centred and inclusive experiences.{" "}
                      </p>

                      <Link href="#">
                        <button className="py-3 px-5 border border-[#828282] flex gap-5 transition-all hover:gap-7 hover:underline  items-center">
                        <span className="pt-[2px]">
                            Read case study{" "}
                            </span>
                          <Image
                            src="/images/right.svg"
                            height={16}
                            width={16}
                            alt="right arrow"
                          ></Image>
                        </button>
                      </Link>
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
                src="/images/project/project1.png"
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