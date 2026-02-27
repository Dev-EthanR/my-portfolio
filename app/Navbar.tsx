"use client";
import Image from "next/image";
import Link from "next/link";
import { JSX, useState } from "react";
import DisableBodyScroll from "./utils/DisableBodyScroll";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
  ];

  const menuButtonImage = open ? "/close.webp" : "/menu.png";
  function NavLinks(): JSX.Element {
    return (
      <ul
        className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 text-xl md:text-base"
        id="menu"
      >
        {links.map((link) => (
          <li key={link.name}>
            <Link href={link.href} onClick={() => setOpen(false)}>
              {link.name}
            </Link>
          </li>
        ))}
        <li>
          <Link
            className="border border-accent px-3 py-2 hover:bg-accent font-medium"
            href={"/Ethan_Rechichi.pdf"}
            download
          >
            Resume
          </Link>
        </li>
      </ul>
    );
  }

  return (
    <div className="flex justify-end mr-8 py-4 mb-2">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="menu"
        className="z-60 static"
      >
        <Image
          className="md:hidden cursor-pointer hover:opacity-80"
          src={menuButtonImage}
          alt="menu"
          width={40}
          height={40}
        />
      </button>
      <div className="md:hidden">
        <AnimatePresence>
          {open && (
            <>
              <DisableBodyScroll />
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: open ? 2000 : 0 }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
                exit={{ height: 0 }}
                style={{
                  overflow: "hidden",
                }}
                className="absolute top-0 left-0 w-full pt-25 bg-surface h-screen flex justify-center text-center z-50"
              >
                <NavLinks />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden md:block">
        <NavLinks />
      </div>
    </div>
  );
};

export default Navbar;
