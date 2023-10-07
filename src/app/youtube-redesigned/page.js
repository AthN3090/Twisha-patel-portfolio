"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
function CaseStudy2() {
  const banner = useRef(null);

  useEffect(() => {
    function scrollHandler() {
      if (window.scrollY >= 0) {
        bg.style.backgroundPosition = `${-window.scrollY * 0.3}px`;
      }
    }
    const bg = banner.current;
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);
  return (
    <main id="top" className="text-[#2D2D2D] bg-white">
      <div>
        <div
          style={{
            backgroundImage: "url('./images/youtube/hero.png')",
            backgroundPosition: "top left",
            backgroundRepeat: "no-repeat",
          }}
          className="lg:h-[30vw] md:h-[40vw] sm:h-[50vw] h-[70vw] aspect-auto custom-background-property bg-sm md:bg-md lg:bg-lg xl:bg-xl"
          ref={banner}
        ></div>
        <div className="bg-[#FAFAFA] " style={{}}>
          <div className="max-w-[1280px] px-4 py-14  mx-auto ">
            <div>
              <p className="text-xl font-semibold  opacity-70">
                YOUTUBE REDESIGN
              </p>
              <p className="text-4xl font-bold  mt-3">
                Re-imagining How We Consume Educational Content on YouTube
              </p>
            </div>
            <div className="flex gap-4 mt-16 w-full md:justify-between flex-wrap">
              <div>
                <p className="text-xs font-bold opacity-70">TYPE</p>
                <p className="font-semibold">Personal Project</p>
              </div>
              <div className="hidden sm:block w-[0.5px] border border-[#A2A2A2]"></div>
              <div>
                <p className="text-xs font-bold opacity-70">ROLE</p>
                <p className="font-semibold">Product Designer & Reseach</p>
              </div>
              <div className="hidden sm:block w-[0.5px] border border-[#A2A2A2]"></div>
              <div className="mr-14">
                <p className="text-xs font-bold opacity-70">DURATION</p>
                <p className="font-semibold">2 Weeks</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        {/* Main Content */}
        <div className="max-w-[1280px] px-4 mx-auto mt-10 font-epilogue text-[#2D2D2D] leading-7 text-lg">
          {/* Introduction */}
          <div>
            <p className="text-[#CA3D41] text-xl font-bold mb-5">
              Introduction 📝
            </p>
            <p>
              For hundreds of millions of people around the world, YouTube and
              dozens of other free video platforms are shaping up to be a new
              educational model. Schools and universities are integrating free
              video platforms like YouTube into their classrooms.{" "}
              <span className="font-semibold">
                So basically, the project focuses on the user experience YouTube
                is providing for educational purposes, and trying to combine the
                features from other educational platforms with YouTube Learning.
              </span>
              <br></br>
              <br></br>
              The ease-of-access and flexibility of YouTube is allowing amateur
              and professional content developers to develop instructional
              content to a global audience on almost any conceivable topic, from
              knitting, to drawing, to photography, to hair and makeup, cooking
              and gaming.<br></br>
              <br></br>
              <i className="font-semibold">
                Disclaimer: I am not affiliated with YouTube in any way.
                (Personal project)
              </i>
            </p>
          </div>
          {/* Identifying the problems */}
          <div className="my-14">
            <p className="text-[#CA3D41] text-xl font-bold mb-5">
              Identifying the Problems 🤔
            </p>
            <p className="mb-5 font-semibold">Assumptions- </p>
            <ol className="list-decimal pl-5">
              <li>
                The playlist feature is just not enough to integrate content as
                a course.
              </li>
              <li>Can’t continue from where I left off in the course. </li>
              <li>Can’t track the progress in the course. </li>
              <li>
                There is no special section dedicated for courses which makes it
                harder to discover.
              </li>
            </ol>
          </div>
          {/* Research  */}
          <div className="my-14">
            <p className="text-[#CA3D41] text-xl font-bold mb-5">Research 🔍</p>
            <p>
              I prepared a survey with Google Forms and distributed it among
              multiple groups of people. The purpose was to determine the basic
              ‘pain-points’ of users when it comes to watching educational
              videos. Learning about the problems of potential users is a great
              way to be inspired and motivated. Working with real world data is
              a good staring point to help avoid guesswork and preconceptions.{" "}
              <br></br>
              <span className="font-semibold">
                I conducted the survey with 50 people
              </span>
            </p>
            <br></br>
            <Image
              src="/images/youtube/chart.png"
              height={1017}
              width={1440}
              alt="chart"
            ></Image>
            <p className="mt-6 font-semibold">
              Data from this research to validate the assumptions -{" "}
            </p>
            <br></br>
            <ul className="list-disc pl-5 flex flex-col gap-4">
              <li>80% of people used YouTube to learn something new.</li>
              <li>
                About 60% of people found it hard to track their progress in the
                course and felt the learning experience could be much better on
                YouTube.
              </li>
            </ul>
            <p className="mt-6 font-semibold">
              Quotes directly from YouTube users -{" "}
            </p>
            <Image
              src="/images/youtube/reviews.png"
              height={1017}
              width={1440}
              alt="chart"
            ></Image>
          </div>
          {/*Pain points */}
          <div className="my-14">
            <p className="text-[#CA3D41] text-xl font-bold mb-5">
              NEW Pain Points Discovered 🧐
            </p>
            <ul className="list-disc pl-5 flex flex-col gap-4">
              <li>Unable to connect to the creator for doubts. </li>
              <li>The UI distracts the user while watching a course.</li>
              <li>
                Notes and materials provided by the creator are hard to reach in
                the description section.
              </li>
            </ul>
          </div>
          {/* Ideation */}
          <div className="my-14">
            <p className="text-[#CA3D41] text-xl font-bold mb-5">Ideation 💡</p>
            <p>
              Instead of focusing on what the problem is or what the users want,
              I ask myself why they need it. By understanding why people might
              want this app it increased my chances of making a truly valuable
              product.
            </p>
            <p className="my-4 font-semibold">Storyboard </p>
            <p className="mb-4">
              A storyboard is a great instrument for ideation. It’s an effective
              and inexpensive way to capture, relate, and explore the app in a
              real world setting. The story below describes Eve’s experience
              with the app.
            </p>
            <Image
              src="/images/youtube/storyboard.png"
              height={900}
              width={1500}
              alt="chart"
            ></Image>
            <p className="my-4 font-semibold">User Flowchart </p>
            <p className="mb-4">
            The user flow was created to inform my design and show how the new features would be implemented to the existing platform:
            </p>
            <Image
              src="/images/youtube/flowchart.png"
              height={900}
              width={1500}
              alt="chart"
            ></Image>
          </div>
        </div>

        {/* Final Designs */}
        <div className="flex flex-col items-center my-7">
          <p className="font-bold p-4 text-xl">
            Final Designs - (
            <a  target="_blank" href="https://www.figma.com/proto/EDjUFfurwOLMZxWzGrx7pR/Youtube-desk?type=design&node-id=62-94&t=VG5FwgjEX7Ti6Cwy-1&scaling=contain&page-id=0%3A1&starting-point-node-id=62%3A94&mode=design">
              <span className="text-[#CA3D41]">click here </span>
            </a>
            to interact with the prototype)
          </p>
          <div className="max-w-[1280px] px-4 ">
            <Image
              src="/images/youtube/design.png"
              height={900}
              width={1500}
              alt="design"
            ></Image>
          </div>
          <div className="flex justify-center">
            <Link href="#top" className="bg-white ">
              <div className="my-7 border border-[#414141] w-fit p-3 hover:bg-[#F0F0F0]">
                <Image
                  src="/images/up.svg"
                  height={20}
                  width={20}
                  alt="to top"
                ></Image>
              </div>
            </Link>
          </div>
        </div>

        {/* case study navigation */}
        <div className="flex w-full">
          <Link
            className="flex justify-center w-1/2 py-5 px-5 border-t border-r border-[#828282] group"
            href="/you-matter"
          >
            <button className="flex gap-5 transition-all group-hover:gap-7 group-hover:underline items-center w-fit">
              {/* hover:gap-7 hover:underline */}
              <Image
                className="rotate-180"
                src="/images/right.svg"
                height={16}
                width={16}
                alt="right arrow"
              ></Image>
              <span className="pt-[2px]">Previous Project </span>
            </button>
          </Link>
          <Link
            className="flex justify-center w-1/2 py-5 px-5 border-t border-[#828282] text-[#E7E7E7]"
            href="#"
          >
            <button className=" flex gap-5 transition-all  items-center w-fit">
              <span className="pt-[2px]">Next Project </span>
              <Image
              className="rotate-180"
                src="/images/gray-left.svg"
                height={16}
                width={16}
                alt="right arrow"
              ></Image>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default CaseStudy2;
