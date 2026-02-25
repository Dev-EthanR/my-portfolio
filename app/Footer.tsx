import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 mt-12 border-accent border w-160 mx-auto p-3 mb-8 ">
      <Link href="mailto:ethanrechichi@icloud.com">
        Email: ethanrechichi@icloud.com
      </Link>
      <Link href="https://github.com/Dev-EthanR" target="_blank">
        Github
      </Link>
      <Link
        href="https://www.linkedin.com/in/ethan-rechichi-95833b2a1/"
        target="_blank"
      >
        LinkedIn
      </Link>
    </div>
  );
};

export default Footer;
