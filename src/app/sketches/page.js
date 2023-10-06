import Link from "next/link";
import Image from "next/image";
function Sketches() {
    return ( 
    <main className="font-epilogue pt-12 bg-[#F5F5F5]">
        <div className=" px-5 sm:px-14 py-4 flex justify-between items-center bg-[#FAFAFA] border">
            <Link href="#" className="rounded-full hover:bg-[#F0F0F0] transition-all">
                {/* <Image className="rotate-180" src="/images/gray-right-arrow.svg" height={36} width={36} alt="left-arrow"></Image> */}
            </Link>
            <p className="sm:text-4xl text-[5vw]">Sketches and Paintings</p>
            <Link href="/illustrations" className="rounded-full  hover:bg-[#F0F0F0] transition-all">
                <Image src="/images/right-arrow.svg" height={36} width={36} alt="left-arrow"></Image>
            </Link>
        </div>
        <div className="max-w-[1280px] gap-4 mx-auto border-l border-r bg-white p-4">
        <div>
            <div className="sm:columns-2 items-center content-center overflow-hidden">
                <div className="mb-4">
                    <Image src="/images/hobby/sketches/1.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/2.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/3.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/4.gif" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/5.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/6.gif" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/7.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/8.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/9.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/10.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/11.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/12.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/13.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/14.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/15.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                <div className=" mb-4">
                    <Image src="/images/hobby/sketches/16.png" height={700} width={615} alt="sketch" ></Image>
                </div>
                
            </div>
        </div>
        </div>
        
    </main> );
}

export default Sketches;