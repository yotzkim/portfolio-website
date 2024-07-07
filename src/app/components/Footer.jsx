import React from "react";
import Image from "next/image";
import Link from "next/link";
import GithubIcon from "../../../public/images/github-icon.svg";
import LinkedinIcon from "../../../public/images/linkedin-icon.svg";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="p-12 flex justify-between items-center">
        <div className="flex gap-2">
          <Link href="https://github.com/yotzkim">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/yoto-kim/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
