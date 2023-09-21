import Image from "next/image";
import project1 from "../../../public/images/project1.png"
function Work() {
    return (
      <section>
        <div className="border-b py-10 text-center font-semibold text-4xl">
          My Work
        </div>
        <div className=" bg-gradient-red h-screen bg-[length:100%_100%]    bg-no-repeat">
          <div className="max-w-[1280px] mx-auto flex gap-[150px] justify-between items-center h-full top-1/2">
            <div className="flex justify-center items-center">
              <Image src="/images/project1.png" height={766} width={864} alt="project1" />
            </div>
            <div className="max-w-[557px]">
              <p className="font-medium text-4xl mb-8">You Matter</p>
              <p  className="font-semibold text-5xl mb-6">Build and design your routine with ease </p>
              <p className="font-medium text-xl mb-20">
                Crafting delightful, human centred and inclusive experiences.
                Crafting delightful, human centred and inclusive experiences.
                Crafting delightful, human centred and inclusive experiences.
                Crafting delightful, human centred and inclusive experiences.{" "}
              </p>

              <button className="py-3 px-5 border border-[#828282] flex gap-5">
                Read case study -{'>'}
              </button>
            </div>
          </div>
        </div>
        <div className=" bg-gradient-red h-screen bg-[length:100%_100%] bg-no-repeat ">
          <div className="max-w-[1280px] mx-auto flex gap-[150px] justify-between items-center h-full top-1/2">
            <div className="flex justify-center items-center">
              <Image src="/images/project1.png" height={766} width={864} alt="project1" />
            </div>
            <div className="max-w-[557px]">
              <p className="font-medium text-4xl mb-8">You Matter</p>
              <p  className="font-semibold text-5xl mb-6">Build and design your routine with ease </p>
              <p className="font-medium text-xl mb-20">
                Crafting delightful, human centred and inclusive experiences.
                Crafting delightful, human centred and inclusive experiences.
                Crafting delightful, human centred and inclusive experiences.
                Crafting delightful, human centred and inclusive experiences.{" "}
              </p>

              <button className="py-3 px-5 border border-[#828282] flex gap-5">
                Read case study -{'>'}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Work;