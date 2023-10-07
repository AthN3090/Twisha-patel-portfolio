import Image from "next/image";
function Footer() {
    return (
      <footer className="bg-[#2D2D2D] text-white">
        <div className="flex md:flex-row flex-col justify-between px-8 py-3 align-middle">
          <div className="flex justify-center">
            <p className="sm:leading-[52px] text-sm sm:text-base text-center">
              Designed by <span className="font-semibold">Twisha Patel✨</span>{" "}
              - Copyright 2023
            </p>
          </div>
          <div className="flex gap-7 justify-center p-3">
            <a href="mailto:twishapatel.work@gmail.com">
              <Image
                src="/images/mail.png"
                height={28}
                width={28}
                alt="mail"
              ></Image>
            </a>
            <a target="_blank" href="https://www.linkedin.com/in/twisha-patel-627453178/">
              <Image
                src="/images/linkedin.png"
                height={28}
                width={28}
                alt="linkedin"
              ></Image>
            </a>
            <a target="_blank" href="https://medium.com/@tp13twisha">
              <Image
                src="/images/medium.png"
                height={28}
                width={28}
                alt="medium"
              ></Image>
            </a>
          </div>
        </div>
      </footer>
    );
}

export default Footer;