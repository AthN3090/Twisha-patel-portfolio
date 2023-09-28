import Image from "next/image";
function Footer() {
    return (
      <footer className="bg-[#2D2D2D] text-white">
        <div className="flex justify-between p-8 align-middle">
          <div>
            <p>
              Designed by <span className="font-semibold">Twisha Patel✨</span>{" "}
              - Copyright 2023
            </p>
          </div>
          <div className="flex gap-7">
            <a href="#">
              <Image
                src="/images/mail.png"
                height={28}
                width={28}
                alt="mail"
              ></Image>
            </a>
            <a href="#">
              <Image
                src="/images/linkedin.png"
                height={28}
                width={28}
                alt="linkedin"
              ></Image>
            </a>
            <a href="#">
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