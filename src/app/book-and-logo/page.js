import Link from "next/link";
import Image from "next/image";
function BookAndLogo() {
    return ( 
    <main className="font-epilogue pt-12 bg-[#F5F5F5]">
        <div className=" px-5 sm:px-14 py-4 flex justify-between items-center bg-[#FAFAFA] border">
            <Link href="/illustrations" className="rounded-full hover:bg-[#F0F0F0] transition-all">
                <Image src="/images/left-arrow.svg" height={36} width={36} alt="left-arrow"></Image>
            </Link>
            <p className="sm:text-4xl text-[5vw] text-center">Book Cover and Logo Redesign</p>
            <Link href="/sewing" className="rounded-full  hover:bg-[#F0F0F0] transition-all">
                <Image src="/images/right-arrow.svg" height={36} width={36} alt="left-arrow"></Image>
            </Link>
        </div>
        <div className="max-w-[1280px] mx-auto border-l border-r bg-white p-4">
        <div>
            <div className="sm:columns-2 items-center content-center overflow-hidden">
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/1.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/2.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/3.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/4.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/5.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/6.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/7.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/8.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/9.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/10.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/11.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/12.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/13.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                <div className="mb-4">
                    <Image src="/images/hobby/bookandlogo/14.png" height={700} width={615} alt="bookandlogo" ></Image>
                </div>
                
            </div>
        </div>
        </div>
        
    </main> );
}

export default BookAndLogo;