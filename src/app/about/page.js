import Image from "next/image";
function About() {
    return (
      <main className="flex justify-center bg-white">
        <div className="max-w-[1440px] mx-auto bg-[#FAFAFA] min-h-screen pt-16 flex flex-col lg:flex-row font-epilogue">
          <div className="lg:w-1/2 h-[60vh] w-full lg:h-auto relative flex items-center justify-center border-l">
            <Image
              className="p-0 lg:py-16 lg:px-20 px-4 py-4"
              src="/images/about2.png"
              fill
              objectFit="contain"
              alt="about"
            />
          </div>
          <div className="lg:w-1/2  lg:py-16 lg:px-20 px-4 py-4 border-r border-l">
            <p className="font-semibold xl:text-2xl">
              A little bit about myself
            </p>
            <p className="mt-4 leading-7 ">
              My name, Twisha, carries the beautiful meaning of &quot;divine aura.&quot; I
              am a self-taught UX designer based in Gujarat, India. My journey
              in this field has been quite interesting. Even though I studied
              computer science, I soon discovered that my real love is UX
              Design. It&apos;s the perfect mix of solving problems and being
              creative.<br></br>
              <br></br>
              My heart truly lies in crafting seamless and delightful user
              experiences. I&apos;m wholeheartedly dedicated to solving problems
              through design. I am constantly on the lookout for opportunities
              to learn and grow. <br></br>
              <br></br>
              When I&apos;m not designing, you’ll often find me creating some sort of art, solving puzzles, or or simply enjoying with dogs. Apart from this, I swim, cycle, and play badminton to stay active. <br></br>
              <br></br>
              Thank you for taking the time to get to know me a little better. 🖤
            </p>

            <a
              href="#"
              className="flex items-center transition-all gap-3 hover:gap-5 hover:underline mt-10 border w-fit p-3 border-[#828282]"
            >
              {" "}
              <span className="mt-[2px]">View my resume </span>
              <Image
                src={"/images/right.svg"}
                alt="right-arrow"
                height={16}
                width={16}
              ></Image>{" "}
            </a>
          </div>
        </div>
      </main>
    );
}

export default About;