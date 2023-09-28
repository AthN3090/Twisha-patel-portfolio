import Image from "next/image";
function CaseStudy1() {
    return (
      <main className="text-[#2D2D2D]">
        <div>
          <div
            style={{ background: "url('./images/hero1.png')" }}
            className="h-[540px]"
          ></div>
          <div className="bg-[#FAFAFA] ">
            <div className="max-w-[1280px] border mx-auto py-16">
              <div>
                <p className="text-xl font-bold  opacity-70">YOU MATTER</p>
                <p className="text-4xl font-bold  mt-3">Self Care and Productivity App</p>
              </div>
              <div>
                <div >
                    <p className="text-xs font-bold opacity-70">TYPE</p>
                    <p className="font-semibold">Personal Project</p>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </main>
    );
}

export default CaseStudy1;