import Link from "next/link";

const Navbar = () => {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
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
};

export default Navbar;
