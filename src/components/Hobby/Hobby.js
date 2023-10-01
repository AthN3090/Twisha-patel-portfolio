import Image from "next/image";
import Link from "next/link";
function Hobby() {
    return (
      <section className="bg-[#242424] ">
        <div className="py-10 text-white  font-semibold text-4xl text-center border-b border-[#565656]">
          Hobby Projects
        </div>
        <div className="flex justify-between min-h-screen">
          {/* sidebar 1 */}
          <div className="w-[240px] border-r border-[#565656] relative overflow-hidden">
            <div className="flex flex-col items-center left-1/2 -translate-x-1/2 gap-32 text-white py-10 absolute text-8xl mx-auto">
              <p
                className=" rotate-180 relative"
                style={{
                  writingMode: "vertical-lr",
                  WebkitTextFillColor: "#242424",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#A2A2A2",
                }}
              >
                Sketches
              </p>
              <p
                className=" rotate-180 relative "
                style={{
                  writingMode: "vertical-lr",
                  WebkitTextFillColor: "#242424",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#A2A2A2",
                }}
              >
                Paintings
              </p>
              <p
                className="rotate-180 relative "
                style={{
                  writingMode: "vertical-lr",
                  WebkitTextFillColor: "#242424",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#A2A2A2",
                }}
              >
                Logo Designs
              </p>
              <p
                className="rotate-180 relative "
                style={{
                  writingMode: "vertical-lr",
                  WebkitTextFillColor: "#242424",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#A2A2A2",
                }}
              >
                Sketches
              </p>
            </div>
          </div>
          {/* grid of hobbies */}
          <div className="grid grid-cols-2 h-fit gap-very-thin bg-[#565656]">
            <div className="p-[3vw] h-fit bg-[#242424] group">
              <div className="relative">
                <Image
                  src="/images/hobby/hobby1.png"
                  width={612}
                  height={768}
                  alt="hobby"
                />

                <div className="group-hover:opacity-100 opacity-0 transition-all absolute h-full w-full bg-[rgba(0,0,0,0.5)] top-0 left-0">
                  <div className="font-epilogue p-10 absolute bottom-0 left-0">
                    <p className="text-4xl text-white mb-5">Sketches and Painting</p>
                    <Link href="/Illustrations">
                      <button className="py-3 px-5 border border-[#828282] bg-white flex gap-5 transition-all hover:gap-7 hover:underline items-center">
                        <span className="pt-[2px]">View Artwork </span>
                        <Image
                          src="/images/right.png"
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
            <div className="p-[3vw] h-fit bg-[#242424] group">
              <div className="relative">
                <Image
                  src="/images/hobby/hobby2.png"
                  width={612}
                  height={768}
                  alt="hobby"
                />

                <div className="group-hover:opacity-100 opacity-0 transition-all absolute h-full w-full bg-[rgba(0,0,0,0.5)] top-0 left-0">
                  <div className="font-epilogue p-10 absolute bottom-0 left-0">
                    <p className="text-4xl text-white mb-5">Potrait Illustrations</p>
                    <Link href="/illustrations">
                      <button className="py-3 px-5 border border-[#828282] bg-white flex gap-5 transition-all hover:gap-7 hover:underline items-center">
                        <span className="pt-[2px]">View Illustrations </span>
                        <Image
                          src="/images/right.png"
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
            <div className="p-[3vw] h-fit bg-[#242424] group">
              <div className="relative">
                <Image
                  src="/images/hobby/hobby3.png"
                  width={612}
                  height={768}
                  alt="hobby"
                />

                <div className="group-hover:opacity-100 opacity-0 transition-all absolute h-full w-full bg-[rgba(0,0,0,0.5)] top-0 left-0">
                  <div className="font-epilogue p-10 absolute bottom-0 left-0">
                    <p className="text-4xl text-white mb-5">Logo and Diary Designs</p>
                    <Link href="/Illustrations">
                      <button className="py-3 px-5 border border-[#828282] bg-white flex gap-5 transition-all hover:gap-7 hover:underline items-center">
                        <span className="pt-[2px]">View Designs </span>
                        <Image
                          src="/images/right.png"
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
            <div className="p-[3vw] h-fit bg-[#242424] group">
              <div className="relative">
                <Image
                  src="/images/hobby/hobby4.png"
                  width={612}
                  height={768}
                  alt="hobby"
                />

                <div className="group-hover:opacity-100 opacity-0 transition-all absolute h-full w-full bg-[rgba(0,0,0,0.5)] top-0 left-0">
                  <div className="font-epilogue p-10 absolute bottom-0 left-0">
                    <p className="text-4xl text-white mb-5">Hand Sewing</p>
                    <Link href="/Illustrations">
                      <button className="py-3 px-5 border border-[#828282] bg-white flex gap-5 transition-all hover:gap-7 hover:underline items-center">
                        <span className="pt-[2px]">View Sewed clothes </span>
                        <Image
                          src="/images/right.png"
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
          {/* sidebar 2 */}
          <div className="w-[240px] border-l border-[#565656] relative overflow-hidden">
            <div className="flex flex-col items-center left-1/2 -translate-x-1/2 gap-32 text-white py-10 absolute text-8xl mx-auto">
              <p
                className="rotate-180 relative"
                style={{
                  writingMode: "vertical-lr",
                  WebkitTextFillColor: "#242424",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#A2A2A2",
                }}
              >
                Illustrations
              </p>
              <p
                className="rotate-180 relative "
                style={{
                  writingMode: "vertical-lr",
                  WebkitTextFillColor: "#242424",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#A2A2A2",
                }}
              >
                Hand Sewn Clothes
              </p>
              <p
                className="rotate-180 relative "
                style={{
                  writingMode: "vertical-lr",
                  WebkitTextFillColor: "#242424",
                  WebkitTextStrokeWidth: "1px",
                  WebkitTextStrokeColor: "#A2A2A2",
                }}
              >
                Videography
              </p>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Hobby;