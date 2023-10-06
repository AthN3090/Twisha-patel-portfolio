import Link from "next/link";
import Image from "next/image";
function Illustrations() {
    return ( 
    <main className="font-epilogue pt-12 bg-[#F5F5F5]">
        <div className=" px-5 sm:px-14 py-4 flex justify-between items-center bg-[#FAFAFA] border">
            <Link href="/sketches" className="rounded-full hover:bg-[#F0F0F0] transition-all">
                <Image src="/images/left-arrow.svg" height={36} width={36} alt="left-arrow"></Image>
            </Link>
            <p className="sm:text-4xl text-[5vw] text-center">Portrait Illustrations</p>
            <Link href="/book-and-logo" className="rounded-full  hover:bg-[#F0F0F0] transition-all">
                <Image src="/images/right-arrow.svg" height={36} width={36} alt="left-arrow"></Image>
            </Link>
        </div>
        <div className="max-w-[1280px] mx-auto border-l border-r bg-white p-4">
        <div>
            <div className="sm:columns-2 items-center content-center overflow-hidden">
                <div className="mb-4">
                    <Image src="/images/hobby/illustrations/1.png" height={700} width={615} alt="illustration" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/illustrations/2.png" height={700} width={615} alt="illustration" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/illustrations/3.png" height={700} width={615} alt="illustration" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/illustrations/4.png" height={700} width={615} alt="illustration" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/illustrations/5.png" height={700} width={615} alt="illustration" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/illustrations/6.png" height={700} width={615} alt="illustration" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/illustrations/7.png" height={700} width={615} alt="illustration" ></Image>
                </div>
                
            </div>
        </div>
        </div>
        
    </main> );
}

export default Illustrations;