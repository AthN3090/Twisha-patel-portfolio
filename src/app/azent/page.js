"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
function CaseStudy3() {
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
            backgroundImage: "url('./images/azent/hero.png')",
            backgroundPosition: "left",
            backgroundRepeat: "no-repeat",
          }}
          className="lg:h-[30vw] md:h-[40vw] sm:h-[50vw] h-[70vw] aspect-auto custom-background-property bg-sm md:bg-md lg:bg-lg xl:bg-xl"
          ref={banner}
        ></div>
        <div className="bg-[#FAFAFA] " style={{}}>
          <div className="max-w-[1280px] px-4 py-14  mx-auto ">
            <div>
              <p className="text-xl font-semibold  opacity-70">
                Azent overseas education 🔗
              </p>
              <p className="text-4xl font-bold  mt-3">
                Expense Calculator for Students Planning to Study Abroad
              </p>
            </div>
            <div className="flex gap-4 mt-16 w-full md:justify-between flex-wrap">
              <div>
                <p className="text-xs font-bold opacity-70">TYPE</p>
                <p className="font-semibold">Internship Work</p>
              </div>
              <div className="hidden sm:block w-[0.5px] border border-[#A2A2A2]"></div>
              <div>
                <p className="text-xs font-bold opacity-70">ROLE</p>
                <p className="font-semibold">UX Intern</p>
              </div>
              <div className="hidden sm:block w-[0.5px] border border-[#A2A2A2]"></div>
              <div>
                <p className="text-xs font-bold opacity-70">TEAM</p>
                <p className="font-semibold">Solo Designer</p>
              </div>
              <div className="hidden sm:block w-[0.5px] border border-[#A2A2A2]"></div>
              <div className="mr-14">
                <p className="text-xs font-bold opacity-70">DURATION</p>
                <p className="font-semibold">4 Weeks</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        {/* Main Content */}
        <div className="max-w-[1280px] px-4 mx-auto mt-10 font-epilogue text-[#2D2D2D] leading-7 text-lg">
          {/* Introduction */}
          <div>
            <p className="text-[#3668AA] text-xl font-bold mb-5">
              Introduction 📝
            </p>
            <p>
              During my internship at Azent Overseas Education, I had the
              opportunity to work on quite a few projects but one significant
              project was designing an expense calculator to simplify the
              financial planning process for students aspiring to study abroad.
              The goal was to create an intuitive and user-friendly Expense
              Calculator that would assist students in estimating their expenses
              accurately, helping them make informed decisions about their study
              plans.
            </p>
          </div>
          {/* Identifying the problems */}
          <div className="my-14">
            <p className="text-[#3668AA] text-xl font-bold mb-5">
              Identifying the Problems 🤔
            </p>
            <p className="mb-5">
              The initial challenge was to understand the pain points faced by
              students when planning their study abroad expenses. Our research
              aimed to uncover the following:
            </p>
            <ol className="list-decimal pl-5">
              <li>
                <span className="font-semibold">Lack of Clarity:</span> Students
                often struggle to get a clear understanding of the total
                expenses involved in studying abroad. This lack of clarity can
                lead to financial stress and uncertainty.
              </li>
              <li>
                <span className="font-semibold">Complexity:</span> The process
                of calculating expenses is intricate, involving tuition fees,
                living costs, visa fees, travel expenses, and more. Students
                find it challenging to manage these variables efficiently.{" "}
              </li>
              <li>
                <span className="font-semibold">Information Overload:</span>{" "}
                Existing tools and resources offered an overwhelming amount of
                information, making it difficult for students to extract
                relevant data.{" "}
              </li>
            </ol>
          </div>
          {/* Ideation */}
          <div className="my-14">
            <p className="text-[#3668AA] text-xl font-bold mb-5">Ideation 💡</p>
            <p className="my-6 font-semibold">Key Features to be Included - </p>
            <ol className="list-decimal pl-5">
              <li>
                <span className="font-semibold">Expense Categories:</span> Users
                can input expenses across various categories, such as tuition
                fees, accommodation, food, transportation, and miscellaneous
                expenses.
              </li>
              <li>
                <span className="font-semibold">Currency Conversion:</span> To
                cater to international students, the calculator provides
                real-time currency conversion for expenses in different
                countries.{" "}
              </li>
              <li>
                <span className="font-semibold">Expense Breakdown:</span> The
                tool provides a detailed breakdown of the estimated expenses,
                helping students understand where their money will be allocated.{" "}
              </li>
              <li>
                Articles related to{" "}
                <span className="font-semibold">funding opportunities.</span>
              </li>
            </ol>
          </div>
          <p className="text-[#3668AA] text-xl font-bold mb-5">
            Final Design Solution 😎{" "}
          </p>
          <p className="mb-5">
            The final design of the Expense Calculator is visually appealing and
            user-friendly. It features a clean and intuitive interface that
            guides students through the process of estimating their expenses.
            The tool also provides a summary of the estimated expenses and
            offers tips on budgeting and financial planning.
          </p>
        </div>
        {/* Final Designs */}
        <div className="flex flex-col items-center my-7">
          <div className="max-w-[1280px] px-4 ">
            <Image
              src="/images/azent/design.gif"
              height={900}
              width={1500}
              alt="design"
            ></Image>
          </div>
          <div></div>
          <div className="mb-12"></div>
        </div>
        {/* conclusion */}
        <div className="max-w-[1280px] px-4 mx-auto mt-10 font-epilogue text-[#2D2D2D] leading-7 text-lg">
          <div className="mb-12">
            <p className="text-[#3668AA] text-xl font-bold mt-10">
              Results and Impact 💯
            </p>
            <p className="my-5">
              The Expense Calculator was integrated into Azent Overseas
              Education&apos;s website, and the impact was significant:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-semibold">
                  Increased User Engagement:{" "}
                </span>{" "}
                The tool became one of the most visited pages on the website,
                with students spending more time exploring their financial
                planning options.
              </li>
              <li>
                <span className="font-semibold">Improved Decision-Making:</span>{" "}
                TStudents reported feeling more confident in their decision to
                study abroad, as they had a clearer understanding of the
                associated expenses.{" "}
              </li>
              <li>
                <span className="font-semibold">Positive User Feedback:</span>{" "}
                The feedback from students was overwhelmingly positive, with
                many expressing their appreciation for the tool&apos;s exciting,
                fun yet useful interface.{" "}
              </li>
            </ul>
          </div>
          <div className="mb-12">
            <p className="text-[#3668AA] text-xl font-bold mt-10">
              Conclusion 👩🏻‍💻
            </p>
            <p className="my-5">
              Designing the Expense Calculator for Azent Overseas Education was
              a rewarding experience that allowed me to apply my UX design
              skills to solve a real-world problem. The tool successfully
              addressed the financial planning needs of students planning to
              study abroad, making the process more transparent and manageable.
              This project reinforced the importance of user research, iterative
              design, and usability testing in creating effective and
              user-centric digital solutions.{" "}
            </p>
            <p>
              As a solo designer on this project, I gained valuable experience
              in taking a project from ideation to implementation and witnessed
              firsthand the positive impact of design on user experiences.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="my-7 border border-[#414141] w-fit p-3 hover:bg-[#F0F0F0]">
              <Link href="#top" className="bg-white ">
                <Image
                  src="/images/up.svg"
                  height={20}
                  width={20}
                  alt="to top"
                ></Image>
              </Link>
            </div>
          </div>
        </div>
        {/* case study navigation */}
        <div className="flex w-full">
          <Link
            className="flex justify-center w-1/2 py-5 px-5 border-t border-r border-[#828282]"
            href="/youtube-redesigned"
          >
            <button className="flex gap-5 transition-all hover:gap-7 hover:underline items-center w-fit">
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
            className="flex justify-center w-1/2 py-5 px-5 border-t border-[#828282]"
            href="/trinkerr"
          >
            <button className=" flex gap-5 transition-all hover:gap-7 hover:underline items-center w-fit">
              <span className="pt-[2px]">Next Project </span>
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
    </main>
  );
}

export default CaseStudy3;
