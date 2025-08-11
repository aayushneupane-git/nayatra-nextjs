import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative text-white bg-green-600 h-auto  flex items-center py-8 md:py-0 dark:bg-gray-800">
      <div
        className="absolute inset-0 z-0 "
        style={{
          backgroundImage: "url('/transparentfooter.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          mixBlendMode: "overlay",
          opacity: 0.5,
        }}
      ></div>
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="container  mx-auto px-4 relative z-10 flex flex-col gap-8 md:pt-20 md:pb-5">
          {/* Logo + Name */}
          <div className="max-w-md flex flex-col sm:flex-row gap-4 sm:items-center">
            <div className="flex justify-center sm:justify-start">
              <Image
                src="/logo_white.png"
                alt="NepSoft logo"
                width={150}
                height={60}
                className="w-[120px] sm:w-[150px]"
              />
            </div>
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold">NepSoft</h2>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">
                Innovate. Integrate. Elevate.
              </h3>
            </div>
          </div>

          {/* Description + Links */}
          <div className="flex flex-col lg:flex-row justify-between gap-6">
            <div className="text-center lg:text-left">
              <p className="text-base sm:text-lg lg:w-3/4 mx-auto lg:mx-0">
                At NEPSOFT, we transform ideas into powerful digital solutions.
                From intuitive websites to innovative apps, we combine
                cutting-edge technology with creative design to help brands
                thrive in the digital era. Our passion is building tools that
                make life easier, smarter, and more connected.
              </p>
            </div>

            <div className="flex flex-col gap-4 md:gap-6">
              <div className="flex  justify-center md:justify-start gap-6">
                {["About", "Project", "Service", "Client"].map((item) => (
                  <h3
                    key={item}
                    className="text-lg sm:text-xl font-bold hover:cursor-pointer"
                  >
                    {item}
                  </h3>
                ))}
              </div>

              <div className="flex justify-center md:justify-start gap-4 text-2xl">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter className="hover:text-sky-500 cursor-pointer" />
                </a>
              </div>
            </div>
          </div>

          <div className="  text-center text-lg sm:text-xl opacity-90 font-bold">
            Copyright © NepSoft{" "}
            <span className="text-black dark:text-white">Inc.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
