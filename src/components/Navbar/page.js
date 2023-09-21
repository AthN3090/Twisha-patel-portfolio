import Image from "next/image";
function Navbar() {
    return (
      <nav className="border-b fixed w-full bg-white z-10">
        <div className="mx-10">
          <div className="flex items-center">
            <div>
              <Image
                src="/images/diamond.gif"
                alt="spinning diamond"
                height={32}
                width={38}
              />
            </div>
            <div className="font-epilogue italic font-bold">
              <p className="pt-1">TWISHA</p>
            </div>
            <div className="ml-auto">
                <ul className="flex items-center font-epilogue  pt-1 gap-[80px]">
                    <li className="px-5 py-5">
                        Work
                    </li>
                    
                    <li className="px-5 py-5">
                        About
                    </li>
                    
                    <li className="px-5 py-5">
                        Contact
                    </li>
                    
                    <li className="px-5 py-5">
                        Resume
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar;