import Link from "next/link";
import Image from "next/image";
function Sewing() {
    return ( 
    <main className="font-epilogue pt-12 bg-[#F5F5F5]">
        <div className=" px-5 sm:px-14 py-4 flex justify-between items-center bg-[#FAFAFA] border">
            <Link href="/book-and-logo" className="rounded-full hover:bg-[#F0F0F0] transition-all">
                <Image src="/images/left-arrow.svg" height={36} width={36} alt="left-arrow"></Image>
            </Link>
            <p className="sm:text-4xl text-[5vw]">Hand Stitched Clothes</p>
            <Link href="#" className="rounded-full  hover:bg-[#F0F0F0] transition-all">
                {/* <Image src="/images/right-arrow.svg" height={36} width={36} alt="left-arrow"></Image> */}
            </Link>
        </div>
        <div className="max-w-[1280px] mx-auto border-l border-r bg-white p-2">
        <div>
            <div className="flex flex-col items-center content-center">
                <div className="p-2">
                    <Image src="/images/hobby/sewing/1.png" height={700} width={1300} alt="sewing" ></Image>
                </div>
                <div className="p-2">
                    <Image src="/images/hobby/sewing/2.png" height={700} width={1300} alt="sewing" ></Image>
                </div>
                <div className="p-2">
                    <Image src="/images/hobby/sewing/3.png" height={700} width={1300} alt="sewing" ></Image>
                </div>               
            </div>
        </div>
        </div>
        
    </main> );
}

export default Sewing;