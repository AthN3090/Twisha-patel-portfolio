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
          if (entry.target.id == 4) {
            stickyBackground.current.style.background =
              "#FDF3FF"
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
      <section className="bg-white">
        <div className="border-b md:py-10 py-3 text-center font-semibold md:text-4xl text-2xl bg-white">
          My Work
        </div>
        <div className="min-h-screen relative" ref={stickyContainer}>
          <div className="sticky top-0" ref={sticky}>
            <div
              ref={stickyBackground}
              className="bg-[length:100%_100%]  bg-no-repeat flex items-center overflow-x-hidden transition-all duration-500"
            >
              <div className="min-w-full" ref={horizontalScrollableContent}>
                <div className="w-full md:h-screen shrink-0">
                  <div
                    ref={refPush}
                    id={1}
                    className="max-w-[1280px] shrink-0 mx-auto flex flex-col md:flex-row gap-[6vw] md:justify-between md:items-center h-full top-1/2 md:p-10 p-5 my-5 md:my-0"
                  >
                    <div className="flex justify-center items-center md:w-1/2 ">
                      <Image
                        className="md:block hidden"
                        src="/images/project/youmatter.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                      <Image
                        className="md:hidden block rounded-lg"
                        src="/images/project/youmatter-mobile.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <p className="font-medium md:text-2xl lg:text-4xl md:mb-8 mb-3">
                        You Matter
                      </p>
                      <p className="font-semibold md:text-3xl lg:text-5xl text-xl md:mb-6 mb-3 lg:leading-[64px] ">
                        Self-Care and Productivity App{" "}
                      </p>
                      <p className="font-normal md:text-base lg:text-xl lg:mb-20 md:mb-12 mb-4">
                        Self-care is a popular topic these days, but it is often
                        poorly explained. It is not synonymous with
                        self-indulgence or being selfish. Self-care at the
                        simplest level is making sure that you are doing the
                        things that you need to do to stay healthy physically
                        and mentally.{" "}
                      </p>

                      <Link href="/you-matter">
                        <button className="md:py-3 md:px-5 p-2 border border-[#828282] flex gap-5 transition-all hover:gap-7 hover:underline items-center">
                          <span className="pt-[2px]">Read case study </span>
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
                <div className="w-full md:h-screen shrink-0">
                  <div
                    ref={refPush}
                    id={2}
                    className="max-w-[1280px] shrink-0 mx-auto flex flex-col md:flex-row gap-[6vw] md:justify-between md:items-center h-full top-1/2 md:p-10 p-5 my-5 md:my-0"
                  >
                    <div className="flex justify-center items-center md:w-1/2 ">
                      <Image
                        className="md:block hidden"
                        src="/images/project/youtube.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                      <Image
                        className="md:hidden block rounded-lg"
                        src="/images/project/youtube-mobile.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <p className="font-medium md:text-2xl lg:text-4xl md:mb-8 mb-3">
                        YouTube Redesign
                      </p>
                      <p className="font-semibold md:text-3xl lg:text-5xl text-xl md:mb-6 mb-3 lg:leading-[64px]">
                        Re-imagining How We Consume Educational Content on
                        YouTube{" "}
                      </p>
                      <p className="font-normal md:text-base lg:text-xl lg:mb-20 md:mb-12 mb-4">
                        For hundreds of millions of people around the world,
                        YouTube and dozens of other free video platforms are
                        shaping up to be a new educational model. So basically,
                        the project focuses on the user experience YouTube is
                        providing for educational purposes, and trying to
                        combine the features from other educational platforms
                        with YouTube Learning.{" "}
                      </p>

                      <Link href="/youtube-redesign">
                        <button className="md:py-3 md:px-5 p-2 border border-[#828282] flex gap-5 transition-all hover:gap-7 hover:underline items-center">
                          <span className="pt-[2px]">Read case study </span>
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
                <div className="w-full md:h-screen shrink-0">
                  <div
                    ref={refPush}
                    id={3}
                    className="max-w-[1280px] shrink-0 mx-auto flex flex-col md:flex-row gap-[6vw] md:justify-between md:items-center h-full top-1/2 md:p-10 p-5 my-5 md:my-0"
                  >
                    <div className="flex justify-center items-center md:w-1/2 ">
                      <Image
                        className="md:block hidden"
                        src="/images/project/azent.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                      <Image
                        className="md:hidden block rounded-lg"
                        src="/images/project/azent-mobile.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <p className="font-medium md:text-2xl lg:text-4xl md:mb-8 mb-3">
                        Azent Overseas Education
                      </p>
                      <p className="font-semibold md:text-3xl lg:text-5xl text-xl md:mb-6 mb-3 lg:leading-[64px]">
                        Expense Calculator for Students Planning to Study Abroad{" "}
                      </p>
                      <p className="font-normal md:text-base lg:text-xl lg:mb-20 md:mb-12 mb-4">
                        During my internship at Azent Overseas Education, I had
                        the opportunity to work on quite a few projects but one
                        significant project was designing an expense calculator
                        to simplify the financial planning process for students
                        aspiring to study abroad.{" "}
                      </p>

                      <Link href="/azent">
                        <button className="md:py-3 md:px-5 p-2 border border-[#828282] flex gap-5 transition-all hover:gap-7 hover:underline items-center">
                          <span className="pt-[2px]">Read case study </span>
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
                <div className="w-full md:h-screen shrink-0">
                  <div
                    ref={refPush}
                    id={4}
                    className="max-w-[1280px] shrink-0 mx-auto flex flex-col md:flex-row gap-[6vw] md:justify-between md:items-center h-full top-1/2 md:p-10 p-5 my-5 md:my-0"
                  >
                    <div className="flex justify-center items-center md:w-1/2 ">
                      <Image
                        className="md:block hidden"
                        src="/images/project/trinkerr.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                      <Image
                        className="md:hidden block rounded-lg"
                        src="/images/project/trinkerr-mobile.png"
                        height={766}
                        width={864}
                        alt="project1"
                      />
                    </div>
                    <div className="md:w-1/2">
                      <p className="font-medium md:text-2xl lg:text-4xl md:mb-8 mb-3">
                        Trinkerr
                      </p>
                      <p className="font-semibold md:text-3xl lg:text-5xl text-xl md:mb-6 mb-3 lg:leading-[64px]">
                        Redesigning Trinkerr Web App & Building a Broker App
                        from Scratch{" "}
                      </p>
                      <p className="font-normal md:text-base lg:text-xl lg:mb-20 md:mb-12 mb-4">
                        During my one year tenure as an Associate Product
                        Designer at Trinkerr Fintech, I had the privilege of
                        working on two transformative projects. In this case
                        study, I will walk you through both projects,
                        highlighting the UX design processes, challenges, and
                        outcomes.{" "}
                      </p>

                      <Link href="/trinkerr">
                        <button className="md:py-3 md:px-5 p-2 border border-[#828282] flex gap-5 transition-all hover:gap-7 hover:underline items-center">
                          <span className="pt-[2px]">Read case study </span>
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