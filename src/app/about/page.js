import Image from "next/image";
function About() {
    return (
      <main>
        <div className="max-w-[1280px] bg-[#FAFAFA] min-h-screen mx-auto pt-16 flex font-epilogue">
          <div className="w-1/2 relative border-l flex items-center justify-center ">
            <Image  className="py-16 px-20 " src="/images/about.png" width={720} height={1000} alt="about"/>
          </div>
          <div className="w-1/2 py-16 px-20 border">
            <p className="font-semibold text-2xl">
                A little bit about myself
            </p>
            <p className="mt-4 text-lg text-[#2D2D2D] leading-7">
              My name, Twisha, carries the beautiful meaning of &quot;divine aura&quot;.
              My journey as a UX designer has been quite an interesting one.
              While my academic background is rooted in computer science, I
              quickly realized that my true passion lies in UX Design. This
              field provides the perfect balance of problem-solving and
              creativity. <br></br><br></br>
              My heart truly lies in crafting seamless and
              delightful user experiences. I&apos;m wholeheartedly dedicated to
              solving problems through design. I am constantly on the lookout
              for opportunities to learn and grow. <br></br><br></br>
              When I&apos;m not designing,
              you&apos;ll often find me creating some sort of art, solving puzzles,
              or or simply enjoying with dogs. Apart from this, I swim, cycle,
              and play badminton to stay active.<br></br><br></br>
              Thank you for taking the time to get to know me a little better. 🖤
            </p>

            <a href="#" className="flex items-center transition-all gap-3 hover:gap-5 hover:underline mt-10 border w-fit p-3 border-[#828282]"> <span className="mt-[2px]">View my resume </span><Image src={"/images/right.png"} alt="right-arrow" height={16} width={16}></Image> </a>
            </div>
        </div>
      </main>
    );
}

export default About;