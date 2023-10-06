"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
function CaseStudy4() {
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
            backgroundImage: "url('./images/trinkerr/hero.png')",
            backgroundPosition:"left",
            backgroundSize:"auto 100%",
            backgroundRepeat: "no-repeat",
          }}
          className="lg:h-[30vw] md:h-[40vw] sm:h-[50vw] h-[70vw] aspect-auto bg-sm md:bg-md lg:bg-lg xl:bg-xl"
          ref={banner}
        ></div>
        <div className="bg-[#FAFAFA] " style={{}}>
          <div className="max-w-[1280px] px-4 py-14  mx-auto ">
            <div>
              <p className="text-xl font-semibold  opacity-70">
                <a href="https://www.trinkerr.com/">Trinkerr 🔗 </a> &{" "}
                <a href="https://tiqs.in/">TIQS 🔗</a>
              </p>
              <p className="text-4xl font-bold  mt-3">
                Redesigning Trinkerr Web App & Building a Broker App from
                Scratch
              </p>
            </div>
            <div className="flex gap-4 mt-16 w-full md:justify-between flex-wrap">
              <div>
                <p className="text-xs font-bold opacity-70">TYPE</p>
                <p className="font-semibold">Full-time Work</p>
              </div>
              <div className="hidden sm:block w-[0.5px] border border-[#A2A2A2]"></div>
              <div>
                <p className="text-xs font-bold opacity-70">ROLE</p>
                <p className="font-semibold">Associate Product Design</p>
              </div>
              <div className="hidden sm:block w-[0.5px] border border-[#A2A2A2]"></div>
              <div>
                <p className="text-xs font-bold opacity-70">TEAM</p>
                <p className="font-semibold">Three Members</p>
              </div>
            </div>
          </div>
          <div></div>
        </div>
        {/* Main Content */}
        <div className="max-w-[1280px] px-4 mx-auto mt-10 font-epilogue text-[#2D2D2D] leading-7 text-lg">
          {/* Introduction */}
          <div>
            <p className="text-[#8C79BC] text-xl font-bold mb-5">
              Introduction 📝
            </p>
            <p>
              During my one year tenure as an Associate Product Designer at
              Trinkerr Fintech, I had the privilege of working on two
              transformative projects that significantly enhanced the user
              experience and capabilities of the Trinkerr platform. The first
              project involved revamping the Trinkerr web app, which aimed to
              enhance the user experience and introduce new features. The second
              project was the design of the TIQS broker platform from scratch.
              From branding to deciding the design language to mapping out the
              flow for the broker web app to actually prototyping our ideas, it
              was extremely rewarding. In this case study, I will walk you
              through both projects, highlighting the UX design processes,
              challenges, and outcomes.
            </p>
            <br></br>
            <i className="font-semibold">
              The web app design team consisted of 2 Associate Product Designers
              and 1 Senior Designer.{" "}
            </i>
          </div>
          {/* Identifying the problems */}
          <div className="my-14">
            <p className="text-3xl my-6">Project 1 - Trinkerr Web App Revamp</p>
            <p className="text-[#8C79BC] text-xl font-bold mb-5">
              A Little Background...
            </p>
            <p className="mb-5">
              Trinkerr Fintech is India&apos;s leading platform for stock market
              learning, offering users the ability to track markets, practice
              F&O trading, explore rule-based portfolios, and access stock
              health reports, all for free. The goal of this project was to
              revamp the web app, improving its usability, and adding new
              features such as a watchlist page, Option Chain, Futures and
              Options trading, and a dedicated explore section.
            </p>
          </div>
          {/* Ideation */}
          <div className="my-14">
            <p className="text-[#8C79BC] text-xl font-bold mb-5">
              Project Goals 🎯
            </p>
            <ol className="list-decimal pl-5">
              <li>
                Redesign the Trinkerr web app for a seamless and intuitive user
                experience.
              </li>
              <li>
                Introduce new features like the watchlist page, Option Chain,
                Futures and Options trading, and an explore section for
                discovery of portfolios, stocks, and expert traders.
              </li>
              <li>
                Create a responsive design system for enhanced accessibility
                across devices.
              </li>
            </ol>
          </div>
          {/* Research */}
          <div className="my-14">
            <p className="text-[#8C79BC] text-xl font-bold mb-5">Research 🔍</p>
            <p className="mb-5">
              To understand user needs and preferences, I collaborated with my
              design team and conducted the following research activities:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-semibold">User Research</span>- We
                conducted interviews with existing Trinkerr users to gather
                insights into their pain points and expectations from the
                platform.
              </li>
              <li>
                <span className="font-semibold">Competitive Analysis</span>- We
                analyzed competitors and industry leaders to identify trends and
                best practices.
              </li>
            </ul>
            <br></br>
            <p className="mb-5 font-semibold">Key Findings </p>
            <ol className="list-decimal pl-5">
              <li>
                Users wanted a streamlined platform with easy access to stock
                information and trading tools.
              </li>
              <li>Mobile accessibility was a priority for many users.</li>
              <li>
                The watchlist, Option Chain, and trading features were highly
                anticipated.
              </li>
              <li>
                Users desired a simple and clean design with an intuitive
                navigation structure.
              </li>
            </ol>
          </div>
          <p className="text-[#8C79BC] text-xl font-bold mb-5">
            Final Design Solution 😎{" "}
          </p>
          <p className="mb-5 font-semibold">Prototyping </p>
          <p className="mb-5">
            Using Figma, I created interactive prototypes that visualized the
            new design and feature implementations. These prototypes allowed us
            to visualize the user journey and gather initial feedback from
            stakeholders and users. Iterative design based on this feedback was
            a critical part of the process.
          </p>
          <p className="mb-5 font-semibold">User Testing </p>
          <p className="mb-5">
            We conducted usability testing with real users to validate our
            design decisions. These sessions helped us identify pain points,
            usability issues, and areas for improvement. We made iterative
            changes based on this feedback, ensuring the final design was
            user-friendly.
          </p>
          <p className="mb-5 font-semibold">Development Collaboration</p>
          <p className="mb-5">
            Close collaboration with developers was essential to ensure the
            seamless implementation of our designs. We provided detailed design
            specifications and remained available for clarifications throughout
            the development phase.
          </p>
        </div>
        {/* Final Designs */}
        <div className="flex flex-col items-center my-7">
          <div className="max-w-[1280px] px-4 ">
            <video playsInline autoPlay loop muted className="w-full">
              <source
                src="/images/trinkerr/design/trinkerr.MP4"
                type="video/mp4"
              />
            </video>
          </div>
          <div></div>
          <div className="mb-12"></div>
        </div>

        {/* conclusion */}
        <div className="max-w-[1280px] px-4 mx-auto mt-10 font-epilogue text-[#2D2D2D] leading-7 text-lg relative">
          <div className="mb-12">
            <p className="text-[#8C79BC] text-xl font-bold mt-10">
              Results and Impact 💯
            </p>
            <p className="my-5">
              The revamped Trinkerr web app received overwhelmingly positive
              feedback from users and stakeholders. Key achievements included:
            </p>
            <ul className="list-disc pl-5">
              <li>
                <span className="font-semibold">
                  Improved User Experience:{" "}
                </span>{" "}
                Users found it easier to navigate the platform, track stocks,
                and use new features like the watchlist and Option Chain.
              </li>
              <li>
                <span className="font-semibold">
                  Increased User Engagement:{" "}
                </span>{" "}
                The introduction of Futures and Options trading and the explore
                section led to increased user engagement and time spent on the
                platform.{" "}
              </li>
              <li>
                <span className="font-semibold">Positive User Feedback:</span>{" "}
                User feedback was consistently positive, with users praising the
                new design, improved performance, and the addition of valuable
                features.{" "}
              </li>
            </ul>
          </div>

          <div className="my-14">
            <p className="text-3xl my-6">Project 2 - TIQS Broker Platform</p>
            <div>
              <p className="text-[#8C79BC] text-xl font-bold mb-5">
                A Little Background...
              </p>
              <p className="mb-5">
                TIQS is an upcoming broker platform, it was a complex fintech
                product from branding to actual product design. The challenge
                was to create an intuitive and efficient platform for trading
                and investment, catering to both novice and experienced users.
              </p>
              <div className="flex justify-center">
                <Image
                  src="/images/trinkerr/vision.jpeg"
                  height={960}
                  width={700}
                  alt="design"
                ></Image>
              </div>
            </div>
          </div>
          <div className="my-14">
            <p className="text-[#8C79BC] text-xl font-bold mb-5">
              Project Goals 🎯
            </p>
            <ol className="list-decimal pl-5">
              <li>
              Establish the brand identity and design language for TIQS.
              </li>
              <li>
              Design the user flow and interface for the broker web app.
              </li>
              <li>
              Create a user-centric and efficient trading experience.
              </li>
            </ol>
          </div>
          <div className="mb-12">
            <p className="text-[#8C79BC] text-xl font-bold mt-10 mb-5">
              Design Process 👩🏻‍🎨
            </p>
            <p className="mb-5 font-semibold">
              Brand and Design Language Development:
            </p>
            <ol className="list-decimal pl-5">
              <li>
                Collaborated with the team to define the brand identity,
                incorporating elements that conveyed trust, professionalism, and
                innovation.
              </li>
              <li>
                Created a design language aligning with the brand, defining
                visual elements, typography, and color schemes.
              </li>
            </ol>
            <div className="grid md:grid-cols-2  justify-items-center my-14">
              <Image
                className="row-span-2"
                src="/images/trinkerr/design/color1.jpeg"
                height={960}
                width={1000}
                alt="design"
              ></Image>
              <Image
                src="/images/trinkerr/design/text.jpeg"
                height={960}
                width={400}
                alt="design"
              ></Image>
              <Image
                src="/images/trinkerr/design/text2.jpeg"
                height={960}
                width={400}
                alt="design"
              ></Image>
            </div>
            <p className="mb-5 font-semibold">Wireframing and Prototyping:</p>
            <ol className="list-decimal pl-5">
              <li>
                Developed wireframes to map out the user flow, emphasizing ease
                of use and efficiency.
              </li>
              <li>
                Built interactive prototypes to visualize the user journey and
                obtain early feedback on the design.
              </li>
            </ol>

            <p className="my-7 font-semibold">Design</p>
            <video playsInline autoPlay loop muted className="w-full">
              <source src="/images/trinkerr/design/tiqs.MP4" type="video/mp4" />
            </video>
          </div>
          <div className="mb-12">
            <p className="text-[#8C79BC] text-xl font-bold mt-10">
              Conclusion 👩🏻‍💻
            </p>
            <p className="my-5">
              Both the Trinkerr Web App Revamp and the TIQS Broker Platform
              projects were significant milestones in my career as a product
              designer. It allowed me to showcase my skills in research,
              prototyping, and iterative design, ensuring the creation of
              user-centric and visually appealing fintech products. The
              experience gained from these projects has enriched my
              understanding of UX design within the finance sector and
              solidified my passion for creating seamless and enjoyable user
              experiences.{" "}
            </p>
            <p>
              Throughout my tenure as an Associate Product Designer at Trinkerr
              Fintech, the collaborative nature of the projects, especially the
              web app revamp and the TIQS broker platform design, played a
              pivotal role in enhancing my skills and boosting my confidence as
              a designer.
            </p>
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
            href="/azent"
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

export default CaseStudy4;
