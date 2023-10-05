"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
function CaseStudy1() {
  const banner = useRef(null)

  useEffect(()=>{

    function scrollHandler(){
      if(window.scrollY >= 0){
        bg.style.backgroundPosition = `${-window.scrollY * 0.3}px`
      }
    }
    const bg = banner.current
      window.addEventListener('scroll', scrollHandler)

      return () => {
        window.removeEventListener('scroll', scrollHandler)
      }
  },[])
    return (
      <main id="top" className="text-[#2D2D2D] bg-white">
        <div>
          <div
            style={{
              backgroundImage: "url('./images/youmatter/hero.png')",
              backgroundPosition: "left",
              backgroundRepeat: "no-repeat",
            }}
            className="lg:h-[30vw] md:h-[40vw] sm:h-[50vw] h-[70vw] aspect-auto custom-background-property bg-sm md:bg-md lg:bg-lg xl:bg-xl"
            ref={banner}
          ></div>
          <div className="bg-[#FAFAFA] " style={{}}>
            <div className="max-w-[1280px] px-4 py-14  mx-auto ">
              <div>
                <p className="text-xl font-semibold  opacity-70">YOU MATTER</p>
                <p className="text-4xl font-bold  mt-3">
                  Self Care and Productivity App
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
                  <p className="font-semibold">6 Weeks</p>
                </div>
              </div>
            </div>
            <div></div>
          </div>
          {/* Main Content */}
          <div className="max-w-[1280px] px-4 mx-auto mt-10 font-epilogue text-[#2D2D2D] leading-7 text-lg">
            {/* Introduction */}
            <div>
              <p className="text-[#67895E] text-xl font-bold mb-5">
                Introduction 📝
              </p>
              <p>
                Self-care is a popular topic these days, but it is often poorly
                explained. It is not synonymous with self-indulgence or being
                selfish. Self care at the simplest level is making sure that you
                are doing the things that you need to do in order to stay
                healthy physically and mentally. Caring for yourself is an
                active choice that you need to make everyday that prioritizes
                your own health and happiness.
              </p>
              <p className="bg-[#FAFAFA] border-[#67895E] border-l-8 p-5 my-4">
                “Self care is an attitude that says, I am responsible for
                myself.”
              </p>
              <p>
                That sounds simple, but most people struggle to incorporate self
                care into their daily routines. With self-care being such a
                prevalent and subjective topic, my goal was to better understand
                how people approach self care and what challenges they face down
                the road of self improvement.​
              </p>
            </div>
            {/* Identifying the problems */}
            <div className="my-14">
              <p className="text-[#67895E] text-xl font-bold mb-5">
                Identifying the Problems 🤔
              </p>
              <ol className="list-decimal pl-5">
                <li>Lack of motivation. </li>
                <li>People get bored of using self care apps. </li>
                <li>Too lazy to be consistent. </li>
                <li>Time consuming & overwhelming.</li>
              </ol>
            </div>
            {/* Research  */}
            <div className="my-14">
              <p className="text-[#67895E] text-xl font-bold mb-5">
                Research 🔍
              </p>
              <p>
                I defined a series of questions and began researching the
                problem. I conducted the{" "}
                <span className="font-semibold">survey with 71 people</span> of
                different age groups, and{" "}
                <span className="font-semibold">
                  had a 1 : 1 conversation with one of the people.
                </span>{" "}
                The questions I asked went like-
              </p>
              <br></br>
              <ul className="list-disc pl-5 flex flex-col gap-4">
                <li>
                  Who are the users that are using self-care apps? What do they
                  use for their self care? Do they know what self-care is, and
                  what its benefits are? What are the current market trends?
                </li>
                <li>
                  Who are the users that are using self-care apps? What do they
                  use for their self care? Do they know what self-care is, and
                  what its benefits are? What are the current market trends?
                </li>
                <li>
                  What are the available apps out there? What apps do people
                  like or dislike?
                </li>
                <li>
                  What are their main goals in your journey of self care? What
                  has been the major barrier in their road to self care?
                </li>
                <li>
                  I also analyzed Customer comments on several apps to get a
                  better understanding of what are other pain points in current
                  apps.
                </li>
              </ul>
              <p className="mt-6 font-semibold">Insights from the survey- </p>
              <br></br>
              <ul className="list-disc pl-5 flex flex-col gap-4">
                <li>More than 50% of people were between the age of 21-30.</li>
                <li>
                  Number of females using self-care apps & practicing self-care
                  in general were more than male.
                </li>
                <li>Almost 90% of the people were student.</li>
                <li>
                  More than 60% of the people were still unaware of the concept
                  of self-care in their lives.
                </li>
                <li>
                  Improve focus, fitness and mood tracking & coping with stress
                  and anxiety were the top three goals among the people.
                </li>
                <li>
                  Lack of motivation, unawareness about self-care & feeling
                  regretful for failing at being consistent were the top three
                  challenges that people face.
                </li>
              </ul>
              <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center">
                <Image
                  src="/images/youmatter/piechart/piechart1.png"
                  height={200}
                  width={500}
                  alt="piechart"
                ></Image>
                <Image
                  src="/images/youmatter/piechart/piechart2.png"
                  height={200}
                  width={500}
                  alt="piechart"
                ></Image>
                <Image
                  src="/images/youmatter/piechart/piechart3.png"
                  height={200}
                  width={500}
                  alt="piechart"
                ></Image>
                <Image
                  src="/images/youmatter/piechart/piechart4.png"
                  height={200}
                  width={500}
                  alt="piechart"
                ></Image>
              </div>
              <div className="flex justify-center">
                <Image
                  src="/images/youmatter/barchart/barchart.png"
                  height={200}
                  width={900}
                  alt="barchart"
                ></Image>
              </div>
              <div>
                <p className="mt-6 font-semibold">
                  Insights from one-on-one calls{" "}
                </p>
                <br></br>
                <ul className="list-disc pl-5 flex flex-col gap-4">
                  <li>
                    “Most of the apps provide very general experience. As
                    everyone has their own different emotions, sufferings,
                    mindset an app should offer a personalized experience.”
                  </li>
                  <li>
                    “Sometimes I want someone to predict my mood and help me
                    with it, an app will always be limited.”
                  </li>
                  <li>
                    “Boring interfaces, makes harder to stay connected and
                    motivated.”
                  </li>
                  <li>
                    “Using the same app every time gets boring, people need
                    different content, so they substitute paid apps with free
                    resources.”
                  </li>
                </ul>
                <p className="mt-6 font-semibold">
                  Insights from customer comments on apps in same niche-{" "}
                </p>
                <br></br>
                <div className="flex flex-col lg:flex-wrap gap-3 lg:h-[470px] content-center items-center ">
                  <Image
                    src={"/images/youmatter/review/review1.png"}
                    height={2100}
                    width={400}
                    alt="review"
                  ></Image>
                  <Image
                    src={"/images/youmatter/review/review2.png"}
                    height={200}
                    width={400}
                    alt="review"
                  ></Image>
                  <Image
                    src={"/images/youmatter/review/review3.png"}
                    height={200}
                    width={400}
                    alt="review"
                  ></Image>
                  <Image
                    src={"/images/youmatter/review/review4.png"}
                    height={200}
                    width={400}
                    alt="review"
                  ></Image>
                </div>
                {/* Pain points discovered */}
                <div className="lg:my-0 my-14">
                  <p className="text-[#67895E] text-xl font-bold mb-5">
                    Pain Points Discovered 🧐
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-4">
                    <li>
                      People are still{" "}
                      <span className="font-semibold">unaware</span> about the
                      concept of self-care.
                    </li>
                    <li>
                      Motivation is often lost, due to{" "}
                      <span className="font-semibold">lack of variety.</span>
                    </li>
                    <li>
                      Most basic and good features are available only in{" "}
                      <span className="font-semibold">premium packages.</span>{" "}
                      As majority of users are students, they won&apos;t be
                      quite willing to pay.
                    </li>
                    <li>
                      Most apps provide a very{" "}
                      <span className="font-semibold">general experience</span>{" "}
                      to users.
                    </li>
                    <li>
                      Often people can&apos;t realise if their mental health is
                      declining and when should they{" "}
                      <span className="font-semibold">
                        consult a professional.
                      </span>
                    </li>
                  </ul>
                </div>
                {/* Goals */}

                <div className="my-14">
                  <p className="text-[#67895E] text-xl font-bold mb-5">
                    Goals 🎯
                  </p>
                  <div className="flex flex-col md:flex-row gap-10">
                    <div>
                      <p className="mb-6 font-semibold">The app should be -</p>
                      <ul className="list-disc pl-5 flex flex-col gap-4">
                        <li>Functional and usable.</li>
                        <li>
                          Not the primary source of self-care content, for
                          variety
                        </li>
                        <li>Have access to free content and basic features.</li>
                        <li>Have access to professional therapists</li>
                        <li>More personalization.</li>
                      </ul>
                    </div>
                    <div>
                      <p className="mb-6 font-semibold">
                        While using the app people should -
                      </p>
                      <ul className="list-disc pl-5 flex flex-col gap-4">
                        <li>Functional and usable.</li>
                        <li>
                          Not the primary source of self-care content, for
                          variety
                        </li>
                        <li>Have access to free content and basic features.</li>
                        <li>Have access to professional therapists</li>
                        <li>More personalization.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Solving */}
                <div className="my-14">
                  <p className="text-[#67895E] text-xl font-bold mb-5">
                    Now comes the exciting part- Solving 😎
                  </p>
                  <p className="my-4">
                    I started with making a few{" "}
                    <span className="font-semibold">assumptions</span> that
                    helped me build a relevant product-
                  </p>
                  <ul className="list-disc pl-5 flex flex-col gap-4">
                    <li>
                      When the user adds an image to complete a certain task in
                      his/her routine,{" "}
                      <span className="font-semibold">
                        assuming we will have image processing techniques for
                        checking if the purpose of task and image matches.
                      </span>
                    </li>
                    <li>
                      Users will have two options to access the premium
                      features, by purchasing the premium package or by
                      collecting coins by joining in and completing weekly
                      challenges. So{" "}
                      <span className="font-semibold">
                        assuming a user joins in a weekly challenge he/she will
                        have to complete certain tasks
                      </span>{" "}
                      which will include to first make a commitment by posting
                      about the challenge he/she is doing on any social media
                      platform.{" "}
                      <span className="font-semibold">
                        This will help advertise the &quot;You Matter&quot; app.
                      </span>
                    </li>
                    <li>
                      <span className="font-semibold">
                        Assuming &quot;You Matter&quot; will have a professional
                        team
                      </span>{" "}
                      which will provide exclusive and specialized content,
                      challenges, quizzes and courses related to the niche in
                      premium package or users can use their coins (explained
                      above)
                    </li>
                    <li>
                      <span className="font-semibold">
                        Assuming professional therapists will partner with our
                        team{" "}
                      </span>{" "}
                      and provide their service to the users. (included in
                      premium subscription/pay the therapist fee and specially
                      for students- use coins to unlock).
                    </li>
                    <li>
                      There will be a{" "}
                      <span className="font-semibold">
                        separate app for the therapists
                      </span>
                      partnered with our team.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Final Designs */}
          <div className="flex flex-col items-center my-7">
            <p className="font-bold p-4 text-xl">
              Final Designs - (
              <Link href="https://www.figma.com/proto/GTNfdyupy0CJQrSPOp2OIU/You-Matter?node-id=1-6&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A6&t=nSWzJOzjDO2rTy6Q-1&mode=design">
                <span className="text-[#67895E]">click here </span>
              </Link>
              to interact with the prototype)
            </p>
            <div className="max-w-[1280px] px-4 ">
              <video playsInline autoPlay loop muted className="w-full">
                <source src="/images/youmatter/design/1.mp4" type="video/mp4" />
              </video>
              <video playsInline autoPlay loop muted className="w-full">
                <source src="/images/youmatter/design/2.mp4" type="video/mp4" />
              </video>

              <Image
                src="/images/youmatter/design/3.png"
                height={900}
                width={1500}
                alt="design"
              ></Image>
              <video playsInline autoPlay loop muted className="w-full">
                <source src="/images/youmatter/design/4.mp4" type="video/mp4" />
              </video>
              <Image
                src="/images/youmatter/design/5.png"
                height={900}
                width={1500}
                alt="design"
              ></Image>
              <Image
                src="/images/youmatter/design/6.png"
                height={900}
                width={1500}
                alt="design"
              ></Image>
              <Image
                src="/images/youmatter/design/7.png"
                height={900}
                width={1500}
                alt="design"
              ></Image>
              <Image
                src="/images/youmatter/design/8.png"
                height={900}
                width={1500}
                alt="design"
              ></Image>
              <Image
                src="/images/youmatter/design/9.png"
                height={900}
                width={1500}
                alt="design"
              ></Image>
            </div>
            <div></div>
          </div>

          <div className="max-w-[1280px] mx-auto p-4 mt-10 font-epilogue text-[#2D2D2D] leading-7 text-lg relative">
            {/* Testing the prototype */}
            <div>
              <p className="text-[#67895E] text-xl font-bold mb-5">
                Testing The Prototype 📱
              </p>
              <p>
                All the work up to this point boils down to this moment. The
                moment of truth! I ultimately wanted users to be able to
                accomplish tasks give to them during the usability testing.{" "}
                <span className="font-bold">
                  Users were given the task of completing routines, editing
                  routines, going to journal page and talking with their therapy
                  pet.
                </span>{" "}
                As result, participants were able to complete all given tasks
                with 100% accuracy, citing ease of use and instant familiarity
                of user interface elements.
              </p>
              <p className="mt-4 font-semibold">Feedback from participants-</p>
              <br></br>
              <ul className="list-disc pl-5 flex flex-col gap-4">
                <li>
                  &quot;The app is fun to use. I liked how dynamic and
                  interactive it is. The pet feature is so cool that it makes
                  you stick to the app. Overall loved it, although i would like
                  to see more pet options.&quot;{" "}
                </li>
                <li>
                  &quot;It&apos;s a very helpful app for someone with poor
                  mental health. It gives u the sense of purpose with the pet
                  feature and it helps you be consistent with your daily
                  plan&quot;
                </li>
                <li>
                  &quot;I really liked how this app provides relevant free
                  resources. There is also an alternative to buying premium
                  package, by completing challenges and collecting coins, that
                  makes the app much more affordable and user base would
                  increase.&quot;
                </li>
              </ul>
            </div>
            {/* Conclusion */}
            <div className="mb-12">
              <p className="text-[#67895E] text-xl font-bold mt-10">
                Conclusion 👩🏻‍💻
              </p>
              <p className="my-5">
                Designing the app has been a challenging and rewarding journey.
                It was clear from the onset that the major challenge will be to
                make users feel warmth and stay motivated to complete their
                routines and be consistent. I understood the needs of the users
                through the survey and conversations. Finally, I faced the
                challenge of creating an engaging app both from the user
                experience perspective and the visual perspective.{" "}
                <span className="font-bold">
                  And that’s a wrap. Thank you for reading!
                </span>
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
              className="flex justify-center w-1/2 py-5 px-5 border-t border-r border-[#828282] text-[#E7E7E7]"
              href="#"
            >
              <button className="flex gap-5 transition-all  items-center w-fit">
                {/* hover:gap-7 hover:underline */}
                <Image
                  src="/images/gray-left.svg"
                  height={16}
                  width={16}
                  alt="right arrow"
                ></Image>
                <span className="pt-[2px]">Previous Project </span>
              </button>
            </Link>
            <Link
              className="flex justify-center w-1/2 py-5 px-5 border-t border-[#828282] group"
              href="/youtube-redesigned"
            >
              <button className=" flex gap-5 transition-all group-hover:gap-7 group-hover:underline items-center w-fit">
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

export default CaseStudy1;