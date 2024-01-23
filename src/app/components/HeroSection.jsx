import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500">
                Hello, I'm Yoto </span>
            </h1>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Math-Computer Science student at the University of California, San Diego
            </p>
            <div>
            <Link
              href="https://google.com"
              className="inline-block px-6 py-3 w-full sm:w-auto text-white rounded-full mr-4
               bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:text-black">
              Contact me!
            </Link>
            <Link
              href="/"
              className="inline-block px-1 py-1 w-full sm:w-auto text-white rounded-full mr-4
              bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 hover:text-black">
                <span className="block bg-[#121212] hover:bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-full px-5 py-2">
                My projects
                </span>
            </Link>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                <Image
                    src="/images/HeadShot.png"
                    alt="head shot"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                />
            </div>
        </div>
      </div>
    </section>
  );
};
           
export default HeroSection;