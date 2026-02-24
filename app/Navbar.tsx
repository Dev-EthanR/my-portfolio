import Link from "next/link";
import React from "react";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <ul className="flex space-x-8 justify-end mr-8 py-4 mb-2">
      {links.map((link) => (
        <li key={link.name}>
          <Link href={link.href}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Navbar;
