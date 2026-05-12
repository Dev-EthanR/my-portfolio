import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

export const footerLinks = [
  {
    href: "mailto:ethanrechichi@icloud.com",
    label: "Email: ethanrechichi@icloud.com",
    icon: <MdOutlineEmail />,
  },
  {
    href: "https://github.com/Dev-EthanR",
    label: "Github",
    target: "_blank",
    icon: <FaGithub />,
  },
  {
    href: "https://www.linkedin.com/in/ethan-rechichi-95833b2a1/",
    label: "LinkedIn",
    target: "_blank",
    icon: <FaLinkedin />,
  },
];

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 mt-12 mb-8">
      <div className="w-full border-b border-border z-0" />

      <div className="mx-auto w-full max-w-340 p-4 relative z-10 flex flex-col gap-2">
        {footerLinks.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            target={link?.target}
            className="flex items-center gap-2 hover:text-gray-300"
          >
            {link.icon}
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
