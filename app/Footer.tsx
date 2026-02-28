import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 mt-12 border-primary border w-full max-w-160 mx-auto p-3 mb-8 ">
      <Link
        href="mailto:ethanrechichi@icloud.com"
        className="flex items-center gap-2 hover:text-gray-300"
      >
        <MdOutlineEmail />
        Email: ethanrechichi@icloud.com
      </Link>
      <Link
        href="https://github.com/Dev-EthanR"
        target="_blank"
        className="flex items-center gap-2 hover:text-gray-300"
      >
        <FaGithub />
        Github
      </Link>
      <Link
        href="https://www.linkedin.com/in/ethan-rechichi-95833b2a1/"
        target="_blank"
        className="flex items-center gap-2 hover:text-gray-300"
      >
        <FaLinkedin />
        LinkedIn
      </Link>
    </div>
  );
};

export default Footer;
