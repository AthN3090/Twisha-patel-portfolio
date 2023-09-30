import Image from "next/image";
function Hobby() {
    return ( 
    <section className="bg-[#242424] ">
        <div className="py-10 text-white  font-semibold text-4xl text-center border-b border-[#565656]">
            Hobby Projects
        </div>
        <div className="flex justify-between min-h-screen">
            <div className="w-[240px] border-r border-[#565656] relative overflow-hidden">
                <div className="flex flex-col items-center left-1/2 -translate-x-1/2 gap-32 text-white py-10 absolute text-8xl mx-auto">
                    <p className=" rotate-180 relative" style={{writingMode: 'vertical-lr',WebkitTextFillColor:"#242424", WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor:"#A2A2A2"}}>
                        Sketches
                    </p>
                    <p className=" rotate-180 relative " style={{writingMode: 'vertical-lr', WebkitTextFillColor:"#242424", WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor:"#A2A2A2"}}>
                        Paintings
                    </p>
                    <p className="rotate-180 relative " style={{writingMode: 'vertical-lr', WebkitTextFillColor:"#242424", WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor:"#A2A2A2"}}>
                        Logo Designs
                    </p>
                    <p className="rotate-180 relative " style={{writingMode: 'vertical-lr', WebkitTextFillColor:"#242424", WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor:"#A2A2A2"}}>
                        Sketches
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 h-fit gap-very-thin bg-[#565656]">
                <div className="p-14 h-fit bg-[#242424]">
                    <Image src='/images/hobby.png' width={612} height={768} alt="hobby"/>
                </div> 
                <div className="p-14 h-fit bg-[#242424]">
                    <Image src='/images/hobby.png' width={612} height={768} alt="hobby"/>
                </div>
                <div className="p-14 h-fit bg-[#242424]">
                    <Image src='/images/hobby.png' width={612} height={768} alt="hobby"/>
                </div>
                <div className="p-14 h-fit bg-[#242424]">
                    <Image src='/images/hobby.png' width={612} height={768} alt="hobby"/>
                </div>
                <div className="p-14 h-fit bg-[#242424]">
                    <Image src='/images/hobby.png' width={612} height={768} alt="hobby"/>
                </div>
                <div className="p-14 h-fit bg-[#242424]">
                    <Image src='/images/hobby.png' width={612} height={768} alt="hobby"/>
                </div> 
            </div>
            <div className="w-[240px] border-l border-[#565656] relative overflow-hidden">
            <div className="flex flex-col items-center left-1/2 -translate-x-1/2 gap-32 text-white py-10 absolute text-8xl mx-auto">
                    <p className="rotate-180 relative" style={{writingMode: 'vertical-lr', WebkitTextFillColor:"#242424", WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor:"#A2A2A2"}}>
                        Illustrations
                    </p>
                    <p className="rotate-180 relative " style={{writingMode: 'vertical-lr', WebkitTextFillColor:"#242424", WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor:"#A2A2A2"}}>
                        Hand Sewn Clothes
                    </p>
                    <p className="rotate-180 relative " style={{writingMode: 'vertical-lr', WebkitTextFillColor:"#242424", WebkitTextStrokeWidth: '1px', WebkitTextStrokeColor:"#A2A2A2"}}>
                        Videography
                    </p>
                </div>
            </div>
        </div>
    </section> );
}

export default Hobby;