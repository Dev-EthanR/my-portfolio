"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import useDisableBodyScroll from "../../hooks/DisableBodyScroll";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  useDisableBodyScroll(open);

  const menuButtonImage = open ? "/close.webp" : "/menu.png";
  function NavLinks() {
    return (
      <ul
        className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0 text-xl md:text-base "
        id="menu"
      >
        {links.map((link) => (
          <li key={link.name}>
            <Link
              href={link.href}
              onClick={() => setOpen(false)}
              className={clsx(
                "hover:text-primary transition-colors duration-300",
                (pathname.startsWith(link.href) && link.href !== "/") ||
                  link.href === pathname
                  ? "text-primary-bright"
                  : "text-text-primary",
              )}
            >
              {link.name}
            </Link>
          </li>
        ))}
        <li className="md:hidden">
          <ResumeLink />
        </li>
      </ul>
    );
  }

  return (
    <div className="flex items-center mx-8 py-4 mb-10">
      <div className="absolute top-18.5 left-0 w-full border-b border-border z-0" />
      <div
        className={clsx(
          "flex-1 z-20 static items-center pt-1 md:pt-0 select-none",
          open ? "w-10 h-10" : "w-10 h-7",
        )}
      >
        <Image
          src={"/logo.png"}
          alt={"Ethan Rechichi"}
          width={25}
          height={50}
        />
      </div>
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-controls="menu"
        aria-label={open ? "Close menu" : "Open menu"}
        className="z-20 static"
      >
        <Image
          className={clsx(
            "md:hidden cursor-pointer hover:opacity-80 fill-primary ",
            open ? "w-10 h-10" : "w-10 h-7",
          )}
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
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: open ? 2000 : 0 }}
                transition={{ ease: "easeInOut", duration: 0.3 }}
                exit={{ height: 0 }}
                style={{
                  overflow: "hidden",
                }}
                className="absolute top-0 left-0 w-full pt-25 bg-surface h-screen flex justify-center text-center z-10"
              >
                <NavLinks />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
      <div className="hidden md:flex flex-1 justify-center">
        <NavLinks />
      </div>
      <div className="hidden md:flex flex-1 justify-end">
        <ResumeLink />
      </div>
    </div>
  );
};

const ResumeLink = () => {
  return (
    <Link
      className="border border-primary-bright px-6 py-2 hover:bg-primary-bright hover:text-background font-medium"
      href={"/Ethan_Rechichi.docx.pdf"}
      download
    >
      Resume
    </Link>
  );
};
export default Navbar;
